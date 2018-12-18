import "jest";
import {guid} from "dyna-guid";
import {getMemoryStats} from "dyna-memory-stats";
import {DynaNodeClient, DynaNodeMessageT, DynaNodeServer, IDynaNodeServerConfig, IError} from "dyna-node/node";

import {COMMAND_healthStatsUpdate, DynaHealthService, EInstanceType, ICOMMAND_addHealthStats_data, IDynaHealthServiceConfig, IInstanceStats} from "../../src/node";
import {COMMAND_addHealthStats, COMMAND_registerNotificationHealthStats} from "../../src/node";

let dynaNodeServer: DynaNodeServer;
let dynaHealthService: DynaHealthService;
let serviceDevice: DynaNodeClient;
let surveillanceDevice: DynaNodeClient;

const serverConfig: IDynaNodeServerConfig = {
  addresses: {
    internal: "n/localhost/33044",
    external: "n/localhost/33044",
  },
  connectionIds: {
    "dyna-travel-service-v002": {
      encryptionKey: "encryptionKey",
      accessKey: "accessKey",
    },
  },
};

const healthServiceConnectionId: string = Object.keys(serverConfig.connectionIds)[0];
const serverDynaNodeAddress: string = serverConfig.addresses.internal;
const healthServiceAddress: string = `${healthServiceConnectionId}@${serverDynaNodeAddress}`;

const dynaHealthServiceConfig: IDynaHealthServiceConfig = {
  parallelRequests: 50,
  serviceRegistration: {
    serviceConnectionId: healthServiceConnectionId,
    serverDynaNodeAddress,
    encryptionKey: "encryptionKey",
    accessKey: "accessKey",
  },
};

const SEND_HEALTH_STATS_TIMEOUT = 100;

describe("Search airport", () => {
  const healthStats: IInstanceStats[] = [];
  const otherMessages: DynaNodeMessageT<any, any>[] = [];
  const serviceId = guid();
  let sendHealthIntervalHandler: any = null;
  let healthStatsCount: number = null;

  it("should create dyna node server", (done: Function) => {
    dynaNodeServer = new DynaNodeServer(serverConfig);
    dynaNodeServer.start()
      .then(() => {
        expect(true).toBe(true);
        done();
      })
      .catch((error: IError) => {
        expect(error).not.toBe(undefined);
        done();
      });
  });

  it("should create the dyna health service", (done: Function) => {
    dynaHealthService = new DynaHealthService(dynaHealthServiceConfig);
    dynaHealthService.start()
      .then(() => {
        expect(true).toBe(true);
        expect(dynaHealthService.active).toBe(true);
        done();
      })
      .catch((error: IError) => {
        expect(error).toBe(null);
        done();
      });
  });

  it("should create service dyna client device", () => {
    serviceDevice = new DynaNodeClient();
    expect(!!serviceDevice).toBe(true);
  });

  it("should create surveillance  dyna client device", () => {
    surveillanceDevice = new DynaNodeClient();
    expect(!!surveillanceDevice).toBe(true);
  });

  it("should surveillance register for events", (done: () => void) => {
    surveillanceDevice.send({
      to: healthServiceAddress,
      command: COMMAND_registerNotificationHealthStats,
      multiReplies: true,
      onReply: (message: DynaNodeMessageT<any, any>, stopMultipleReplies: () => boolean) => {
        switch (message.command) {
          case COMMAND_healthStatsUpdate:
            healthStats.push(message.data);
            break;
          default:
            otherMessages.push(message);
        }
        surveillanceDevice
          .reply(message) // send acknowledge (is required)
          .catch(error => console.error("Cannot send acknowledge for COMMAND_healthStatsUpdate", error));
      },
    })
      .catch((error: IError) => {
        console.error("cannot send COMMAND_registerNotificationHealthStats", error);
      })
      .then(() => done());
  });

  it("should service send a health stats", (done: Function) => {
    sendHealthIntervalHandler = setInterval(() => {
      serviceDevice.send<null, ICOMMAND_addHealthStats_data, null, null>({
        to: healthServiceAddress,
        command: COMMAND_addHealthStats,
        data: {
          id: serviceId,
          time: Date.now().valueOf(),
          serviceType: EInstanceType.STANDALONE_SERVICE,
          memoryStats: getMemoryStats(),
          availabilityIndex: 0,
          completedWorkload: 0,
        },
      })
        .catch((error: IError) => {
          console.error("cannot send COMMAND_addHealthStats", error);
        });
    }, SEND_HEALTH_STATS_TIMEOUT);
    done();
  });

  it("should surveillance device close (network interruption)", (done: () => void) => {
    setTimeout(() => {
      surveillanceDevice.closeAllConnections().then(() => done());
    }, SEND_HEALTH_STATS_TIMEOUT * 6);
  });

  it("should stop to sendHealthIntervalHandler", (done: () => void) => {
    setTimeout(() => {
      clearInterval(sendHealthIntervalHandler);
      done();
    }, SEND_HEALTH_STATS_TIMEOUT * 1);
  });

  it("should surveillance receive the stats", (done: Function) => {
    healthStatsCount = healthStats.length;
    expect(healthStats.length >= 5).toBe(true);
    done();
  });

  it("should surveillance not receive unknown messages", () => {
    expect(otherMessages.length).toBe(0);
  });

  it("should surveillance not receive any more stats since it is stopped", (done: () => void) => {
    setTimeout(() => {
      expect(healthStats.length === healthStatsCount || healthStats.length === healthStatsCount + 1).toBe(true);
      done();
    }, 500);
  });

  it("should surveillance not receive any further unknown messages", () => {
    expect(otherMessages.length).toBe(0);
  });

  // end of the test

  it("should stop the client", (done: () => void) => {
    serviceDevice.closeAllConnections().then(() => done());
  });

  it("should stop the health service", (done: () => void) => {
    dynaHealthService.stop().then(() => done());
  });

  it("should stop the server", (done: () => void) => {
    dynaNodeServer.stop();
    done();
  });

});
