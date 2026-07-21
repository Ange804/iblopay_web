import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsSection, SettingsAction, SettingsSubGroup } from '../../models/settings.model';

@Component({
  selector: 'app-commissions-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './commissions-settings.component.html',
  styleUrls: ['./commissions-settings.component.scss']
})
export class CommissionsSettingsComponent {
  readonly title = 'Gestion des Commissions';
  readonly icon = '💵';
  readonly description = 'Configuration, paiement et historique des commissions.';

  sections: SettingsSection[] = [
  {
    "key": "configuration",
    "title": "Configuration",
    "icon": "⚙️",
    "actions": [
      {
        "label": "Par rôle",
        "actionId": "par_role"
      },
      {
        "label": "Par service",
        "actionId": "par_service"
      },
      {
        "label": "Par montant",
        "actionId": "par_montant"
      },
      {
        "label": "Par province",
        "actionId": "par_province"
      },
      {
        "label": "Par partenaire",
        "actionId": "par_partenaire"
      }
    ]
  },
  {
    "key": "paiement",
    "title": "Paiement",
    "icon": "💵",
    "actions": [
      {
        "label": "Calcul automatique",
        "actionId": "calcul_automatique"
      },
      {
        "label": "Paiement manuel",
        "actionId": "paiement_manuel"
      },
      {
        "label": "Paiement automatique",
        "actionId": "paiement_automatique"
      }
    ]
  },
  {
    "key": "historique",
    "title": "Historique",
    "icon": "🕒",
    "actions": [
      {
        "label": "Journal",
        "actionId": "journal"
      },
      {
        "label": "Exports",
        "actionId": "exports"
      }
    ]
  }
];

  onAction(section: SettingsSection, action: SettingsAction, group?: SettingsSubGroup): void {
    // TODO: brancher chaque actionId sur le service / endpoint IBLOPAY correspondant
    console.log('[CommissionsSettings]', section.key, group?.title, action.actionId);
  }
}
