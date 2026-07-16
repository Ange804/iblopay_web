import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/services-publics/services-publics-routing.module.ts
var routes = [];
var ServicesPublicsRoutingModule = class _ServicesPublicsRoutingModule {
  static {
    this.\u0275fac = function ServicesPublicsRoutingModule_Factory(t) {
      return new (t || _ServicesPublicsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ServicesPublicsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/services-publics/services-publics.module.ts
var ServicesPublicsModule = class _ServicesPublicsModule {
  static {
    this.\u0275fac = function ServicesPublicsModule_Factory(t) {
      return new (t || _ServicesPublicsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ServicesPublicsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ServicesPublicsRoutingModule
    ] });
  }
};
export {
  ServicesPublicsModule
};
//# sourceMappingURL=chunk-WVOCBY2B.js.map
