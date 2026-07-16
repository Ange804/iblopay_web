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
// src/app/modules/auth/services/token.service.ts
import { Injectable } from '@angular/core';
import { AUTH_CONSTANTS } from '../auth.constants';
let TokenService = (() => {
    let _classDecorators = [Injectable({ providedIn: 'root' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var TokenService = _classThis = class {
        /**
         * Store token pair in localStorage
         */
        setTokens(tokens) {
            localStorage.setItem(AUTH_CONSTANTS.ACCESS_TOKEN_KEY, tokens.access_token);
            localStorage.setItem(AUTH_CONSTANTS.REFRESH_TOKEN_KEY, tokens.refresh_token);
        }
        /**
         * Get the current access token
         */
        getAccessToken() {
            return localStorage.getItem(AUTH_CONSTANTS.ACCESS_TOKEN_KEY);
        }
        /**
         * Get the current refresh token
         */
        getRefreshToken() {
            return localStorage.getItem(AUTH_CONSTANTS.REFRESH_TOKEN_KEY);
        }
        /**
         * Remove all tokens
         */
        clearTokens() {
            localStorage.removeItem(AUTH_CONSTANTS.ACCESS_TOKEN_KEY);
            localStorage.removeItem(AUTH_CONSTANTS.REFRESH_TOKEN_KEY);
        }
        /**
         * Check if the access token is expired
         */
        isTokenExpired() {
            const token = this.getAccessToken();
            if (!token)
                return true;
            try {
                const decoded = this.decodeToken(token);
                if (!decoded)
                    return true;
                const now = Math.floor(Date.now() / 1000);
                return decoded.exp < now;
            }
            catch {
                return true;
            }
        }
        /**
         * Check if the token needs refreshing (within threshold of expiry)
         */
        shouldRefreshToken() {
            const token = this.getAccessToken();
            if (!token)
                return false;
            try {
                const decoded = this.decodeToken(token);
                if (!decoded)
                    return false;
                const now = Math.floor(Date.now() / 1000);
                return (decoded.exp - now) < AUTH_CONSTANTS.TOKEN_REFRESH_THRESHOLD;
            }
            catch {
                return false;
            }
        }
        /**
         * Decode a JWT token without verification (client-side only)
         */
        decodeToken(token) {
            try {
                const parts = token.split('.');
                if (parts.length !== 3)
                    return null;
                const payload = parts[1];
                if (!payload)
                    return null;
                const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
                return JSON.parse(decoded);
            }
            catch {
                return null;
            }
        }
        /**
         * Get user role from the current token
         */
        getRoleFromToken() {
            const token = this.getAccessToken();
            if (!token)
                return null;
            const decoded = this.decodeToken(token);
            return decoded?.role || null;
        }
        /**
         * Get permissions from the current token
         */
        getPermissionsFromToken() {
            const token = this.getAccessToken();
            if (!token)
                return [];
            const decoded = this.decodeToken(token);
            return decoded?.permissions || [];
        }
        /**
         * Get user ID from the current token
         */
        getUserIdFromToken() {
            const token = this.getAccessToken();
            if (!token)
                return null;
            const decoded = this.decodeToken(token);
            return decoded?.sub || null;
        }
        /**
         * Check if we have valid tokens stored
         */
        hasTokens() {
            return !!this.getAccessToken() && !!this.getRefreshToken();
        }
    };
    __setFunctionName(_classThis, "TokenService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TokenService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TokenService = _classThis;
})();
export { TokenService };
//# sourceMappingURL=token.service.js.map