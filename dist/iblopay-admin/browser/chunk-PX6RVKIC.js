import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/requests/requests-routing.module.ts
var routes = [];
var RequestsRoutingModule = class _RequestsRoutingModule {
  static {
    this.\u0275fac = function RequestsRoutingModule_Factory(t) {
      return new (t || _RequestsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RequestsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/requests/requests.module.ts
var RequestsModule = class _RequestsModule {
  static {
    this.\u0275fac = function RequestsModule_Factory(t) {
      return new (t || _RequestsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RequestsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RequestsRoutingModule
    ] });
  }
};
export {
  RequestsModule
};
//# sourceMappingURL=chunk-PX6RVKIC.js.map
