import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsSection, SettingsAction, SettingsSubGroup } from '../../models/settings.model';

@Component({
  selector: 'app-system-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class SystemSettingsComponent {
  readonly title = 'Configuration Générale';
  readonly icon = '⚙';
  readonly description = 'Frais, limites, notifications et paramètres système.';

  sections: SettingsSection[] = [
  {
    "key": "frais",
    "title": "Frais",
    "icon": "💲",
    "actions": [
      {
        "label": "Dépôt",
        "actionId": "depôt"
      },
      {
        "label": "Retrait",
        "actionId": "retrait"
      },
      {
        "label": "Paiement",
        "actionId": "paiement"
      },
      {
        "label": "Transfert",
        "actionId": "transfert"
      }
    ]
  },
  {
    "key": "limites",
    "title": "Limites",
    "icon": "📏",
    "actions": [
      {
        "label": "Min",
        "actionId": "min"
      },
      {
        "label": "Max",
        "actionId": "max"
      },
      {
        "label": "Journalière",
        "actionId": "journaliere"
      },
      {
        "label": "Mensuelle",
        "actionId": "mensuelle"
      }
    ]
  },
  {
    "key": "notifications",
    "title": "Notifications",
    "icon": "🔔",
    "actions": [
      {
        "label": "SMS",
        "actionId": "sms"
      },
      {
        "label": "Email",
        "actionId": "email"
      },
      {
        "label": "Push",
        "actionId": "push"
      }
    ]
  },
  {
    "key": "parametres",
    "title": "Paramètres",
    "icon": "🧩",
    "actions": [
      {
        "label": "Devise",
        "actionId": "devise"
      },
      {
        "label": "Fuseau horaire",
        "actionId": "fuseau_horaire"
      },
      {
        "label": "Langue",
        "actionId": "langue"
      },
      {
        "label": "Maintenance",
        "actionId": "maintenance"
      }
    ]
  }
];

  onAction(section: SettingsSection, action: SettingsAction, group?: SettingsSubGroup): void {
    // TODO: brancher chaque actionId sur le service / endpoint IBLOPAY correspondant
    console.log('[SystemSettings]', section.key, group?.title, action.actionId);
  }
}
