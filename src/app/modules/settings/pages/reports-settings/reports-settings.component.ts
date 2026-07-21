import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsSection, SettingsAction, SettingsSubGroup } from '../../models/settings.model';

@Component({
  selector: 'app-reports-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reports-settings.component.html',
  styleUrls: ['./reports-settings.component.scss']
})
export class ReportsSettingsComponent {
  readonly title = 'Rapports & Business Intelligence';
  readonly icon = '📈';
  readonly description = 'Dashboard, rapports périodiques, exports et graphiques.';

  sections: SettingsSection[] = [
  {
    "key": "dashboard",
    "title": "Dashboard",
    "icon": "📊",
    "actions": [
      {
        "label": "Chiffre d'affaires",
        "actionId": "chiffre_d'affaires"
      },
      {
        "label": "Transactions",
        "actionId": "transactions"
      },
      {
        "label": "Revenus",
        "actionId": "revenus"
      },
      {
        "label": "Commissions",
        "actionId": "commissions"
      },
      {
        "label": "Nouveaux clients",
        "actionId": "nouveaux_clients"
      },
      {
        "label": "Croissance",
        "actionId": "croissance"
      }
    ]
  },
  {
    "key": "rapports",
    "title": "Rapports",
    "icon": "📄",
    "actions": [
      {
        "label": "Quotidien",
        "actionId": "quotidien"
      },
      {
        "label": "Hebdomadaire",
        "actionId": "hebdomadaire"
      },
      {
        "label": "Mensuel",
        "actionId": "mensuel"
      },
      {
        "label": "Annuel",
        "actionId": "annuel"
      }
    ]
  },
  {
    "key": "exports",
    "title": "Exports",
    "icon": "⬇️",
    "actions": [
      {
        "label": "PDF",
        "actionId": "pdf"
      },
      {
        "label": "Excel",
        "actionId": "excel"
      },
      {
        "label": "CSV",
        "actionId": "csv"
      }
    ]
  },
  {
    "key": "graphiques",
    "title": "Graphiques",
    "icon": "📈",
    "actions": [
      {
        "label": "Provinces",
        "actionId": "provinces"
      },
      {
        "label": "Agents",
        "actionId": "agents"
      },
      {
        "label": "Super Agents",
        "actionId": "super_agents"
      },
      {
        "label": "Cartes",
        "actionId": "cartes"
      },
      {
        "label": "Wallets",
        "actionId": "wallets"
      }
    ]
  }
];

  onAction(section: SettingsSection, action: SettingsAction, group?: SettingsSubGroup): void {
    // TODO: brancher chaque actionId sur le service / endpoint IBLOPAY correspondant
    console.log('[ReportsSettings]', section.key, group?.title, action.actionId);
  }
}
