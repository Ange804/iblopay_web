import {
  AUTH_CONSTANTS,
  AuthService,
  TokenService
} from "./chunk-E42ILUAC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VBNNW23C.js";
import {
  ActivatedRoute,
  AsyncPipe,
  BehaviorSubject,
  BrowserModule,
  CommonModule,
  DatePipe,
  ElementRef,
  HttpClientModule,
  NavigationEnd,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Subject,
  __spreadProps,
  __spreadValues,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  interval,
  map,
  of,
  platformBrowser,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UEC5R44.js";

// src/app/modules/auth/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(authService, tokenService, router) {
    this.authService = authService;
    this.tokenService = tokenService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAuthenticated() && !this.tokenService.isTokenExpired()) {
      return true;
    }
    this.authService.logout();
    return this.router.createUrlTree([AUTH_CONSTANTS.LOGIN_ROUTE]);
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(t) {
      return new (t || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(TokenService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/auth/guards/no-auth.guard.ts
var NoAuthGuard = class _NoAuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return this.router.createUrlTree([AUTH_CONSTANTS.DASHBOARD_ROUTE]);
    }
    return true;
  }
  static {
    this.\u0275fac = function NoAuthGuard_Factory(t) {
      return new (t || _NoAuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NoAuthGuard, factory: _NoAuthGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/search.service.ts
var SearchService = class _SearchService {
  constructor() {
    this.providers = /* @__PURE__ */ new Map();
    this.queryInput$ = new Subject();
    this.resultsSubject = new BehaviorSubject([]);
    this.loadingSubject = new BehaviorSubject(false);
    this.results$ = this.resultsSubject.asObservable();
    this.loading$ = this.loadingSubject.asObservable();
    this.queryInput$.pipe(debounceTime(250), distinctUntilChanged((a, b) => a.moduleKey === b.moduleKey && a.query === b.query), switchMap(({ moduleKey, query }) => {
      if (!query || !query.trim()) {
        return of([]);
      }
      const provider = this.providers.get(moduleKey);
      this.loadingSubject.next(true);
      if (!provider) {
        this.loadingSubject.next(false);
        return of([]);
      }
      return provider(query.trim()).pipe(catchError(() => of([])));
    })).subscribe((results) => {
      this.loadingSubject.next(false);
      this.resultsSubject.next(results);
    });
  }
  /** Un module s'enregistre une seule fois (idempotent : remplace si déjà présent). */
  registerProvider(moduleKey, provider) {
    this.providers.set(moduleKey, provider);
  }
  unregisterProvider(moduleKey) {
    this.providers.delete(moduleKey);
  }
  hasProvider(moduleKey) {
    return this.providers.has(moduleKey);
  }
  /** Appelé par le header à chaque frappe dans le champ de recherche. */
  search(moduleKey, query) {
    this.queryInput$.next({ moduleKey, query });
  }
  clear() {
    this.resultsSubject.next([]);
  }
  static {
    this.\u0275fac = function SearchService_Factory(t) {
      return new (t || _SearchService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchService, factory: _SearchService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor() {
    this.notificationsSubject = new BehaviorSubject(this.seedDemoData());
    this.notifications$ = this.notificationsSubject.asObservable();
  }
  seedDemoData() {
    return [
      {
        id: "n1",
        module: "agents",
        title: "Nouvel agent \xE0 valider",
        message: "Un dossier de Super Agent est en attente d\u2019approbation.",
        date: new Date(Date.now() - 1e3 * 60 * 12),
        read: false,
        link: "/agents",
        icon: "fa-solid fa-user-tie"
      },
      {
        id: "n2",
        module: "transactions",
        title: "Transaction suspecte d\xE9tect\xE9e",
        message: "Une transaction d\xE9passe le seuil habituel pour la province Gitega.",
        date: new Date(Date.now() - 1e3 * 60 * 45),
        read: false,
        link: "/transactions",
        icon: "fa-solid fa-triangle-exclamation"
      },
      {
        id: "n3",
        module: "global",
        title: "Maintenance planifi\xE9e",
        message: "Une maintenance syst\xE8me est pr\xE9vue ce soir \xE0 23h00.",
        date: new Date(Date.now() - 1e3 * 60 * 60 * 3),
        read: true,
        icon: "fa-solid fa-server"
      }
    ];
  }
  /** Notifications pertinentes pour le module actif (module courant + 'global'). */
  getForModule(moduleKey) {
    return this.notifications$.pipe(map((list) => list.filter((n) => n.module === "global" || n.module === moduleKey).sort((a, b) => b.date.getTime() - a.date.getTime())));
  }
  unreadCountForModule(moduleKey) {
    return this.getForModule(moduleKey).pipe(map((list) => list.filter((n) => !n.read).length));
  }
  add(notification) {
    this.notificationsSubject.next([notification, ...this.notificationsSubject.value]);
  }
  markAsRead(id) {
    this.notificationsSubject.next(this.notificationsSubject.value.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { read: true }) : n));
  }
  markAllAsReadForModule(moduleKey) {
    this.notificationsSubject.next(this.notificationsSubject.value.map((n) => n.module === "global" || n.module === moduleKey ? __spreadProps(__spreadValues({}, n), { read: true }) : n));
  }
  static {
    this.\u0275fac = function NotificationService_Factory(t) {
      return new (t || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/layout/layout.component.ts
function LayoutComponent_li_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.badge);
  }
}
function LayoutComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 52)(1, "a", 53);
    \u0275\u0275listener("click", function LayoutComponent_li_15_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, LayoutComponent_li_15_span_5_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r3.link);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("nav-icon ", item_r3.icon, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.badge);
  }
}
function LayoutComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r1.moduleTitle, "");
  }
}
function LayoutComponent_div_46_ng_container_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.sublabel);
  }
}
function LayoutComponent_div_46_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 62);
    \u0275\u0275listener("click", function LayoutComponent_div_46_ng_container_1_a_1_Template_a_click_0_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectSearchResult(r_r5));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "div")(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, LayoutComponent_div_46_ng_container_1_a_1_span_5_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(r_r5.icon || "fa-solid fa-circle-dot");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r5.sublabel);
  }
}
function LayoutComponent_div_46_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1, " Aucun r\xE9sultat dans ce module. ");
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent_div_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LayoutComponent_div_46_ng_container_1_a_1_Template, 6, 4, "a", 60)(2, LayoutComponent_div_46_ng_container_1_div_2_Template, 2, 0, "div", 61);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const results_r6 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", results_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", results_r6.length === 0);
  }
}
function LayoutComponent_div_46_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1, "Aucun r\xE9sultat dans ce module.");
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, LayoutComponent_div_46_ng_container_1_Template, 3, 2, "ng-container", 59);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, LayoutComponent_div_46_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const searchEmpty_r7 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.searchResults$))("ngIfElse", searchEmpty_r7);
  }
}
function LayoutComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const count_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(count_r8);
  }
}
function LayoutComponent_div_52_ng_container_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 73);
    \u0275\u0275listener("click", function LayoutComponent_div_52_ng_container_6_a_1_Template_a_click_0_listener() {
      const n_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openNotification(n_r11));
    });
    \u0275\u0275elementStart(1, "div", 74);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 75)(4, "div", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 77);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 78);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r11 = ctx.$implicit;
    \u0275\u0275classProp("unread", !n_r11.read);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(n_r11.icon || "fa-solid fa-bell");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r11.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 7, n_r11.date, "short"));
  }
}
function LayoutComponent_div_52_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1, " Aucune notification pour ce module. ");
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent_div_52_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LayoutComponent_div_52_ng_container_6_a_1_Template, 11, 10, "a", 71)(2, LayoutComponent_div_52_ng_container_6_div_2_Template, 2, 0, "div", 72);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const notifs_r12 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", notifs_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notifs_r12.length === 0);
  }
}
function LayoutComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 69);
    \u0275\u0275listener("click", function LayoutComponent_div_52_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markAllNotificationsRead($event));
    });
    \u0275\u0275text(5, "Tout marquer comme lu");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LayoutComponent_div_52_ng_container_6_Template, 3, 2, "ng-container", 70);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 1, ctx_r1.notifications$));
  }
}
var LayoutComponent = class _LayoutComponent {
  get pageTitle() {
    return this.moduleTitle ? `${this.baseTitle} \u2014 ${this.moduleTitle}` : this.baseTitle;
  }
  constructor(authService, router, activatedRoute, searchService, notificationService, elementRef) {
    this.authService = authService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.searchService = searchService;
    this.notificationService = notificationService;
    this.elementRef = elementRef;
    this.currentDate = new Date(2026, 6, 15);
    this.currentTime = "";
    this.currentDay = "";
    this.isSidebarOpen = true;
    this.isDarkMode = true;
    this.baseTitle = "IBLOPAY \u2014 Administration";
    this.moduleTitle = null;
    this.currentModuleKey = null;
    this.searchQuery = "";
    this.isSearchOpen = false;
    this.searchResults$ = this.searchService.results$;
    this.isNotifOpen = false;
    this.notifications$ = this.notificationService.getForModule(null);
    this.unreadCount$ = this.notificationService.unreadCountForModule(null);
    this.menuItems = [
      { icon: "fa-solid fa-gauge", label: "Tableau de bord", link: "/dashboard" },
      { icon: "fa-solid fa-users", label: "Utilisateurs", link: "/users" },
      { icon: "fa-solid fa-money-bill-transfer", label: "Transactions", link: "/transactions" },
      { icon: "fa-solid fa-coins", label: "Commissions", link: "/commissions" },
      { icon: "fa-solid fa-credit-card", label: "Cartes", link: "/cards" },
      { icon: "fa-solid fa-building-columns", label: "Services publics", link: "/services-publics", badge: "12" },
      { icon: "fa-solid fa-user-tie", label: "Agents", link: "/agents" },
      { icon: "fa-solid fa-clock", label: "Demandes en attente", link: "/requests", badge: "7" },
      { icon: "fa-solid fa-chart-line", label: "Rapports", link: "/reports" },
      { icon: "fa-solid fa-gear", label: "Param\xE8tres", link: "/settings" }
    ];
  }
  ngOnInit() {
    this.initClock();
    this.loadTheme();
    this.updateRouteContext();
    this.routerSubscription = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.updateRouteContext());
  }
  ngOnDestroy() {
    if (this.clockSubscription) {
      this.clockSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  // ============================================================
  // ROUTE CONTEXT (titre + module courant)
  // ============================================================
  updateRouteContext() {
    let route = this.activatedRoute.root;
    let moduleKey = null;
    while (route.firstChild) {
      route = route.firstChild;
      const data = route.snapshot.data;
      if (data && data["module"]) {
        moduleKey = data["module"];
      }
    }
    const currentUrl = this.router.url?.split("?")[0] ?? "";
    let title = null;
    for (const item of this.menuItems) {
      if (currentUrl.startsWith(item.link)) {
        title = item.label;
        break;
      }
    }
    this.moduleTitle = title;
    this.currentModuleKey = moduleKey;
    this.searchQuery = "";
    this.searchService.clear();
    this.notifications$ = this.notificationService.getForModule(moduleKey);
    this.unreadCount$ = this.notificationService.unreadCountForModule(moduleKey);
  }
  // ============================================================
  // HORLOGE
  // ============================================================
  initClock() {
    this.updateClock();
    this.clockSubscription = interval(1e3).subscribe(() => {
      this.updateClock();
    });
  }
  updateClock() {
    const now = /* @__PURE__ */ new Date();
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "F\xE9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xFBt", "Septembre", "Octobre", "Novembre", "D\xE9cembre"];
    this.currentDay = `${days[this.currentDate.getDay()]} ${this.currentDate.getDate()} ${months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
    this.currentTime = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }
  // ============================================================
  // SIDEBAR
  // ============================================================
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  closeSidebar() {
    this.isSidebarOpen = false;
  }
  onResize(event) {
    const width = event.target.innerWidth;
    if (width <= 900) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }
  get menuToggleIcon() {
    return this.isSidebarOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  }
  // ============================================================
  // THEME (partagé par tous les modules via body.light-mode)
  // ============================================================
  get themeToggleIcon() {
    return this.isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle("light-mode", !this.isDarkMode);
    localStorage.setItem("iblopay_theme", this.isDarkMode ? "dark" : "light");
  }
  loadTheme() {
    const savedTheme = localStorage.getItem("iblopay_theme");
    if (savedTheme === "light") {
      this.isDarkMode = false;
      document.body.classList.add("light-mode");
    } else {
      this.isDarkMode = true;
      document.body.classList.remove("light-mode");
    }
  }
  // ============================================================
  // RECHERCHE
  // ============================================================
  onSearchInput() {
    this.isSearchOpen = true;
    this.searchService.search(this.currentModuleKey || "global", this.searchQuery);
  }
  onSearchFocus() {
    this.isSearchOpen = true;
  }
  selectSearchResult(result) {
    this.isSearchOpen = false;
    this.searchQuery = "";
    this.searchService.clear();
    this.router.navigate(Array.isArray(result.link) ? result.link : [result.link]);
  }
  // ============================================================
  // NOTIFICATIONS
  // ============================================================
  toggleNotifications() {
    this.isNotifOpen = !this.isNotifOpen;
    this.isSearchOpen = false;
  }
  openNotification(notification) {
    this.notificationService.markAsRead(notification.id);
    this.isNotifOpen = false;
    if (notification.link) {
      const link = Array.isArray(notification.link) ? notification.link : [notification.link];
      this.router.navigate(link);
    }
  }
  markAllNotificationsRead(event) {
    event.stopPropagation();
    this.notificationService.markAllAsReadForModule(this.currentModuleKey);
  }
  // Ferme les dropdowns (recherche / notifications) au clic extérieur
  handleDocumentClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      return;
    }
    const target = event.target;
    if (!target.closest(".search-box")) {
      this.isSearchOpen = false;
    }
    if (!target.closest(".icon-btn-wrap")) {
      this.isNotifOpen = false;
    }
  }
  handleKeyboardEvent(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      const searchInput = document.querySelector(".search-input");
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
        this.isSearchOpen = true;
      }
    }
    if (event.key === "Escape") {
      this.isSearchOpen = false;
      this.isNotifOpen = false;
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SearchService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function LayoutComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow)("click", function LayoutComponent_click_HostBindingHandler($event) {
          return ctx.handleDocumentClick($event);
        }, false, \u0275\u0275resolveDocument)("keydown", function LayoutComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyboardEvent($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 75, vars: 22, consts: [["searchEmpty", ""], [1, "layout-container"], [1, "overlay", 3, "click"], [1, "sidebar"], [1, "sidebar-logo"], [1, "sun-arc", 2, "right", "auto", "left", "-40px", "top", "-40px"], [1, "logo-icon"], [1, "logo-text"], [1, "logo-text-main"], [1, "logo-text-sub"], [1, "sidebar-section-label"], [1, "nav-list"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "logout-card"], [1, "logout-content", 3, "click"], [1, "logout-icon-wrapper"], [1, "fa-solid", "fa-sign-out-alt"], [1, "logout-info"], [1, "logout-title"], [1, "logout-sub"], [1, "logout-btn", 3, "click"], [1, "main-content"], [1, "topbar"], [1, "sun-arc"], [1, "topbar-left"], ["title", "Afficher/masquer le menu", 1, "menu-toggle", 3, "click"], [1, "topbar-logo"], [1, "topbar-title"], ["class", "topbar-title-module", 4, "ngIf"], [1, "topbar-right"], [1, "search-box"], [1, "fa-solid", "fa-search", "search-icon"], ["type", "text", "placeholder", "Rechercher (Ctrl + K)", 1, "search-input", 3, "ngModelChange", "input", "focus", "ngModel"], ["class", "search-results", 4, "ngIf"], [1, "icon-btn-wrap"], ["title", "Notifications", 1, "icon-btn", 3, "click"], [1, "fa-solid", "fa-bell"], ["class", "notif-dot", 4, "ngIf"], ["class", "notif-panel", 4, "ngIf"], [1, "lang-select"], [1, "fa-solid", "fa-globe"], [1, "fa-solid", "fa-chevron-down"], ["title", "Changer de th\xE8me", 1, "theme-toggle", 3, "click"], [1, "profile-box"], [1, "profile-avatar"], [1, "profile-info"], [1, "profile-name"], [1, "profile-role"], [1, "content"], [1, "footer"], [1, "fa-solid", "fa-flag"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink"], [1, "nav-label"], ["class", "nav-badge", 4, "ngIf"], [1, "nav-badge"], [1, "topbar-title-module"], [1, "search-results"], [4, "ngIf", "ngIfElse"], ["class", "search-result-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "search-results-empty", 4, "ngIf"], [1, "search-result-item", 3, "click"], ["class", "search-result-sub", 4, "ngIf"], [1, "search-result-sub"], [1, "search-results-empty"], [1, "notif-dot"], [1, "notif-panel"], [1, "notif-panel-header"], [1, "notif-panel-mark-all", 3, "click"], [4, "ngIf"], ["class", "notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "notif-empty", 4, "ngIf"], [1, "notif-item", 3, "click"], [1, "notif-icon"], [1, "notif-body"], [1, "notif-title"], [1, "notif-message"], [1, "notif-time"], [1, "notif-empty"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275listener("click", function LayoutComponent_Template_div_click_1_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "aside", 3)(3, "div", 4);
        \u0275\u0275element(4, "div", 5);
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275text(6, "IB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
        \u0275\u0275text(9, "IBLOPAY");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275text(11, "Super Admin Dashboard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275text(13, "Menu principal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "ul", 11);
        \u0275\u0275template(15, LayoutComponent_li_15_Template, 6, 6, "li", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15);
        \u0275\u0275listener("click", function LayoutComponent_Template_div_click_18_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(19, "div", 16);
        \u0275\u0275element(20, "i", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 18)(22, "div", 19);
        \u0275\u0275text(23, "D\xE9connexion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 20);
        \u0275\u0275text(25, "Quitter la session");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "button", 21);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_26_listener() {
          return ctx.logout();
        });
        \u0275\u0275element(27, "i", 17);
        \u0275\u0275text(28, " Se d\xE9connecter");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "div", 22)(30, "header", 23);
        \u0275\u0275element(31, "div", 24);
        \u0275\u0275elementStart(32, "div", 25)(33, "button", 26);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_33_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275element(34, "i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 27);
        \u0275\u0275text(36, "IBLOPAY");
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38, ".");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 28);
        \u0275\u0275text(40, " IBLOPAY \u2014 Administration");
        \u0275\u0275template(41, LayoutComponent_span_41_Template, 2, 1, "span", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 30)(43, "div", 31);
        \u0275\u0275element(44, "i", 32);
        \u0275\u0275elementStart(45, "input", 33);
        \u0275\u0275twoWayListener("ngModelChange", function LayoutComponent_Template_input_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function LayoutComponent_Template_input_input_45_listener() {
          return ctx.onSearchInput();
        })("focus", function LayoutComponent_Template_input_focus_45_listener() {
          return ctx.onSearchFocus();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, LayoutComponent_div_46_Template, 5, 4, "div", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 35)(48, "button", 36);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_48_listener() {
          return ctx.toggleNotifications();
        });
        \u0275\u0275element(49, "i", 37);
        \u0275\u0275template(50, LayoutComponent_span_50_Template, 2, 1, "span", 38);
        \u0275\u0275pipe(51, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(52, LayoutComponent_div_52_Template, 8, 3, "div", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 40);
        \u0275\u0275element(54, "i", 41);
        \u0275\u0275text(55, " FR ");
        \u0275\u0275element(56, "i", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 43);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_57_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275element(58, "i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 44)(60, "div", 45);
        \u0275\u0275text(61, "SA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 46)(63, "div", 47);
        \u0275\u0275text(64, "Super Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 48);
        \u0275\u0275text(66, "Administrateur Principal");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(67, "div", 49);
        \u0275\u0275element(68, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "footer", 50)(70, "div");
        \u0275\u0275text(71, "\xA9 2026 IBLOPAY \u2014 Tous droits r\xE9serv\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div");
        \u0275\u0275text(73, "Plateforme de paiement et services num\xE9riques du Burundi ");
        \u0275\u0275element(74, "i", 51);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("show", ctx.isSidebarOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.isSidebarOpen);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.menuItems);
        \u0275\u0275advance(14);
        \u0275\u0275classProp("sidebar-open", ctx.isSidebarOpen);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.isSidebarOpen);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.menuToggleIcon);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.moduleTitle);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSearchOpen && ctx.searchQuery.trim().length > 0);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.isNotifOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(51, 20, ctx.unreadCount$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isNotifOpen);
        \u0275\u0275advance(6);
        \u0275\u0275classMap(ctx.themeToggleIcon);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.layout-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: transparent;\n  color: var(--text);\n}\n.overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: var(--overlay-bg);\n  z-index: 40;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.overlay.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 272px;\n  flex-shrink: 0;\n  background: var(--surface);\n  border-right: 1px solid var(--border-soft);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  z-index: 50;\n  transform: translateX(-100%);\n  transition:\n    transform 0.28s ease,\n    background-color 0.2s ease,\n    border-color 0.2s ease;\n  box-shadow: 12px 0 32px var(--shadow-color);\n}\n.sidebar.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 8px;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 20px;\n  position: relative;\n  border-bottom: 1px solid var(--border-soft);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-heading);\n  font-weight: 700;\n  font-size: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--sun),\n      var(--red));\n  color: var(--ink);\n  overflow: hidden;\n}\n.logo-text-main[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  font-size: 16.5px;\n  letter-spacing: 0.02em;\n}\n.logo-text-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-dim);\n  margin-top: 1px;\n}\n.sidebar-section-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  text-transform: uppercase;\n  letter-spacing: 0.09em;\n  color: var(--text-faint);\n  font-weight: 600;\n  padding: 20px 20px 8px;\n}\n.nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0 12px;\n  flex: 1;\n  overflow-y: auto;\n}\n.nav-item[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(var(--sun-rgb), 0.14),\n      rgba(var(--red-rgb), 0.06));\n  color: var(--text);\n  font-weight: 600;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 60%;\n  border-radius: 0 3px 3px 0;\n  background:\n    linear-gradient(\n      180deg,\n      var(--sun),\n      var(--red));\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--sun);\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  color: var(--text-dim);\n  font-size: 13.5px;\n  font-weight: 500;\n  position: relative;\n  transition: background 0.15s, color 0.15s;\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--text);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(var(--sun-rgb), 0.14),\n      rgba(var(--red-rgb), 0.06));\n  color: var(--text);\n  font-weight: 600;\n}\n.nav-link.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--sun);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  text-align: center;\n  font-size: 14px;\n  opacity: 0.9;\n}\n.nav-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--red);\n  color: #fff;\n  font-size: 10.5px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 20px;\n}\n.nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid var(--border-soft);\n}\n.logout-card[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  padding: 14px;\n}\n.logout-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n  cursor: pointer;\n}\n.logout-icon-wrapper[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(var(--red-rgb), 0.14);\n  color: var(--red);\n  font-size: 13px;\n}\n.logout-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n.logout-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-dim);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px;\n  border-radius: 8px;\n  background: var(--surface-3);\n  border: 1px solid var(--border);\n  color: var(--text);\n  font-size: 12.5px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--red-rgb), 0.14);\n  border-color: rgba(var(--red-rgb), 0.4);\n  color: #ff8266;\n}\n.sun-arc[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.sun-arc[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 520px;\n  height: 520px;\n  border-radius: 50%;\n  right: -180px;\n  top: -260px;\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      rgba(var(--sun-rgb), 0.16),\n      rgba(var(--red-rgb), 0.1) 45%,\n      transparent 70%);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  margin-left: 0;\n  transition: margin-left 0.28s ease;\n}\n.main-content.sidebar-open[_ngcontent-%COMP%] {\n  margin-left: 272px;\n}\n@media (max-width: 900px) {\n  .main-content.sidebar-open[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 30;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 14px 28px;\n  background: rgba(var(--ink-rgb), 0.85);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid var(--border-soft);\n  position: relative;\n  overflow: hidden;\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  z-index: 1;\n  min-width: 0;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  color: var(--text-dim);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.menu-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n}\n.menu-toggle.active[_ngcontent-%COMP%] {\n  background: rgba(var(--sun-rgb), 0.14);\n  border-color: rgba(var(--sun-rgb), 0.4);\n  color: var(--sun);\n}\n.topbar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  font-family: var(--font-heading);\n  font-weight: 700;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.topbar-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--sun);\n}\n.topbar-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.topbar-title[_ngcontent-%COMP%]   .topbar-title-module[_ngcontent-%COMP%] {\n  color: var(--sun);\n}\n@media (max-width: 900px) {\n  .topbar-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  z-index: 1;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .search-box[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 13px;\n  font-size: 12.5px;\n  color: var(--text-faint);\n  z-index: 1;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 230px;\n  padding: 9px 12px 9px 34px;\n  border-radius: 8px;\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  color: var(--text);\n  font-size: 12.5px;\n  transition: border-color 0.15s, width 0.2s;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-faint);\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sun);\n  width: 280px;\n}\n.search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  width: 320px;\n  max-height: 360px;\n  overflow-y: auto;\n  background: var(--surface);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  box-shadow: 0 20px 40px var(--shadow-color);\n  z-index: 60;\n  padding: 6px;\n}\n.search-results-empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: var(--text-faint);\n  text-align: center;\n}\n.search-result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  border-radius: 8px;\n  color: var(--text);\n  text-decoration: none;\n  font-size: 12.5px;\n  cursor: pointer;\n}\n.search-result-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  text-align: center;\n  color: var(--sun);\n  font-size: 12px;\n}\n.search-result-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n.search-result-sub[_ngcontent-%COMP%] {\n  color: var(--text-faint);\n  font-size: 11px;\n  display: block;\n}\n.icon-btn-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  color: var(--text-dim);\n  cursor: pointer;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n}\n.icon-btn.active[_ngcontent-%COMP%] {\n  border-color: rgba(var(--sun-rgb), 0.4);\n  color: var(--sun);\n}\n.notif-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 3px;\n  background: var(--red);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--ink);\n}\n.notif-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 340px;\n  max-height: 420px;\n  overflow-y: auto;\n  background: var(--surface);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  box-shadow: 0 20px 40px var(--shadow-color);\n  z-index: 60;\n}\n.notif-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border-soft);\n  font-size: 12.5px;\n  font-weight: 700;\n  font-family: var(--font-heading);\n}\n.notif-panel-mark-all[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-dim);\n  font-weight: 600;\n  cursor: pointer;\n  background: none;\n  border: none;\n}\n.notif-panel-mark-all[_ngcontent-%COMP%]:hover {\n  color: var(--sun);\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 11px 14px;\n  border-bottom: 1px solid rgba(var(--border-soft-rgb), 0.6);\n  cursor: pointer;\n  text-decoration: none;\n  color: var(--text);\n}\n.notif-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: rgba(var(--sun-rgb), 0.05);\n}\n.notif-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(var(--blue-rgb), 0.14);\n  color: var(--blue);\n  font-size: 12px;\n}\n.notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n}\n.notif-message[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--text-dim);\n  margin-top: 2px;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--text-faint);\n  margin-top: 4px;\n}\n.notif-empty[_ngcontent-%COMP%] {\n  padding: 24px 14px;\n  text-align: center;\n  font-size: 12px;\n  color: var(--text-faint);\n}\n.lang-select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--text-dim);\n  cursor: pointer;\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  color: var(--sun);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  transform: rotate(20deg);\n}\n.profile-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 12px 6px 6px;\n  border-radius: 24px;\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  cursor: pointer;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-heading);\n  font-weight: 700;\n  font-size: 11.5px;\n  color: var(--ink);\n  background:\n    linear-gradient(\n      135deg,\n      var(--sun),\n      var(--red));\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  line-height: 1.3;\n}\n.profile-role[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--text-dim);\n  line-height: 1.3;\n}\n@media (max-width: 480px) {\n  .profile-role[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  padding: 24px 28px 40px;\n  max-width: 1600px;\n}\n@media (max-width: 900px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 18px 16px 32px;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 18px 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--text-faint);\n  border-top: 1px solid var(--border-soft);\n}\n/*# sourceMappingURL=layout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "app\\core\\layout\\layout.component.ts", lineNumber: 14 });
})();

// src/app/app-routing.module.ts
var routes = [
  {
    path: "",
    redirectTo: "/auth",
    pathMatch: "full"
  },
  {
    path: "auth",
    canActivate: [NoAuthGuard],
    loadChildren: () => import("./chunk-YY3L6PAK.js").then((m) => m.AuthModule)
  },
  // Toutes les routes protégées sous le layout commun (header + sidebar)
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./chunk-6O4ESE65.js").then((m) => m.DashboardModule)
      },
      {
        path: "users",
        loadChildren: () => import("./chunk-4AWQOL3R.js").then((m) => m.UsersModule)
      },
      {
        path: "agents",
        loadChildren: () => import("./chunk-REMZT263.js").then((m) => m.AgentsModule)
      },
      {
        path: "super-agents",
        loadChildren: () => import("./chunk-MEQ4EMRD.js").then((m) => m.SuperAgentsModule)
      },
      {
        path: "merchants",
        loadChildren: () => import("./chunk-HB4IX2BF.js").then((m) => m.MerchantsModule)
      },
      {
        path: "clients",
        loadChildren: () => import("./chunk-ADUWSRK5.js").then((m) => m.ClientsModule)
      },
      {
        path: "commissions",
        loadChildren: () => import("./chunk-MTJ5PHT3.js").then((m) => m.CommissionsModule)
      },
      {
        path: "transactions",
        loadChildren: () => import("./chunk-Z4W2QQ2M.js").then((m) => m.TransactionsModule)
      },
      {
        path: "services-publics",
        loadChildren: () => import("./chunk-WVOCBY2B.js").then((m) => m.ServicesPublicsModule)
      },
      {
        path: "requests",
        loadChildren: () => import("./chunk-PX6RVKIC.js").then((m) => m.RequestsModule)
      },
      {
        path: "workflows",
        loadChildren: () => import("./chunk-AMUZP22V.js").then((m) => m.WorkflowsModule)
      },
      {
        path: "intra-agricole",
        loadChildren: () => import("./chunk-BOYX45N4.js").then((m) => m.IntraAgricoleModule)
      },
      {
        path: "cards",
        loadChildren: () => import("./chunk-Q23MOV5V.js").then((m) => m.CardsModule)
      },
      {
        path: "reports",
        loadChildren: () => import("./chunk-FWLJAQ7N.js").then((m) => m.ReportsModule)
      },
      {
        path: "notifications",
        loadChildren: () => import("./chunk-LHXDFV6Y.js").then((m) => m.NotificationsModule)
      },
      {
        path: "settings",
        loadChildren: () => import("./chunk-M36UMBQK.js").then((m) => m.SettingsModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/auth"
  }
];
var AppRoutingModule = class _AppRoutingModule {
  static {
    this.\u0275fac = function AppRoutingModule_Factory(t) {
      return new (t || _AppRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
  }
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "iblopay-admin";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app\\app.component.ts", lineNumber: 11 });
})();

// src/app/core/layout/layout.module.ts
var LayoutModule = class _LayoutModule {
  static {
    this.\u0275fac = function LayoutModule_Factory(t) {
      return new (t || _LayoutModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LayoutModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      RouterModule
    ] });
  }
};

// src/app/app.module.ts
var AppModule = class _AppModule {
  static {
    this.\u0275fac = function AppModule_Factory(t) {
      return new (t || _AppModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      LayoutModule
    ] });
  }
};

// src/main.ts
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
