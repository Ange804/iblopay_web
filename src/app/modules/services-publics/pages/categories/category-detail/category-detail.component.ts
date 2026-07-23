import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie, Frais, DocumentRequis } from '../../../models/service-public.model';
import { ServicesPublicsService } from '../../../services/services-publics.service';

@Component({
    selector: 'app-category-detail',
    standalone: false,
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

    category: Categorie | undefined;
    serviceId: number = 0;
    loading = false;
    notFound = false;

    // Pagination
    fraisCurrentPage: number = 1;
    fraisItemsPerPage: number = 10;
    fraisTotalPages: number = 0;

    documentsCurrentPage: number = 1;
    documentsItemsPerPage: number = 10;
    documentsTotalPages: number = 0;

    activeTab: string = 'frais';

    readonly Math = Math;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private servicesPublicsService: ServicesPublicsService
    ) { }

    ngOnInit(): void {
        const serviceId = Number(this.route.snapshot.paramMap.get('serviceId'));
        const categoryId = Number(this.route.snapshot.paramMap.get('id'));
        this.serviceId = serviceId;

        this.loading = true;

        // Récupérer le service et trouver la catégorie
        this.servicesPublicsService.getById(serviceId).subscribe({
            next: (service) => {
                if (service && service.categories) {
                    this.category = service.categories.find(c => c.id === categoryId);
                    this.notFound = !this.category;
                } else {
                    this.notFound = true;
                }
                this.loading = false;
                if (this.category) {
                    this.initPagination();
                }
            },
            error: () => {
                this.notFound = true;
                this.loading = false;
            }
        });
    }

    initPagination(): void {
        this.fraisTotalPages = Math.ceil((this.category?.frais?.length || 0) / this.fraisItemsPerPage);
        if (this.fraisTotalPages === 0) this.fraisTotalPages = 1;

        this.documentsTotalPages = Math.ceil((this.category?.documentsRequis?.length || 0) / this.documentsItemsPerPage);
        if (this.documentsTotalPages === 0) this.documentsTotalPages = 1;
    }

    get paginatedFrais(): Frais[] {
        if (!this.category?.frais) return [];
        const start = (this.fraisCurrentPage - 1) * this.fraisItemsPerPage;
        return this.category.frais.slice(start, start + this.fraisItemsPerPage);
    }

    get paginatedDocuments(): DocumentRequis[] {
        if (!this.category?.documentsRequis) return [];
        const start = (this.documentsCurrentPage - 1) * this.documentsItemsPerPage;
        return this.category.documentsRequis.slice(start, start + this.documentsItemsPerPage);
    }

    changeFraisPage(page: number): void {
        if (page < 1 || page > this.fraisTotalPages) return;
        this.fraisCurrentPage = page;
    }

    getFraisPaginationPages(): number[] {
        const pages: number[] = [];
        const maxVisible = 5;
        let start = Math.max(1, this.fraisCurrentPage - Math.floor(maxVisible / 2));
        let end = Math.min(this.fraisTotalPages, start + maxVisible - 1);
        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    }

    changeDocumentsPage(page: number): void {
        if (page < 1 || page > this.documentsTotalPages) return;
        this.documentsCurrentPage = page;
    }

    getDocumentsPaginationPages(): number[] {
        const pages: number[] = [];
        const maxVisible = 5;
        let start = Math.max(1, this.documentsCurrentPage - Math.floor(maxVisible / 2));
        let end = Math.min(this.documentsTotalPages, start + maxVisible - 1);
        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    }

    goBack(): void {
        this.router.navigate(['/services-publics', this.serviceId, 'categories']);
    }

    onAddFrais(): void {
        // Naviguer vers l'ajout de frais
        console.log('Ajouter un frais');
    }

    onEditFrais(frais: Frais): void {
        // Naviguer vers la modification de frais
        console.log('Modifier le frais:', frais);
    }

    onDeleteFrais(fraisId: number): void {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce frais ?')) {
            // Supprimer le frais
            console.log('Supprimer le frais:', fraisId);
        }
    }

    onAddDocument(): void {
        // Naviguer vers l'ajout de document
        console.log('Ajouter un document');
    }

    onEditDocument(doc: DocumentRequis): void {
        // Naviguer vers la modification de document
        console.log('Modifier le document:', doc);
    }

    onDeleteDocument(docId: number): void {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce document requis ?')) {
            // Supprimer le document
            console.log('Supprimer le document:', docId);
        }
    }

    getFraisTypeLabel(type: string): string {
        const labels: Record<string, string> = {
            'FIXE': 'Fixe',
            'PERCENTAGE': 'Pourcentage',
            'FORFAITAIRE': 'Forfaitaire'
        };
        return labels[type] || type;
    }

    getFrequenceLabel(frequence: string): string {
        const labels: Record<string, string> = {
            'MENSUEL': 'Mensuel',
            'TRIMESTRIEL': 'Trimestriel',
            'ANNUEL': 'Annuel',
            'PONCTUEL': 'Ponctuel'
        };
        return labels[frequence] || frequence;
    }

    getTotalFrais(): number {
        if (!this.category?.frais) return 0;
        return this.category.frais.reduce((sum: number, f: Frais) => sum + f.montant, 0);
    }

    getCategoryColor(code: string): string {
        const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#f43f5e', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
        let hash = 0;
        for (let i = 0; i < code.length; i++) {
            hash = code.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length] || '#4f46e5';
    }
}