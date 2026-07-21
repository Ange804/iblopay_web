import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsSection, SettingsAction, SettingsSubGroup } from '../../models/settings.model';

@Component({
  selector: 'app-services-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-settings.component.html',
  styleUrls: ['./services-settings.component.scss']
})
export class ServicesSettingsComponent {
  readonly title = 'Gestion des Services';
  readonly icon = '🏛';
  readonly description = 'Eau, électricité, internet, taxes, assurance, éducation, santé, transport.';

  sections: SettingsSection[] = [
  {
    "key": "services-disponibles",
    "title": "Services disponibles",
    "icon": "🏛",
    "actions": [
      {
        "label": "Eau",
        "actionId": "eau"
      },
      {
        "label": "Électricité",
        "actionId": "electricite"
      },
      {
        "label": "Internet",
        "actionId": "internet"
      },
      {
        "label": "Téléphone",
        "actionId": "telephone"
      },
      {
        "label": "Taxes",
        "actionId": "taxes"
      },
      {
        "label": "Impôts",
        "actionId": "impôts"
      },
      {
        "label": "Assurance",
        "actionId": "assurance"
      },
      {
        "label": "Éducation",
        "actionId": "education"
      },
      {
        "label": "Santé",
        "actionId": "sante"
      },
      {
        "label": "Transport",
        "actionId": "transport"
      }
    ]
  },
  {
    "key": "actions-services",
    "title": "Actions",
    "icon": "🛠️",
    "actions": [
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
        "label": "Modifier les frais",
        "actionId": "modifier_les_frais"
      },
      {
        "label": "Définir les plafonds",
        "actionId": "definir_les_plafonds"
      },
      {
        "label": "Définir les commissions",
        "actionId": "definir_les_commissions"
      }
    ]
  }
];

  onAction(section: SettingsSection, action: SettingsAction, group?: SettingsSubGroup): void {
    // TODO: brancher chaque actionId sur le service / endpoint IBLOPAY correspondant
    console.log('[ServicesSettings]', section.key, group?.title, action.actionId);
  }
}
