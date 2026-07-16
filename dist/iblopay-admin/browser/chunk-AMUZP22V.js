import {
  CommonModule,
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-6UEC5R44.js";

// src/app/modules/workflows/workflows-routing.module.ts
var routes = [];
var WorkflowsRoutingModule = class _WorkflowsRoutingModule {
  static {
    this.\u0275fac = function WorkflowsRoutingModule_Factory(t) {
      return new (t || _WorkflowsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WorkflowsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/workflows/workflows.module.ts
var WorkflowsModule = class _WorkflowsModule {
  static {
    this.\u0275fac = function WorkflowsModule_Factory(t) {
      return new (t || _WorkflowsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WorkflowsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      WorkflowsRoutingModule
    ] });
  }
};
export {
  WorkflowsModule
};
//# sourceMappingURL=chunk-AMUZP22V.js.map
