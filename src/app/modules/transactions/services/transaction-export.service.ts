import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { TransactionFilter } from '../models/transaction-filter.model';
// NOTE: adjust this relative path to wherever your environment files live.
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TransactionExportService {
  private readonly baseUrl = `${environment.apiUrl}/transactions`;

  constructor(private http: HttpClient) {}

  /**
   * Client-side CSV export of whatever transactions are already loaded
   * (e.g. the current page in transaction-list). Fine for small/filtered
   * sets. For full-dataset exports, use requestServerExport instead so the
   * backend streams the file rather than the browser holding it all in memory.
   */
  exportToCsv(transactions: Transaction[], filename = 'transactions.csv'): void {
    const header = ['Transaction ID', 'Reference', 'Type', 'Status', 'Amount', 'Fee', 'From Wallet', 'To Wallet', 'Created At'];
    const rows = transactions.map((t) => [
      t.transactionId,
      t.reference ?? '',
      t.transactionType,
      t.status,
      String(t.amount),
      String(t.fee),
      t.fromWalletId ?? '',
      t.toWalletId ?? '',
      t.createdAt
    ]);

    const csv = [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  /**
   * ASSUMPTION: backend endpoint for large/async exports doesn't exist yet.
   * Wire this up once it does — expected to stream back a file (CSV/PDF).
   */
  requestServerExport(filter: TransactionFilter, format: 'csv' | 'pdf' = 'csv'): Observable<Blob> {
    return this.http.post(`${this.baseUrl}/export`, { filter, format }, { responseType: 'blob' });
  }
}
