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
import { Component, Input } from '@angular/core';
let ProvinceListComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-province-list',
            template: `
    <div class="province-list">
      <div class="list-header" *ngIf="totalLabel">
        <span class="total-label">{{ totalLabel }}</span>
        <span class="total-value" [class]="colorClass">{{ total | number:'1.0-0':'fr' }} Fbu</span>
        <span class="change-badge" [class.positive]="change >= 0" [class.negative]="change < 0" *ngIf="change !== 0">
          {{ change > 0 ? '+' : '' }}{{ change }}%
        </span>
      </div>
      <div class="province-items">
        <div class="province-item" *ngFor="let item of data">
          <span class="province-name">
            <i class="fa-solid fa-location-dot"></i>
            {{ item.name }}
          </span>
          <span class="province-amount" [class]="item.color || getColorClass(item.amount)">
            {{ item.amount | number:'1.0-0':'fr' }} Fbu
          </span>
        </div>
      </div>
    </div>
  `,
            styles: [`
    .province-list {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .province-list .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .province-list .list-header .total-label {
      font-size: 13px;
      color: #8896b3;
    }
    .province-list .list-header .total-value {
      font-size: 18px;
      font-weight: 800;
    }
    .province-list .list-header .total-value.green { color: #22c55e; }
    .province-list .list-header .total-value.blue { color: #60a5fa; }
    .province-list .list-header .total-value.purple { color: #a855f7; }
    .province-list .list-header .total-value.gold { color: #f5c842; }
    .province-list .list-header .total-value.orange { color: #f97316; }
    .province-list .list-header .total-value.cyan { color: #06b6d4; }
    .province-list .list-header .change-badge {
      font-size: 11px;
      font-weight: 600;
    }
    .province-list .list-header .change-badge.positive { color: #22c55e; }
    .province-list .list-header .change-badge.negative { color: #ef4444; }
    .province-list .province-items {
      flex: 1;
    }
    .province-list .province-items .province-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      font-size: 12px;
      transition: all 0.3s ease;
      border-radius: 4px;
    }
    .province-list .province-items .province-item:hover {
      background: rgba(255, 255, 255, 0.04);
      padding-left: 12px;
    }
    .province-list .province-items .province-item .province-name {
      color: #8896b3;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .province-list .province-items .province-item .province-name i {
      font-size: 14px;
      opacity: 0.7;
    }
    .province-list .province-items .province-item .province-amount {
      font-weight: 700;
      font-size: 12px;
      font-family: 'Inter', monospace;
    }
    .province-list .province-items .province-item .province-amount.green { color: #22c55e; }
    .province-list .province-items .province-item .province-amount.blue { color: #60a5fa; }
    .province-list .province-items .province-item .province-amount.orange { color: #f97316; }
    .province-list .province-items .province-item .province-amount.purple { color: #a855f7; }
    .province-list .province-items .province-item .province-amount.gold { color: #f5c842; }
    .province-list .province-items .province-item .province-amount.cyan { color: #06b6d4; }
    :host-context(body.light-mode) .province-item .province-name {
      color: #475569;
    }
    :host-context(body.light-mode) .province-item .province-amount {
      color: #0f172a;
    }
  `]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _data_decorators;
    let _data_initializers = [];
    let _data_extraInitializers = [];
    let _total_decorators;
    let _total_initializers = [];
    let _total_extraInitializers = [];
    let _totalLabel_decorators;
    let _totalLabel_initializers = [];
    let _totalLabel_extraInitializers = [];
    let _colorClass_decorators;
    let _colorClass_initializers = [];
    let _colorClass_extraInitializers = [];
    let _showTotal_decorators;
    let _showTotal_initializers = [];
    let _showTotal_extraInitializers = [];
    let _change_decorators;
    let _change_initializers = [];
    let _change_extraInitializers = [];
    var ProvinceListComponent = _classThis = class {
        constructor() {
            this.data = __runInitializers(this, _data_initializers, []);
            this.total = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _total_initializers, 0));
            this.totalLabel = (__runInitializers(this, _total_extraInitializers), __runInitializers(this, _totalLabel_initializers, 'Total'));
            this.colorClass = (__runInitializers(this, _totalLabel_extraInitializers), __runInitializers(this, _colorClass_initializers, 'green'));
            this.showTotal = (__runInitializers(this, _colorClass_extraInitializers), __runInitializers(this, _showTotal_initializers, true));
            this.change = (__runInitializers(this, _showTotal_extraInitializers), __runInitializers(this, _change_initializers, 0));
            __runInitializers(this, _change_extraInitializers);
        }
        ngOnInit() { }
        getColorClass(amount) {
            if (amount > 50000000)
                return 'gold';
            if (amount > 25000000)
                return 'blue';
            if (amount > 10000000)
                return 'green';
            if (amount > 5000000)
                return 'orange';
            return 'purple';
        }
        formatAmount(amount) {
            return amount.toLocaleString('fr-FR') + ' Fbu';
        }
    };
    __setFunctionName(_classThis, "ProvinceListComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _data_decorators = [Input()];
        _total_decorators = [Input()];
        _totalLabel_decorators = [Input()];
        _colorClass_decorators = [Input()];
        _showTotal_decorators = [Input()];
        _change_decorators = [Input()];
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
        __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: obj => "total" in obj, get: obj => obj.total, set: (obj, value) => { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
        __esDecorate(null, null, _totalLabel_decorators, { kind: "field", name: "totalLabel", static: false, private: false, access: { has: obj => "totalLabel" in obj, get: obj => obj.totalLabel, set: (obj, value) => { obj.totalLabel = value; } }, metadata: _metadata }, _totalLabel_initializers, _totalLabel_extraInitializers);
        __esDecorate(null, null, _colorClass_decorators, { kind: "field", name: "colorClass", static: false, private: false, access: { has: obj => "colorClass" in obj, get: obj => obj.colorClass, set: (obj, value) => { obj.colorClass = value; } }, metadata: _metadata }, _colorClass_initializers, _colorClass_extraInitializers);
        __esDecorate(null, null, _showTotal_decorators, { kind: "field", name: "showTotal", static: false, private: false, access: { has: obj => "showTotal" in obj, get: obj => obj.showTotal, set: (obj, value) => { obj.showTotal = value; } }, metadata: _metadata }, _showTotal_initializers, _showTotal_extraInitializers);
        __esDecorate(null, null, _change_decorators, { kind: "field", name: "change", static: false, private: false, access: { has: obj => "change" in obj, get: obj => obj.change, set: (obj, value) => { obj.change = value; } }, metadata: _metadata }, _change_initializers, _change_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProvinceListComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProvinceListComponent = _classThis;
})();
export { ProvinceListComponent };
//# sourceMappingURL=province-list.component.js.map