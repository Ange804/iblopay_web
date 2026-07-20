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
let StatCardComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-stat-card',
            template: `
    <div class="stat-card" [class.highlight]="stat.highlight" [class.services]="stat.isService">
      <div class="stat-top">
        <div class="stat-icon" [style.background]="'linear-gradient(135deg, ' + getIconColor(stat.iconColor) + ', ' + getIconColor(stat.iconColor) + 'dd)'">
          <i [class]="stat.icon"></i>
        </div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
      <div class="stat-value">{{ formatNumber(stat.value) }}</div>
      <div class="stat-change" [class.positive]="stat.change >= 0" [class.negative]="stat.change < 0">
        {{ stat.change > 0 ? '+' : '' }}{{ stat.change }}%
        <span class="stat-change-sub">{{ stat.changeLabel }}</span>
      </div>
      <div class="stat-footer">
        <a [routerLink]="stat.link" class="voir-plus">Voir plus <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  `,
            styles: [`
    .stat-card {
      background: linear-gradient(180deg, rgba(18, 40, 66, 0.95), rgba(10, 28, 49, 0.95));
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 12px;
      padding: 12px;
      transition: all 0.3s ease;
      cursor: default;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
    }
    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #3b82f6, transparent);
      opacity: 0;
      transition: all 0.3s ease;
    }
    .stat-card:hover {
      transform: translateY(-4px);
      border-color: #243150;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    }
    .stat-card:hover::before {
      opacity: 1;
    }
    .stat-card:hover .stat-icon {
      transform: scale(1.05) rotate(-3deg);
    }
    .stat-card.highlight {
      border-color: #fbbf24;
      box-shadow: 0 0 30px rgba(251, 191, 36, 0.15);
    }
    .stat-card.highlight::before {
      background: linear-gradient(90deg, transparent, #f5c842, transparent);
      opacity: 1;
    }
    .stat-card.highlight .stat-label {
      color: #f5c842;
      font-weight: 700;
      letter-spacing: 0.4px;
      font-size: 10px;
    }
    .stat-card.highlight .stat-value {
      font-size: 20px;
      color: #f5c842;
    }
    .stat-card.services {
      border-color: #ec4899;
      box-shadow: 0 0 30px rgba(236, 72, 153, 0.15);
    }
    .stat-card.services::before {
      background: linear-gradient(90deg, transparent, #ec4899, transparent);
      opacity: 1;
    }
    .stat-card.services .stat-label {
      color: #ec4899;
      font-weight: 700;
      letter-spacing: 0.4px;
      font-size: 10px;
    }
    .stat-card.services .stat-value {
      font-size: 20px;
      color: #ec4899;
    }
    .stat-card .stat-top {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
    }
    .stat-card .stat-top .stat-icon {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      flex-shrink: 0;
      transition: all 0.3s ease;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
      color: #fff;
    }
    .stat-card .stat-top .stat-label {
      font-size: 9px;
      color: #8896b3;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }
    .stat-card .stat-value {
      font-size: 18px;
      font-weight: 800;
      color: #fff;
      margin: 2px 0 2px;
      letter-spacing: -0.3px;
      line-height: 1.1;
    }
    .stat-card .stat-change {
      font-size: 10px;
      font-weight: 600;
      line-height: 1.3;
    }
    .stat-card .stat-change.positive {
      color: #22c55e;
    }
    .stat-card .stat-change.negative {
      color: #ef4444;
    }
    .stat-card .stat-change .stat-change-sub {
      font-size: 9px;
      color: #5c6986;
      margin-left: 3px;
      font-weight: 400;
    }
    .stat-card .stat-footer {
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      justify-content: center;
    }
    .stat-card .stat-footer .voir-plus {
      font-size: 9px;
      color: #60a5fa;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 2px 10px;
      border-radius: 4px;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .stat-card .stat-footer .voir-plus:hover {
      color: #fff;
      background: rgba(59, 130, 246, 0.15);
    }
    .stat-card .stat-footer .voir-plus.pink:hover {
      background: rgba(236, 72, 153, 0.15);
    }
    :host-context(body.light-mode) .stat-card {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95));
      border-color: #e2e8f0;
    }
    :host-context(body.light-mode) .stat-card .stat-value {
      color: #0f172a;
    }
    :host-context(body.light-mode) .stat-card .stat-label {
      color: #475569;
    }
    :host-context(body.light-mode) .stat-card.highlight {
      border-color: #fbbf24;
      box-shadow: 0 0 30px rgba(251, 191, 36, 0.15);
    }
    :host-context(body.light-mode) .stat-card.highlight .stat-value {
      color: #b77900;
    }
    :host-context(body.light-mode) .stat-card.highlight .stat-label {
      color: #b77900;
    }
    :host-context(body.light-mode) .stat-card.services {
      border-color: #ec4899;
      box-shadow: 0 0 30px rgba(236, 72, 153, 0.15);
    }
    :host-context(body.light-mode) .stat-card.services .stat-value {
      color: #be185d;
    }
    :host-context(body.light-mode) .stat-card.services .stat-label {
      color: #be185d;
    }
  `]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _stat_decorators;
    let _stat_initializers = [];
    let _stat_extraInitializers = [];
    var StatCardComponent = _classThis = class {
        constructor() {
            this.stat = __runInitializers(this, _stat_initializers, void 0);
            __runInitializers(this, _stat_extraInitializers);
        }
        ngOnInit() { }
        getIconColor(color) {
            const colors = {
                blue: '#3b82f6',
                green: '#22c55e',
                purple: '#a855f7',
                orange: '#f97316',
                teal: '#14b8a6',
                cyan: '#06b6d4',
                gold: '#f5c842',
                pink: '#ec4899'
            };
            return colors[color] || '#3b82f6';
        }
        formatNumber(value) {
            if (typeof value === 'string') {
                return value;
            }
            return value.toLocaleString('fr-FR');
        }
    };
    __setFunctionName(_classThis, "StatCardComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _stat_decorators = [Input()];
        __esDecorate(null, null, _stat_decorators, { kind: "field", name: "stat", static: false, private: false, access: { has: obj => "stat" in obj, get: obj => obj.stat, set: (obj, value) => { obj.stat = value; } }, metadata: _metadata }, _stat_initializers, _stat_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StatCardComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StatCardComponent = _classThis;
})();
export { StatCardComponent };
//# sourceMappingURL=stat-card.component.js.map