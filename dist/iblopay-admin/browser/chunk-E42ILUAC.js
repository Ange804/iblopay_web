import {
  BehaviorSubject,
  HttpClient,
  NgZone,
  Router,
  Subject,
  __objRest,
  __spreadProps,
  __spreadValues,
  delay,
  of,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-6UEC5R44.js";

// src/app/modules/auth/auth.constants.ts
var AUTH_CONSTANTS = {
  // Storage keys
  ACCESS_TOKEN_KEY: "iblopay_access_token",
  REFRESH_TOKEN_KEY: "iblopay_refresh_token",
  USER_KEY: "iblopay_current_user",
  SESSION_KEY: "iblopay_session",
  // Token settings
  TOKEN_REFRESH_THRESHOLD: 300,
  // seconds before expiry to trigger refresh (5 min)
  // OTP settings
  OTP_LENGTH: 6,
  OTP_RESEND_COOLDOWN: 60,
  // seconds
  OTP_EXPIRY: 300,
  // seconds (5 min)
  // PIN settings
  PIN_LENGTH: 4,
  PIN_MIN_LENGTH: 4,
  PIN_MAX_LENGTH: 6,
  // Session settings
  SESSION_TIMEOUT: 1800,
  // seconds (30 min)
  SESSION_CHECK_INTERVAL: 60,
  // seconds
  // Phone validation
  PHONE_PATTERN: /^\+?[0-9]{9,15}$/,
  PHONE_PREFIX: "+237",
  // Routes
  LOGIN_ROUTE: "/auth/login",
  DASHBOARD_ROUTE: "/dashboard",
  FORGOT_PASSWORD_ROUTE: "/auth/forgot-password",
  RESET_PASSWORD_ROUTE: "/auth/reset-password",
  TWO_FACTOR_ROUTE: "/auth/2fa",
  // Messages
  MESSAGES: {
    LOGIN_SUCCESS: "Connexion r\xE9ussie",
    LOGIN_FAILED: "Num\xE9ro de t\xE9l\xE9phone ou PIN incorrect",
    LOGOUT_SUCCESS: "D\xE9connexion r\xE9ussie",
    SESSION_EXPIRED: "Votre session a expir\xE9. Veuillez vous reconnecter.",
    OTP_SENT: "Le code OTP a \xE9t\xE9 envoy\xE9 \xE0 votre num\xE9ro de t\xE9l\xE9phone",
    OTP_INVALID: "Code OTP invalide ou expir\xE9",
    OTP_RESENT: "Code OTP renvoy\xE9 avec succ\xE8s",
    PASSWORD_RESET_SUCCESS: "Votre PIN a \xE9t\xE9 r\xE9initialis\xE9 avec succ\xE8s",
    UNAUTHORIZED: "Vous n'avez pas acc\xE8s \xE0 cette ressource",
    NETWORK_ERROR: "Erreur de connexion. Veuillez r\xE9essayer.",
    USER_CREATED: "Utilisateur cr\xE9\xE9 avec succ\xE8s",
    USER_UPDATED: "Utilisateur mis \xE0 jour avec succ\xE8s",
    USER_SUSPENDED: "Utilisateur suspendu",
    USER_ACTIVATED: "Utilisateur activ\xE9"
  }
};

// src/app/modules/auth/enums/role.enum.ts
var Role;
(function(Role2) {
  Role2["SYSTEM_ADMIN"] = "SYSTEM_ADMIN";
  Role2["ADMIN"] = "ADMIN";
})(Role || (Role = {}));
var RoleLabels = {
  [Role.SYSTEM_ADMIN]: "System Administrator",
  [Role.ADMIN]: "Administrator"
};

// src/app/modules/auth/enums/permission.enum.ts
var Permission;
(function(Permission2) {
  Permission2["USER_CREATE"] = "USER_CREATE";
  Permission2["USER_READ"] = "USER_READ";
  Permission2["USER_UPDATE"] = "USER_UPDATE";
  Permission2["USER_DELETE"] = "USER_DELETE";
  Permission2["USER_SUSPEND"] = "USER_SUSPEND";
  Permission2["USER_ACTIVATE"] = "USER_ACTIVATE";
  Permission2["ROLE_CREATE"] = "ROLE_CREATE";
  Permission2["ROLE_READ"] = "ROLE_READ";
  Permission2["ROLE_UPDATE"] = "ROLE_UPDATE";
  Permission2["ROLE_DELETE"] = "ROLE_DELETE";
  Permission2["ROLE_ASSIGN"] = "ROLE_ASSIGN";
  Permission2["PERMISSION_READ"] = "PERMISSION_READ";
  Permission2["PERMISSION_ASSIGN"] = "PERMISSION_ASSIGN";
  Permission2["PERMISSION_REVOKE"] = "PERMISSION_REVOKE";
  Permission2["DASHBOARD_VIEW"] = "DASHBOARD_VIEW";
  Permission2["SYSTEM_SETTINGS"] = "SYSTEM_SETTINGS";
  Permission2["AUDIT_LOG_VIEW"] = "AUDIT_LOG_VIEW";
})(Permission || (Permission = {}));
var PermissionLabels = {
  [Permission.USER_CREATE]: "Create Users",
  [Permission.USER_READ]: "View Users",
  [Permission.USER_UPDATE]: "Update Users",
  [Permission.USER_DELETE]: "Delete Users",
  [Permission.USER_SUSPEND]: "Suspend Users",
  [Permission.USER_ACTIVATE]: "Activate Users",
  [Permission.ROLE_CREATE]: "Create Roles",
  [Permission.ROLE_READ]: "View Roles",
  [Permission.ROLE_UPDATE]: "Update Roles",
  [Permission.ROLE_DELETE]: "Delete Roles",
  [Permission.ROLE_ASSIGN]: "Assign Roles",
  [Permission.PERMISSION_READ]: "View Permissions",
  [Permission.PERMISSION_ASSIGN]: "Assign Permissions",
  [Permission.PERMISSION_REVOKE]: "Revoke Permissions",
  [Permission.DASHBOARD_VIEW]: "View Dashboard",
  [Permission.SYSTEM_SETTINGS]: "System Settings",
  [Permission.AUDIT_LOG_VIEW]: "View Audit Logs"
};

// src/app/modules/auth/services/token.service.ts
var TokenService = class _TokenService {
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
        return false;
      const now = Math.floor(Date.now() / 1e3);
      return decoded.exp < now;
    } catch {
      return false;
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
      const now = Math.floor(Date.now() / 1e3);
      return decoded.exp - now < AUTH_CONSTANTS.TOKEN_REFRESH_THRESHOLD;
    } catch {
      return false;
    }
  }
  /**
   * Decode a JWT token without verification (client-side only)
   */
  decodeToken(token) {
    try {
      const parts = token.split(".");
      if (parts.length !== 3)
        return null;
      const payload = parts[1];
      if (!payload)
        return null;
      const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
      return JSON.parse(decoded);
    } catch {
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
  static {
    this.\u0275fac = function TokenService_Factory(t) {
      return new (t || _TokenService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/auth/services/session.service.ts
var SessionService = class _SessionService {
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
    return this.getRemainingTime() > 0;
  }
  /**
   * Get remaining session time in seconds
   */
  getRemainingTime() {
    const elapsed = (Date.now() - this.lastActivity) / 1e3;
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
    } catch {
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
    const events = ["mousedown", "keydown", "scroll", "touchstart"];
    events.forEach((event) => {
      document.addEventListener(event, this.onActivity);
    });
  }
  removeActivityListeners() {
    const events = ["mousedown", "keydown", "scroll", "touchstart"];
    events.forEach((event) => {
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
      }, AUTH_CONSTANTS.SESSION_CHECK_INTERVAL * 1e3);
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
      queryParams: { expired: "true" }
    });
  }
  static {
    this.\u0275fac = function SessionService_Factory(t) {
      return new (t || _SessionService)(\u0275\u0275inject(TokenService), \u0275\u0275inject(Router), \u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionService, factory: _SessionService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/auth/services/auth.service.ts
var MOCK_ROLES = [
  {
    role_id: "role-sys-admin",
    name: Role.SYSTEM_ADMIN,
    description: "System Administrator with full access",
    is_default: false,
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    role_id: "role-admin",
    name: Role.ADMIN,
    description: "Administrator with management access",
    is_default: true,
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  }
];
var AuthService = class _AuthService {
  constructor(http, router, tokenService, sessionService) {
    this.http = http;
    this.router = router;
    this.tokenService = tokenService;
    this.sessionService = sessionService;
    this.currentUser$ = new BehaviorSubject(null);
    this.isAuthenticated$ = new BehaviorSubject(false);
    this.user$ = this.currentUser$.asObservable();
    this.authenticated$ = this.isAuthenticated$.asObservable();
    this.storageKey = "iblopay_mock_users";
    this.initMockUsers();
    this.initializeAuth();
  }
  // ─── Mock Database Initialization ────────────────────────
  initMockUsers() {
    if (!localStorage.getItem(this.storageKey)) {
      const defaultUsers = [
        {
          user_id: "user-sysadmin-1",
          first_name: "System",
          last_name: "Admin",
          phone_number: "+237600000000",
          email: "system.admin@iblopay.com",
          cni_number: "1234567890",
          photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
          role_id: "role-sys-admin",
          role: MOCK_ROLES[0],
          status: "ACTIVE",
          permissions: Object.values(Permission),
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString(),
          pin: "1111"
        },
        {
          user_id: "user-admin-2",
          first_name: "Normal",
          last_name: "Admin",
          phone_number: "+237611111111",
          email: "admin@iblopay.com",
          cni_number: "0987654321",
          photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
          role_id: "role-admin",
          role: MOCK_ROLES[1],
          status: "ACTIVE",
          permissions: [
            Permission.USER_READ,
            Permission.DASHBOARD_VIEW
          ],
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString(),
          pin: "2222"
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
    const cleanedPhone = credentials.phone_number.replace(/[\s-]/g, "");
    const user = users.find((u) => u.phone_number.replace(/[\s-]/g, "") === cleanedPhone && u.pin === credentials.pin);
    if (!user) {
      return throwError(() => ({
        status: 401,
        error: { message: AUTH_CONSTANTS.MESSAGES.LOGIN_FAILED }
      })).pipe(delay(800));
    }
    if (user.status !== "ACTIVE") {
      return throwError(() => ({
        status: 403,
        error: { message: `Votre compte est actuellement ${user.status}.` }
      })).pipe(delay(800));
    }
    return throwError(() => ({
      status: 403,
      error: { requires_2fa: true }
    })).pipe(delay(1e3));
  }
  /**
   * Verify two-factor authentication OTP
   */
  verifyTwoFactor(request) {
    const users = this.getMockUsers();
    const cleanedPhone = request.phone_number.replace(/[\s-]/g, "");
    const user = users.find((u) => u.phone_number.replace(/[\s-]/g, "") === cleanedPhone);
    if (!user) {
      return throwError(() => ({
        status: 404,
        error: { message: "Utilisateur introuvable." }
      })).pipe(delay(800));
    }
    if (request.otp_code.length !== 6) {
      return throwError(() => ({
        status: 400,
        error: { message: AUTH_CONSTANTS.MESSAGES.OTP_INVALID }
      })).pipe(delay(800));
    }
    const mockTokens = {
      access_token: "mock-jwt-access-token-" + Math.random().toString(36).substring(2),
      refresh_token: "mock-jwt-refresh-token-" + Math.random().toString(36).substring(2),
      expires_in: 3600,
      token_type: "Bearer"
    };
    const response = {
      success: true,
      message: AUTH_CONSTANTS.MESSAGES.LOGIN_SUCCESS,
      data: {
        user,
        tokens: mockTokens
      }
    };
    return of(response).pipe(delay(1e3), tap((res) => {
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
    const cleanedPhone = request.phone_number.replace(/[\s-]/g, "");
    const user = users.find((u) => u.phone_number.replace(/[\s-]/g, "") === cleanedPhone);
    if (!user) {
      return throwError(() => ({
        status: 404,
        error: { message: "Ce num\xE9ro de t\xE9l\xE9phone n'est pas associ\xE9 \xE0 un compte." }
      })).pipe(delay(1e3));
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
    return of(response).pipe(delay(1e3));
  }
  /**
   * Reset PIN with OTP verification
   */
  resetPassword(request) {
    const users = this.getMockUsers();
    const cleanedPhone = request.phone_number.replace(/[\s-]/g, "");
    const userIndex = users.findIndex((u) => u.phone_number.replace(/[\s-]/g, "") === cleanedPhone);
    if (userIndex === -1) {
      return throwError(() => ({
        status: 404,
        error: { message: "Utilisateur introuvable." }
      })).pipe(delay(1e3));
    }
    if (request.otp_code.length !== 6) {
      return throwError(() => ({
        status: 400,
        error: { message: AUTH_CONSTANTS.MESSAGES.OTP_INVALID }
      })).pipe(delay(800));
    }
    const targetUser = users[userIndex];
    if (targetUser) {
      targetUser.pin = request.new_pin;
      targetUser.updated_at = (/* @__PURE__ */ new Date()).toISOString();
    }
    this.saveMockUsers(users);
    const response = {
      success: true,
      message: AUTH_CONSTANTS.MESSAGES.PASSWORD_RESET_SUCCESS
    };
    return of(response).pipe(delay(1e3));
  }
  /**
   * Refresh the access token
   */
  refreshToken() {
    const storedUser = this.getCurrentUser();
    if (!storedUser) {
      return throwError(() => new Error("No user logged in"));
    }
    const mockTokens = {
      access_token: "mock-jwt-access-token-" + Math.random().toString(36).substring(2),
      refresh_token: "mock-jwt-refresh-token-" + Math.random().toString(36).substring(2),
      expires_in: 3600,
      token_type: "Bearer"
    };
    return of({
      success: true,
      message: "Token refreshed",
      data: {
        user: storedUser,
        tokens: mockTokens
      }
    }).pipe(delay(500), tap((response) => {
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
    const users = this.getMockUsers().map((_a) => {
      var _b = _a, { pin } = _b, user = __objRest(_b, ["pin"]);
      return user;
    });
    return of(users).pipe(delay(600));
  }
  /**
   * Get a specific user by ID
   */
  getUserById(userId) {
    const users = this.getMockUsers();
    const user = users.find((u) => u.user_id === userId);
    if (!user) {
      return throwError(() => new Error("Utilisateur non trouv\xE9")).pipe(delay(500));
    }
    const _a = user, { pin } = _a, userWithoutPin = __objRest(_a, ["pin"]);
    return of(userWithoutPin).pipe(delay(500));
  }
  /**
   * Create a new user (SystemAdmin only)
   */
  createUser(userData) {
    const users = this.getMockUsers();
    const cleanedPhone = userData.phone_number.replace(/[\s-]/g, "");
    if (users.some((u) => u.phone_number.replace(/[\s-]/g, "") === cleanedPhone)) {
      return throwError(() => ({
        status: 400,
        error: { message: "Un utilisateur avec ce num\xE9ro de t\xE9l\xE9phone existe d\xE9j\xE0." }
      })).pipe(delay(600));
    }
    const role = MOCK_ROLES.find((r) => r.role_id === userData.role_id) || MOCK_ROLES[1];
    const newUser = {
      user_id: "user-" + Math.random().toString(36).substring(2, 11),
      first_name: userData.first_name,
      last_name: userData.last_name,
      phone_number: userData.phone_number,
      email: userData.email,
      cni_number: userData.cni_number,
      photo_url: userData.photo_url || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      role_id: userData.role_id,
      role,
      status: userData.status || "ACTIVE",
      permissions: role?.name === Role.SYSTEM_ADMIN ? Object.values(Permission) : [Permission.USER_READ, Permission.DASHBOARD_VIEW],
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      updated_at: (/* @__PURE__ */ new Date()).toISOString(),
      created_by: this.getCurrentUser()?.user_id || "user-sysadmin-1",
      pin: "1234"
      // Default PIN for new users
    };
    users.push(newUser);
    this.saveMockUsers(users);
    const _a = newUser, { pin } = _a, userWithoutPin = __objRest(_a, ["pin"]);
    return of(userWithoutPin).pipe(delay(800));
  }
  /**
   * Update an existing user
   */
  updateUser(userId, userData) {
    const users = this.getMockUsers();
    const idx = users.findIndex((u) => u.user_id === userId);
    if (idx === -1) {
      return throwError(() => new Error("Utilisateur non trouv\xE9")).pipe(delay(500));
    }
    const updatedUser = __spreadProps(__spreadValues(__spreadValues({}, users[idx]), userData), {
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    if (userData.role_id) {
      const role = MOCK_ROLES.find((r) => r.role_id === userData.role_id);
      if (role) {
        updatedUser.role = role;
        updatedUser.permissions = role.name === Role.SYSTEM_ADMIN ? Object.values(Permission) : [Permission.USER_READ, Permission.DASHBOARD_VIEW];
      }
    }
    users[idx] = updatedUser;
    this.saveMockUsers(users);
    const _a = updatedUser, { pin } = _a, userWithoutPin = __objRest(_a, ["pin"]);
    return of(userWithoutPin).pipe(delay(800));
  }
  /**
   * Change user status (activate, suspend, freeze, close)
   */
  changeUserStatus(userId, status) {
    return this.updateUser(userId, { status });
  }
  /**
   * Delete a user
   */
  deleteUser(userId) {
    const users = this.getMockUsers();
    const filtered = users.filter((u) => u.user_id !== userId);
    if (filtered.length === users.length) {
      return throwError(() => new Error("Utilisateur non trouv\xE9")).pipe(delay(500));
    }
    this.saveMockUsers(filtered);
    return of(void 0).pipe(delay(800));
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
    return user?.role?.name || "";
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
    return permissions.some((p) => userPermissions.includes(p));
  }
  hasAllPermissions(permissions) {
    const userPermissions = this.getUserPermissions();
    return permissions.every((p) => userPermissions.includes(p));
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
    } catch {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(TokenService), \u0275\u0275inject(SessionService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AUTH_CONSTANTS,
  TokenService,
  AuthService
};
//# sourceMappingURL=chunk-E42ILUAC.js.map
