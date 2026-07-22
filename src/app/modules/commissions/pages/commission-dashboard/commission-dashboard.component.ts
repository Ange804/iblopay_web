import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommissionMockService } from '../../services/commission-mock.service';
import { KpiCardData, ViewRole } from '../../models/commission.model';
import { Subject, takeUntil } from 'rxjs';

type TrendPeriod = 7 | 30 | 90;

interface DonutSegment {
  dasharray: string;
  dashoffset: string;
  color: string;
  label: string;
  amount: number;
  count: number;
}

@Component({
  selector: 'app-commission-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './commission-dashboard.component.html',
  styleUrls: ['./commission-dashboard.component.scss'],
})
export class CommissionDashboardComponent implements OnInit, OnDestroy {
  kpiCards: KpiCardData[] = [];
  trendPeriod: TrendPeriod = 30;
  trendLabels: string[] = [];
  agentTrendValues: number[] = [];
  superAgentTrendValues: number[] = [];
  typeBreakdown: { type: string; amount: number; count: number }[] = [];
  statusBreakdown: { status: string; amount: number; count: number }[] = [];
  activeView: ViewRole = 'admin';
  isLoading = true;

  readonly math = Math;

  private destroy$ = new Subject<void>();

  constructor(private commissionService: CommissionMockService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onViewChange(view: ViewRole): void {
    this.activeView = view;
    this.loadData();
  }

  onTrendPeriodChange(period: TrendPeriod): void {
    this.trendPeriod = period;
    this.loadTrendData();
  }

  private loadData(): void {
    this.isLoading = true;
    this.commissionService
      .getDashboardKpis(this.activeView)
      .pipe(takeUntil(this.destroy$))
      .subscribe(cards => {
        this.kpiCards = cards;
        this.isLoading = false;
      });

    this.loadTrendData();
    this.loadBreakdowns();
  }

  private loadTrendData(): void {
    this.commissionService
      .getCommissionTrend(this.trendPeriod)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.trendLabels = data.labels;
        this.agentTrendValues = data.agentValues;
        this.superAgentTrendValues = data.superAgentValues;
      });
  }

  private loadBreakdowns(): void {
    this.commissionService
      .getTypeBreakdown()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => (this.typeBreakdown = data));

    this.commissionService
      .getStatusBreakdown()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => (this.statusBreakdown = data));
  }

  get trendMaxValue(): number {
    const all = [...this.agentTrendValues, ...this.superAgentTrendValues];
    return Math.max(...all, 1);
  }

  get typeTotal(): number {
    return this.typeBreakdown.reduce((s, t) => s + t.amount, 0);
  }

  get statusTotal(): number {
    return this.statusBreakdown.reduce((s, t) => s + t.amount, 0);
  }

  get totalCommissionCount(): number {
    return this.typeBreakdown.reduce((s, t) => s + t.count, 0);
  }

  getEveryNthLabel(n: number): string[] {
    return this.trendLabels.filter((_, i) => i % n === 0 || i === this.trendLabels.length - 1);
  }

  getTypeSegments(): DonutSegment[] {
    return this.buildSegments(this.typeBreakdown, 'type', (t) => this.getTypeColor(t));
  }

  getStatusSegments(): DonutSegment[] {
    return this.buildSegments(this.statusBreakdown, 'status', (s) => this.getStatusColor(s));
  }

  private buildSegments(
    items: any[],
    labelKey: string,
    colorFn: (key: string) => string
  ): DonutSegment[] {
    const total = items.reduce((s: number, t: any) => s + t.amount, 0);
    if (total === 0) return [];
    const circumference = 2 * Math.PI * 40;

    let cumulative = 0;
    return items.map((item: any) => {
      const ratio = item.amount / total;
      const dasharray = `${ratio * circumference} ${circumference - ratio * circumference}`;
      const offset = -(cumulative / total) * circumference;
      cumulative += item.amount;
      return {
        dasharray: `${dasharray}`,
        dashoffset: `${offset}`,
        color: colorFn(item[labelKey]),
        label: labelKey === 'type' ? this.typeLabel(item.type) : this.statusLabel(item.status),
        amount: item.amount,
        count: item.count,
      };
    });
  }

  formatBif(amount: number): string {
    return `${amount.toLocaleString('fr-FR')} BIF`;
  }

  statusLabel(status: string): string {
    const labels: Record<string, string> = {
      PENDING: 'En Attente',
      CREDITED: 'Crédité',
      FAILED: 'Échoué',
    };
    return labels[status] || status;
  }

  typeLabel(type: string): string {
    const labels: Record<string, string> = {
      AGENT_COMMISSION: 'Commission Agent',
      SUPER_AGENT_COMMISSION: 'Commission Super Agent',
    };
    return labels[type] || type;
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      PENDING: '#f97316',
      CREDITED: '#22c55e',
      FAILED: '#ef4444',
    };
    return colors[status] || '#8896b3';
  }

  getTypeColor(type: string): string {
    const colors: Record<string, string> = {
      AGENT_COMMISSION: '#3b82f6',
      SUPER_AGENT_COMMISSION: '#a855f7',
    };
    return colors[type] || '#8896b3';
  }
}