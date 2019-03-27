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
var VoyagerModule_1;
const core_1 = require("@rxdi/core");
const voyager_config_1 = require("./voyager-config");
const voyager_plugin_1 = require("./voyager-plugin");
let VoyagerModule = VoyagerModule_1 = class VoyagerModule {
    static forRoot(config = new voyager_config_1.VoyagerConfigModel()) {
        return {
            module: VoyagerModule_1,
            services: [
                {
                    provide: voyager_config_1.VoyagerConfig,
                    useValue: config
                }
            ]
        };
    }
};
VoyagerModule = VoyagerModule_1 = __decorate([
    core_1.Module({
        plugins: [voyager_plugin_1.VoyagerGapiHapiPlugin]
    })
], VoyagerModule);
exports.VoyagerModule = VoyagerModule;
__export(require("./voyager-plugin"));
__export(require("./voyager-config"));
