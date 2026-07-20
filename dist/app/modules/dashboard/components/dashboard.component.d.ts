import { OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
export declare class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
    currentDate: Date;
    currentTime: string;
    currentDay: string;
    isRefreshing: boolean;
    isSidebarOpen: boolean;
    isDarkMode: boolean;
    chartCanvas: ElementRef<HTMLCanvasElement>;
    private chartInstance;
    private clockSubscription?;
    menuItems: ({
        icon: string;
        label: string;
        link: string;
        active: boolean;
        badge?: never;
    } | {
        icon: string;
        label: string;
        link: string;
        active?: never;
        badge?: never;
    } | {
        icon: string;
        label: string;
        link: string;
        badge: string;
        active?: never;
    })[];
    stats: {
        icon: string;
        iconBg: string;
        label: string;
        value: number;
        change: number;
        changeLabel: string;
        positive: boolean;
        highlight: boolean;
        link: string;
    }[];
    provinceData: {
        depots: {
            name: string;
            amount: number;
            color: string;
        }[];
        transactions: {
            name: string;
            amount: number;
            color: string;
        }[];
        commissions: {
            name: string;
            amount: number;
            color: string;
        }[];
    };
    services: {
        name: string;
        total: number;
        traitees: number;
        enCours: number;
        rejetees: number;
    }[];
    recentRegistrations: {
        name: string;
        time: string;
    }[];
    pendingRequests: {
        label: string;
        value: number;
    }[];
    agentActivities: ({
        label: string;
        value: number;
    } | {
        label: string;
        value: string;
    })[];
    quickAccess: {
        label: string;
        icon: string;
        link: string;
        color: string;
    }[];
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private initClock;
    private updateClock;
    private initChart;
    toggleSidebar(): void;
    closeSidebar(): void;
    get menuToggleIcon(): string;
    get themeToggleIcon(): string;
    toggleTheme(): void;
    private loadTheme;
    refreshData(): void;
    handleKeyboardEvent(event: KeyboardEvent): void;
    formatNumber(value: any): string;
    formatAmount(amount: number): string;
    getChangeClass(change: number): string;
    getChangeSymbol(change: number): string;
}
//# sourceMappingURL=dashboard.component.d.ts.map