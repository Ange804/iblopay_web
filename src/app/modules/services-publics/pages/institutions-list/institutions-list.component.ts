import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Institution } from '../../models/service-public.model';
import { ServicesPublicsService } from '../../services/services-publics.service';

@Component({
    selector: 'app-institutions-list',
    standalone: false,
    templateUrl: './institutions-list.component.html',
    styleUrls: ['./institutions-list.component.scss']
})
export class InstitutionsListComponent implements OnInit {

    institutions: Institution[] = [];
    serviceId: number = 0;
    loading = false;
    notFound = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private servicesPublicsService: ServicesPublicsService
    ) { }

    ngOnInit(): void {
        this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
        this.loading = true;
        this.servicesPublicsService.getById(this.serviceId).subscribe({
            next: (data) => {
                this.institutions = data?.institutions || [];
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
        this.router.navigate(['/services-publics', this.serviceId]);
    }

    getServiceColor(code: string): string {
        const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#f43f5e', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
        let hash = 0;
        for (let i = 0; i < code.length; i++) {
            hash = code.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length] || '#4f46e5';
    }

    getInstitutionTypeLabel(type: string): string {
        const labels: Record<string, string> = {
            'ARCT': 'ARCT',
            'OBM': 'OBM',
            'OBPE': 'OBPE',
            'OBUHA': 'OBUHA',
            'ARCA': 'ARCA',
            'MINEDUC': 'Ministère Éducation',
            'MININTER': 'Ministère Intérieur',
            'MINJUST': 'Ministère Justice',
            'MINREX': 'Ministère Relations Extérieures',
            'ABREMA': 'ABREMA',
            'OHP': 'OHP',
            'LONA': 'LONA',
            'OTRACO': 'OTRACO',
            'AUTRE': 'Autre'
        };
        return labels[type] || type;
    }

    onViewInstitution(institution: Institution): void {
        console.log('Voir institution:', institution);
    }

    onEditInstitution(institution: Institution): void {
        if (this.serviceId) {
            this.router.navigate(['/services-publics/edit', this.serviceId, 'institution', institution.id]);
        }
    }

    onToggleInstitution(institution: Institution): void {
        institution.actif = !institution.actif;
    }

    onAddInstitution(): void {
        if (this.serviceId) {
            this.router.navigate(['/services-publics/edit', this.serviceId, 'institution', 'new']);
        }
    }

    exportData(): void {
        console.log('Export des institutions');
    }
}