# Intégration API — Module d'Authentification (Auth)

> **Objectif :** Remplacer les données mockées par des appels API réels fournis par le backend.
> **Statut actuel :** Le module utilise des mocks locaux (localStorage, `BehaviorSubject`, délais simulés).
> **Action requise :** Implémenter les endpoints API décrits ci-dessous.

---

## Sommaire des Endpoints

| #  | Méthode | URL                                      | Composant associé        |
|----|---------|------------------------------------------|--------------------------|
| 1  | POST    | `/api/auth/login`                        | Login                    |
| 2  | POST    | `/api/auth/verify-2fa`                   | Two-Factor Auth          |
| 3  | POST    | `/api/auth/forgot-password`              | Forgot Password          |
| 4  | POST    | `/api/auth/reset-password`               | Reset Password           |
| 5  | POST    | `/api/auth/refresh`                      | Token Interceptor        |
| 6  | POST    | `/api/auth/logout`                       | Logout                   |
| 7  | GET     | `/api/users`                             | User Management (Admin)  |
| 8  | GET     | `/api/users/{id}`                        | User Detail              |
| 9  | POST    | `/api/users`                             | Create User              |
| 10 | PUT     | `/api/users/{id}`                        | Update User              |
| 11 | PATCH   | `/api/users/{id}/status`                 | Change User Status       |
| 12 | DELETE  | `/api/users/{id}`                        | Delete User              |
| 13 | GET     | `/api/roles`                             | Roles List               |
| 14 | GET     | `/api/permissions`                       | Permissions List         |

---

## 1. Connexion — `POST /api/auth/login`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/auth/login` |
| **Description** | Authentifie l'utilisateur avec son numéro de téléphone et son code PIN. Si 2FA est activé, retourne `requires_2fa: true` pour rediriger vers l'écran OTP. |
| **Headers**  | `Content-Type: application/json` |

### Paramètres (Body JSON)

```json
{
  "phone_number": "+257XXXXXXXX",
  "pin": "1234"
}
```

| Champ         | Type   | Requis | Contrainte               |
|---------------|--------|--------|--------------------------|
| phone_number  | string | Oui    | Format international     |
| pin           | string | Oui    | 4 à 6 chiffres           |

### Retour — Succès (pas de 2FA)

```json
{
  "success": true,
  "message": "Connexion réussie",
  "data": {
    "user": {
      "user_id": "user-uuid",
      "first_name": "Jean",
      "last_name": "Ndayishimiye",
      "phone_number": "+257XXXXXXXX",
      "email": "jean@example.com",
      "cni_number": "1234567890",
      "photo_url": "https://...",
      "role_id": "role-uuid",
      "role": {
        "role_id": "role-uuid",
        "name": "ADMIN",
        "description": "Administrator with management access",
        "is_default": true,
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z"
      },
      "status": "ACTIVE",
      "permissions": ["USER_READ", "DASHBOARD_VIEW"],
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "created_by": "user-uuid"
    },
    "tokens": {
      "access_token": "jwt-access-token",
      "refresh_token": "jwt-refresh-token",
      "expires_in": 3600,
      "token_type": "Bearer"
    }
  }
}
```

### Retour — 2FA requis (redirection vers écran OTP)

```json
{
  "success": false,
  "message": "Code de vérification requis",
  "requires_2fa": true,
  "data": {
    "phone_number": "+257XXXXXXXX",
    "otp_sent": true,
    "expires_in": 300
  }
}
```

### Retour — Erreur

```json
{
  "success": false,
  "message": "Numéro de téléphone ou PIN incorrect",
  "status_code": 401,
  "errors": {
    "phone_number": ["Ce numéro n'est pas associé à un compte"]
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `login(credentials: LoginRequest)` |

---

## 2. Vérification 2FA — `POST /api/auth/verify-2fa`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/auth/verify-2fa` |
| **Description** | Vérifie le code OTP envoyé par SMS/email pour la double authentification. Si valide, retourne les tokens JWT. |
| **Headers**  | `Content-Type: application/json` |

### Paramètres (Body JSON)

```json
{
  "phone_number": "+257XXXXXXXX",
  "otp_code": "123456"
}
```

| Champ         | Type   | Requis | Contrainte           |
|---------------|--------|--------|----------------------|
| phone_number  | string | Oui    | Format international |
| otp_code      | string | Oui    | 6 chiffres           |

### Retour — Succès

```json
{
  "success": true,
  "message": "Connexion réussie",
  "data": {
    "user": { "...": "..." },
    "tokens": {
      "access_token": "jwt-access-token",
      "refresh_token": "jwt-refresh-token",
      "expires_in": 3600,
      "token_type": "Bearer"
    }
  }
}
```

### Retour — Erreur

