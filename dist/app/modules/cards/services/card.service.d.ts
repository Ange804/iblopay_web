import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card, CreateCardPayload } from '../models/card.model';
import { CardTransaction } from '../models/card-transaction.model';
export declare class CardService {
    private http;
    private readonly baseUrl;
    constructor(http: HttpClient);
    getCards(): Observable<Card[]>;
    getCardById(cardId: string): Observable<Card>;
    createCard(payload: CreateCardPayload): Observable<Card>;
    activateCard(cardId: string): Observable<Card>;
    blockCard(cardId: string, reason?: string): Observable<Card>;
    replaceCard(cardId: string): Observable<Card>;
    /**
     * The transactions module now exists, but a transaction belongs to a
     * wallet (from_wallet_id / to_wallet_id), not a card — there's no
     * transaction_id -> card_id link in the schema. This endpoint therefore
     * assumes the BACKEND resolves card_id -> wallet_id -> transactions
     * server-side (e.g. join through `cards.wallet_id`), rather than the
     * frontend doing that join by depending on TransactionService directly.
     * That keeps the cards and transactions modules decoupled.
     *
     * If your backend doesn't expose this yet, this call will 404/error —
     * card-detail already handles the error path.
     */
    getCardTransactions(cardId: string): Observable<CardTransaction[]>;
}
//# sourceMappingURL=card.service.d.ts.map