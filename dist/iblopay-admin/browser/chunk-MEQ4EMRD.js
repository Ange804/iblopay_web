import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/super-agents/super-agents-routing.module.ts
var routes = [];
var SuperAgentsRoutingModule = class _SuperAgentsRoutingModule {
  static {
    this.\u0275fac = function SuperAgentsRoutingModule_Factory(t) {
      return new (t || _SuperAgentsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SuperAgentsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/super-agents/super-agents.module.ts
var SuperAgentsModule = class _SuperAgentsModule {
  static {
    this.\u0275fac = function SuperAgentsModule_Factory(t) {
      return new (t || _SuperAgentsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SuperAgentsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      SuperAgentsRoutingModule
    ] });
  }
};
export {
  SuperAgentsModule
};
//# sourceMappingURL=chunk-MEQ4EMRD.js.map
