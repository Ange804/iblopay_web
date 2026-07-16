import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { TransactionFilter } from '../models/transaction-filter.model';
export declare class TransactionExportService {
    private http;
    private readonly baseUrl;
    constructor(http: HttpClient);
    /**
     * Client-side CSV export of whatever transactions are already loaded
     * (e.g. the current page in transaction-list). Fine for small/filtered
     * sets. For full-dataset exports, use requestServerExport instead so the
     * backend streams the file rather than the browser holding it all in memory.
     */
    exportToCsv(transactions: Transaction[], filename?: string): void;
    /**
     * ASSUMPTION: backend endpoint for large/async exports doesn't exist yet.
     * Wire this up once it does — expected to stream back a file (CSV/PDF).
     */
    requestServerExport(filter: TransactionFilter, format?: 'csv' | 'pdf'): Observable<Blob>;
}
//# sourceMappingURL=transaction-export.service.d.ts.map