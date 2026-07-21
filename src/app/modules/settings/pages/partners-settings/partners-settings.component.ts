import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsSection, SettingsAction, SettingsSubGroup } from '../../models/settings.model';

@Component({
  selector: 'app-partners-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './partners-settings.component.html',
  styleUrls: ['./partners-settings.component.scss']
})
export class PartnersSettingsComponent {
  readonly title = 'Gestion des Partenaires';
  readonly icon = '🌍';
  readonly description = 'Banques, opérateurs télécom, fournisseurs de services, marchands, institutions.';

  sections: SettingsSection[] = [
  {
    "key": "partenaires",
    "title": "Partenaires",
    "icon": "🤝",
    "description": "Banques, opérateurs télécom, fournisseurs de services, marchands, institutions publiques.",
    "groups": [
      {
        "title": "Catégories de partenaires",
        "actions": [
          {
            "label": "Banques",
            "actionId": "banques"
          },
          {
            "label": "Opérateurs Télécom",
            "actionId": "operateurs_telecom"
          },
          {
            "label": "Fournisseurs de services",
            "actionId": "fournisseurs_de_services"
          },
          {
            "label": "Marchands",
            "actionId": "marchands"
          },
          {
            "label": "Institutions publiques",
            "actionId": "institutions_publiques"
          }
        ]
      },
      {
        "title": "Actions par partenaire",
        "actions": [
          {
            "label": "Activation",
            "actionId": "activation"
          },
          {
            "label": "Désactivation",
            "actionId": "desactivation",
            "danger": true
          },
          {
            "label": "Configuration des API",
            "actionId": "configuration_des_api"
          },
          {
            "label": "Clés d'intégration",
            "actionId": "cles_d'integration"
          },
          {
            "label": "Commissions",
            "actionId": "commissions"
          },
          {
            "label": "Tarification",
            "actionId": "tarification"
          },
          {
            "label": "Statistiques",
            "actionId": "statistiques"
          },
          {
            "label": "Historique des échanges",
            "actionId": "historique_des_echanges"
          }
        ]
      }
    ]
  }
];

  onAction(section: SettingsSection, action: SettingsAction, group?: SettingsSubGroup): void {
    // TODO: brancher chaque actionId sur le service / endpoint IBLOPAY correspondant
    console.log('[PartnersSettings]', section.key, group?.title, action.actionId);
  }
}
