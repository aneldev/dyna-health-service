import {IError} from "dyna-interfaces";
import {
  DynaNodeService,
  IDynaNodeServiceCommandConfig,
} from "dyna-node/dist/commonJs/node";

import {
  IInstanceStats,

  COMMAND_addHealthStats,
  ICOMMAND_addHealthStats_data,

  COMMAND_registerNotificationHealthStats,
  ICOMMAND_healthStatsUpdate_data,

  COMMAND_healthStatsUpdate,

  COMMAND_unregisterNotificationHealthStats,
} from "./interfaces";

export interface IDynaHealthServiceConfig {
  parallelRequests?: number;
  disk: {                                                   // physical or virtual disk access
    set: (key: string, data: any) => Promise<void>;
    get: (key: string) => Promise<any>;
    del: (key: string) => Promise<void>;
    delAll: () => Promise<void>;
  };
  serviceRegistration: {
    serverDynaNodeAddress: string;
    serviceConnectionId: string;
    encryptionKey: string;
    accessKey: string;
    requestExpirationInMinutes?: number;
  };
}

interface IListener {
  address: string;
  replyOfId: string;
}

export class DynaHealthService {
  private readonly service: DynaNodeService;
  private listeners: IListener[] = [];

  constructor(private readonly config: IDynaHealthServiceConfig) {
    this.service = new DynaNodeService({
      ...this.config,

      publicCommands: [
        COMMAND_addHealthStats,
        COMMAND_registerNotificationHealthStats,
        COMMAND_unregisterNotificationHealthStats,
      ],

      onCommand: {
        [COMMAND_addHealthStats]: {
          execute: ({message, next}) => {
            this.pushNotification(message.data);
            next();
          },
        } as IDynaNodeServiceCommandConfig<null, ICOMMAND_addHealthStats_data>,
        [COMMAND_registerNotificationHealthStats]: {
          execute: ({message, next}) => {
            this.registerListener({
              address: message.from,
              replyOfId: message.id,
            });
            next();
          },
        } as IDynaNodeServiceCommandConfig<null, null>,
        [COMMAND_unregisterNotificationHealthStats]: {
          execute: ({message, next}) => {
            this.unregisterListener({
              address: message.from,
              replyOfId: message.id,
            });
            next();
          },
        } as IDynaNodeServiceCommandConfig<null, null>
      },

      onServiceRegistrationFail: (error: IError) => {
        console.error(`${this.service.friendlyName}/onServiceRegistrationFail`, 'Service registration failed', {error});
      },

      onMessageQueueError: (error: IError) => {
        console.error(`${this.service.friendlyName}/onMessageQueueError`, 'Message Queue error (disk error?)', {error});
      },

    });
  }

  public start(): Promise<void> {
    return this.service.start()
      .then(() => {
        console.log(`DynaTravelHealthService ${this.service.friendlyName} started`);
      })
      .catch((error: IError) => {
        console.error(`DynaTravelHealthService ${this.service.friendlyName} cannot start`, error);
      });
  }

  public get active(): boolean {
    return this.service.active;
  }

  public stop(): Promise<void> {
    return this.service.stop();
  }

  public registerListener(listener: IListener): void {
    this.listeners.push(listener);
  }

  public unregisterListener(listener: IListener): void {
    this.listeners = this.listeners.filter(scanListener => scanListener.replyOfId !== listener.replyOfId);
  }

  private pushNotification(stats: IInstanceStats): void {
    this.listeners.forEach(listener => {
      this.service.sendReceive<null, ICOMMAND_healthStatsUpdate_data, null, null>({
        to: listener.address,
        replyOfId: listener.replyOfId,
        command: COMMAND_healthStatsUpdate,
        data: {stats},
        replyTimeoutInMs: 5000,
      })
        .catch((error: IError) => {
          if (error.code === 404.101 || error.code === 1810211741) {
            this.unregisterListener(listener);
          }
          else {
            console.warn(`DynaTravelHealthService cannot sent to listener`, {
              listener,
              error,
            });
          }
        });
    });
  }

}
