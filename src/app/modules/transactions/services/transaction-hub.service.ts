import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  MOCK_KPI_DATA,
  MOCK_QUICK_ACTIONS,
  MOCK_TRANSACTIONS_TABLE,
  MOCK_TRANSACTION_DETAIL,
  MOCK_TRACEABILITY,
  MOCK_TOP_AGENTS,
  MOCK_TOP_CLIENTS,
  MOCK_TOP_MERCHANTS,
  MOCK_OPERATION_TYPES,
  MOCK_ALERTS,
  MOCK_SYSTEM_ACTIVITIES
} from '../data/transaction-hub-data';
import { KpiData, QuickAction, TransactionTableRow, TransactionDetail, TraceabilityData, TopActor, OperationTypeStats, AlertNotification, SystemActivity } from '../models/transaction-hub.model';

@Injectable({ providedIn: 'root' })
export class TransactionHubService {
  private readonly simDelay = 300;

  getKpiData(): Observable<KpiData> {
    return of({ ...MOCK_KPI_DATA }).pipe(delay(this.simDelay));
  }

  getQuickActions(): Observable<QuickAction[]> {
    return of([...MOCK_QUICK_ACTIONS]).pipe(delay(this.simDelay));
  }

  getTransactionsTable(page = 1, pageSize = 20): Observable<{ items: TransactionTableRow[]; total: number }> {
    const start = (page - 1) * pageSize;
    const items = MOCK_TRANSACTIONS_TABLE.slice(start, start + pageSize);
    return of({ items, total: MOCK_TRANSACTIONS_TABLE.length }).pipe(delay(this.simDelay));
  }

  getTransactionDetail(id: string): Observable<TransactionDetail> {
    return of({ ...MOCK_TRANSACTION_DETAIL, transactionId: id }).pipe(delay(this.simDelay));
  }

  getTraceability(): Observable<TraceabilityData> {
    return of({ ...MOCK_TRACEABILITY }).pipe(delay(this.simDelay));
  }

  getTopActors(tab: 'super-agents' | 'agents' | 'clients' | 'merchants'): Observable<TopActor[]> {
    const data: Record<string, TopActor[]> = {
      'super-agents': MOCK_TOP_AGENTS,
      'agents': MOCK_TOP_AGENTS.map(a => ({ ...a, name: a.name.replace('SA ', 'Agent ') })),
      'clients': MOCK_TOP_CLIENTS,
      'merchants': MOCK_TOP_MERCHANTS
    };
    const items = data[tab] ?? [];
    return of([...items]).pipe(delay(this.simDelay));
  }

  getOperationTypes(): Observable<OperationTypeStats[]> {
    return of([...MOCK_OPERATION_TYPES]).pipe(delay(this.simDelay));
  }

  getAlerts(): Observable<AlertNotification[]> {
    return of([...MOCK_ALERTS]).pipe(delay(this.simDelay));
  }

  getSystemActivities(): Observable<SystemActivity[]> {
    return of([...MOCK_SYSTEM_ACTIVITIES]).pipe(delay(this.simDelay));
  }

  getVolumeChartData(period: 'today' | '7d' | '30d' | 'custom'): Observable<{ labels: string[]; values: number[] }> {
    if (period === 'today') {
      return of({
        labels: Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`),
        values: [120, 95, 80, 65, 55, 45, 60, 180, 320, 420, 380, 350, 410, 390, 450, 520, 480, 430, 560, 610, 580, 490, 360, 200]
      }).pipe(delay(this.simDelay));
    }
    return of({
      labels: Array.from({ length: 7 }, (_, i) => {
        const d = new Date(2024, 5, 12 + i);
        return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
      }),
      values: [320, 345, 330, 360, 340, 356, 356]
    }).pipe(delay(this.simDelay));
  }
}