```json
{
  "success": false,
  "message": "Code OTP invalide ou expiré",
  "status_code": 400,
  "errors": {
    "otp_code": ["Le code OTP est invalide ou a expiré"]
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `verifyTwoFactor(request: TwoFactorRequest)` |

---

## 3. Mot de passe oublié — `POST /api/auth/forgot-password`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/auth/forgot-password` |
| **Description** | Envoie un code OTP au numéro de téléphone de l'utilisateur pour réinitialiser son PIN. |
| **Headers**  | `Content-Type: application/json` |

### Paramètres (Body JSON)

```json
{
  "phone_number": "+257XXXXXXXX"
}
```

### Retour — Succès

```json
{
  "success": true,
  "message": "Le code OTP a été envoyé à votre numéro de téléphone",
  "data": {
    "otp_sent": true,
    "expires_in": 300,
    "phone_number": "+257XXXXXXXX"
  }
}
```

### Retour — Erreur

```json
{
  "success": false,
  "message": "Ce numéro de téléphone n'est pas associé à un compte",
  "status_code": 404
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `forgotPassword(request: ForgotPasswordRequest)` |

---

## 4. Réinitialisation du PIN — `POST /api/auth/reset-password`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/auth/reset-password` |
| **Description** | Réinitialise le code PIN après vérification du code OTP. |
| **Headers**  | `Content-Type: application/json` |

### Paramètres (Body JSON)

```json
{
  "phone_number": "+257XXXXXXXX",
  "otp_code": "123456",
  "new_pin": "5678",
  "confirm_pin": "5678"
}
```

| Champ         | Type   | Requis | Contrainte           |
|---------------|--------|--------|----------------------|
| phone_number  | string | Oui    | Format international |
| otp_code      | string | Oui    | 6 chiffres           |
| new_pin       | string | Oui    | 4 à 6 chiffres       |
| confirm_pin   | string | Oui    | Doit correspondre à new_pin |

### Retour — Succès

```json
{
  "success": true,
  "message": "Votre PIN a été réinitialisé avec succès"
}
```

### Retour — Erreur

```json
{
  "success": false,
  "message": "Code OTP invalide ou expiré",
  "status_code": 400,
  "errors": {
    "otp_code": ["Le code OTP est invalide"],
    "confirm_pin": ["Les codes PIN ne correspondent pas"]
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `resetPassword(request: ResetPasswordRequest)` |

---

## 5. Rafraîchir le token — `POST /api/auth/refresh`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/auth/refresh` |
| **Description** | Rafraîchit le token d'accès JWT à l'aide du refresh token. Utilisé automatiquement par l'intercepteur HTTP (`AuthInterceptor`). |
| **Headers**  | `Content-Type: application/json` |

### Paramètres (Body JSON)

```json
{
  "refresh_token": "jwt-refresh-token"
}
```

### Retour — Succès

```json
{
  "success": true,
  "message": "Token refreshed",
  "data": {
    "user": { "...": "..." },
    "tokens": {
      "access_token": "new-jwt-access-token",
      "refresh_token": "new-jwt-refresh-token",
      "expires_in": 3600,
      "token_type": "Bearer"
    }
  }
}
```

### Retour — Erreur

```json
{
  "success": false,
  "message": "Token invalide ou expiré",
  "status_code": 401
}
```

### Fichiers à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `refreshToken()` |
| `src/app/modules/auth/interceptors/auth.interceptor.ts` | Vérifier que l'URL d'exclusion `/auth/refresh` correspond |

---

## 6. Déconnexion — `POST /api/auth/logout`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/auth/logout` |
| **Description** | Invalide le refresh token côté serveur et déconnecte l'utilisateur. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Paramètres (Body JSON)

```json
{
  "refresh_token": "jwt-refresh-token"
}
```

### Retour — Succès

```json
{
  "success": true,
  "message": "Déconnexion réussie"
}
```

### Retour — Erreur

```json
{
  "success": false,
  "message": "Erreur lors de la déconnexion",
  "status_code": 500
}
```

### Fichier à modifier

| Fichier | Méthode à modifier |
|---------|-------------------|
| `src/app/modules/auth/services/auth.service.ts` | `logout()` — Appeler l'API avant de nettoyer les tokens |

---

## 7. Liste des utilisateurs — `GET /api/users`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/users` |
| **Description** | Récupère la liste de tous les utilisateurs. Accessible uniquement aux administrateurs. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Paramètres (Query params)

