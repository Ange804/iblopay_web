import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePublic } from '../../models/service-public.model';
import { ServicesPublicsService } from '../../services/services-publics.service';

@Component({
    selector: 'app-services-publics-edit',
    standalone: false,
    templateUrl: './services-publics-edit.component.html',
    styleUrls: ['./services-publics-edit.component.scss']
})
export class ServicesPublicsEditComponent implements OnInit {

    service: ServicePublic | undefined;
    loading = false;
    error: string = '';
    isNew: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private servicesPublicsService: ServicesPublicsService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');

        if (id === 'new') {
            this.isNew = true;
            this.service = this.getEmptyService();
            this.loading = false;
        } else {
            this.isNew = false;
            this.loading = true;
            this.servicesPublicsService.getById(Number(id)).subscribe({
                next: (data) => {
                    if (data) {
                        this.service = data;
                    } else {
                        this.error = 'Service non trouvé';
                    }
                    this.loading = false;
                },
                error: (err) => {
                    this.error = 'Erreur lors du chargement du service';
                    this.loading = false;
                    console.error(err);
                }
            });
        }
    }

    getEmptyService(): ServicePublic {
        return {
            id: 0,
            numero: 0,
            abreviation: '',
            description: '',
            type: 'INTERNE',
            actif: true,
            dateCreation: new Date(),
            version: '1.0.0',
            responsable: '',
            email: '',
            telephone: '',
            siteWeb: '',
            utilisateurs: [],
            categories: [],
            typesRNF: [],
            paiements: []
        };
    }

    goBack(): void {
        this.router.navigate(['/services-publics']);
    }

    cancel(): void {
        this.router.navigate(['/services-publics']);
    }

    onSubmit(): void {
        if (!this.service) return;

        // Validation
        if (!this.service.abreviation || !this.service.description) {
            this.error = 'Veuillez remplir tous les champs obligatoires';
            return;
        }

        const operation = this.service.id === 0
            ? this.servicesPublicsService.create(this.service)
            : this.servicesPublicsService.update(this.service);

        operation.subscribe({
            next: (result) => {
                this.router.navigate(['/services-publics']);
            },
            error: (err) => {
                this.error = 'Erreur lors de l\'enregistrement du service';
                console.error(err);
            }
        });
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
}