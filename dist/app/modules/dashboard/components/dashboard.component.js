var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Component, HostListener, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
let DashboardComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _chartCanvas_decorators;
    let _chartCanvas_initializers = [];
    let _chartCanvas_extraInitializers = [];
    let _handleKeyboardEvent_decorators;
    var DashboardComponent = _classThis = class {
        constructor() {
            // ============================================================
            // PROPRIÉTÉS PUBLIQUES
            // ============================================================
            this.currentDate = (__runInitializers(this, _instanceExtraInitializers), new Date(2026, 6, 15));
            this.currentTime = '';
            this.currentDay = '';
            this.isRefreshing = false;
            this.isSidebarOpen = false;
            this.isDarkMode = true;
            this.chartCanvas = __runInitializers(this, _chartCanvas_initializers, void 0);
            this.chartInstance = (__runInitializers(this, _chartCanvas_extraInitializers), null);
            // ============================================================
            // MENU PRINCIPAL AVEC CARTE
            // ============================================================
            this.menuItems = [
                { icon: 'fa-solid fa-gauge', label: 'Tableau de bord', link: '/dashboard', active: true },
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
            // ============================================================
            // CARTES STATISTIQUES
            // ============================================================
            this.stats = [
                {
                    icon: 'fa-solid fa-sack-dollar',
                    iconBg: 'linear-gradient(135deg, #F2B705, #c98f04)',
                    label: 'Dépôts totaux',
                    value: 235680000,
                    change: 12.4,
                    changeLabel: 'vs hier',
                    positive: true,
                    highlight: true,
                    link: '/deposits'
                },
                {
                    icon: 'fa-solid fa-arrows-rotate',
                    iconBg: 'linear-gradient(135deg, #4C8DFF, #2c62d6)',
                    label: 'Transactions',
                    value: 523690000,
                    change: 8.1,
                    changeLabel: 'vs hier',
                    positive: true,
                    highlight: false,
                    link: '/transactions'
                },
                {
                    icon: 'fa-solid fa-coins',
                    iconBg: 'linear-gradient(135deg, #9B6BFF, #6c3fd6)',
                    label: 'Commissions',
                    value: 3474900,
                    change: -2.3,
                    changeLabel: 'vs hier',
                    positive: false,
                    highlight: false,
                    link: '/commissions'
                },
                {
                    icon: 'fa-solid fa-users',
                    iconBg: 'linear-gradient(135deg, #2BC98A, #1c9a6c)',
                    label: 'Utilisateurs actifs',
                    value: 48219,
                    change: 5.6,
                    changeLabel: 'ce mois',
                    positive: true,
                    highlight: false,
                    link: '/users'
                },
                {
                    icon: 'fa-solid fa-user-tie',
                    iconBg: 'linear-gradient(135deg, #4c8dff, #2c62d6)',
                    label: 'Agents actifs',
                    value: 1284,
                    change: 1.2,
                    changeLabel: 'ce mois',
                    positive: true,
                    highlight: false,
                    link: '/agents'
                },
                {
                    icon: 'fa-solid fa-building-columns',
                    iconBg: 'linear-gradient(135deg, #E8542F, #b83c1f)',
                    label: 'Demandes services publics',
                    value: 128456,
                    change: 3.9,
                    changeLabel: '30 derniers jours',
                    positive: true,
                    highlight: false,
                    link: '/services-publics'
                }
            ];
            // ============================================================
            // DONNÉES PAR PROVINCE
            // ============================================================
            this.provinceData = {
                depots: [
                    { name: 'Bujumbura Mairie', amount: 98240000, color: 'green' },
                    { name: 'Gitega', amount: 41120000, color: 'green' },
                    { name: 'Ngozi', amount: 32860000, color: 'green' },
                    { name: 'Muyinga', amount: 24310000, color: 'green' },
                    { name: 'Kayanza', amount: 19750000, color: 'green' }
                ],
                transactions: [
                    { name: 'Bujumbura Mairie', amount: 210400000, color: 'blue' },
                    { name: 'Gitega', amount: 96700000, color: 'blue' },
                    { name: 'Ngozi', amount: 74250000, color: 'blue' },
                    { name: 'Muyinga', amount: 58900000, color: 'blue' },
                    { name: 'Kayanza', amount: 45120000, color: 'blue' }
                ],
                commissions: [
                    { name: 'Bujumbura Mairie', amount: 1420000, color: 'purple' },
                    { name: 'Gitega', amount: 640300, color: 'purple' },
                    { name: 'Ngozi', amount: 512100, color: 'purple' },
                    { name: 'Muyinga', amount: 468500, color: 'purple' },
                    { name: 'Kayanza', amount: 434000, color: 'purple' }
                ]
            };
            // ============================================================
            // SERVICES PUBLICS
            // ============================================================
            this.services = [
                { name: 'État civil', total: 42180, traitees: 38920, enCours: 2640, rejetees: 620 },
                { name: 'Cadastre & foncier', total: 31560, traitees: 26340, enCours: 3980, rejetees: 1240 },
                { name: 'Impôts & taxes (OBR)', total: 24870, traitees: 22100, enCours: 1980, rejetees: 790 },
                { name: 'Permis & autorisations', total: 18340, traitees: 15260, enCours: 2340, rejetees: 740 },
                { name: 'CNSS & sécurité sociale', total: 11506, traitees: 9725, enCours: 1513, rejetees: 268 }
            ];
            // ============================================================
            // ACTIVITÉS
            // ============================================================
            this.recentRegistrations = [
                { name: 'Ndayishimiye J.', time: 'Il y a 4 min' },
                { name: 'Niyonzima C.', time: 'Il y a 18 min' },
                { name: 'Irakoze D.', time: 'Il y a 42 min' },
                { name: 'Bukuru A.', time: 'Il y a 1 h' },
                { name: 'Nizigiyimana P.', time: 'Il y a 2 h' }
            ];
            this.pendingRequests = [
                { label: 'Vérification KYC', value: 312 },
                { label: 'Retraits en attente', value: 184 },
                { label: 'Litiges transactions', value: 57 },
                { label: 'Comptes suspendus', value: 23 },
                { label: 'Demandes agents', value: 41 }
            ];
            this.agentActivities = [
                { label: 'Nouveaux agents', value: 86 },
                { label: 'Points de service actifs', value: 1198 },
                { label: 'Volume traité', value: '412M Fbu' },
                { label: 'Taux de réussite', value: '97.4%' }
            ];
            this.quickAccess = [
                { label: 'Nouvel utilisateur', icon: 'fa-solid fa-user-plus', link: '/users/create', color: 'c-sun' },
                { label: 'Signalements', icon: 'fa-solid fa-flag', link: '/reports', color: 'c-red' },
                { label: 'Nouveau rapport', icon: 'fa-solid fa-file-invoice-dollar', link: '/reports/new', color: 'c-green' },
                { label: 'Paramètres', icon: 'fa-solid fa-gear', link: '/settings', color: 'c-blue' }
            ];
        }
        // ============================================================
        // CYCLE DE VIE
        // ============================================================
        ngOnInit() {
            this.initClock();
            this.loadTheme();
        }
        ngAfterViewInit() {
            setTimeout(() => {
                this.initChart();
            }, 500);
        }
        ngOnDestroy() {
            if (this.clockSubscription) {
                this.clockSubscription.unsubscribe();
            }
            if (this.chartInstance) {
                this.chartInstance.destroy();
                this.chartInstance = null;
            }
        }
        // ============================================================
        // HORLOGE
        // ============================================================
        initClock() {
            this.updateClock();
            this.clockSubscription = interval(1000).subscribe(() => {
                this.updateClock();
            });
        }
        updateClock() {
            const now = new Date();
            const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
            const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
            this.currentDay = `${days[this.currentDate.getDay()]} ${this.currentDate.getDate()} ${months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
            this.currentTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        }
        // ============================================================
        // GRAPHIQUE
        // ============================================================
        initChart() {
            if (!this.chartCanvas)
                return;
            const ctx = this.chartCanvas.nativeElement.getContext('2d');
            if (!ctx)
                return;
            const gradient = ctx.createLinearGradient(0, 0, 0, 220);
            gradient.addColorStop(0, 'rgba(242,183,5,0.28)');
            gradient.addColorStop(1, 'rgba(242,183,5,0)');
            this.chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                    datasets: [{
                            data: [62, 74, 58, 91, 86, 102, 95],
                            borderColor: '#F2B705',
                            backgroundColor: gradient,
                            borderWidth: 2.5,
                            pointRadius: 0,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: '#F2B705',
                            pointHoverBorderColor: '#0A0F1C',
                            tension: 0.4,
                            fill: true
                        }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: {
                                color: '#8D96AC',
                                font: { family: 'Inter', size: 11 }
                            }
                        },
                        y: {
                            grid: { color: this.isDarkMode ? '#1B2540' : '#E2E8F0' },
                            ticks: {
                                color: '#8D96AC',
                                font: { family: 'IBM Plex Mono', size: 10 }
                            }
                        }
                    }
                }
            });
        }
        // ============================================================
        // GESTION DE LA SIDEBAR
        // ============================================================
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        }
        closeSidebar() {
            this.isSidebarOpen = false;
        }
        // ============================================================
        // ICÔNES DYNAMIQUES (sidebar + thème)
        // ============================================================
        // Icône du bouton menu : hamburger quand fermé, croix quand ouvert
        get menuToggleIcon() {
            return this.isSidebarOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
        // Icône du bouton thème : soleil en mode sombre (clic → passer en clair),
        // lune en mode clair (clic → repasser en sombre)
        get themeToggleIcon() {
            return this.isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
        // ============================================================
        // THÈME
        // ============================================================
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('light-mode', !this.isDarkMode);
            localStorage.setItem('iblopay_theme', this.isDarkMode ? 'dark' : 'light');
            // Mettre à jour le graphique
            if (this.chartInstance) {
                const ctx = this.chartCanvas.nativeElement.getContext('2d');
                if (ctx) {
                    this.chartInstance.options.scales.y.grid.color = this.isDarkMode ? '#1B2540' : '#E2E8F0';
                    this.chartInstance.update();
                }
            }
        }
        loadTheme() {
            const savedTheme = localStorage.getItem('iblopay_theme');
            if (savedTheme === 'light') {
                this.isDarkMode = false;
                document.body.classList.add('light-mode');
            }
            else {
                this.isDarkMode = true;
                document.body.classList.remove('light-mode');
            }
        }
        // ============================================================
        // MÉTHODES PUBLIQUES
        // ============================================================
        refreshData() {
            this.isRefreshing = true;
            const icon = document.querySelector('.refresh-btn i');
            if (icon)
                icon.classList.add('spinning');
            setTimeout(() => {
                this.isRefreshing = false;
                if (icon)
                    icon.classList.remove('spinning');
                // Mettre à jour le graphique
                if (this.chartInstance) {
                    const newData = [62 + Math.random() * 20, 74 + Math.random() * 20, 58 + Math.random() * 20, 91 + Math.random() * 20, 86 + Math.random() * 20, 102 + Math.random() * 20, 95 + Math.random() * 20];
                    this.chartInstance.data.datasets[0].data = newData;
                    this.chartInstance.update();
                }
            }, 1200);
        }
        handleKeyboardEvent(event) {
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                const searchInput = document.querySelector('.search-input');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }
        }
        // ============================================================
        // UTILITAIRES
        // ============================================================
        formatNumber(value) {
            if (typeof value === 'string') {
                return value;
            }
            return value.toLocaleString('fr-FR');
        }
        formatAmount(amount) {
            return amount.toLocaleString('fr-FR') + ' Fbu';
        }
        getChangeClass(change) {
            return change >= 0 ? 'positive' : 'negative';
        }
        getChangeSymbol(change) {
            return change >= 0 ? '+' : '';
        }
    };
    __setFunctionName(_classThis, "DashboardComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _chartCanvas_decorators = [ViewChild('chartCanvas')];
        _handleKeyboardEvent_decorators = [HostListener('window:keydown', ['$event'])];
        __esDecorate(_classThis, null, _handleKeyboardEvent_decorators, { kind: "method", name: "handleKeyboardEvent", static: false, private: false, access: { has: obj => "handleKeyboardEvent" in obj, get: obj => obj.handleKeyboardEvent }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _chartCanvas_decorators, { kind: "field", name: "chartCanvas", static: false, private: false, access: { has: obj => "chartCanvas" in obj, get: obj => obj.chartCanvas, set: (obj, value) => { obj.chartCanvas = value; } }, metadata: _metadata }, _chartCanvas_initializers, _chartCanvas_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DashboardComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DashboardComponent = _classThis;
})();
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map