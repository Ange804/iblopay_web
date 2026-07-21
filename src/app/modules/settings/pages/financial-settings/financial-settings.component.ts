import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsSection, SettingsAction, SettingsSubGroup } from '../../models/settings.model';

@Component({
  selector: 'app-financial-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './financial-settings.component.html',
  styleUrls: ['./financial-settings.component.scss']
})
export class FinancialSettingsComponent {
  readonly title = 'Gestion Financière';
  readonly icon = '🏦';
  readonly description = 'Trust Account, liquidité et comptabilité.';

  sections: SettingsSection[] = [
  {
    "key": "trust-account",
    "title": "Trust Account",
    "icon": "🏦",
    "actions": [
      {
        "label": "Solde",
        "actionId": "solde"
      },
      {
        "label": "Historique bancaire",
        "actionId": "historique_bancaire"
      },
      {
        "label": "Dépôts",
        "actionId": "depôts"
      },
      {
        "label": "Retraits",
        "actionId": "retraits"
      },
      {
        "label": "Réconciliation",
        "actionId": "reconciliation"
      }
    ]
  },
  {
    "key": "liquidite",
    "title": "Liquidité",
    "icon": "💧",
    "actions": [
      {
        "label": "Cash disponible",
        "actionId": "cash_disponible"
      },
      {
        "label": "e-Money disponible",
        "actionId": "e-money_disponible"
      },
      {
        "label": "Liquidité par Super Agent",
        "actionId": "liquidite_par_super_agent"
      },
      {
        "label": "Liquidité par Agent",
        "actionId": "liquidite_par_agent"
      }
    ]
  },
  {
    "key": "comptabilite",
    "title": "Comptabilité",
    "icon": "🧾",
    "actions": [
      {
        "label": "Balance",
        "actionId": "balance"
      },
      {
        "label": "Journaux",
        "actionId": "journaux"
      },
      {
        "label": "Grand livre",
        "actionId": "grand_livre"
      },
      {
        "label": "Export comptable",
        "actionId": "export_comptable"
      }
    ]
  }
];

  onAction(section: SettingsSection, action: SettingsAction, group?: SettingsSubGroup): void {
    // TODO: brancher chaque actionId sur le service / endpoint IBLOPAY correspondant
    console.log('[FinancialSettings]', section.key, group?.title, action.actionId);
  }
}
