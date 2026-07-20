import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardStatus } from '../../enums/card-status.enum';
import { CardService } from '../../services/card.service';

@Component({
    selector: 'app-card-table',
    templateUrl: './card-table.component.html',
    styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent {
    /** Liste des cartes à afficher dans le tableau */
    @Input() cards: Card[] = [];

    /** Émis après une action de statut réussie, pour que le parent recharge la liste */
    @Output() actionCompleted = new EventEmitter<void>();

    /** Carte actuellement sélectionnée pour l'affichage détaillé (une seule à la fois) */
    selectedCard: Card | null = null;

    readonly CardStatus = CardStatus;

    constructor(private cardService: CardService) { }

    /** Ouvre la vue "carte propre à l'utilisateur" pour la ligne cliquée */
    voirCarte(card: Card): void {
        this.selectedCard = card;
    }

    /** Ferme la vue détaillée */
    fermerCarte(): void {
        this.selectedCard = null;
    }

    /** Active une carte */
    activer(card: Card): void {
        this.cardService.activateCard(card.cardId).subscribe(() => {
            this.actionCompleted.emit();
        });
    }

    /** Bloque une carte */
    bloquer(card: Card): void {
        this.cardService.blockCard(card.cardId).subscribe(() => {
            this.actionCompleted.emit();
        });
    }

    /** Remplace une carte */
    remplacer(card: Card): void {
        this.cardService.replaceCard(card.cardId).subscribe(() => {
            this.actionCompleted.emit();
        });
    }

    /** Clôture une carte */
    cloturer(card: Card): void {
        this.cardService.closeCard(card.cardId).subscribe(() => {
            this.actionCompleted.emit();
        });
    }
}