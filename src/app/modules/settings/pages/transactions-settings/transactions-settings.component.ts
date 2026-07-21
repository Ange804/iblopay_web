import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsSection, SettingsAction, SettingsSubGroup } from '../../models/settings.model';

@Component({
  selector: 'app-transactions-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './transactions-settings.component.html',
  styleUrls: ['./transactions-settings.component.scss']
})
export class TransactionsSettingsComponent {
  readonly title = 'Gestion des Transactions';
  readonly icon = '💸';
  readonly description = 'Historique, filtres, types et actions sur les transactions.';

  sections: SettingsSection[] = [
  {
    "key": "toutes-transactions",
    "title": "Toutes les transactions",
    "icon": "📋",
    "actions": [
      {
        "label": "Voir",
        "actionId": "voir"
      },
      {
        "label": "Exporter",
        "actionId": "exporter"
      },
      {
        "label": "Imprimer",
        "actionId": "imprimer"
      },
      {
        "label": "Télécharger le reçu",
        "actionId": "telecharger_le_reçu"
      },
      {
        "label": "Corriger",
        "actionId": "corriger"
      },
      {
        "label": "Réattribuer",
        "actionId": "reattribuer"
      },
      {
        "label": "Annuler (si autorisé)",
        "actionId": "annuler",
        "danger": true
      },
      {
        "label": "Marquer comme frauduleuse",
        "actionId": "frauduleuse",
        "danger": true
      }
    ]
  },
  {
    "key": "filtres",
    "title": "Filtres",
    "icon": "🧮",
    "actions": [
      {
        "label": "Date",
        "actionId": "date"
      },
      {
        "label": "Heure",
        "actionId": "heure"
      },
      {
        "label": "Type",
        "actionId": "type"
      },
      {
        "label": "Statut",
        "actionId": "statut"
      },
      {
        "label": "Utilisateur",
        "actionId": "utilisateur"
      },
      {
        "label": "Agent",
        "actionId": "agent"
      },
      {
        "label": "Super agent",
        "actionId": "super_agent"
      },
      {
        "label": "Province",
        "actionId": "province"
      },
      {
        "label": "Commune",
        "actionId": "commune"
      },
      {
        "label": "Montant",
        "actionId": "montant"
      }
    ]
  },
  {
    "key": "types",
    "title": "Types de transaction",
    "icon": "🔀",
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
        "label": "Transfert Wallet",
        "actionId": "transfert_wallet"
      },
      {
        "label": "Paiement Marchand",
        "actionId": "paiement_marchand"
      },
      {
        "label": "Paiement Carte",
        "actionId": "paiement_carte"
      },
      {
        "label": "Achat Airtime",
        "actionId": "achat_airtime"
      },
      {
        "label": "Paiement Facture",
        "actionId": "paiement_facture"
      },
      {
        "label": "Paiement Gouvernement",
        "actionId": "paiement_gouvernement"
      },
      {
        "label": "Reversement",
        "actionId": "reversement"
      },
      {
        "label": "Approvisionnement",
        "actionId": "approvisionnement"
      },
      {
        "label": "Commission",
        "actionId": "commission"
      }
    ]
  }
];

  onAction(section: SettingsSection, action: SettingsAction, group?: SettingsSubGroup): void {
    // TODO: brancher chaque actionId sur le service / endpoint IBLOPAY correspondant
    console.log('[TransactionsSettings]', section.key, group?.title, action.actionId);
  }
}
