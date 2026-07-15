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
let QuickAccessComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-quick-access',
            template: `
    <div class="quick-grid">
      <a *ngFor="let item of items" [routerLink]="item.link" class="quick-btn" [class]="item.colorClass">
        <i class="qicon" [class]="item.icon"></i>
        {{ item.label }}
      </a>
    </div>
  `,
            styles: [`
    .quick-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 11px;
    }
    .quick-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 14px 8px;
      border-radius: 14px;
      font-size: 11px;
      font-weight: 700;
      text-align: center;
      color: #fff;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      min-height: 82px;
      position: relative;
      overflow: hidden;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.13);
      text-decoration: none;
    }
    .quick-btn:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
    .quick-btn .qicon {
      font-size: 22px;
      display: block;
      margin-bottom: 2px;
    }
    .quick-btn.b1 { background: linear-gradient(135deg, #1d4ed8, #1e40af); }
    .quick-btn.b2 { background: linear-gradient(135deg, #15803d, #166534); }
    .quick-btn.b3 { background: linear-gradient(135deg, #a16207, #854d0e); }
    .quick-btn.b4 { background: linear-gradient(135deg, #7e22ce, #6b21a8); }
    .quick-btn.b5 { background: linear-gradient(135deg, #1e40af, #1e3a8a); }
    .quick-btn.b6 { background: linear-gradient(135deg, #b91c1c, #991b1b); }
    .quick-btn.b7 { background: linear-gradient(135deg, #0f766e, #115e59); }
    .quick-btn.b8 { background: linear-gradient(135deg, #475569, #334155); }
    .quick-btn.b9 { background: linear-gradient(135deg, #9a3412, #7c2d12); }
  `]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _items_decorators;
    let _items_initializers = [];
    let _items_extraInitializers = [];
    var QuickAccessComponent = _classThis = class {
        constructor() {
            this.items = __runInitializers(this, _items_initializers, []);
            __runInitializers(this, _items_extraInitializers);
        }
        ngOnInit() { }
    };
    __setFunctionName(_classThis, "QuickAccessComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _items_decorators = [Input()];
        __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: obj => "items" in obj, get: obj => obj.items, set: (obj, value) => { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        QuickAccessComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return QuickAccessComponent = _classThis;
})();
export { QuickAccessComponent };
//# sourceMappingURL=quick-access.component.js.map