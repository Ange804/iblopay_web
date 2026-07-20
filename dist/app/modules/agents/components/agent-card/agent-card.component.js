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
// src/app/modules/agents/components/agent-card/agent-card.component.ts
import { Component, Input } from '@angular/core';
let AgentCardComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-agent-card',
            template: `
    <div class="agent-card">
      <div class="card-header">
        <div class="agent-avatar">
          {{ agent?.firstName?.[0] }}{{ agent?.lastName?.[0] }}
        </div>
        <div class="agent-info">
          <h3>{{ agent?.firstName }} {{ agent?.lastName }}</h3>
          <p>{{ agent?.code }}</p>
        </div>
      </div>
      <div class="card-body">
        <p><strong>Email:</strong> {{ agent?.email }}</p>
        <p><strong>Téléphone:</strong> {{ agent?.phone }}</p>
        <p><strong>Statut:</strong> {{ getStatusLabel(agent?.status) }}</p>
      </div>
    </div>
  `,
            styles: [`
    .agent-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 16px;
      margin: 8px;
      transition: transform 0.2s;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
      }
    }
    .card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }
    .agent-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #1a237e;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
      flex-shrink: 0;
    }
    .agent-info {
      h3 {
        margin: 0;
        font-size: 16px;
        color: #1a237e;
      }
      p {
        margin: 4px 0 0;
        color: #666;
        font-size: 12px;
      }
    }
    .card-body {
      p {
        margin: 6px 0;
        font-size: 14px;
        color: #444;
        
        strong {
          color: #666;
        }
      }
    }
  `]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _agent_decorators;
    let _agent_initializers = [];
    let _agent_extraInitializers = [];
    var AgentCardComponent = _classThis = class {
        getStatusLabel(status) {
            const labels = {
                'ACTIVE': 'Actif',
                'PENDING': 'En attente',
                'SUSPENDED': 'Suspendu',
                'BLOCKED': 'Bloqué',
                'INACTIVE': 'Inactif',
                'TERMINATED': 'Résilié'
            };
            return labels[status || ''] || status || 'Inconnu';
        }
        constructor() {
            this.agent = __runInitializers(this, _agent_initializers, void 0);
            __runInitializers(this, _agent_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "AgentCardComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _agent_decorators = [Input()];
        __esDecorate(null, null, _agent_decorators, { kind: "field", name: "agent", static: false, private: false, access: { has: obj => "agent" in obj, get: obj => obj.agent, set: (obj, value) => { obj.agent = value; } }, metadata: _metadata }, _agent_initializers, _agent_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AgentCardComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AgentCardComponent = _classThis;
})();
export { AgentCardComponent };
//# sourceMappingURL=agent-card.component.js.map