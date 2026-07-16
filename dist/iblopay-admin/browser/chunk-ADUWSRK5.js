import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/clients/clients-routing.module.ts
var routes = [];
var ClientsRoutingModule = class _ClientsRoutingModule {
  static {
    this.\u0275fac = function ClientsRoutingModule_Factory(t) {
      return new (t || _ClientsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClientsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/clients/clients.module.ts
var ClientsModule = class _ClientsModule {
  static {
    this.\u0275fac = function ClientsModule_Factory(t) {
      return new (t || _ClientsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClientsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ClientsRoutingModule
    ] });
  }
};
export {
  ClientsModule
};
//# sourceMappingURL=chunk-ADUWSRK5.js.map
