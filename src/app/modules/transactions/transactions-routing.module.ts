import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './pages/transaction-detail/transaction-detail.component';
import { TransactionExportComponent } from './pages/transaction-export/transaction-export.component';

// IMPORTANT: 'export' must stay ABOVE ':id', otherwise a request for
// /transactions/export resolves as transaction detail for id="export".
const routes: Routes = [
  { path: '', component: TransactionListComponent },
  { path: 'export', component: TransactionExportComponent },
  { path: ':id', component: TransactionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule {}
