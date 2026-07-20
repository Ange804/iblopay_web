// src/app/modules/agents/pages/agent-list/agent-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../models/agent.model';
import { AgentService } from '../../services/agent.service';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
  time: string;
  read: boolean;
}

interface FundData {
  receiptReference: string;
  amount: number;
  bank: string;
  branch: string;
  depositDate: string;
  trustAccountVerified: boolean;
  adminNote: string;
}

interface RecentFund {
  agentName: string;
  receiptReference: string;
  amount: number;
  date: Date;
}

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {
  agents: Agent[] = [];
  filteredAgents: Agent[] = [];
  isLoading = false;
  searchTerm = '';
  selectedStatus = '';
  isDarkMode = false;
  showNotifications = false;
  
  // ─── Modal OTP ──────────────────────────────
  showOtpModal = false;
  otpCode = '';
  otpError = '';
  otpLoading = false;
  otpCooldown = 0;
  otpCanResend = false;
  private otpTimerInterval: any;
  agentToBlock: Agent | null = null;
  blockAction: 'bloquer' | 'débloquer' = 'bloquer';

  // ─── Modal Approvisionnement ────────────────
  showFundModal = false;
  fundLoading = false;
  fundError = '';
  fundSuccess = '';
  agentToFund: Agent | null = null;
  recentFunds: RecentFund[] = [];
  
  fundData: FundData = {
    receiptReference: '',
    amount: 0,
    bank: '',
    branch: '',
    depositDate: '',
    trustAccountVerified: false,
    adminNote: ''
  };

  notifications: Notification[] = [
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

  stats = {
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

  statuses = [
    { value: '', label: 'Tous les statuts' },
    { value: 'ACTIVE', label: 'Actif' },
    { value: 'PENDING', label: 'En attente' },
    { value: 'SUSPENDED', label: 'Suspendu' },
    { value: 'BLOCKED', label: 'Bloqué' },
    { value: 'INACTIVE', label: 'Inactif' }
  ];

  currentPage = 1;
  itemsPerPage = 10;

  constructor(
    private agentService: AgentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAgents();
    this.loadTheme();
    this.loadRecentFunds();
  }

  ngOnDestroy(): void {
    this.clearOtpTimer();
  }

  loadTheme(): void {
    const saved = localStorage.getItem('iblopay-theme');
    if (saved === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('iblopay-theme', this.isDarkMode ? 'dark' : 'light');
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  markAllRead(): void {
    this.notifications.forEach(n => n.read = true);
  }

  removeNotification(id: number): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

  loadAgents(): void {
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

  loadStats(): void {
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

  loadRecentFunds(): void {
    // Simuler le chargement des approvisionnements récents
    this.recentFunds = [
      {
        agentName: 'Jean Mukiza',
        receiptReference: 'DEP-2026-07-16-001',
        amount: 5000000,
        date: new Date()
      },
      {
        agentName: 'Marie Uwimana',
        receiptReference: 'DEP-2026-07-15-003',
        amount: 2500000,
        date: new Date(Date.now() - 3600000)
      },
      {
        agentName: 'Pierre Niyonzima',
        receiptReference: 'DEP-2026-07-15-001',
        amount: 10000000,
        date: new Date(Date.now() - 7200000)
      }
    ];
  }

  applyFilters(): void {
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

  onSearch(event: any): void {
    this.searchTerm = event.target.value;
    this.applyFilters();
  }

  onStatusChange(event: any): void {
    this.selectedStatus = event.target.value;
    this.applyFilters();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = '';
    this.applyFilters();
  }

  viewAgent(agent: Agent): void {
    this.router.navigate(['/agents', agent.id]);
  }

  createAgent(): void {
    this.router.navigate(['/agents/create']);
  }

  // ─── OTP Modal pour blocage/déblocage ───────

  openBlockOtpModal(agent: Agent): void {
    this.agentToBlock = agent;
    this.blockAction = agent.status === 'BLOCKED' ? 'débloquer' : 'bloquer';
    this.otpCode = '';
    this.otpError = '';
    this.showOtpModal = true;
    this.sendOtpSimulation();
  }

  closeOtpModal(): void {
    this.showOtpModal = false;
    this.agentToBlock = null;
    this.otpCode = '';
    this.otpError = '';
    this.otpLoading = false;
    this.clearOtpTimer();
  }

  private sendOtpSimulation(): void {
    this.otpCooldown = 30;
    this.otpCanResend = false;
    this.startOtpTimer();
    console.log('[SIMULATION] Code OTP envoyé : 123456');
  }

  private startOtpTimer(): void {
    this.clearOtpTimer();
    this.otpTimerInterval = setInterval(() => {
      if (this.otpCooldown > 0) {
        this.otpCooldown--;
      } else {
        this.otpCanResend = true;
        this.clearOtpTimer();
      }
    }, 1000);
  }

  private clearOtpTimer(): void {
    if (this.otpTimerInterval) {
      clearInterval(this.otpTimerInterval);
      this.otpTimerInterval = null;
    }
  }

  resendOtp(): void {
    if (!this.otpCanResend) return;
    this.otpError = '';
    this.sendOtpSimulation();
  }

  verifyOtpAndBlock(): void {
    if (!this.otpCode || this.otpCode.length < 4) {
      this.otpError = 'Veuillez entrer le code OTP reçu';
      return;
    }

    this.otpLoading = true;
    this.otpError = '';

    setTimeout(() => {
      if (this.otpCode === '123456') {
        this.executeBlock();
      } else {
        this.otpLoading = false;
        this.otpError = 'Code OTP invalide. Veuillez réessayer.';
      }
    }, 1000);
  }

  private executeBlock(): void {
    if (!this.agentToBlock) {
      this.otpLoading = false;
      return;
    }

    const agent = this.agentToBlock;
    const newStatus = agent.status === 'BLOCKED' ? 'ACTIVE' : 'BLOCKED';

    this.agentService.updateAgent(agent.id, { status: newStatus }).subscribe({
      next: () => {
        this.otpLoading = false;
        this.closeOtpModal();
        this.loadAgents();

        this.notifications.unshift({
          id: Date.now(),
          title: `Agent ${this.blockAction === 'bloquer' ? 'bloqué' : 'débloqué'}`,
          message: `${agent.firstName} ${agent.lastName} a été ${this.blockAction === 'bloquer' ? 'bloqué' : 'débloqué'} avec succès`,
          type: this.blockAction === 'bloquer' ? 'error' : 'success',
          time: 'À l\'instant',
          read: false
        });
      },
      error: () => {
        this.otpLoading = false;
        this.otpError = 'Erreur lors du blocage/déblocage';
      }
    });
  }

  // ─── Modal Approvisionnement ────────────────

  openFundModal(agent: Agent): void {
    this.agentToFund = agent;
    this.fundError = '';
    this.fundSuccess = '';
    this.fundData = {
      receiptReference: '',
      amount: 0,
      bank: '',
      branch: '',
      depositDate: this.getDefaultDateTime(),
      trustAccountVerified: false,
      adminNote: ''
    };
    this.showFundModal = true;
  }

  closeFundModal(): void {
    this.showFundModal = false;
    this.agentToFund = null;
    this.fundLoading = false;
    this.fundError = '';
    this.fundSuccess = '';
  }

  private getDefaultDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  submitFund(): void {
    if (!this.agentToFund) {
      this.fundError = 'Aucun agent sélectionné';
      return;
    }

    if (!this.fundData.receiptReference) {
      this.fundError = 'La référence du bordereau est obligatoire';
      return;
    }

    if (!this.fundData.amount || this.fundData.amount <= 0) {
      this.fundError = 'Le montant doit être supérieur à 0';
      return;
    }

    if (!this.fundData.bank) {
      this.fundError = 'Veuillez sélectionner une banque';
      return;
    }

    if (!this.fundData.branch) {
      this.fundError = 'Veuillez saisir le nom de l\'agence';
      return;
    }

    if (!this.fundData.depositDate) {
      this.fundError = 'Veuillez saisir la date du dépôt';
      return;
    }

    if (!this.fundData.trustAccountVerified) {
      this.fundError = 'Vous devez confirmer la vérification sur le Trust Account';
      return;
    }

    this.fundLoading = true;
    this.fundError = '';
    this.fundSuccess = '';

    // Simuler l'appel API
    setTimeout(() => {
      // Créer la transaction d'approvisionnement
      const transaction = {
        id: Date.now(),
        agentId: this.agentToFund!.id,
        agentName: `${this.agentToFund!.firstName} ${this.agentToFund!.lastName}`,
        amount: this.fundData.amount,
        receiptReference: this.fundData.receiptReference,
        bank: this.fundData.bank,
        branch: this.fundData.branch,
        depositDate: this.fundData.depositDate,
        adminNote: this.fundData.adminNote,
        status: 'COMPLETED',
        createdAt: new Date()
      };

      // Ajouter aux approvisionnements récents
      this.recentFunds.unshift({
        agentName: transaction.agentName,
        receiptReference: transaction.receiptReference,
        amount: transaction.amount,
        date: transaction.createdAt
      });

      // Mettre à jour le solde de l'agent
      const agent = this.agentToFund!;
      
      // S'assurer que le tableau electronics existe
      if (!agent.electronics) {
        agent.electronics = [];
      }
      
      // Trouver un electronic actif existant
      const existingElectronic = agent.electronics.find(e => e.status === 'ACTIVE');
      
      if (existingElectronic) {
        // Mettre à jour l'electronic existant
        existingElectronic.amountInCirculation = (existingElectronic.amountInCirculation || 0) + this.fundData.amount;
      } else {
        // Créer un nouvel electronic
        // Récupérer un template depuis le premier electronic s'il existe
        const template = agent.electronics.length > 0 ? agent.electronics[0] : null;
        
        // Construction de l'objet avec toutes les propriétés requises
        const newElectronic: any = {
          id: Date.now().toString(),
          amountInCirculation: this.fundData.amount,
          status: 'ACTIVE',
          type: template?.type || 'e-money',
          brand: template?.brand || 'IBLOPAY',
          model: template?.model || 'Standard',
          serialNumber: template?.serialNumber || `EM-${Date.now()}`
        };
        
        // Ajouter d'autres propriétés si elles existent dans le template
        if (template) {
          // Copier toutes les propriétés existantes du template
          Object.keys(template).forEach(key => {
            if (!(key in newElectronic)) {
              newElectronic[key] = (template as any)[key];
            }
          });
        }
        
        agent.electronics.push(newElectronic);
      }

      // Mettre à jour les stats
      this.stats.totalElectronicsAmount += this.fundData.amount;

      // Notification
      this.notifications.unshift({
        id: Date.now(),
        title: 'Approvisionnement e-Money',
        message: `${agent.firstName} ${agent.lastName} a été crédité de ${this.fundData.amount.toLocaleString()} Fbu`,
        type: 'success',
        time: 'À l\'instant',
        read: false
      });

      this.fundLoading = false;
      this.fundSuccess = `Approvisionnement de ${this.fundData.amount.toLocaleString()} Fbu effectué avec succès !`;

      // Fermer le modal après 2 secondes
      setTimeout(() => {
        this.closeFundModal();
        // Rafraîchir la liste
        this.loadAgents();
      }, 2000);

      console.log('[SIMULATION] Approvisionnement effectué:', transaction);
    }, 2000);
  }

  getTotalElectronicsAmount(agent: Agent): number {
    if (!agent.electronics || agent.electronics.length === 0) {
      return 0;
    }
    return agent.electronics.reduce((total, e) => total + (e.amountInCirculation || 0), 0);
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      'ACTIVE': 'Actif',
      'PENDING': 'En attente',
      'SUSPENDED': 'Suspendu',
      'BLOCKED': 'Bloqué',
      'INACTIVE': 'Inactif'
    };
    return labels[status] || status;
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      'ACTIVE': 'active',
      'PENDING': 'pending',
      'SUSPENDED': 'suspended',
      'BLOCKED': 'blocked',
      'INACTIVE': 'inactive'
    };
    return classes[status] || '';
  }

  getInitials(firstName: string, lastName: string): string {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
  }

  get paginatedAgents(): Agent[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredAgents.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredAgents.length / this.itemsPerPage);
  }

  changePage(direction: 'prev' | 'next'): void {
    if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    } else if (direction === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getStartIndex(): number {
    return this.filteredAgents.length > 0 ? (this.currentPage - 1) * this.itemsPerPage + 1 : 0;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredAgents.length);
  }
}