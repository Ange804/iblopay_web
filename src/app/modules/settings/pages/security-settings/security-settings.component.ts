import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsSection, SettingsAction, SettingsSubGroup } from '../../models/settings.model';

@Component({
  selector: 'app-security-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.scss']
})
export class SecuritySettingsComponent {
  readonly title = 'Sécurité & Conformité';
  readonly icon = '🔐';
  readonly description = 'Authentification, permissions, audit, fraude et conformité KYC/AML.';

  sections: SettingsSection[] = [
  {
    "key": "authentification",
    "title": "Authentification",
    "icon": "🔑",
    "actions": [
      {
        "label": "OTP",
        "actionId": "otp"
      },
      {
        "label": "Double Authentification",
        "actionId": "double_authentification"
      },
      {
        "label": "Biométrie",
        "actionId": "biometrie"
      }
    ]
  },
  {
    "key": "permissions",
    "title": "Permissions",
    "icon": "🗝️",
    "actions": [
      {
        "label": "Rôles",
        "actionId": "rôles"
      },
      {
        "label": "Menus",
        "actionId": "menus"
      },
      {
        "label": "Actions",
        "actionId": "actions"
      }
    ]
  },
  {
    "key": "audit",
    "title": "Audit",
    "icon": "🕵️",
    "actions": [
      {
        "label": "Journal complet",
        "actionId": "journal_complet"
      },
      {
        "label": "Historique des connexions",
        "actionId": "historique_des_connexions"
      },
      {
        "label": "Adresse IP",
        "actionId": "adresse_ip"
      },
      {
        "label": "Appareil",
        "actionId": "appareil"
      },
      {
        "label": "Géolocalisation",
        "actionId": "geolocalisation"
      }
    ]
  },
  {
    "key": "fraude",
    "title": "Fraude",
    "icon": "🚨",
    "actions": [
      {
        "label": "Détection automatique",
        "actionId": "detection_automatique"
      },
      {
        "label": "Transactions suspectes",
        "actionId": "transactions_suspectes"
      },
      {
        "label": "Blocage automatique",
        "actionId": "blocage_automatique"
      },
      {
        "label": "Liste noire",
        "actionId": "liste_noire"
      }
    ]
  },
  {
    "key": "kyc",
    "title": "Conformité — KYC",
    "icon": "🪪",
    "description": "Vérification d'identité des utilisateurs.",
    "actions": [
      {
        "label": "Validation des pièces d'identité",
        "actionId": "validation_des_pieces_d'identite"
      },
      {
        "label": "Validation des selfies",
        "actionId": "validation_des_selfies"
      },
      {
        "label": "Validation des justificatifs",
        "actionId": "validation_des_justificatifs"
      },
      {
        "label": "Rejet ou approbation",
        "actionId": "rejet_ou_approbation"
      },
      {
        "label": "Historique des vérifications",
        "actionId": "historique_des_verifications"
      }
    ]
  },
  {
    "key": "aml",
    "title": "Conformité — AML (Anti-Blanchiment)",
    "icon": "⚖️",
    "description": "Détection et suivi des opérations suspectes / seuils réglementaires.",
    "actions": [
      {
        "label": "Détection des opérations inhabituelles",
        "actionId": "detection_des_operations_inhabituelles"
      },
      {
        "label": "Alertes automatiques",
        "actionId": "alertes_automatiques"
      },
      {
        "label": "Déclaration d'opérations suspectes",
        "actionId": "declaration_d'operations_suspectes"
      },
      {
        "label": "Suivi des seuils réglementaires",
        "actionId": "suivi_des_seuils_reglementaires"
      },
      {
        "label": "Gestion des listes de surveillance",
        "actionId": "gestion_des_listes_de_surveillance"
      },
      {
        "label": "Expiration des documents",
        "actionId": "expiration_des_documents"
      },
      {
        "label": "Vérification périodique",
        "actionId": "verification_periodique"
      },
      {
        "label": "Historique des contrôles",
        "actionId": "historique_des_contrôles"
      }
    ]
  }
];

  onAction(section: SettingsSection, action: SettingsAction, group?: SettingsSubGroup): void {
    // TODO: brancher chaque actionId sur le service / endpoint IBLOPAY correspondant
    console.log('[SecuritySettings]', section.key, group?.title, action.actionId);
  }
}
