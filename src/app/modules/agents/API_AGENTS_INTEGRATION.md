# Intégration API — Module Agents

> **Objectif :** Remplacer les données mockées par des appels API réels fournis par le backend.
> **Statut actuel :** Le module utilise des mocks locaux avec `of()` et `throwError()` — fichier `agent.service.ts` (1116 lignes avec 10 Super Agents mock + 25 sous-agents).
> **Action requise :** Implémenter les endpoints API décrits ci-dessous.

---

## Sommaire des Endpoints

| #  | Méthode | URL                                      | Composant associé               |
|----|---------|------------------------------------------|---------------------------------|
| 1  | GET     | `/api/agents`                            | Agent List                      |
| 2  | GET     | `/api/agents/{id}`                       | Agent Detail / Édit             |
| 3  | POST    | `/api/agents`                            | Agent Create                    |
| 4  | PUT     | `/api/agents/{id}`                       | Agent Edit / Block/Unblock      |
| 5  | DELETE  | `/api/agents/{id}`                       | Agent Delete                    |
| 6  | GET     | `/api/agents/stats`                      | Agent Dashboard (KPI)           |
| 7  | GET     | `/api/agents/search?q=`                  | Agent Search (autocomplete)     |
| 8  | GET     | `/api/agents/{id}/sub-agents`            | Sub-agents list                 |
| 9  | GET     | `/api/agents/{id}/electronics`           | Electronics list                |
| 10 | GET     | `/api/agents/{id}/deposits`              | Deposits history                |
| 11 | POST    | `/api/agents/{id}/fund`                  | Agent Funding (Approvisionnement)|
| 12 | POST    | `/api/agents/{id}/block`                 | Block/Unblock with OTP          |
| 13 | POST    | `/api/agents/{id}/verify-otp`            | OTP Verification for actions    |
| 14 | GET     | `/api/agents/{id}/documents`             | Agent Documents List            |
| 15 | POST    | `/api/agents/{id}/documents`             | Upload Document                 |
| 16 | DELETE  | `/api/agents/{id}/documents/{docId}`     | Delete Document                 |

---

## 1. Liste des agents — `GET /api/agents`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/agents` |
| **Description** | Récupère la liste paginée de tous les agents. Filtrable par statut, type, et recherche textuelle. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Paramètres (Query params)

