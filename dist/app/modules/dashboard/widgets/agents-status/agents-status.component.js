var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// src/app/modules/dashboard/widgets/agents-status/agents-status.component.ts
import { Component, Input } from '@angular/core';
let AgentsStatusComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-agents-status',
            templateUrl: './agents-status.component.html',
            styleUrls: ['./agents-status.component.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _online_decorators;
    let _online_initializers = [];
    let _online_extraInitializers = [];
    let _offline_decorators;
    let _offline_initializers = [];
    let _offline_extraInitializers = [];
    let _busy_decorators;
    let _busy_initializers = [];
    let _busy_extraInitializers = [];
    var AgentsStatusComponent = _classThis = class {
        get total() {
            return this.online + this.offline + this.busy;
        }
        get onlinePercentage() {
            return this.total > 0 ? (this.online / this.total) * 100 : 0;
        }
        get offlinePercentage() {
            return this.total > 0 ? (this.offline / this.total) * 100 : 0;
        }
        get busyPercentage() {
            return this.total > 0 ? (this.busy / this.total) * 100 : 0;
        }
        constructor() {
            this.online = __runInitializers(this, _online_initializers, 0);
            this.offline = (__runInitializers(this, _online_extraInitializers), __runInitializers(this, _offline_initializers, 0));
            this.busy = (__runInitializers(this, _offline_extraInitializers), __runInitializers(this, _busy_initializers, 0));
            __runInitializers(this, _busy_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "AgentsStatusComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _online_decorators = [Input()];
        _offline_decorators = [Input()];
        _busy_decorators = [Input()];
        __esDecorate(null, null, _online_decorators, { kind: "field", name: "online", static: false, private: false, access: { has: obj => "online" in obj, get: obj => obj.online, set: (obj, value) => { obj.online = value; } }, metadata: _metadata }, _online_initializers, _online_extraInitializers);
        __esDecorate(null, null, _offline_decorators, { kind: "field", name: "offline", static: false, private: false, access: { has: obj => "offline" in obj, get: obj => obj.offline, set: (obj, value) => { obj.offline = value; } }, metadata: _metadata }, _offline_initializers, _offline_extraInitializers);
        __esDecorate(null, null, _busy_decorators, { kind: "field", name: "busy", static: false, private: false, access: { has: obj => "busy" in obj, get: obj => obj.busy, set: (obj, value) => { obj.busy = value; } }, metadata: _metadata }, _busy_initializers, _busy_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AgentsStatusComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AgentsStatusComponent = _classThis;
})();
export { AgentsStatusComponent };
//# sourceMappingURL=agents-status.component.js.map