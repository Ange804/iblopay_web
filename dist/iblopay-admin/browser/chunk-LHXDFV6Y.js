import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/notifications/notifications-routing.module.ts
var routes = [];
var NotificationsRoutingModule = class _NotificationsRoutingModule {
  static {
    this.\u0275fac = function NotificationsRoutingModule_Factory(t) {
      return new (t || _NotificationsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotificationsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/notifications/notifications.module.ts
var NotificationsModule = class _NotificationsModule {
  static {
    this.\u0275fac = function NotificationsModule_Factory(t) {
      return new (t || _NotificationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotificationsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      NotificationsRoutingModule
    ] });
  }
};
export {
  NotificationsModule
};
//# sourceMappingURL=chunk-LHXDFV6Y.js.map
