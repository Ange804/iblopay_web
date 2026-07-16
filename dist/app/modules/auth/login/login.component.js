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
// src/app/modules/auth/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AUTH_CONSTANTS } from '../auth.constants';
import { phoneValidator } from '../validators/email.validator';
import { pinValidator } from '../validators/password.validator';
let LoginComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-login',
            standalone: true,
            imports: [CommonModule, ReactiveFormsModule],
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var LoginComponent = _classThis = class {
        constructor(fb, authService, router, route) {
            this.fb = fb;
            this.authService = authService;
            this.router = router;
            this.route = route;
            this.isLoading = false;
            this.errorMessage = '';
            this.sessionExpired = false;
            this.showPin = false;
            this.currentYear = new Date().getFullYear();
            this.destroy$ = new Subject();
        }
        ngOnInit() {
            this.loginForm = this.fb.group({
                phone_number: ['', [Validators.required, phoneValidator()]],
                pin: ['', [Validators.required, pinValidator()]]
            });
            // Check for session expired query param
            this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
                if (params['expired'] === 'true') {
                    this.sessionExpired = true;
                    this.errorMessage = AUTH_CONSTANTS.MESSAGES.SESSION_EXPIRED;
                }
            });
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        onSubmit() {
            if (this.loginForm.invalid) {
                this.loginForm.markAllAsTouched();
                return;
            }
            this.isLoading = true;
            this.errorMessage = '';
            this.sessionExpired = false;
            const credentials = this.loginForm.value;
            this.authService.login(credentials).pipe(takeUntil(this.destroy$)).subscribe({
                next: (response) => {
                    this.isLoading = false;
                    if (response.success) {
                        // Check if 2FA is required
                        if (response.data?.user) {
                            this.router.navigate([AUTH_CONSTANTS.DASHBOARD_ROUTE]);
                        }
                    }
                },
                error: (error) => {
                    this.isLoading = false;
                    if (error.status === 401) {
                        this.errorMessage = AUTH_CONSTANTS.MESSAGES.LOGIN_FAILED;
                    }
                    else if (error.status === 0) {
                        this.errorMessage = AUTH_CONSTANTS.MESSAGES.NETWORK_ERROR;
                    }
                    else if (error.status === 403 && error.error?.requires_2fa) {
                        // Redirect to 2FA with phone number
                        this.router.navigate([AUTH_CONSTANTS.TWO_FACTOR_ROUTE], {
                            queryParams: { phone: credentials.phone_number }
                        });
                    }
                    else {
                        this.errorMessage = error.userMessage || error.error?.message || AUTH_CONSTANTS.MESSAGES.LOGIN_FAILED;
                    }
                }
            });
        }
        togglePinVisibility() {
            this.showPin = !this.showPin;
        }
        getFieldError(fieldName) {
            const control = this.loginForm.get(fieldName);
            if (!control || !control.errors || !control.touched)
                return '';
            if (control.errors['required'])
                return 'Ce champ est requis';
            if (control.errors['phoneFormat'])
                return control.errors['phoneFormat'];
            if (control.errors['pinFormat'])
                return control.errors['pinFormat'];
            if (control.errors['pinMinLength'])
                return control.errors['pinMinLength'];
            if (control.errors['pinMaxLength'])
                return control.errors['pinMaxLength'];
            return 'Valeur invalide';
        }
    };
    __setFunctionName(_classThis, "LoginComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoginComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoginComponent = _classThis;
})();
export { LoginComponent };
//# sourceMappingURL=login.component.js.map