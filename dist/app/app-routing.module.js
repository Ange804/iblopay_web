var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'agents',
        loadChildren: () => import('./modules/agents/agents.module').then(m => m.AgentsModule)
    },
    {
        path: 'super-agents',
        loadChildren: () => import('./modules/super-agents/super-agents.module').then(m => m.SuperAgentsModule)
    },
    {
        path: 'merchants',
        loadChildren: () => import('./modules/merchants/merchants.module').then(m => m.MerchantsModule)
    },
    {
        path: 'clients',
        loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule)
    },
    {
        path: 'commissions',
        loadChildren: () => import('./modules/commissions/commissions.module').then(m => m.CommissionsModule)
    },
    {
        path: 'transactions',
        loadChildren: () => import('./modules/transactions/transactions.module').then(m => m.TransactionsModule)
    },
    {
        path: 'services-publics',
        loadChildren: () => import('./modules/services-publics/services-publics.module').then(m => m.ServicesPublicsModule)
    },
    {
        path: 'requests',
        loadChildren: () => import('./modules/requests/requests.module').then(m => m.RequestsModule)
    },
    {
        path: 'workflows',
        loadChildren: () => import('./modules/workflows/workflows.module').then(m => m.WorkflowsModule)
    },
    {
        path: 'intra-agricole',
        loadChildren: () => import('./modules/intra-agricole/intra-agricole.module').then(m => m.IntraAgricoleModule)
    },
    {
        path: 'reports',
        loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
    },
    {
        path: 'notifications',
        loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: '**',
        redirectTo: '/auth'
    }
];
let AppRoutingModule = (() => {
    let _classDecorators = [NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppRoutingModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppRoutingModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppRoutingModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppRoutingModule = _classThis;
})();
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map