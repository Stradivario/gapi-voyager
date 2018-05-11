import { GapiModule, GapiModuleWithServices } from "@gapi/core";
import { GapiVoyagerConfig } from './gapi-voyager-config';
import { VoyagerGapiHapiPlugin } from './gapi-voyager-plugin';

@GapiModule({
    services: [GapiVoyagerConfig],
    plugins: [VoyagerGapiHapiPlugin]
})
export class GapiVoyagerModule {
    static forRoot(config?: GapiVoyagerConfig): GapiModuleWithServices {
        return {
            gapiModule: GapiVoyagerModule,
            services: [
                {
                    provide: GapiVoyagerConfig,
                    useValue: config
                }
            ]
        };
    }
}

export * from './gapi-voyager-plugin';
export * from './gapi-voyager-config';
