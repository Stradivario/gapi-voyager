import { VoyagerConfigModel } from "./voyager-config";
import { PluginInterface } from '@rxdi/core';
import { Server } from 'hapi';
export declare class VoyagerGapiHapiPlugin implements PluginInterface {
    private config;
    private server;
    name: string;
    version: string;
    constructor(config: VoyagerConfigModel, server: Server);
    register(): Promise<void>;
    handler(_request: any, reply: any): Promise<string>;
}
