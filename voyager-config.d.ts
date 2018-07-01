import { InjectionToken } from "@rxdi/core/container/Token";
export declare class VoyagerConfigModel {
    path: string;
    endpointUrl: string;
}
export declare const VoyagerConfig: InjectionToken<VoyagerConfigModel>;
