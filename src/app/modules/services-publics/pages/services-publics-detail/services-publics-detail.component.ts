import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePublic, Commission } from '../../models/service-public.model';
import { ServicesPublicsService } from '../../services/services-publics.service';

@Component({
    selector: 'app-services-publics-detail',
    standalone: false,
    templateUrl: './services-publics-detail.component.html',
    styleUrls: ['./services-publics-detail.component.scss']
})
export class ServicesPublicsDetailComponent implements OnInit {

    service: ServicePublic | undefined;
    loading = false;
    notFound = false;

    selectedService: ServicePublic | null = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private servicesPublicsService: ServicesPublicsService
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.loading = true;
        this.servicesPublicsService.getById(id).subscribe({
            next: (data) => {
                this.service = data;
                this.notFound = !data;
                this.loading = false;
            },
            error: () => {
                this.notFound = true;
                this.loading = false;
            }
        });
    }

    goBack(): void {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    onEdit(): void {
        if (this.service) {
            this.router.navigate(['/services-publics/edit', this.service.id]);
        }
    }

    // ✅ NOUVEAU : Méthode pour activer
    onActivate(): void {
        if (!this.service || this.service.actif) return;

        const updatedService = { ...this.service, actif: true };
        this.servicesPublicsService.update(updatedService).subscribe({
            next: () => {
                this.service = updatedService;
                // Optionnel : notification de succès
            },
            error: () => {
                // Gérer l'erreur
            }
        });
    }

    // ✅ NOUVEAU : Méthode pour désactiver
    onDeactivate(): void {
        if (!this.service || !this.service.actif) return;

        const updatedService = { ...this.service, actif: false };
        this.servicesPublicsService.update(updatedService).subscribe({
            next: () => {
                this.service = updatedService;
                // Optionnel : notification de succès
            },
            error: () => {
                // Gérer l'erreur
            }
        });
    }

    onToggleStatus(): void {
        if (!this.service) return;

        const updatedService = { ...this.service, actif: !this.service.actif };
        this.servicesPublicsService.update(updatedService).subscribe({
            next: () => {
                this.service = updatedService;
            },
            error: () => {
                // Gérer l'erreur
            }
        });
    }

    onEditService(service: ServicePublic): void {
        if (service && service.id) {
            this.router.navigate(['/services-publics/edit', service.id]);
        }
    }

    fermerDetail(): void {
        this.selectedService = null;
    }

    onAddCommission(): void {
        if (this.service) {
            this.router.navigate(['/services-publics/edit', this.service.id, 'commission', 'new']);
        }
    }

    onEditCommission(commission: Commission): void {
        if (this.service && commission) {
            this.router.navigate(['/services-publics/edit', this.service.id, 'commission', commission.id]);
        }
    }

    onDeleteCommission(commissionId: number): void {
        if (!this.service || !commissionId) return;

        if (confirm('Êtes-vous sûr de vouloir supprimer cette commission ?')) {
            this.servicesPublicsService.deleteCommission(this.service.id, commissionId).subscribe({
                next: () => {
                    if (this.service && this.service.commissions) {
                        this.service.commissions = this.service.commissions.filter(c => c.id !== commissionId);
                    }
                },
                error: (err) => {
                    console.error('Erreur lors de la suppression de la commission:', err);
                }
            });
        }
    }

    onExport(): void {
        if (!this.service) return;
        console.log('Export des données pour le service:', this.service.abreviation);
    }

    getTotalTransactions(): number {
        if (!this.service || !this.service.transactions) return 0;
        return this.service.transactions.reduce((sum, t) => sum + (t.montant || 0), 0);
    }

    getServiceColor(abreviation: string): string {
        if (!abreviation) return '#4f46e5';

        const colors: string[] = [
            '#4f46e5', '#7c3aed', '#ec4899', '#f43f5e',
            '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6',
            '#14b8a6', '#06b6d4', '#0ea5e9', '#6366f1',
            '#84cc16', '#22c55e', '#ef4444', '#f97316'
        ];
        let hash = 0;
        for (let i = 0; i < abreviation.length; i++) {
            hash = abreviation.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % colors.length;
        return colors[index] || '#4f46e5';
    }

    getStatusClass(actif: boolean | undefined): string {
        return actif ? 'status-actif' : 'status-inactif';
    }

    getStatusLabel(actif: boolean | undefined): string {
        return actif ? 'Actif' : 'Inactif';
    }
}