import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { TransactionFilter } from '../models/transaction-filter.model';
import { TransactionSummary } from '../models/transaction-summary.model';
import { SweepTransaction } from '../models/sweep-transaction.model';
import { CommissionTransaction } from '../models/commission-transaction.model';
// NOTE: adjust this relative path to wherever your environment files live.
import { environment } from '../../../../environments/environment';

export interface PagedResult<T> {
  items: T[];
  total: number;
}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private readonly baseUrl = `${environment.apiUrl}/transactions`;

  constructor(private http: HttpClient) {}

  getTransactions(filter: TransactionFilter = {}): Observable<PagedResult<Transaction>> {
    return this.http.get<PagedResult<Transaction>>(this.baseUrl, {
      params: this.buildParams(filter)
    });
  }

  getTransactionById(transactionId: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/${transactionId}`);
  }

  /**
   * Transactions belong to wallets, not cards directly. If you need
   * "this card's transactions" (e.g. from card-detail), resolve it
   * server-side (card_id -> wallet_id -> transactions) rather than doing
   * the join here — keeps the cards module decoupled from this one.
   */
  getTransactionsByWallet(walletId: string, filter: TransactionFilter = {}): Observable<PagedResult<Transaction>> {
    return this.http.get<PagedResult<Transaction>>(this.baseUrl, {
      params: this.buildParams({ ...filter, walletId })
    });
  }

  getSummary(filter: TransactionFilter = {}): Observable<TransactionSummary> {
    return this.http.get<TransactionSummary>(`${this.baseUrl}/summary`, {
      params: this.buildParams(filter)
    });
  }

  // Only meaningful for SWEEP / SWEEP_INVERSE transactions.
  getSweepDetails(transactionId: string): Observable<SweepTransaction> {
    return this.http.get<SweepTransaction>(`${this.baseUrl}/${transactionId}/sweep`);
  }

  // Only meaningful for COMMISSION transactions.
  getCommissionDetails(transactionId: string): Observable<CommissionTransaction> {
    return this.http.get<CommissionTransaction>(`${this.baseUrl}/${transactionId}/commission`);
  }

  private buildParams(filter: TransactionFilter): HttpParams {
    let params = new HttpParams();
    Object.entries(filter).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, String(value));
      }
    });
    return params;
  }
}
