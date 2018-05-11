import { GapiVoyagerConfig } from "./gapi-voyager-config";
import { GapiHapiPluginInterface } from '@gapi/core';
export declare class VoyagerGapiHapiPlugin implements GapiHapiPluginInterface {
    private config;
    name: string;
    version: string;
    constructor(config: GapiVoyagerConfig);
    register(server: any, options: any): Promise<void>;
    handler(_request: any, reply: any): Promise<string>;
}
