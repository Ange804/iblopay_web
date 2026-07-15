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
// src/app/modules/auth/interceptors/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, take, switchMap, finalize } from 'rxjs/operators';
let AuthInterceptor = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AuthInterceptor = _classThis = class {
        constructor(tokenService, authService) {
            this.tokenService = tokenService;
            this.authService = authService;
            this.isRefreshing = false;
            this.refreshTokenSubject = new BehaviorSubject(null);
        }
        intercept(req, next) {
            // Skip auth endpoints
            if (this.isAuthEndpoint(req.url)) {
                return next.handle(req);
            }
            const token = this.tokenService.getAccessToken();
            if (token) {
                req = this.addToken(req, token);
                // Proactively refresh if token is close to expiry
                if (this.tokenService.shouldRefreshToken() && !this.isRefreshing) {
                    return this.handleTokenRefresh(req, next);
                }
            }
            return next.handle(req).pipe(catchError(error => {
                if (error.status === 401 && !this.isAuthEndpoint(req.url)) {
                    return this.handleTokenRefresh(req, next);
                }
                return throwError(() => error);
            }));
        }
        addToken(req, token) {
            return req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        handleTokenRefresh(req, next) {
            if (!this.isRefreshing) {
                this.isRefreshing = true;
                this.refreshTokenSubject.next(null);
                return this.authService.refreshToken().pipe(switchMap(response => {
                    if (response.success && response.data) {
                        this.refreshTokenSubject.next(response.data.tokens.access_token);
                        return next.handle(this.addToken(req, response.data.tokens.access_token));
                    }
                    this.authService.logout();
                    return throwError(() => new Error('Token refresh failed'));
                }), catchError(error => {
                    this.authService.logout();
                    return throwError(() => error);
                }), finalize(() => {
                    this.isRefreshing = false;
                }));
            }
            // Queue other requests while refreshing
            return this.refreshTokenSubject.pipe(filter(token => token !== null), take(1), switchMap(token => next.handle(this.addToken(req, token))));
        }
        isAuthEndpoint(url) {
            const authPaths = ['/auth/login', '/auth/refresh', '/auth/forgot-password', '/auth/reset-password', '/auth/verify-otp'];
            return authPaths.some(path => url.includes(path));
        }
    };
    __setFunctionName(_classThis, "AuthInterceptor");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthInterceptor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthInterceptor = _classThis;
})();
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map