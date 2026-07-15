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
// NOTE: adjust this relative path to wherever your environment files live,
// e.g. '../../../../environments/environment' from src/app/modules/cards/services/.
import { environment } from '../../../../environments/environment';
let CardService = (() => {
    let _classDecorators = [Injectable({ providedIn: 'root' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CardService = _classThis = class {
        constructor(http) {
            this.http = http;
            this.baseUrl = `${environment.apiUrl}/cards`;
        }
        getCards() {
            return this.http.get(this.baseUrl);
        }
        getCardById(cardId) {
            return this.http.get(`${this.baseUrl}/${cardId}`);
        }
        createCard(payload) {
            return this.http.post(this.baseUrl, payload);
        }
        activateCard(cardId) {
            return this.http.patch(`${this.baseUrl}/${cardId}/activate`, {});
        }
        blockCard(cardId, reason) {
            return this.http.patch(`${this.baseUrl}/${cardId}/block`, { reason });
        }
        replaceCard(cardId) {
            return this.http.post(`${this.baseUrl}/${cardId}/replace`, {});
        }
        /**
         * The transactions module now exists, but a transaction belongs to a
         * wallet (from_wallet_id / to_wallet_id), not a card — there's no
         * transaction_id -> card_id link in the schema. This endpoint therefore
         * assumes the BACKEND resolves card_id -> wallet_id -> transactions
         * server-side (e.g. join through `cards.wallet_id`), rather than the
         * frontend doing that join by depending on TransactionService directly.
         * That keeps the cards and transactions modules decoupled.
         *
         * If your backend doesn't expose this yet, this call will 404/error —
         * card-detail already handles the error path.
         */
        getCardTransactions(cardId) {
            return this.http.get(`${this.baseUrl}/${cardId}/transactions`);
        }
    };
    __setFunctionName(_classThis, "CardService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CardService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CardService = _classThis;
})();
export { CardService };
//# sourceMappingURL=card.service.js.map