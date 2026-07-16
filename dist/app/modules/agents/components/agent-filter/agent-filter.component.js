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
// src/app/modules/agents/components/agent-filter/agent-filter.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
let AgentFilterComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-agent-filter',
            template: `
    <div class="filter-container">
      <input 
        type="text" 
        placeholder="Rechercher..." 
        (input)="onSearch($event)"
        class="search-input"
      />
      <select (change)="onStatusChange($event)" class="filter-select">
        <option value="">Tous les statuts</option>
        <option value="ACTIVE">Actif</option>
        <option value="PENDING">En attente</option>
        <option value="SUSPENDED">Suspendu</option>
        <option value="BLOCKED">Bloqué</option>
      </select>
    </div>
  `,
            styles: [`
    .filter-container {
      display: flex;
      gap: 12px;
      padding: 16px;
      background: white;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .search-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      
      &:focus {
        outline: none;
        border-color: #1a237e;
      }
    }
    .filter-select {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      background: white;
      
      &:focus {
        outline: none;
        border-color: #1a237e;
      }
    }
  `]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _search_decorators;
    let _search_initializers = [];
    let _search_extraInitializers = [];
    let _statusChange_decorators;
    let _statusChange_initializers = [];
    let _statusChange_extraInitializers = [];
    var AgentFilterComponent = _classThis = class {
        onSearch(event) {
            const input = event.target;
            this.search.emit(input.value);
        }
        onStatusChange(event) {
            const select = event.target;
            this.statusChange.emit(select.value);
        }
        constructor() {
            this.search = __runInitializers(this, _search_initializers, new EventEmitter());
            this.statusChange = (__runInitializers(this, _search_extraInitializers), __runInitializers(this, _statusChange_initializers, new EventEmitter()));
            __runInitializers(this, _statusChange_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "AgentFilterComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _search_decorators = [Output()];
        _statusChange_decorators = [Output()];
        __esDecorate(null, null, _search_decorators, { kind: "field", name: "search", static: false, private: false, access: { has: obj => "search" in obj, get: obj => obj.search, set: (obj, value) => { obj.search = value; } }, metadata: _metadata }, _search_initializers, _search_extraInitializers);
        __esDecorate(null, null, _statusChange_decorators, { kind: "field", name: "statusChange", static: false, private: false, access: { has: obj => "statusChange" in obj, get: obj => obj.statusChange, set: (obj, value) => { obj.statusChange = value; } }, metadata: _metadata }, _statusChange_initializers, _statusChange_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AgentFilterComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AgentFilterComponent = _classThis;
})();
export { AgentFilterComponent };
//# sourceMappingURL=agent-filter.component.js.map