import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/commissions/commissions-routing.module.ts
var routes = [];
var CommissionsRoutingModule = class _CommissionsRoutingModule {
  static {
    this.\u0275fac = function CommissionsRoutingModule_Factory(t) {
      return new (t || _CommissionsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CommissionsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/commissions/commissions.module.ts
var CommissionsModule = class _CommissionsModule {
  static {
    this.\u0275fac = function CommissionsModule_Factory(t) {
      return new (t || _CommissionsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CommissionsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      CommissionsRoutingModule
    ] });
  }
};
export {
  CommissionsModule
};
//# sourceMappingURL=chunk-MTJ5PHT3.js.map
