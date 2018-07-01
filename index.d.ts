import { ModuleWithServices } from "@rxdi/core";
import { VoyagerConfigModel } from './voyager-config';
export declare class VoyagerModule {
    static forRoot(config?: VoyagerConfigModel): ModuleWithServices;
}
export * from './voyager-plugin';
export * from './voyager-config';
