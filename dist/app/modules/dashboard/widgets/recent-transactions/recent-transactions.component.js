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
// src/app/modules/dashboard/widgets/recent-transactions/recent-transactions.component.ts
import { Component, Input } from '@angular/core';
let RecentTransactionsComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-recent-transactions',
            templateUrl: './recent-transactions.component.html',
            styleUrls: ['./recent-transactions.component.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _transactions_decorators;
    let _transactions_initializers = [];
    let _transactions_extraInitializers = [];
    var RecentTransactionsComponent = _classThis = class {
        getTransactionTypeLabel(type) {
            const labels = {
                'paiement': 'Paiement',
                'recharge': 'Recharge',
                'retrait': 'Retrait',
                'transfert': 'Transfert'
            };
            return labels[type] || type;
        }
        getTransactionStatusLabel(status) {
            const labels = {
                'success': 'Succès',
                'pending': 'En attente',
                'failed': 'Échoué'
            };
            return labels[status] || status;
        }
        getStatusClass(status) {
            const classes = {
                'success': 'success',
                'pending': 'pending',
                'failed': 'failed'
            };
            return classes[status] || '';
        }
        formatCurrency(amount) {
            return amount.toLocaleString('fr-FR') + ' FBU';
        }
        constructor() {
            this.transactions = __runInitializers(this, _transactions_initializers, []);
            __runInitializers(this, _transactions_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "RecentTransactionsComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _transactions_decorators = [Input()];
        __esDecorate(null, null, _transactions_decorators, { kind: "field", name: "transactions", static: false, private: false, access: { has: obj => "transactions" in obj, get: obj => obj.transactions, set: (obj, value) => { obj.transactions = value; } }, metadata: _metadata }, _transactions_initializers, _transactions_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecentTransactionsComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecentTransactionsComponent = _classThis;
})();
export { RecentTransactionsComponent };
//# sourceMappingURL=recent-transactions.component.js.map