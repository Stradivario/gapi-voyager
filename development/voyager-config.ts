import { Service, InjectionToken } from "@rxdi/core";

export class VoyagerConfigModel {
    path: string = '/voyager';
    endpointUrl: string = '/graphql';
}

export const VoyagerConfig = new InjectionToken<VoyagerConfigModel>('gapi-voyager-config-injection-token');