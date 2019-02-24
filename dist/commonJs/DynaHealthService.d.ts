export interface IDynaHealthServiceConfig {
    parallelRequests?: number;
    disk: {
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
export declare class DynaHealthService {
    private readonly config;
    private readonly service;
    private listeners;
    constructor(config: IDynaHealthServiceConfig);
    start(): Promise<void>;
    readonly active: boolean;
    stop(): Promise<void>;
    registerListener(listener: IListener): void;
    unregisterListener(listener: IListener): void;
    private pushNotification;
}
export {};
