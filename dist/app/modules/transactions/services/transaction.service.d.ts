import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { TransactionFilter } from '../models/transaction-filter.model';
import { TransactionSummary } from '../models/transaction-summary.model';
import { SweepTransaction } from '../models/sweep-transaction.model';
import { CommissionTransaction } from '../models/commission-transaction.model';
export interface PagedResult<T> {
    items: T[];
    total: number;
}
export declare class TransactionService {
    private http;
    private readonly baseUrl;
    constructor(http: HttpClient);
    getTransactions(filter?: TransactionFilter): Observable<PagedResult<Transaction>>;
    getTransactionById(transactionId: string): Observable<Transaction>;
    /**
     * Transactions belong to wallets, not cards directly. If you need
     * "this card's transactions" (e.g. from card-detail), resolve it
     * server-side (card_id -> wallet_id -> transactions) rather than doing
     * the join here — keeps the cards module decoupled from this one.
     */
    getTransactionsByWallet(walletId: string, filter?: TransactionFilter): Observable<PagedResult<Transaction>>;
    getSummary(filter?: TransactionFilter): Observable<TransactionSummary>;
    getSweepDetails(transactionId: string): Observable<SweepTransaction>;
    getCommissionDetails(transactionId: string): Observable<CommissionTransaction>;
    private buildParams;
}
//# sourceMappingURL=transaction.service.d.ts.map