| Nom       | Type   | Requis | Description                            |
|-----------|--------|--------|----------------------------------------|
| page      | number | Non    | Pagination (défaut: 1)                 |
| limit     | number | Non    | Nombre par page (défaut: 10)           |
| status    | string | Non    | Filtrer : `ACTIVE`, `PENDING`, etc.    |
| type      | string | Non    | Filtrer : `SUPER_AGENT`, `AGENT`, etc. |
| search    | string | Non    | Recherche (nom, téléphone, code, carte)|

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "agents": [
      {
        "id": "agent-uuid",
        "code": "SA-001",
        "firstName": "Jean",
        "lastName": "Mukiza",
        "email": "jean.mukiza@iblopay.com",
        "phone": "+257 79 900 11 22",
        "cin": "1-234567-89012",
        "cardNumber": "CARTE-IBP-2024-0001",
        "dateOfBirth": "1980-05-15T00:00:00Z",
        "address": {
          "province": "Bujumbura Mairie",
          "commune": "Mukaza",
          "zone": "Nyakabiga",
          "colline": "Nyakabiga",
          "quartier": "Nyakabiga",
          "completeAddress": "Nyakabiga, Mukaza, Bujumbura",
          "latitude": "-3.3860",
          "longitude": "29.3583"
        },
        "nif": "NIF-123456789",
        "commerceRegister": "RC-2024-001",
        "status": "ACTIVE",
        "type": "SUPER_AGENT",
        "joinDate": "2024-01-01T00:00:00Z",
        "createdBy": "admin@iblopay.com",
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z",
        "profileImage": "https://...",
        "approvalLetter": "https://..."
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 10,
      "total_pages": 1
    }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `getAgents(): Observable<Agent[]>` |

---

## 2. Détail d'un agent — `GET /api/agents/{id}`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/agents/{agent_id}` |
| **Description** | Récupère les informations complètes d'un agent, y compris ses sous-agents, équipements électroniques, et dépôts. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Paramètres (Path)

| Nom       | Type   | Requis | Description          |
|-----------|--------|--------|----------------------|
| agent_id  | string | Oui    | UUID de l'agent      |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "agent": {
      "id": "agent-uuid",
      "code": "SA-001",
      "firstName": "Jean",
      "lastName": "Mukiza",
      "email": "jean.mukiza@iblopay.com",
      "phone": "+257 79 900 11 22",
      "cin": "1-234567-89012",
      "cardNumber": "CARTE-IBP-2024-0001",
      "dateOfBirth": "1980-05-15T00:00:00Z",
      "address": { "...": "..." },
      "nif": "NIF-123456789",
      "commerceRegister": "RC-2024-001",
      "status": "ACTIVE",
      "type": "SUPER_AGENT",
      "joinDate": "2024-01-01T00:00:00Z",
      "createdBy": "admin@iblopay.com",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z",
      "profileImage": "https://...",
      "approvalLetter": "https://..."
    }
  }
}
```

### Retour — Erreur

```json
{
  "success": false,
  "message": "Agent non trouvé",
  "status_code": 404
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `getAgentById(id: string): Observable<Agent>` |

---

## 3. Créer un agent — `POST /api/agents`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/agents` |
| **Description** | Crée un nouvel agent (Super Agent, Agent, etc.). |
| **Headers**  | `Authorization: Bearer {access_token}`, `Content-Type: application/json` |

### Paramètres (Body JSON)

```json
{
  "firstName": "Jean",
  "lastName": "Mukiza",
  "email": "jean.mukiza@iblopay.com",
  "phone": "+257 79 900 11 22",
  "cin": "1-234567-89012",
  "cardNumber": "CARTE-IBP-2024-0001",
  "dateOfBirth": "1980-05-15",
  "address": {
    "province": "Bujumbura Mairie",
    "commune": "Mukaza",
    "zone": "Nyakabiga",
    "colline": "Nyakabiga",
    "quartier": "Nyakabiga",
    "completeAddress": "Nyakabiga, Mukaza, Bujumbura"
  },
  "nif": "NIF-123456789",
  "commerceRegister": "RC-2024-001",
  "type": "SUPER_AGENT",
  "password": "motdepasse123",
  "profileImage": "base64...",
  "approvalLetter": "base64..."
}
```

| Champ               | Type   | Requis | Contrainte              |
|---------------------|--------|--------|-------------------------|
| firstName           | string | Oui    | —                       |
| lastName            | string | Oui    | —                       |
| email               | string | Non    | Format email            |
| phone               | string | Oui    | Format international    |
| cin                 | string | Oui    | —                       |
| cardNumber          | string | Non    | —                       |
| dateOfBirth         | string | Oui    | Date ISO                |
| address.province    | string | Oui    | —                       |
| address.commune     | string | Oui    | —                       |
| address.zone        | string | Oui    | —                       |
| nif                 | string | Oui    | —                       |
| commerceRegister    | string | Oui    | —                       |
| type                | string | Oui    | `SUPER_AGENT`, `AGENT`, etc. |
| password            | string | Oui    | Min 8 caractères        |

### Retour — Succès

```json
{
  "success": true,
  "message": "Agent créé avec succès",
  "data": {
    "agent": { "...": "..." }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `createAgent(agentData: any): Observable<Agent>` |

---

## 4. Modifier un agent — `PUT /api/agents/{id}`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `PUT /api/agents/{agent_id}` |
| **Description** | Met à jour les informations d'un agent existant. Également utilisé pour changer le statut (bloquer/débloquer). |
| **Headers**  | `Authorization: Bearer {access_token}`, `Content-Type: application/json` |

### Paramètres (Body JSON — partiel)

```json
{
  "firstName": "Jean-Pierre",
  "email": "jp.mukiza@iblopay.com",
  "status": "ACTIVE"
}
```

### Retour — Succès

```json
{
  "success": true,
  "message": "Agent mis à jour avec succès",
  "data": {
    "agent": { "...": "..." }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `updateAgent(id: string, agentData: any): Observable<Agent>` |

---

## 5. Supprimer un agent — `DELETE /api/agents/{id}`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `DELETE /api/agents/{agent_id}` |
| **Description** | Supprime un agent de la plateforme. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "message": "Agent supprimé avec succès"
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `deleteAgent(id: string): Observable<void>` |

---

## 6. Statistiques des agents — `GET /api/agents/stats`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/agents/stats` |
| **Description** | Récupère les statistiques globales (KPI cards) pour le tableau de bord des agents. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "total": 10,
    "active": 6,
    "pending": 2,
    "blocked": 1,
    "suspended": 1,
    "inactive": 0,
    "totalElectronics": 8,
    "totalAgents": 25,
    "totalDeposits": 30,
    "totalDepositAmount": 12450000,
    "totalTransactionAmount": 3200000
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `getAgentStats(): Observable<any>` |

---

## 7. Recherche d'agents — `GET /api/agents/search`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/agents/search?q={query}` |
| **Description** | Recherche textuelle d'agents par nom, téléphone, code, ou numéro de carte. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Paramètres (Query)

| Nom | Type   | Requis | Description                      |
|-----|--------|--------|----------------------------------|
| q   | string | Oui    | Terme de recherche               |
| limit | number | Non   | Nombre max de résultats (défaut: 20) |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "agents": [
      {
        "id": "agent-uuid",
        "code": "SA-001",
        "firstName": "Jean",
        "lastName": "Mukiza",
        "phone": "+257 79 900 11 22",
        "cardNumber": "CARTE-IBP-2024-0001",
        "status": "ACTIVE",
        "type": "SUPER_AGENT"
      }
    ]
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `searchAgents(query: string): Observable<Agent[]>` |

---

## 8. Sous-agents — `GET /api/agents/{id}/sub-agents`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/agents/{agent_id}/sub-agents` |
| **Description** | Récupère la liste des sous-agents rattachés à un agent (Super Agent). |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "subAgents": [
      {
        "id": "sub-agent-uuid",
        "code": "AG-001",
        "firstName": "Marie",
        "lastName": "Niyonzima",
        "email": "marie.niyonzima@iblopay.com",
        "phone": "+257 79 900 33 44",
        "status": "ACTIVE",
        "joinDate": "2024-02-01T00:00:00Z",
        "transactions": [
          {
            "id": "txn-uuid",
            "type": "DEPOSIT",
            "amount": 500000,
            "currency": "BIF",
            "date": "2024-06-10T00:00:00Z",
            "status": "COMPLETED",
            "reference": "TXN-2024-001",
            "description": "Dépôt initial"
          }
        ]
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 5,
      "total_pages": 1
    }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `getSubAgents(agentId: string): Observable<SubAgent[]>` |

---

## 9. Équipements électroniques — `GET /api/agents/{id}/electronics`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/agents/{agent_id}/electronics` |
| **Description** | Récupère la liste des équipements électroniques assignés à un agent. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "electronics": [
      {
        "id": "elec-uuid",
        "type": "POS_TERMINAL",
        "brand": "Ingenico",
        "model": "Move 5000",
        "serialNumber": "SN-ING-2024-001",
        "status": "ACTIVE",
        "assignedDate": "2024-01-15T00:00:00Z",
        "lastMaintenance": null,
        "notes": "Terminal principal",
        "amountInCirculation": 10000000,
        "currency": "BIF"
      }
    ]
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `getElectronics(agentId: string): Observable<Electronic[]>` |

---

## 10. Dépôts — `GET /api/agents/{id}/deposits`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/agents/{agent_id}/deposits` |
| **Description** | Récupère l'historique des dépôts effectués par les sous-agents d'un agent. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "deposits": [
      {
        "id": "dep-uuid",
        "agentId": "sub-agent-uuid",
        "agentName": "Marie Niyonzima",
        "amount": 500000,
        "currency": "BIF",
        "date": "2024-06-10T00:00:00Z",
        "status": "COMPLETED",
        "reference": "DEP-2024-001"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 5,
      "total_pages": 1
    }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/agents/services/agent.service.ts` | `getDeposits(agentId: string): Observable<Deposit[]>` |

---

## 11. Approvisionnement d'un agent — `POST /api/agents/{id}/fund`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/agents/{agent_id}/fund` |
| **Description** | Crée une demande d'approvisionnement pour un agent. Utilisé par la page `agent-approvisionnement`. |
| **Headers**  | `Authorization: Bearer {access_token}`, `Content-Type: application/json` |

### Paramètres (Body JSON)

```json
{
  "receiptReference": "REC-2024-001",
  "amount": 500000,
  "bank": "BANQUE_DE_Credit_de_Bujumbura",
  "branch": "Agence Centrale",
  "depositDate": "2024-06-10",
  "trustAccountVerified": true,
  "reinforcedVerification": false,
  "adminNote": "Approbation manuelle requise"
}
```

| Champ                  | Type    | Requis | Description                         |
|------------------------|---------|--------|-------------------------------------|
| receiptReference       | string  | Oui    | Référence du reçu de dépôt          |
| amount                 | number  | Oui    | Montant à approvisionner            |
| bank                   | string  | Oui    | Code ou nom de la banque            |
| branch                 | string  | Oui    | Agence bancaire                     |
| depositDate            | string  | Oui    | Date du dépôt (format YYYY-MM-DD)   |
| trustAccountVerified   | boolean | Non    | Vérification compte de fiducie      |
| reinforcedVerification | boolean | Non    | Vérification renforcée              |
| adminNote              | string  | Non    | Note interne de l'administrateur    |

### Retour — Succès

```json
{
  "success": true,
  "message": "Demande d'approvisionnement soumise avec succès",
  "data": {
    "fundingId": "fund-uuid",
    "status": "PENDING_APPROVAL",
    "createdAt": "2024-06-10T14:30:00Z"
  }
}
```

### Fichier à modifier

| Fichier | Méthode à ajouter |
|---------|-------------------|
| `src/app/modules/agents/services/agent.service.ts` | Ajouter `fundAgent(agentId: string, fundData: FundData): Observable<any>` |

---

## 12. Bloquer/Débloquer un agent — `POST /api/agents/{id}/block`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/agents/{agent_id}/block` |
| **Description** | Bloque ou débloque un agent. L'action est sécurisée par OTP. |
| **Headers**  | `Authorization: Bearer {access_token}`, `Content-Type: application/json` |

### Paramètres (Body JSON)

```json
{
  "action": "block",
  "otp_code": "123456"
}
```

| Champ    | Type   | Requis | Valeurs possibles          |
|----------|--------|--------|----------------------------|
| action   | string | Oui    | `block` ou `unblock`       |
| otp_code | string | Oui    | Code OTP à 6 chiffres      |

### Retour — Succès

```json
{
  "success": true,
  "message": "Agent bloqué avec succès",
  "data": {
    "agent": { "...": "...", "status": "BLOCKED" }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à ajouter |
|---------|-------------------|
| `src/app/modules/agents/services/agent.service.ts` | Ajouter `blockAgent(agentId: string, action: string, otpCode: string): Observable<Agent>` |

---

## 13. Vérification OTP — `POST /api/agents/verify-otp`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/agents/verify-otp` |
| **Description** | Envoie ou vérifie un code OTP pour les actions sensibles (blocage, approvisionnement). |
| **Headers**  | `Content-Type: application/json` |

### Paramètres — Envoi OTP (Body JSON)

```json
{
  "action": "send",
  "phone_number": "+257XXXXXXXX"
}
```

### Paramètres — Vérification OTP (Body JSON)

```json
{
  "action": "verify",
  "phone_number": "+257XXXXXXXX",
  "otp_code": "123456"
}
```

### Retour — Envoi réussi

```json
{
  "success": true,
  "message": "Code OTP envoyé avec succès",
  "data": {
    "expires_in": 300,
    "cooldown": 30
  }
}
```

### Retour — Vérification réussie

```json
{
  "success": true,
  "message": "Code OTP valide"
}
```

### Fichier à modifier

| Fichier | Méthode à ajouter |
|---------|-------------------|
| `src/app/modules/agents/services/agent.service.ts` | Ajouter `verifyOtp(phoneNumber: string, otpCode?: string): Observable<any>` |

---

## 14. Documents d'un agent — `GET /api/agents/{id}/documents`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/agents/{agent_id}/documents` |
| **Description** | Récupère la liste des documents associés à un agent (CIN, NIF, etc.). |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "documents": [
      {
        "id": "doc-uuid",
        "agentId": "agent-uuid",
        "type": "CIN",
        "name": "Carte d'identité nationale",
        "fileName": "cin_jean_mukiza.pdf",
        "fileSize": 245760,
        "mimeType": "application/pdf",
        "uploadedAt": "2024-01-01T10:00:00Z",
        "verifiedAt": "2024-01-02T14:00:00Z",
        "verifiedBy": "admin@iblopay.com",
        "status": "VERIFIED",
        "expiryDate": "2030-01-01",
        "comments": "Document valide"
      }
    ]
  }
}
```

### Fichier à modifier

| Fichier | Méthode à ajouter |
|---------|-------------------|
| `src/app/modules/agents/services/agent.service.ts` | Ajouter `getAgentDocuments(agentId: string): Observable<AgentDocument[]>` |

---

## 15. Uploader un document — `POST /api/agents/{id}/documents`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/agents/{agent_id}/documents` |
| **Description** | Télécharge un nouveau document pour un agent. |
| **Headers**  | `Authorization: Bearer {access_token}`, `Content-Type: multipart/form-data` |

### Paramètres (FormData)

| Nom      | Type   | Requis | Description                |
|----------|--------|--------|----------------------------|
| file     | File   | Oui    | Le fichier à télécharger   |
| type     | string | Oui    | Type de document (`CIN`, `NIF`, etc.) |
| name     | string | Non    | Nom du document            |

### Retour — Succès

```json
{
  "success": true,
  "message": "Document téléchargé avec succès",
  "data": {
    "document": { "...": "..." }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à ajouter |
|---------|-------------------|
| `src/app/modules/agents/services/agent.service.ts` | Ajouter `uploadAgentDocument(agentId: string, formData: FormData): Observable<AgentDocument>` |

---

## 16. Supprimer un document — `DELETE /api/agents/{id}/documents/{docId}`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `DELETE /api/agents/{agent_id}/documents/{doc_id}` |
| **Description** | Supprime un document spécifique d'un agent. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "message": "Document supprimé avec succès"
}
```

### Fichier à modifier

| Fichier | Méthode à ajouter |
|---------|-------------------|
| `src/app/modules/agents/services/agent.service.ts` | Ajouter `deleteAgentDocument(agentId: string, docId: string): Observable<void>` |

---

## Structure des fichiers du module Agents

```
src/app/modules/agents/
├── API_AGENTS_INTEGRATION.md          ← Ce fichier (documentation)
├── services/
│   └── agent.service.ts              ← SERVICE PRINCIPAL à modifier (10 méthodes existantes + 6 nouvelles)
├── models/
│   ├── agent.model.ts                ← OK — Interfaces déjà définies
│   └── agent-document.model.ts       ← OK — Interfaces déjà définies
├── agents.constants.ts               ← OK — Constantes déjà définies
├── pages/
│   ├── agent-list/                   ← Utilise agentService.getAgents(), getAgentStats(), searchAgents()
│   ├── agent-create/                 ← Utilise agentService.createAgent()
│   ├── agent-detail/                 ← Utilise agentService.getAgentById(), getSubAgents(), getElectronics(), getDeposits()
│   ├── agent-edit/                   ← Utilise agentService.updateAgent()
│   ├── agent-approvisionnement/      ← Utilise agentService (funding + OTP)
│   └── agent-documents/              ← Utilise agentService pour les documents
├── components/
│   ├── agent-card/                   ← OK — Composant d'affichage
│   ├── agent-filter/                 ← OK — Composant de filtre
│   ├── agent-search/                 ← OK — Composant de recherche
│   ├── agent-stats/                  ← OK — Composant de statistiques
│   └── agent-status-badge/           ← OK — Composant de badge
├── dialogs/
│   └── agent-delete-dialog/          ← OK — Dialog de confirmation
├── agents-routing.module.ts          ← OK
└── agents.module.ts                  ← OK
```

---

## Constantes et configuration à ajouter

### `src/app/modules/agents/agents.constants.ts`

```typescript
export const AGENTS_API = {
  BASE: '/agents',
  STATS: '/agents/stats',
  SEARCH: '/agents/search',
  VERIFY_OTP: '/agents/verify-otp'
} as const;
```

---

## Checklist d'implémentation

- [ ] 1. Remplacer `getAgents()` — Appel GET `/api/agents` avec query params
- [ ] 2. Remplacer `getAgentById()` — Appel GET `/api/agents/{id}`
- [ ] 3. Remplacer `createAgent()` — Appel POST `/api/agents`
- [ ] 4. Remplacer `updateAgent()` — Appel PUT `/api/agents/{id}`
- [ ] 5. Remplacer `deleteAgent()` — Appel DELETE `/api/agents/{id}`
- [ ] 6. Remplacer `getAgentStats()` — Appel GET `/api/agents/stats`
- [ ] 7. Remplacer `searchAgents()` — Appel GET `/api/agents/search?q=`
- [ ] 8. Remplacer `getSubAgents()` — Appel GET `/api/agents/{id}/sub-agents`
- [ ] 9. Remplacer `getElectronics()` — Appel GET `/api/agents/{id}/electronics`
- [ ] 10. Remplacer `getDeposits()` — Appel GET `/api/agents/{id}/deposits`
- [ ] 11. Ajouter `fundAgent()` — Appel POST `/api/agents/{id}/fund`
- [ ] 12. Ajouter `blockAgent()` — Appel POST `/api/agents/{id}/block`
- [ ] 13. Ajouter `verifyOtp()` — Appel POST `/api/agents/verify-otp`
- [ ] 14. Ajouter `getAgentDocuments()` — Appel GET `/api/agents/{id}/documents`
- [ ] 15. Ajouter `uploadAgentDocument()` — Appel POST `/api/agents/{id}/documents`
- [ ] 16. Ajouter `deleteAgentDocument()` — Appel DELETE `/api/agents/{id}/documents/{docId}`
- [ ] 17. Mettre à jour `agent-approvisionnement.component.ts` pour utiliser l'API
- [ ] 18. Supprimer les 1116 lignes de données mockées dans `agent.service.ts`
- [ ] 19. Supprimer les méthodes obsolètes et importations inutilisées
- [ ] 20. Tester le flux complet : liste → détail → création → modification → blocage