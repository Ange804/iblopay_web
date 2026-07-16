import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription, interval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../modules/auth/services/auth.service';
import { SearchService, SearchResult } from '../services/search.service';
import { NotificationService, AppNotification } from '../services/notification.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

    currentDate: Date = new Date(2026, 6, 15);
    currentTime: string = '';
    currentDay: string = '';
    isSidebarOpen: boolean = true;
    isDarkMode: boolean = true;
    private clockSubscription?: Subscription;
    private routerSubscription?: Subscription;

    // ============================================================
    // TITRE DYNAMIQUE : "IBLOPAY — Administration [— Module]"
    // Le nom du module vient de `data: { title: '...', module: '...' }`
    // déclaré sur la route active (voir *-routing.module.ts).
    // ============================================================
    readonly baseTitle = 'IBLOPAY — Administration';
    moduleTitle: string | null = null;
    currentModuleKey: string | null = null;

    get pageTitle(): string {
        return this.moduleTitle ? `${this.baseTitle} — ${this.moduleTitle}` : this.baseTitle;
    }

    // ============================================================
    // RECHERCHE (spécifique au module actif)
    // ============================================================
    searchQuery: string = '';
    isSearchOpen: boolean = false;
    searchResults$: Observable<SearchResult[]> = this.searchService.results$;

    // ============================================================
    // NOTIFICATIONS (spécifiques au module actif + globales)
    // ============================================================
    isNotifOpen: boolean = false;
    notifications$: Observable<AppNotification[]> = this.notificationService.getForModule(null);
    unreadCount$: Observable<number> = this.notificationService.unreadCountForModule(null);

    menuItems = [
        { icon: 'fa-solid fa-gauge', label: 'Tableau de bord', link: '/dashboard' },
        { icon: 'fa-solid fa-users', label: 'Utilisateurs', link: '/users' },
        { icon: 'fa-solid fa-money-bill-transfer', label: 'Transactions', link: '/transactions' },
        { icon: 'fa-solid fa-coins', label: 'Commissions', link: '/commissions' },
        { icon: 'fa-solid fa-credit-card', label: 'Cartes', link: '/cards' },
        { icon: 'fa-solid fa-building-columns', label: 'Services publics', link: '/services-publics', badge: '12' },
        { icon: 'fa-solid fa-user-tie', label: 'Agents', link: '/agents' },
        { icon: 'fa-solid fa-clock', label: 'Demandes en attente', link: '/requests', badge: '7' },
        { icon: 'fa-solid fa-chart-line', label: 'Rapports', link: '/reports' },
        { icon: 'fa-solid fa-gear', label: 'Paramètres', link: '/settings' }
    ];

    constructor(
        private authService: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private searchService: SearchService,
        private notificationService: NotificationService,
        private elementRef: ElementRef
    ) { }

    ngOnInit(): void {
        this.initClock();
        this.loadTheme();

        // Titre + notifications/recherche se recalculent à chaque navigation
        this.updateRouteContext();
        this.routerSubscription = this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd))
            .subscribe(() => this.updateRouteContext());
    }

    ngOnDestroy(): void {
        if (this.clockSubscription) {
            this.clockSubscription.unsubscribe();
        }
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

    // ============================================================
    // ROUTE CONTEXT (titre + module courant)
    // ============================================================

    private updateRouteContext(): void {
        let route = this.activatedRoute.root;
        let title: string | null = null;
        let moduleKey: string | null = null;

        while (route.firstChild) {
            route = route.firstChild;
            const data = route.snapshot.data;
            if (data && data['title']) {
                title = data['title'];
            }
            if (data && data['module']) {
                moduleKey = data['module'];
            }
        }

        this.moduleTitle = title;
        this.currentModuleKey = moduleKey;

        // Recherche et notifications se re-scopent sur le nouveau module
        this.searchQuery = '';
        this.searchService.clear();
        this.notifications$ = this.notificationService.getForModule(moduleKey);
        this.unreadCount$ = this.notificationService.unreadCountForModule(moduleKey);
    }

    // ============================================================
    // HORLOGE
    // ============================================================

    private initClock(): void {
        this.updateClock();
        this.clockSubscription = interval(1000).subscribe(() => {
            this.updateClock();
        });
    }

    private updateClock(): void {
        const now = new Date();
        const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

        this.currentDay = `${days[this.currentDate.getDay()]} ${this.currentDate.getDate()} ${months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
        this.currentTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    }

    // ============================================================
    // SIDEBAR
    // ============================================================

    toggleSidebar(): void {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    closeSidebar(): void {
        this.isSidebarOpen = false;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        const width = (event.target as Window).innerWidth;
        if (width <= 900) {
            this.isSidebarOpen = false;
        } else {
            this.isSidebarOpen = true;
        }
    }

    get menuToggleIcon(): string {
        return this.isSidebarOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }

    // ============================================================
    // THEME (partagé par tous les modules via body.light-mode)
    // ============================================================

    get themeToggleIcon(): string {
        return this.isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    toggleTheme(): void {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('light-mode', !this.isDarkMode);
        localStorage.setItem('iblopay_theme', this.isDarkMode ? 'dark' : 'light');
    }

    private loadTheme(): void {
        const savedTheme = localStorage.getItem('iblopay_theme');
        if (savedTheme === 'light') {
            this.isDarkMode = false;
            document.body.classList.add('light-mode');
        } else {
            this.isDarkMode = true;
            document.body.classList.remove('light-mode');
        }
    }

    // ============================================================
    // RECHERCHE
    // ============================================================

    onSearchInput(): void {
        this.isSearchOpen = true;
        this.searchService.search(this.currentModuleKey || 'global', this.searchQuery);
    }

    onSearchFocus(): void {
        this.isSearchOpen = true;
    }

    selectSearchResult(result: SearchResult): void {
        this.isSearchOpen = false;
        this.searchQuery = '';
        this.searchService.clear();
        this.router.navigate(Array.isArray(result.link) ? result.link : [result.link]);
    }

    // ============================================================
    // NOTIFICATIONS
    // ============================================================

    toggleNotifications(): void {
        this.isNotifOpen = !this.isNotifOpen;
        this.isSearchOpen = false;
    }

    openNotification(notification: AppNotification): void {
        this.notificationService.markAsRead(notification.id);
        this.isNotifOpen = false;
        if (notification.link) {
            const link = Array.isArray(notification.link) ? notification.link : [notification.link];
            this.router.navigate(link);
        }
    }

    markAllNotificationsRead(event: Event): void {
        event.stopPropagation();
        this.notificationService.markAllAsReadForModule(this.currentModuleKey);
    }

    // Ferme les dropdowns (recherche / notifications) au clic extérieur
    @HostListener('document:click', ['$event'])
    handleDocumentClick(event: MouseEvent): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            return;
        }
        const target = event.target as HTMLElement;
        if (!target.closest('.search-box')) {
            this.isSearchOpen = false;
        }
        if (!target.closest('.icon-btn-wrap')) {
            this.isNotifOpen = false;
        }
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent): void {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            const searchInput = document.querySelector('.search-input') as HTMLInputElement;
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
                this.isSearchOpen = true;
            }
        }
        if (event.key === 'Escape') {
            this.isSearchOpen = false;
            this.isNotifOpen = false;
        }
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}