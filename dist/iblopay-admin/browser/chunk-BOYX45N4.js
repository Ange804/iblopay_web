import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/intra-agricole/intra-agricole-routing.module.ts
var routes = [];
var IntraAgricoleRoutingModule = class _IntraAgricoleRoutingModule {
  static {
    this.\u0275fac = function IntraAgricoleRoutingModule_Factory(t) {
      return new (t || _IntraAgricoleRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _IntraAgricoleRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/intra-agricole/intra-agricole.module.ts
var IntraAgricoleModule = class _IntraAgricoleModule {
  static {
    this.\u0275fac = function IntraAgricoleModule_Factory(t) {
      return new (t || _IntraAgricoleModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _IntraAgricoleModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      IntraAgricoleRoutingModule
    ] });
  }
};
export {
  IntraAgricoleModule
};
//# sourceMappingURL=chunk-BOYX45N4.js.map
