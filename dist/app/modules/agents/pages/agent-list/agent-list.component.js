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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// src/app/modules/agents/pages/agent-list/agent-list.component.ts
import { Component } from '@angular/core';
let AgentListComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-agent-list',
            templateUrl: './agent-list.component.html',
            styleUrls: ['./agent-list.component.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AgentListComponent = _classThis = class {
        constructor(agentService, router) {
            this.agentService = agentService;
            this.router = router;
            this.agents = [];
            this.filteredAgents = [];
            this.isLoading = false;
            this.searchTerm = '';
            this.selectedStatus = '';
            this.isDarkMode = false;
            this.showNotifications = false;
            this.notifications = [
                {
                    id: 1,
                    title: 'Nouveau Super Agent',
                    message: 'Jean Mukiza a été ajouté comme Super Agent',
                    type: 'success',
                    time: 'Il y a 5 minutes',
                    read: false
                },
                {
                    id: 2,
                    title: 'Transaction importante',
                    message: 'Une transaction de 5 000 000 Fbu a été effectuée',
                    type: 'info',
                    time: 'Il y a 15 minutes',
                    read: false
                },
                {
                    id: 3,
                    title: 'Agent bloqué',
                    message: 'Henry Muhirwa a été bloqué suite à une fraude',
                    type: 'error',
                    time: 'Il y a 1 heure',
                    read: false
                },
                {
                    id: 4,
                    title: 'Mise à jour système',
                    message: 'Le système sera mis à jour le 15/07/2024 à 02:00',
                    type: 'warning',
                    time: 'Il y a 2 heures',
                    read: false
                }
            ];
            this.stats = {
                total: 0,
                active: 0,
                pending: 0,
                blocked: 0,
                totalElectronics: 0,
                totalElectronicsAmount: 0,
                totalAgents: 0,
                totalDeposits: 0,
                totalDepositAmount: 0,
                totalTransactionAmount: 0
            };
            this.statuses = [
                { value: '', label: 'Tous les statuts' },
                { value: 'ACTIVE', label: 'Actif' },
                { value: 'PENDING', label: 'En attente' },
                { value: 'SUSPENDED', label: 'Suspendu' },
                { value: 'BLOCKED', label: 'Bloqué' },
                { value: 'INACTIVE', label: 'Inactif' }
            ];
            this.currentPage = 1;
            this.itemsPerPage = 10;
        }
        ngOnInit() {
            this.loadAgents();
            this.loadTheme();
        }
        loadTheme() {
            const saved = localStorage.getItem('iblopay-theme');
            if (saved === 'dark') {
                this.isDarkMode = true;
                document.body.classList.add('dark-mode');
            }
        }
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('iblopay-theme', this.isDarkMode ? 'dark' : 'light');
        }
        toggleNotifications() {
            this.showNotifications = !this.showNotifications;
        }
        markAllRead() {
            this.notifications.forEach(n => n.read = true);
        }
        removeNotification(id) {
            this.notifications = this.notifications.filter(n => n.id !== id);
        }
        loadAgents() {
            this.isLoading = true;
            this.agentService.getAgents().subscribe({
                next: (data) => {
                    this.agents = data;
                    this.filteredAgents = data;
                    this.isLoading = false;
                    this.loadStats();
                },
                error: () => {
                    this.isLoading = false;
                }
            });
        }
        // Dans agent-list.component.ts, mettre à jour loadStats()
        loadStats() {
            this.agentService.getAgentStats().subscribe({
                next: (stats) => {
                    let totalElectronicsAmount = 0;
                    this.agents.forEach(agent => {
                        agent.electronics?.forEach(e => {
                            totalElectronicsAmount += e.amountInCirculation || 0;
                        });
                    });
                    this.stats = {
                        ...stats,
                        totalElectronicsAmount: totalElectronicsAmount
                    };
                }
            });
        }
        applyFilters() {
            this.filteredAgents = this.agents.filter(agent => {
                const searchLower = this.searchTerm.toLowerCase().trim();
                const matchesSearch = this.searchTerm === '' ||
                    agent.firstName.toLowerCase().includes(searchLower) ||
                    agent.lastName.toLowerCase().includes(searchLower) ||
                    agent.phone.includes(searchLower) ||
                    agent.cardNumber.toLowerCase().includes(searchLower) ||
                    agent.code.toLowerCase().includes(searchLower) ||
                    agent.address.completeAddress.toLowerCase().includes(searchLower);
                const matchesStatus = this.selectedStatus === '' || agent.status === this.selectedStatus;
                return matchesSearch && matchesStatus;
            });
            this.currentPage = 1;
        }
        onSearch(event) {
            this.searchTerm = event.target.value;
            this.applyFilters();
        }
        onStatusChange(event) {
            this.selectedStatus = event.target.value;
            this.applyFilters();
        }
        resetFilters() {
            this.searchTerm = '';
            this.selectedStatus = '';
            this.applyFilters();
        }
        viewAgent(agent) {
            this.router.navigate(['/agents/detail', agent.id]);
        }
        createAgent() {
            this.router.navigate(['/agents/create']);
        }
        blockAgent(agent) {
            const action = agent.status === 'BLOCKED' ? 'débloquer' : 'bloquer';
            if (confirm(`Voulez-vous vraiment ${action} le super agent ${agent.firstName} ${agent.lastName} ?`)) {
                const newStatus = agent.status === 'BLOCKED' ? 'ACTIVE' : 'BLOCKED';
                this.agentService.updateAgent(agent.id, { status: newStatus }).subscribe({
                    next: () => {
                        this.loadAgents();
                        // Ajouter une notification
                        this.notifications.unshift({
                            id: Date.now(),
                            title: `Agent ${action === 'bloquer' ? 'bloqué' : 'débloqué'}`,
                            message: `${agent.firstName} ${agent.lastName} a été ${action === 'bloquer' ? 'bloqué' : 'débloqué'} avec succès`,
                            type: action === 'bloquer' ? 'error' : 'success',
                            time: 'À l\'instant',
                            read: false
                        });
                    },
                    error: () => {
                        alert('Erreur lors du blocage/déblocage');
                    }
                });
            }
        }
        getTotalElectronicsAmount(agent) {
            if (!agent.electronics || agent.electronics.length === 0) {
                return 0;
            }
            return agent.electronics.reduce((total, e) => total + (e.amountInCirculation || 0), 0);
        }
        getStatusLabel(status) {
            const labels = {
                'ACTIVE': 'Actif',
                'PENDING': 'En attente',
                'SUSPENDED': 'Suspendu',
                'BLOCKED': 'Bloqué',
                'INACTIVE': 'Inactif'
            };
            return labels[status] || status;
        }
        getStatusClass(status) {
            const classes = {
                'ACTIVE': 'active',
                'PENDING': 'pending',
                'SUSPENDED': 'suspended',
                'BLOCKED': 'blocked',
                'INACTIVE': 'inactive'
            };
            return classes[status] || '';
        }
        getInitials(firstName, lastName) {
            return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
        }
        get paginatedAgents() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredAgents.slice(start, end);
        }
        get totalPages() {
            return Math.ceil(this.filteredAgents.length / this.itemsPerPage);
        }
        changePage(direction) {
            if (direction === 'prev' && this.currentPage > 1) {
                this.currentPage--;
            }
            else if (direction === 'next' && this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        }
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        }
        getStartIndex() {
            return this.filteredAgents.length > 0 ? (this.currentPage - 1) * this.itemsPerPage + 1 : 0;
        }
        getEndIndex() {
            return Math.min(this.currentPage * this.itemsPerPage, this.filteredAgents.length);
        }
    };
    __setFunctionName(_classThis, "AgentListComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AgentListComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AgentListComponent = _classThis;
})();
export { AgentListComponent };
//# sourceMappingURL=agent-list.component.js.map