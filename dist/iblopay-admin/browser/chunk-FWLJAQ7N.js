import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/reports/reports-routing.module.ts
var routes = [];
var ReportsRoutingModule = class _ReportsRoutingModule {
  static {
    this.\u0275fac = function ReportsRoutingModule_Factory(t) {
      return new (t || _ReportsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/reports/reports.module.ts
var ReportsModule = class _ReportsModule {
  static {
    this.\u0275fac = function ReportsModule_Factory(t) {
      return new (t || _ReportsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ReportsRoutingModule
    ] });
  }
};
export {
  ReportsModule
};
//# sourceMappingURL=chunk-FWLJAQ7N.js.map