| Nom       | Type   | Requis | Description                    |
|-----------|--------|--------|--------------------------------|
| page      | number | Non    | Pagination (défaut: 1)         |
| limit     | number | Non    | Nombre par page (défaut: 20)   |
| status    | string | Non    | Filtrer par statut             |
| role_id   | string | Non    | Filtrer par rôle               |
| search    | string | Non    | Recherche (nom, téléphone)     |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "users": [
      {
        "user_id": "user-uuid",
        "first_name": "Jean",
        "last_name": "Ndayishimiye",
        "phone_number": "+257XXXXXXXX",
        "email": "jean@example.com",
        "cni_number": "1234567890",
        "photo_url": "https://...",
        "role_id": "role-uuid",
        "role": { "...": "..." },
        "status": "ACTIVE",
        "permissions": ["USER_READ", "DASHBOARD_VIEW"],
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "total_pages": 3
    }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `getUsers()` |

---

## 8. Détail d'un utilisateur — `GET /api/users/{id}`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/users/{user_id}` |
| **Description** | Récupère les informations d'un utilisateur spécifique. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Paramètres (Path)

| Nom     | Type   | Requis | Description     |
|---------|--------|--------|-----------------|
| user_id | string | Oui    | UUID de l'utilisateur |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "user": { "...": "..." }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `getUserById(userId: string)` |

---

## 9. Créer un utilisateur — `POST /api/users`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `POST /api/users` |
| **Description** | Crée un nouvel utilisateur. Accessible uniquement aux administrateurs système. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Paramètres (Body JSON)

```json
{
  "first_name": "Jean",
  "last_name": "Ndayishimiye",
  "phone_number": "+257XXXXXXXX",
  "email": "jean@example.com",
  "cni_number": "1234567890",
  "photo_url": "https://...",
  "role_id": "role-uuid",
  "status": "ACTIVE"
}
```

### Retour — Succès

```json
{
  "success": true,
  "message": "Utilisateur créé avec succès",
  "data": {
    "user": { "...": "..." }
  }
}
```

### Retour — Erreur (doublon)

```json
{
  "success": false,
  "message": "Un utilisateur avec ce numéro de téléphone existe déjà",
  "status_code": 409
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `createUser(userData: CreateUserRequest)` |

---

## 10. Modifier un utilisateur — `PUT /api/users/{id}`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `PUT /api/users/{user_id}` |
| **Description** | Met à jour les informations d'un utilisateur existant. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Paramètres (Body JSON — partiel)

```json
{
  "first_name": "Jean-Pierre",
  "email": "jp@example.com",
  "role_id": "new-role-uuid"
}
```

### Retour — Succès

```json
{
  "success": true,
  "message": "Utilisateur mis à jour avec succès",
  "data": {
    "user": { "...": "..." }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `updateUser(userId: string, userData: UpdateUserRequest)` |

---

## 11. Changer le statut — `PATCH /api/users/{id}/status`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `PATCH /api/users/{user_id}/status` |
| **Description** | Modifie le statut d'un utilisateur (ACTIVE, SUSPENDED, FROZEN, CLOSED). |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Paramètres (Body JSON)

```json
{
  "status": "SUSPENDED"
}
```

| Champ  | Type   | Requis | Valeurs possibles                    |
|--------|--------|--------|--------------------------------------|
| status | string | Oui    | `ACTIVE`, `SUSPENDED`, `FROZEN`, `CLOSED` |

### Retour — Succès

```json
{
  "success": true,
  "message": "Utilisateur suspendu",
  "data": {
    "user": { "...": "..." }
  }
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `changeUserStatus(userId: string, status: string)` |

---

## 12. Supprimer un utilisateur — `DELETE /api/users/{id}`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `DELETE /api/users/{user_id}` |
| **Description** | Supprime définitivement un utilisateur. Accessible uniquement aux administrateurs système. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "message": "Utilisateur supprimé avec succès"
}
```

### Retour — Erreur

```json
{
  "success": false,
  "message": "Utilisateur non trouvé",
  "status_code": 404
}
```

### Fichier à modifier

| Fichier | Méthode à remplacer |
|---------|---------------------|
| `src/app/modules/auth/services/auth.service.ts` | `deleteUser(userId: string)` |

---

## 13. Liste des rôles — `GET /api/roles`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/roles` |
| **Description** | Récupère la liste des rôles disponibles pour l'attribution aux utilisateurs. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "roles": [
      {
        "role_id": "role-uuid",
        "name": "SYSTEM_ADMIN",
        "description": "System Administrator with full access",
        "is_default": false,
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Fichier à modifier

| Fichier | Méthode |
|---------|---------|
| `src/app/modules/auth/services/auth.service.ts` | Ajouter `getRoles(): Observable<UserRole[]>` |

---

## 14. Liste des permissions — `GET /api/permissions`

| Champ        | Détail |
|-------------|--------|
| **URL**      | `GET /api/permissions` |
| **Description** | Récupère la liste de toutes les permissions disponibles dans le système. |
| **Headers**  | `Authorization: Bearer {access_token}` |

### Retour — Succès

```json
{
  "success": true,
  "data": {
    "permissions": [
      {
        "permission_id": "perm-uuid",
        "name": "USER_CREATE",
        "resource": "users",
        "action": "create",
        "description": "Create Users",
        "created_at": "2026-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Fichier à modifier

| Fichier | Méthode |
|---------|---------|
| `src/app/modules/auth/services/auth.service.ts` | Ajouter `getPermissions(): Observable<UserPermission[]>` |

---

## Structure des fichiers à modifier

```
src/app/modules/auth/
├── API_AUTH_INTEGRATION.md          ← Ce fichier (documentation)
├── services/
│   ├── auth.service.ts              ← SERVICE PRINCIPAL à modifier (12 méthodes)
│   ├── token.service.ts             ← OK — Déjà prêt pour les tokens JWT
│   └── session.service.ts           ← OK — Déjà prêt
├── interceptors/
│   ├── auth.interceptor.ts          ← À vérifier (URLs d'exclusion)
│   ├── error.interceptor.ts         ← À adapter pour les réponses API standardisées
│   └── loading.interceptor.ts       ← OK
├── models/
│   ├── login.model.ts               ← OK — Interfaces déjà définies
│   ├── auth-response.model.ts       ← À adapter (ApiError existant)
│   ├── user.model.ts                ← OK — Interfaces déjà définies
│   └── token.model.ts               ← OK — Interfaces déjà définies
├── guards/
│   ├── auth.guard.ts                ← OK — Logique déjà indépendante
│   ├── no-auth.guard.ts             ← OK
│   ├── permission.guard.ts          ← OK
│   └── role.guard.ts                ← OK
├── enums/
│   ├── role.enum.ts                 ← OK
│   └── permission.enum.ts           ← OK
├── login/
│   └── login.component.ts           ← OK — Utilise déjà le service
├── two-factor-auth/
│   └── two-factor-auth.component.ts ← OK — Utilise déjà le service
├── forgot-password/
│   └── forgot-password.component.ts ← OK — Utilise déjà le service
├── reset-password/
│   └── reset-password.component.ts  ← OK — Utilise déjà le service
├── auth.constants.ts                ← À mettre à jour (URLs API)
└── auth-routing.module.ts           ← OK
```

---

## Constantes et configuration à ajouter

### `src/app/modules/auth/auth.constants.ts`

```typescript
export const AUTH_API = {
  BASE_URL: '/api',
  LOGIN: '/auth/login',
  VERIFY_2FA: '/auth/verify-2fa',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  REFRESH_TOKEN: '/auth/refresh',
  LOGOUT: '/auth/logout',
  USERS: '/users',
  ROLES: '/roles',
  PERMISSIONS: '/permissions'
} as const;
```

### `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8000/api',  // À adapter selon l'URL du backend
  apiVersion: 'v1'
};
```

---

## Checklist d'implémentation

- [ ] 1. Ajouter `AUTH_API` dans `auth.constants.ts`
- [ ] 2. Injecter `HttpClient` et `environment.apiBaseUrl` dans `AuthService`
- [ ] 3. Remplacer `login()` — Appel POST `/api/auth/login`
- [ ] 4. Remplacer `verifyTwoFactor()` — Appel POST `/api/auth/verify-2fa`
- [ ] 5. Remplacer `forgotPassword()` — Appel POST `/api/auth/forgot-password`
- [ ] 6. Remplacer `resetPassword()` — Appel POST `/api/auth/reset-password`
- [ ] 7. Remplacer `refreshToken()` — Appel POST `/api/auth/refresh`
- [ ] 8. Ajouter appel API `logout()` — POST `/api/auth/logout`
- [ ] 9. Remplacer `getUsers()` — Appel GET `/api/users`
- [ ] 10. Remplacer `getUserById()` — Appel GET `/api/users/{id}`
- [ ] 11. Remplacer `createUser()` — Appel POST `/api/users`
- [ ] 12. Remplacer `updateUser()` — Appel PUT `/api/users/{id}`
- [ ] 13. Remplacer `changeUserStatus()` — Appel PATCH `/api/users/{id}/status`
- [ ] 14. Remplacer `deleteUser()` — Appel DELETE `/api/users/{id}`
- [ ] 15. Ajouter `getRoles()` — Appel GET `/api/roles`
- [ ] 16. Ajouter `getPermissions()` — Appel GET `/api/permissions`
- [ ] 17. Mettre à jour `error.interceptor.ts` pour le format standardisé
- [ ] 18. Mettre à jour `auth.interceptor.ts` (vérifier les chemins exclus)
- [ ] 19. Mettre à jour `environment.ts` avec l'URL de base de l'API
- [ ] 20. Supprimer les méthodes mock `initMockUsers()`, `getMockUsers()`, `saveMockUsers()`
- [ ] 21. Supprimer les données mockées et importations inutilisées
- [ ] 22. Tester le flux complet : connexion → 2FA → dashboard → rafraîchissement → déconnexion