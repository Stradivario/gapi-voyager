import { Service } from "@rxdi/core";
import { InjectionToken } from "@rxdi/core/container/Token";


export class VoyagerConfigModel {
    path: string = '/voyager';
    endpointUrl: string = '/graphql';
}



export const VoyagerConfig = new InjectionToken<VoyagerConfigModel>('gapi-voyager-config-injection-token');