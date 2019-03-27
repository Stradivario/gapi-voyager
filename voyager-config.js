"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
class VoyagerConfigModel {
    constructor() {
        this.path = '/voyager';
        this.endpointUrl = '/graphql';
    }
}
exports.VoyagerConfigModel = VoyagerConfigModel;
exports.VoyagerConfig = new core_1.InjectionToken('gapi-voyager-config-injection-token');
