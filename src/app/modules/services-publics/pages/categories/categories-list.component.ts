import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePublic, Categorie } from '../../models/service-public.model';
import { ServicesPublicsService } from '../../services/services-publics.service';

@Component({
    selector: 'app-categories-list',
    standalone: false,
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

    service: ServicePublic | undefined;
    categories: Categorie[] = [];
    loading = false;

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
                this.categories = data?.categories || [];
                this.loading = false;
            },
            error: () => {
                this.loading = false;
            }
        });
    }

    goBack(): void {
        this.router.navigate(['/services-publics', this.service?.id]);
    }

    getCategoryColor(code: string): string {
        const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#f43f5e', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
        let hash = 0;
        for (let i = 0; i < code.length; i++) {
            hash = code.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length] || '#4f46e5';
    }

    onAddCategory(): void {
        // Navigation vers ajout de catégorie
    }

    onViewCategory(category: Categorie): void {
        // Navigation vers détail de catégorie
    }

    onEditCategory(category: Categorie): void {
        // Navigation vers modification de catégorie
    }

    onToggleCategory(category: Categorie): void {
        category.actif = !category.actif;
    }

    exportData(): void {
        console.log('Export des catégories');
    }
}