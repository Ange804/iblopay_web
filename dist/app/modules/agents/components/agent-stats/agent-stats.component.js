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
// src/app/modules/agents/components/agent-stats/agent-stats.component.ts
import { Component, Input } from '@angular/core';
let AgentStatsComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-agent-stats',
            template: `
    <div class="stats-container">
      <div class="stat-card">
        <div class="stat-number">{{ totalAgents }}</div>
        <div class="stat-label">Total Agents</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ activeAgents }}</div>
        <div class="stat-label">Agents Actifs</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ pendingAgents }}</div>
        <div class="stat-label">En Attente</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ blockedAgents }}</div>
        <div class="stat-label">Bloqués</div>
      </div>
    </div>
  `,
            styles: [`
    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .stat-card {
      background: white;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
      
      .stat-number {
        font-size: 28px;
        font-weight: bold;
        color: #1a237e;
      }
      
      .stat-label {
        font-size: 14px;
        color: #666;
        margin-top: 4px;
      }
    }
  `]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _totalAgents_decorators;
    let _totalAgents_initializers = [];
    let _totalAgents_extraInitializers = [];
    let _activeAgents_decorators;
    let _activeAgents_initializers = [];
    let _activeAgents_extraInitializers = [];
    let _pendingAgents_decorators;
    let _pendingAgents_initializers = [];
    let _pendingAgents_extraInitializers = [];
    let _blockedAgents_decorators;
    let _blockedAgents_initializers = [];
    let _blockedAgents_extraInitializers = [];
    var AgentStatsComponent = _classThis = class {
        constructor() {
            this.totalAgents = __runInitializers(this, _totalAgents_initializers, 0);
            this.activeAgents = (__runInitializers(this, _totalAgents_extraInitializers), __runInitializers(this, _activeAgents_initializers, 0));
            this.pendingAgents = (__runInitializers(this, _activeAgents_extraInitializers), __runInitializers(this, _pendingAgents_initializers, 0));
            this.blockedAgents = (__runInitializers(this, _pendingAgents_extraInitializers), __runInitializers(this, _blockedAgents_initializers, 0));
            __runInitializers(this, _blockedAgents_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "AgentStatsComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _totalAgents_decorators = [Input()];
        _activeAgents_decorators = [Input()];
        _pendingAgents_decorators = [Input()];
        _blockedAgents_decorators = [Input()];
        __esDecorate(null, null, _totalAgents_decorators, { kind: "field", name: "totalAgents", static: false, private: false, access: { has: obj => "totalAgents" in obj, get: obj => obj.totalAgents, set: (obj, value) => { obj.totalAgents = value; } }, metadata: _metadata }, _totalAgents_initializers, _totalAgents_extraInitializers);
        __esDecorate(null, null, _activeAgents_decorators, { kind: "field", name: "activeAgents", static: false, private: false, access: { has: obj => "activeAgents" in obj, get: obj => obj.activeAgents, set: (obj, value) => { obj.activeAgents = value; } }, metadata: _metadata }, _activeAgents_initializers, _activeAgents_extraInitializers);
        __esDecorate(null, null, _pendingAgents_decorators, { kind: "field", name: "pendingAgents", static: false, private: false, access: { has: obj => "pendingAgents" in obj, get: obj => obj.pendingAgents, set: (obj, value) => { obj.pendingAgents = value; } }, metadata: _metadata }, _pendingAgents_initializers, _pendingAgents_extraInitializers);
        __esDecorate(null, null, _blockedAgents_decorators, { kind: "field", name: "blockedAgents", static: false, private: false, access: { has: obj => "blockedAgents" in obj, get: obj => obj.blockedAgents, set: (obj, value) => { obj.blockedAgents = value; } }, metadata: _metadata }, _blockedAgents_initializers, _blockedAgents_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AgentStatsComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AgentStatsComponent = _classThis;
})();
export { AgentStatsComponent };
//# sourceMappingURL=agent-stats.component.js.map