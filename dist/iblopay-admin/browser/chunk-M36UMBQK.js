import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/settings/settings-routing.module.ts
var routes = [];
var SettingsRoutingModule = class _SettingsRoutingModule {
  static {
    this.\u0275fac = function SettingsRoutingModule_Factory(t) {
      return new (t || _SettingsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SettingsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/settings/settings.module.ts
var SettingsModule = class _SettingsModule {
  static {
    this.\u0275fac = function SettingsModule_Factory(t) {
      return new (t || _SettingsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SettingsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      SettingsRoutingModule
    ] });
  }
};
export {
  SettingsModule
};
//# sourceMappingURL=chunk-M36UMBQK.js.map
