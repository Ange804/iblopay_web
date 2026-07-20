import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  // ============================================================
  // PROPRIÉTÉS PUBLIQUES
  // ============================================================

  currentDate: Date = new Date(2026, 6, 15);
  currentTime: string = '';
  currentDay: string = '';
  isRefreshing: boolean = false;
  isDarkMode: boolean = true;

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chartInstance: Chart | null = null;
  private clockSubscription?: Subscription;

  // ============================================================
  // CARTES STATISTIQUES
  // ============================================================

  stats = [
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

  provinceData = {
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

  services = [
    { name: 'État civil', total: 42180, traitees: 38920, enCours: 2640, rejetees: 620 },
    { name: 'Cadastre & foncier', total: 31560, traitees: 26340, enCours: 3980, rejetees: 1240 },
    { name: 'Impôts & taxes (OBR)', total: 24870, traitees: 22100, enCours: 1980, rejetees: 790 },
    { name: 'Permis & autorisations', total: 18340, traitees: 15260, enCours: 2340, rejetees: 740 },
    { name: 'CNSS & sécurité sociale', total: 11506, traitees: 9725, enCours: 1513, rejetees: 268 }
  ];

  // ============================================================
  // ACTIVITÉS
  // ============================================================

  recentRegistrations = [
    { name: 'Ndayishimiye J.', time: 'Il y a 4 min' },
    { name: 'Niyonzima C.', time: 'Il y a 18 min' },
    { name: 'Irakoze D.', time: 'Il y a 42 min' },
    { name: 'Bukuru A.', time: 'Il y a 1 h' },
    { name: 'Nizigiyimana P.', time: 'Il y a 2 h' }
  ];

  pendingRequests = [
    { label: 'Vérification KYC', value: 312 },
    { label: 'Retraits en attente', value: 184 },
    { label: 'Litiges transactions', value: 57 },
    { label: 'Comptes suspendus', value: 23 },
    { label: 'Demandes agents', value: 41 }
  ];

  agentActivities = [
    { label: 'Nouveaux agents', value: 86 },
    { label: 'Points de service actifs', value: 1198 },
    { label: 'Volume traité', value: '412M Fbu' },
    { label: 'Taux de réussite', value: '97.4%' }
  ];

  quickAccess = [
    { label: 'Nouvel utilisateur', icon: 'fa-solid fa-user-plus', link: '/users/create', color: 'c-sun' },
    { label: 'Signalements', icon: 'fa-solid fa-flag', link: '/reports', color: 'c-red' },
    { label: 'Nouveau rapport', icon: 'fa-solid fa-file-invoice-dollar', link: '/reports/new', color: 'c-green' },
    { label: 'Paramètres', icon: 'fa-solid fa-gear', link: '/settings', color: 'c-blue' }
  ];

  constructor(
    private router: Router
  ) { }

  // ============================================================
  // CYCLE DE VIE
  // ============================================================

  ngOnInit(): void {
    this.initClock();
    this.loadTheme();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initChart();
    }, 500);
  }

  ngOnDestroy(): void {
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

  private initClock(): void {
    this.updateClock();
    this.clockSubscription = new Subscription();
  }

  private updateClock(): void {
    const now = new Date();
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    this.currentDay = `${days[this.currentDate.getDay()]} ${this.currentDate.getDate()} ${months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
    this.currentTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  // ============================================================
  // GRAPHIQUE
  // ============================================================

  private initChart(): void {
    if (!this.chartCanvas) return;
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

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
  // THÈME
  // ============================================================

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('iblopay_theme');
    if (savedTheme === 'light') {
      this.isDarkMode = false;
    } else {
      this.isDarkMode = true;
    }
  }

  // ============================================================
  // MÉTHODES PUBLIQUES
  // ============================================================

  refreshData(): void {
    this.isRefreshing = true;
    const icon = document.querySelector('.refresh-btn i');
    if (icon) icon.classList.add('spinning');

    setTimeout(() => {
      this.isRefreshing = false;
      if (icon) icon.classList.remove('spinning');

      // Mettre à jour le graphique
      if (this.chartInstance) {
        const newData = [62 + Math.random() * 20, 74 + Math.random() * 20, 58 + Math.random() * 20, 91 + Math.random() * 20, 86 + Math.random() * 20, 102 + Math.random() * 20, 95 + Math.random() * 20];
        this.chartInstance.data.datasets[0]!.data = newData;
        this.chartInstance.update();
      }
    }, 1200);
  }

  // ============================================================
  // UTILITAIRES
  // ============================================================

  formatNumber(value: any): string {
    if (typeof value === 'string') {
      return value;
    }
    return value.toLocaleString('fr-FR');
  }

  formatAmount(amount: number): string {
    return amount.toLocaleString('fr-FR') + ' Fbu';
  }

  getChangeClass(change: number): string {
    return change >= 0 ? 'positive' : 'negative';
  }

  getChangeSymbol(change: number): string {
    return change >= 0 ? '+' : '';
  }
}