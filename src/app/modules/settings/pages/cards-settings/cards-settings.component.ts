import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsSection, SettingsAction, SettingsSubGroup } from '../../models/settings.model';

@Component({
  selector: 'app-cards-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cards-settings.component.html',
  styleUrls: ['./cards-settings.component.scss']
})
export class CardsSettingsComponent {
  readonly title = 'Gestion des Cartes';
  readonly icon = '💳';
  readonly description = 'Émission, association, stocks et inventaire des cartes.';

  sections: SettingsSection[] = [
  {
    "key": "cartes",
    "title": "Cartes",
    "icon": "💳",
    "actions": [
      {
        "label": "Émettre",
        "actionId": "emettre"
      },
      {
        "label": "Associer à un utilisateur",
        "actionId": "associer_à_un_utilisateur"
      },
      {
        "label": "Désassocier",
        "actionId": "desassocier"
      },
      {
        "label": "Activer",
        "actionId": "activer"
      },
      {
        "label": "Désactiver",
        "actionId": "desactiver",
        "danger": true
      },
      {
        "label": "Bloquer",
        "actionId": "bloquer",
        "danger": true
      },
      {
        "label": "Débloquer",
        "actionId": "debloquer"
      },
      {
        "label": "Renouveler",
        "actionId": "renouveler"
      },
      {
        "label": "Remplacer",
        "actionId": "remplacer"
      },
      {
        "label": "Réinitialiser le PIN",
        "actionId": "reinitialiser_le_pin"
      },
      {
        "label": "Voir l'historique",
        "actionId": "voir_l'historique"
      }
    ]
  },
  {
    "key": "stocks",
    "title": "Stocks",
    "icon": "📦",
    "groups": [
      {
        "title": "Niveaux de stock",
        "actions": [
          {
            "label": "Stock Central",
            "actionId": "stock_central"
          },
          {
            "label": "Stock Super Agent",
            "actionId": "stock_super_agent"
          },
          {
            "label": "Stock Agent",
            "actionId": "stock_agent"
          }
        ]
      },
      {
        "title": "Inventaire",
        "actions": [
          {
            "label": "Inventaire",
            "actionId": "inventaire"
          },
          {
            "label": "Entrées",
            "actionId": "entrees"
          },
          {
            "label": "Sorties",
            "actionId": "sorties"
          },
          {
            "label": "Cartes perdues",
            "actionId": "cartes_perdues",
            "danger": true
          },
          {
            "label": "Cartes détruites",
            "actionId": "cartes_detruites",
            "danger": true
          }
        ]
      }
    ]
  }
];

  onAction(section: SettingsSection, action: SettingsAction, group?: SettingsSubGroup): void {
    // TODO: brancher chaque actionId sur le service / endpoint IBLOPAY correspondant
    console.log('[CardsSettings]', section.key, group?.title, action.actionId);
  }
}
