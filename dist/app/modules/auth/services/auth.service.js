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
// src/app/modules/auth/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AUTH_CONSTANTS } from '../auth.constants';
import { Role } from '../enums/role.enum';
import { Permission } from '../enums/permission.enum';
const MOCK_ROLES = [
    {
        role_id: 'role-sys-admin',
        name: Role.SYSTEM_ADMIN,
        description: 'System Administrator with full access',
        is_default: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        role_id: 'role-admin',
        name: Role.ADMIN,
        description: 'Administrator with management access',
        is_default: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];
let AuthService = (() => {
    let _classDecorators = [Injectable({ providedIn: 'root' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AuthService = _classThis = class {
        constructor(http, router, tokenService, sessionService) {
            this.http = http;
            this.router = router;
            this.tokenService = tokenService;
            this.sessionService = sessionService;
            this.currentUser$ = new BehaviorSubject(null);
            this.isAuthenticated$ = new BehaviorSubject(false);
            this.user$ = this.currentUser$.asObservable();
            this.authenticated$ = this.isAuthenticated$.asObservable();
            this.storageKey = 'iblopay_mock_users';
            this.initMockUsers();
            this.initializeAuth();
        }
        // ─── Mock Database Initialization ────────────────────────
        initMockUsers() {
            if (!localStorage.getItem(this.storageKey)) {
                const defaultUsers = [
                    {
                        user_id: 'user-sysadmin-1',
                        first_name: 'System',
                        last_name: 'Admin',
                        phone_number: '+237600000000',
                        email: 'system.admin@iblopay.com',
                        cni_number: '1234567890',
                        photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
                        role_id: 'role-sys-admin',
                        role: MOCK_ROLES[0],
                        status: 'ACTIVE',
                        permissions: Object.values(Permission),
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString(),
                        pin: '1111'
                    },
                    {
                        user_id: 'user-admin-2',
                        first_name: 'Normal',
                        last_name: 'Admin',
                        phone_number: '+237611111111',
                        email: 'admin@iblopay.com',
                        cni_number: '0987654321',
                        photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
                        role_id: 'role-admin',
                        role: MOCK_ROLES[1],
                        status: 'ACTIVE',
                        permissions: [
                            Permission.USER_READ,
                            Permission.DASHBOARD_VIEW
                        ],
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString(),
                        pin: '2222'
                    }
                ];
                localStorage.setItem(this.storageKey, JSON.stringify(defaultUsers));
            }
        }
        getMockUsers() {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        }
        saveMockUsers(users) {
            localStorage.setItem(this.storageKey, JSON.stringify(users));
        }
        // ─── Authentication ────────────────────────────────────────
        /**
         * Login with phone number and PIN (simulates 2FA redirect on success)
         */
        login(credentials) {
            const users = this.getMockUsers();
            const cleanedPhone = credentials.phone_number.replace(/[\s-]/g, '');
            const user = users.find(u => u.phone_number.replace(/[\s-]/g, '') === cleanedPhone && u.pin === credentials.pin);
            if (!user) {
                return throwError(() => ({
                    status: 401,
                    error: { message: AUTH_CONSTANTS.MESSAGES.LOGIN_FAILED }
                })).pipe(delay(800));
            }
            if (user.status !== 'ACTIVE') {
                return throwError(() => ({
                    status: 403,
                    error: { message: `Votre compte est actuellement ${user.status}.` }
                })).pipe(delay(800));
            }
            // Success: Simulate 2FA required by throwing a 403 with requires_2fa: true
            return throwError(() => ({
                status: 403,
                error: { requires_2fa: true }
            })).pipe(delay(1000));
        }
        /**
         * Verify two-factor authentication OTP
         */
        verifyTwoFactor(request) {
            const users = this.getMockUsers();
            const cleanedPhone = request.phone_number.replace(/[\s-]/g, '');
            const user = users.find(u => u.phone_number.replace(/[\s-]/g, '') === cleanedPhone);
            if (!user) {
                return throwError(() => ({
                    status: 404,
                    error: { message: 'Utilisateur introuvable.' }
                })).pipe(delay(800));
            }
            // Simulate OTP validation: any 6-digit OTP code works, or '123456' specifically
            if (request.otp_code.length !== 6) {
                return throwError(() => ({
                    status: 400,
                    error: { message: AUTH_CONSTANTS.MESSAGES.OTP_INVALID }
                })).pipe(delay(800));
            }
            const mockTokens = {
                access_token: 'mock-jwt-access-token-' + Math.random().toString(36).substring(2),
                refresh_token: 'mock-jwt-refresh-token-' + Math.random().toString(36).substring(2),
                expires_in: 3600,
                token_type: 'Bearer'
            };
            const response = {
                success: true,
                message: AUTH_CONSTANTS.MESSAGES.LOGIN_SUCCESS,
                data: {
                    user: user,
                    tokens: mockTokens
                }
            };
            return of(response).pipe(delay(1000), tap(res => {
                if (res.success && res.data) {
                    this.tokenService.setTokens(res.data.tokens);
                    this.setCurrentUser(res.data.user);
                    this.sessionService.startSessionMonitoring();
                }
            }));
        }
        /**
         * Logout the current user
         */
        logout() {
            this.tokenService.clearTokens();
            this.sessionService.clearSession();
            this.currentUser$.next(null);
            this.isAuthenticated$.next(false);
            localStorage.removeItem(AUTH_CONSTANTS.USER_KEY);
            this.router.navigate([AUTH_CONSTANTS.LOGIN_ROUTE]);
        }
        /**
         * Request OTP for forgot password
         */
        forgotPassword(request) {
            const users = this.getMockUsers();
            const cleanedPhone = request.phone_number.replace(/[\s-]/g, '');
            const user = users.find(u => u.phone_number.replace(/[\s-]/g, '') === cleanedPhone);
            if (!user) {
                return throwError(() => ({
                    status: 404,
                    error: { message: "Ce numéro de téléphone n'est pas associé à un compte." }
                })).pipe(delay(1000));
            }
            const response = {
                success: true,
                message: AUTH_CONSTANTS.MESSAGES.OTP_SENT,
                data: {
                    otp_sent: true,
                    expires_in: 300,
                    phone_number: user.phone_number
                }
            };
            return of(response).pipe(delay(1000));
        }
        /**
         * Reset PIN with OTP verification
         */
        resetPassword(request) {
            const users = this.getMockUsers();
            const cleanedPhone = request.phone_number.replace(/[\s-]/g, '');
            const userIndex = users.findIndex(u => u.phone_number.replace(/[\s-]/g, '') === cleanedPhone);
            if (userIndex === -1) {
                return throwError(() => ({
                    status: 404,
                    error: { message: 'Utilisateur introuvable.' }
                })).pipe(delay(1000));
            }
            if (request.otp_code.length !== 6) {
                return throwError(() => ({
                    status: 400,
                    error: { message: AUTH_CONSTANTS.MESSAGES.OTP_INVALID }
                })).pipe(delay(800));
            }
            // Update PIN
            const targetUser = users[userIndex];
            if (targetUser) {
                targetUser.pin = request.new_pin;
                targetUser.updated_at = new Date().toISOString();
            }
            this.saveMockUsers(users);
            const response = {
                success: true,
                message: AUTH_CONSTANTS.MESSAGES.PASSWORD_RESET_SUCCESS
            };
            return of(response).pipe(delay(1000));
        }
        /**
         * Refresh the access token
         */
        refreshToken() {
            const storedUser = this.getCurrentUser();
            if (!storedUser) {
                return throwError(() => new Error('No user logged in'));
            }
            const mockTokens = {
                access_token: 'mock-jwt-access-token-' + Math.random().toString(36).substring(2),
                refresh_token: 'mock-jwt-refresh-token-' + Math.random().toString(36).substring(2),
                expires_in: 3600,
                token_type: 'Bearer'
            };
            return of({
                success: true,
                message: 'Token refreshed',
                data: {
                    user: storedUser,
                    tokens: mockTokens
                }
            }).pipe(delay(500), tap(response => {
                if (response.success && response.data) {
                    this.tokenService.setTokens(response.data.tokens);
                }
            }));
        }
        // ─── User Management (SystemAdmin only) ────────────────────
        /**
         * Get all users (Admin + SystemAdmin)
         */
        getUsers() {
            const users = this.getMockUsers().map(({ pin, ...user }) => user);
            return of(users).pipe(delay(600));
        }
        /**
         * Get a specific user by ID
         */
        getUserById(userId) {
            const users = this.getMockUsers();
            const user = users.find(u => u.user_id === userId);
            if (!user) {
                return throwError(() => new Error('Utilisateur non trouvé')).pipe(delay(500));
            }
            const { pin, ...userWithoutPin } = user;
            return of(userWithoutPin).pipe(delay(500));
        }
        /**
         * Create a new user (SystemAdmin only)
         */
        createUser(userData) {
            const users = this.getMockUsers();
            // Check if phone number already exists
            const cleanedPhone = userData.phone_number.replace(/[\s-]/g, '');
            if (users.some(u => u.phone_number.replace(/[\s-]/g, '') === cleanedPhone)) {
                return throwError(() => ({
                    status: 400,
                    error: { message: 'Un utilisateur avec ce numéro de téléphone existe déjà.' }
                })).pipe(delay(600));
            }
            const role = MOCK_ROLES.find(r => r.role_id === userData.role_id) || MOCK_ROLES[1];
            const newUser = {
                user_id: 'user-' + Math.random().toString(36).substring(2, 11),
                first_name: userData.first_name,
                last_name: userData.last_name,
                phone_number: userData.phone_number,
                email: userData.email,
                cni_number: userData.cni_number,
                photo_url: userData.photo_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
                role_id: userData.role_id,
                role: role,
                status: userData.status || 'ACTIVE',
                permissions: role?.name === Role.SYSTEM_ADMIN ? Object.values(Permission) : [Permission.USER_READ, Permission.DASHBOARD_VIEW],
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                created_by: this.getCurrentUser()?.user_id || 'user-sysadmin-1',
                pin: '1234' // Default PIN for new users
            };
            users.push(newUser);
            this.saveMockUsers(users);
            const { pin, ...userWithoutPin } = newUser;
            return of(userWithoutPin).pipe(delay(800));
        }
        /**
         * Update an existing user
         */
        updateUser(userId, userData) {
            const users = this.getMockUsers();
            const idx = users.findIndex(u => u.user_id === userId);
            if (idx === -1) {
                return throwError(() => new Error('Utilisateur non trouvé')).pipe(delay(500));
            }
            const updatedUser = {
                ...users[idx],
                ...userData,
                updated_at: new Date().toISOString()
            };
            if (userData.role_id) {
                const role = MOCK_ROLES.find(r => r.role_id === userData.role_id);
                if (role) {
                    updatedUser.role = role;
                    updatedUser.permissions = role.name === Role.SYSTEM_ADMIN ? Object.values(Permission) : [Permission.USER_READ, Permission.DASHBOARD_VIEW];
                }
            }
            users[idx] = updatedUser;
            this.saveMockUsers(users);
            const { pin, ...userWithoutPin } = updatedUser;
            return of(userWithoutPin).pipe(delay(800));
        }
        /**
         * Change user status (activate, suspend, freeze, close)
         */
        changeUserStatus(userId, status) {
            return this.updateUser(userId, { status: status });
        }
        /**
         * Delete a user
         */
        deleteUser(userId) {
            const users = this.getMockUsers();
            const filtered = users.filter(u => u.user_id !== userId);
            if (filtered.length === users.length) {
                return throwError(() => new Error('Utilisateur non trouvé')).pipe(delay(500));
            }
            this.saveMockUsers(filtered);
            return of(undefined).pipe(delay(800));
        }
        // ─── State Accessors ───────────────────────────────────────
        getCurrentUser() {
            return this.currentUser$.value;
        }
        isAuthenticated() {
            return this.isAuthenticated$.value;
        }
        getUserRole() {
            const user = this.getCurrentUser();
            return user?.role?.name || '';
        }
        getUserPermissions() {
            const user = this.getCurrentUser();
            return user?.permissions || [];
        }
        isSystemAdmin() {
            return this.getUserRole() === Role.SYSTEM_ADMIN;
        }
        isAdmin() {
            return this.getUserRole() === Role.ADMIN;
        }
        hasPermission(permission) {
            return this.getUserPermissions().includes(permission);
        }
        hasAnyPermission(permissions) {
            const userPermissions = this.getUserPermissions();
            return permissions.some(p => userPermissions.includes(p));
        }
        hasAllPermissions(permissions) {
            const userPermissions = this.getUserPermissions();
            return permissions.every(p => userPermissions.includes(p));
        }
        // ─── Private Helpers ───────────────────────────────────────
        initializeAuth() {
            if (this.tokenService.hasTokens()) {
                const storedUser = this.getStoredUser();
                if (storedUser) {
                    this.currentUser$.next(storedUser);
                    this.isAuthenticated$.next(true);
                    this.sessionService.startSessionMonitoring();
                }
            }
        }
        setCurrentUser(user) {
            this.currentUser$.next(user);
            this.isAuthenticated$.next(true);
            localStorage.setItem(AUTH_CONSTANTS.USER_KEY, JSON.stringify(user));
        }
        getStoredUser() {
            const data = localStorage.getItem(AUTH_CONSTANTS.USER_KEY);
            if (!data)
                return null;
            try {
                return JSON.parse(data);
            }
            catch {
                return null;
            }
        }
    };
    __setFunctionName(_classThis, "AuthService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthService = _classThis;
})();
export { AuthService };
//# sourceMappingURL=auth.service.js.map