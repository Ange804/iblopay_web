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
import { Injectable } from '@angular/core';
// NOTE: adjust this relative path to wherever your environment files live.
import { environment } from '../../../../environments/environment';
let TransactionExportService = (() => {
    let _classDecorators = [Injectable({ providedIn: 'root' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var TransactionExportService = _classThis = class {
        constructor(http) {
            this.http = http;
            this.baseUrl = `${environment.apiUrl}/transactions`;
        }
        /**
         * Client-side CSV export of whatever transactions are already loaded
         * (e.g. the current page in transaction-list). Fine for small/filtered
         * sets. For full-dataset exports, use requestServerExport instead so the
         * backend streams the file rather than the browser holding it all in memory.
         */
        exportToCsv(transactions, filename = 'transactions.csv') {
            const header = ['Transaction ID', 'Reference', 'Type', 'Status', 'Amount', 'Fee', 'From Wallet', 'To Wallet', 'Created At'];
            const rows = transactions.map((t) => [
                t.transactionId,
                t.reference ?? '',
                t.transactionType,
                t.status,
                String(t.amount),
                String(t.fee),
                t.fromWalletId ?? '',
                t.toWalletId ?? '',
                t.createdAt
            ]);
            const csv = [header, ...rows]
                .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
                .join('\n');
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
            URL.revokeObjectURL(url);
        }
        /**
         * ASSUMPTION: backend endpoint for large/async exports doesn't exist yet.
         * Wire this up once it does — expected to stream back a file (CSV/PDF).
         */
        requestServerExport(filter, format = 'csv') {
            return this.http.post(`${this.baseUrl}/export`, { filter, format }, { responseType: 'blob' });
        }
    };
    __setFunctionName(_classThis, "TransactionExportService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TransactionExportService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TransactionExportService = _classThis;
})();
export { TransactionExportService };
//# sourceMappingURL=transaction-export.service.js.map