import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    // Ajouter les routes pour tous les modules du menu
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }