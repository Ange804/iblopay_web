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
// src/app/modules/auth/services/session.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AUTH_CONSTANTS } from '../auth.constants';
let SessionService = (() => {
    let _classDecorators = [Injectable({ providedIn: 'root' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SessionService = _classThis = class {
        constructor(tokenService, router, ngZone) {
            this.tokenService = tokenService;
            this.router = router;
            this.ngZone = ngZone;
            this.lastActivity = Date.now();
            this.sessionExpired$ = new Subject();
            this.onSessionExpired = this.sessionExpired$.asObservable();
            this.onActivity = () => {
                this.lastActivity = Date.now();
            };
        }
        /**
         * Start monitoring user activity for session timeout
         */
        startSessionMonitoring() {
            this.lastActivity = Date.now();
            this.setupActivityListeners();
            this.startSessionTimer();
        }
        /**
         * Stop session monitoring (on logout)
         */
        stopSessionMonitoring() {
            this.clearSessionTimer();
            this.removeActivityListeners();
        }
        /**
         * Reset the session timer on user activity
         */
        resetSession() {
            this.lastActivity = Date.now();
        }
        /**
         * Check if the session is still valid
         */
        isSessionValid() {
            if (!this.tokenService.hasTokens())
                return false;
            if (this.tokenService.isTokenExpired())
                return false;
            const elapsed = (Date.now() - this.lastActivity) / 1000;
            return elapsed < AUTH_CONSTANTS.SESSION_TIMEOUT;
        }
        /**
         * Get remaining session time in seconds
         */
        getRemainingTime() {
            const elapsed = (Date.now() - this.lastActivity) / 1000;
            return Math.max(0, AUTH_CONSTANTS.SESSION_TIMEOUT - elapsed);
        }
        /**
         * Store session data
         */
        setSessionData(data) {
            sessionStorage.setItem(AUTH_CONSTANTS.SESSION_KEY, JSON.stringify(data));
        }
        /**
         * Get stored session data
         */
        getSessionData() {
            const data = sessionStorage.getItem(AUTH_CONSTANTS.SESSION_KEY);
            if (!data)
                return null;
            try {
                return JSON.parse(data);
            }
            catch {
                return null;
            }
        }
        /**
         * Clear session data
         */
        clearSession() {
            sessionStorage.removeItem(AUTH_CONSTANTS.SESSION_KEY);
            this.stopSessionMonitoring();
        }
        setupActivityListeners() {
            const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
            events.forEach(event => {
                document.addEventListener(event, this.onActivity);
            });
        }
        removeActivityListeners() {
            const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
            events.forEach(event => {
                document.removeEventListener(event, this.onActivity);
            });
        }
        startSessionTimer() {
            this.ngZone.runOutsideAngular(() => {
                this.sessionTimer = setInterval(() => {
                    if (!this.isSessionValid()) {
                        this.ngZone.run(() => {
                            this.handleSessionExpired();
                        });
                    }
                }, AUTH_CONSTANTS.SESSION_CHECK_INTERVAL * 1000);
            });
        }
        clearSessionTimer() {
            if (this.sessionTimer) {
                clearInterval(this.sessionTimer);
                this.sessionTimer = null;
            }
        }
        handleSessionExpired() {
            this.sessionExpired$.next();
            this.clearSession();
            this.tokenService.clearTokens();
            this.router.navigate([AUTH_CONSTANTS.LOGIN_ROUTE], {
                queryParams: { expired: 'true' }
            });
        }
    };
    __setFunctionName(_classThis, "SessionService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SessionService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SessionService = _classThis;
})();
export { SessionService };
//# sourceMappingURL=session.service.js.map