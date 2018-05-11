import { GapiModuleWithServices } from "@gapi/core";
import { GapiVoyagerConfig } from './gapi-voyager-config';
export declare class GapiVoyagerModule {
    static forRoot(config?: GapiVoyagerConfig): GapiModuleWithServices;
}
export * from './gapi-voyager-plugin';
export * from './gapi-voyager-config';
