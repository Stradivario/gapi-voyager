import { GapiVoyagerConfig } from "./gapi-voyager-config";
import { GapiModule, GapiHapiPlugin, GapiHapiPluginInterface } from '@gapi/core';
import renderVoyagerPage from 'graphql-voyager/middleware/render-voyager-page';

@GapiHapiPlugin()
export class VoyagerGapiHapiPlugin implements GapiHapiPluginInterface {
    name = 'VoyagerGapiHapiPlugin';
    version = '1.0.0';

    constructor(
        private config: GapiVoyagerConfig
    ) {}

    async register(server, options) {
        server.route({
            method: 'GET',
            path: this.config.path,
            handler: this.handler.bind(this)
        });
    }

    async handler(_request, reply) {
        return await renderVoyagerPage({ endpointUrl: this.config.endpointUrl });
    }

}

