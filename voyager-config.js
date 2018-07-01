"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Token_1 = require("@rxdi/core/container/Token");
class VoyagerConfigModel {
    constructor() {
        this.path = '/voyager';
        this.endpointUrl = '/graphql';
    }
}
exports.VoyagerConfigModel = VoyagerConfigModel;
exports.VoyagerConfig = new Token_1.InjectionToken('gapi-voyager-config-injection-token');
