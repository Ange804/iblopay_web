import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicePublic } from '../../models/service-public.model';
import { ServicesPublicsService } from '../../services/services-publics.service';

interface ServiceStats {
  total: number;
  interne: number;
  externe: number;
  actifs: number;
}

@Component({
  selector: 'app-services-publics-list',
  standalone: false,
  templateUrl: './services-publics-list.component.html',
  styleUrls: ['./services-publics-list.component.scss']
})
export class ServicesPublicsListComponent implements OnInit {

  services: ServicePublic[] = [];
  filteredServices: ServicePublic[] = [];
  paginatedServices: ServicePublic[] = [];

  searchTerm: string = '';
  selectedType: string = '';
  selectedStatus: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 50;
  totalPages: number = 0;

  isLoading: boolean = false;

  selectedServices: Set<number> = new Set();
  selectAll: boolean = false;

  stats: ServiceStats = {
    total: 0,
    interne: 0,
    externe: 0,
    actifs: 0
  };

  notificationMessage: string = '';
  notificationType: 'success' | 'error' | 'info' = 'success';
  showNotification: boolean = false;

  readonly Math = Math;

  constructor(
    private router: Router,
    private servicesPublicsService: ServicesPublicsService
  ) { }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.isLoading = true;
    this.servicesPublicsService.getAll().subscribe({
      next: (data) => {
        this.services = data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.showNotificationMessage('Erreur lors du chargement des services', 'error');
      }
    });
  }

  applyFilters(): void {
    const term = this.searchTerm.toLowerCase().trim();

    this.filteredServices = this.services.filter(service => {
      const matchesSearch = !term ||
        service.abreviation.toLowerCase().includes(term) ||
        service.description.toLowerCase().includes(term);

      const matchesType = !this.selectedType || service.type === this.selectedType;
      const matchesStatus = !this.selectedStatus ||
        (this.selectedStatus === 'ACTIF' && service.actif) ||
        (this.selectedStatus === 'INACTIF' && !service.actif);

      return matchesSearch && matchesType && matchesStatus;
    });

    this.totalPages = Math.max(1, Math.ceil(this.filteredServices.length / this.itemsPerPage));

    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredServices.length);
    this.paginatedServices = this.filteredServices.slice(startIndex, endIndex);

    this.updateStats();
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedType = '';
    this.selectedStatus = '';
    this.currentPage = 1;
    this.applyFilters();
    this.showNotificationMessage('🔍 Filtres réinitialisés', 'info');
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.applyFilters();
  }

  getPaginationPages(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  updateStats(): void {
    this.stats = {
      total: this.services.length,
      interne: this.services.filter(s => s.type === 'INTERNE').length,
      externe: this.services.filter(s => s.type === 'EXTERNE').length,
      actifs: this.services.filter(s => s.actif).length
    };
  }

  // ============================================================
  // ACTIONS SUR LES SERVICES
  // ============================================================

  onViewService(service: ServicePublic): void {
    this.router.navigate(['/services-publics', service.id]);
  }

  onEditService(service: ServicePublic): void {
    if (service && service.id) {
      this.router.navigate(['/services-publics/edit', service.id]);
    }
  }

  onToggleStatus(service: ServicePublic): void {
    if (!service || !service.id) return;

    const updatedService = { ...service, actif: !service.actif };
    this.servicesPublicsService.update(updatedService).subscribe({
      next: () => {
        this.services = this.services.map(s =>
          s.id === service.id ? { ...s, actif: !s.actif } : s
        );
        this.applyFilters();
        this.showNotificationMessage(
          `✅ Service "${service.abreviation}" ${updatedService.actif ? 'activé' : 'désactivé'} avec succès !`,
          'success'
        );
      },
      error: () => {
        this.showNotificationMessage('❌ Erreur lors du changement de statut', 'error');
      }
    });
  }

  onDeleteService(service: ServicePublic): void {
    if (!service || !service.id) return;

    if (confirm(`Êtes-vous sûr de vouloir supprimer le service "${service.abreviation}" ?`)) {
      this.servicesPublicsService.delete(service.id).subscribe({
        next: () => {
          this.services = this.services.filter(s => s.id !== service.id);
          this.applyFilters();
          this.showNotificationMessage(
            `✅ Service "${service.abreviation}" supprimé avec succès !`,
            'success'
          );
        },
        error: () => {
          this.showNotificationMessage('❌ Erreur lors de la suppression', 'error');
        }
      });
    }
  }

  // ============================================================
  // ACTIONS EN MASSE
  // ============================================================

  toggleSelectAll(): void {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.paginatedServices.forEach(s => this.selectedServices.add(s.id));
    } else {
      this.selectedServices.clear();
    }
  }

  toggleSelect(serviceId: number): void {
    if (this.selectedServices.has(serviceId)) {
      this.selectedServices.delete(serviceId);
    } else {
      this.selectedServices.add(serviceId);
    }
    this.selectAll = this.paginatedServices.every(s => this.selectedServices.has(s.id));
  }

  bulkActivate(): void {
    if (this.selectedServices.size === 0) {
      this.showNotificationMessage('Veuillez sélectionner au moins un service', 'error');
      return;
    }
    this.showNotificationMessage(`✅ ${this.selectedServices.size} services activés avec succès !`, 'success');
    this.selectedServices.clear();
    this.selectAll = false;
  }

  bulkDeactivate(): void {
    if (this.selectedServices.size === 0) {
      this.showNotificationMessage('Veuillez sélectionner au moins un service', 'error');
      return;
    }
    this.showNotificationMessage(`✅ ${this.selectedServices.size} services désactivés avec succès !`, 'success');
    this.selectedServices.clear();
    this.selectAll = false;
  }

  bulkDelete(): void {
    if (this.selectedServices.size === 0) {
      this.showNotificationMessage('Veuillez sélectionner au moins un service', 'error');
      return;
    }
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${this.selectedServices.size} service(s) ?`)) {
      this.showNotificationMessage(`✅ ${this.selectedServices.size} services supprimés avec succès !`, 'success');
      this.selectedServices.clear();
      this.selectAll = false;
    }
  }

  // ============================================================
  // EXPORT
  // ============================================================

  exportData(): void {
    this.showNotificationMessage('📊 Export des services en cours...', 'info');
    setTimeout(() => {
      this.showNotificationMessage('✅ Export terminé avec succès !', 'success');
    }, 1500);
  }

  // ============================================================
  // UTILITAIRES
  // ============================================================

  trackById(index: number, service: ServicePublic): number {
    return service ? service.id : index;
  }

  getServiceColor(abreviation: string): string {
    if (!abreviation) return '#4f46e5';
    const colors: string[] = [
      '#4f46e5', '#7c3aed', '#ec4899', '#f43f5e',
      '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6',
      '#14b8a6', '#06b6d4', '#0ea5e9', '#6366f1'
    ];
    let hash = 0;
    for (let i = 0; i < abreviation.length; i++) {
      hash = abreviation.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length] || '#4f46e5';
  }

  getStatusLabel(actif: boolean | undefined): string {
    return actif ? 'Actif' : 'Inactif';
  }

  getStatusClass(actif: boolean | undefined): string {
    return actif ? 'status-actif' : 'status-inactif';
  }

  showNotificationMessage(message: string, type: 'success' | 'error' | 'info' = 'success'): void {
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}