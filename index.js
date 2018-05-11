"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@gapi/core");
const gapi_voyager_config_1 = require("./gapi-voyager-config");
const gapi_voyager_plugin_1 = require("./gapi-voyager-plugin");
let GapiVoyagerModule = GapiVoyagerModule_1 = class GapiVoyagerModule {
    static forRoot(config) {
        return {
            gapiModule: GapiVoyagerModule_1,
            services: [
                {
                    provide: gapi_voyager_config_1.GapiVoyagerConfig,
                    useValue: config
                }
            ]
        };
    }
};
GapiVoyagerModule = GapiVoyagerModule_1 = __decorate([
    core_1.GapiModule({
        services: [gapi_voyager_config_1.GapiVoyagerConfig],
        plugins: [gapi_voyager_plugin_1.VoyagerGapiHapiPlugin]
    })
], GapiVoyagerModule);
exports.GapiVoyagerModule = GapiVoyagerModule;
__export(require("./gapi-voyager-plugin"));
__export(require("./gapi-voyager-config"));
var GapiVoyagerModule_1;
