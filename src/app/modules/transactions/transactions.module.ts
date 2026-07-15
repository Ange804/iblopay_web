import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransactionsRoutingModule } from './transactions-routing.module';

import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './pages/transaction-detail/transaction-detail.component';
import { TransactionFiltersComponent } from './pages/transaction-filters/transaction-filters.component';
import { TransactionExportComponent } from './pages/transaction-export/transaction-export.component';

import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { TransactionStatusBadgeComponent } from './components/transaction-status-badge/transaction-status-badge.component';
import { TransactionChartComponent } from './components/transaction-chart/transaction-chart.component';
import { TransactionSummaryComponent } from './components/transaction-summary/transaction-summary.component';

@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailComponent,
    TransactionFiltersComponent,
    TransactionExportComponent,
    TransactionCardComponent,
    TransactionStatusBadgeComponent,
    TransactionChartComponent,
    TransactionSummaryComponent
  ],
  imports: [CommonModule, FormsModule, TransactionsRoutingModule]
  // TransactionService and TransactionExportService are providedIn: 'root',
  // so they don't need to be listed here.
})
export class TransactionsModule {}
