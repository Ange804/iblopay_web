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
import { Component } from '@angular/core';
const DEFAULT_PAGE_SIZE = 20;
let TransactionListComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-transaction-list',
            templateUrl: './transaction-list.component.html',
            styleUrls: ['./transaction-list.component.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var TransactionListComponent = _classThis = class {
        constructor(transactionService, router) {
            this.transactionService = transactionService;
            this.router = router;
            this.transactions = [];
            this.summary = null;
            this.total = 0;
            this.isLoading = true;
            this.isLoadingSummary = true;
            this.errorMessage = '';
            this.filter = { page: 1, pageSize: DEFAULT_PAGE_SIZE };
        }
        ngOnInit() {
            this.loadTransactions();
            this.loadSummary();
        }
        onFilterChange(filter) {
            this.filter = { ...filter, pageSize: DEFAULT_PAGE_SIZE };
            this.loadTransactions();
            this.loadSummary();
        }
        loadTransactions() {
            this.isLoading = true;
            this.errorMessage = '';
            this.transactionService.getTransactions(this.filter).subscribe({
                next: ({ items, total }) => {
                    this.transactions = items;
                    this.total = total;
                    this.isLoading = false;
                },
                error: () => {
                    this.errorMessage = 'Unable to load transactions.';
                    this.isLoading = false;
                }
            });
        }
        loadSummary() {
            this.isLoadingSummary = true;
            this.transactionService.getSummary(this.filter).subscribe({
                next: (summary) => {
                    this.summary = summary;
                    this.isLoadingSummary = false;
                },
                error: () => {
                    this.isLoadingSummary = false;
                }
            });
        }
        goToPage(page) {
            this.filter = { ...this.filter, page };
            this.loadTransactions();
        }
        get totalPages() {
            const pageSize = this.filter.pageSize ?? DEFAULT_PAGE_SIZE;
            return Math.max(1, Math.ceil(this.total / pageSize));
        }
        get currentPage() {
            return this.filter.page ?? 1;
        }
        openTransaction(transaction) {
            this.router.navigate(['/transactions', transaction.transactionId]);
        }
    };
    __setFunctionName(_classThis, "TransactionListComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TransactionListComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TransactionListComponent = _classThis;
})();
export { TransactionListComponent };
//# sourceMappingURL=transaction-list.component.js.map