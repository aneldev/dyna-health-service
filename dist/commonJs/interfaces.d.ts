import { IMemoryStats } from "dyna-memory-stats";
export declare const enum EInstanceType {
    APP = "APP",
    STANDALONE_SERVICE = "STANDALONE_SERVICE",
    MASTER_SERVICE = "MASTER_SERVICE",
    WORKER_SERVICE = "WORKER_SERVICE"
}
export interface IInstanceStats {
    id: string;
    time: number;
    serviceType: EInstanceType;
    memoryStats: IMemoryStats;
    availabilityIndex: number;
    completedWorkload: number;
}
export declare const COMMAND_addHealthStats: string;
export interface ICOMMAND_addHealthStats_data extends IInstanceStats {
}
export declare const COMMAND_registerNotificationHealthStats: string;
export declare const COMMAND_healthStatsUpdate: string;
export interface ICOMMAND_healthStatsUpdate_data {
    stats: IInstanceStats;
}
export declare const COMMAND_unregisterNotificationHealthStats: string;
