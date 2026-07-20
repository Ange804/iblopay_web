import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/merchants/merchants-routing.module.ts
var routes = [];
var MerchantsRoutingModule = class _MerchantsRoutingModule {
  static {
    this.\u0275fac = function MerchantsRoutingModule_Factory(t) {
      return new (t || _MerchantsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MerchantsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/merchants/merchants.module.ts
var MerchantsModule = class _MerchantsModule {
  static {
    this.\u0275fac = function MerchantsModule_Factory(t) {
      return new (t || _MerchantsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MerchantsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      MerchantsRoutingModule
    ] });
  }
};
export {
  MerchantsModule
};
//# sourceMappingURL=chunk-HB4IX2BF.js.map
