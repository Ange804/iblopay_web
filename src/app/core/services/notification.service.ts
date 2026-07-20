import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AppNotification {
    id: string;
    /** Clé du module concerné ('agents', 'transactions', 'users', ...)
     *  ou 'global' pour une notification affichée dans tous les modules. */
    module: string;
    title: string;
    message: string;
    date: Date;
    read: boolean;
    link?: string | any[];
    icon?: string;
}

/**
 * Service central de notifications.
 *
 * - Chaque module peut pousser ses propres notifications via `add()`
 *   (ex: le module Agents pousse "Nouvel agent en attente de validation").
 * - Le header (LayoutComponent) affiche uniquement les notifications
 *   du module actif + celles marquées 'global', via `getForModule()`.
 * - Remplacez la génération de démo ci-dessous par un appel HTTP réel
 *   (ex: this.http.get<AppNotification[]>('/api/notifications')) et
 *   éventuellement un flux temps réel (WebSocket/SSE) qui appelle `add()`.
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {
    private notificationsSubject = new BehaviorSubject<AppNotification[]>(this.seedDemoData());
    notifications$: Observable<AppNotification[]> = this.notificationsSubject.asObservable();

    private seedDemoData(): AppNotification[] {
        return [
            {
                id: 'n1',
                module: 'agents',
                title: 'Nouvel agent à valider',
                message: 'Un dossier de Super Agent est en attente d’approbation.',
                date: new Date(Date.now() - 1000 * 60 * 12),
                read: false,
                link: '/agents',
                icon: 'fa-solid fa-user-tie'
            },
            {
                id: 'n2',
                module: 'transactions',
                title: 'Transaction suspecte détectée',
                message: 'Une transaction dépasse le seuil habituel pour la province Gitega.',
                date: new Date(Date.now() - 1000 * 60 * 45),
                read: false,
                link: '/transactions',
                icon: 'fa-solid fa-triangle-exclamation'
            },
            {
                id: 'n3',
                module: 'global',
                title: 'Maintenance planifiée',
                message: 'Une maintenance système est prévue ce soir à 23h00.',
                date: new Date(Date.now() - 1000 * 60 * 60 * 3),
                read: true,
                icon: 'fa-solid fa-server'
            }
        ];
    }

    /** Notifications pertinentes pour le module actif (module courant + 'global'). */
    getForModule(moduleKey: string | null): Observable<AppNotification[]> {
        return this.notifications$.pipe(
            map((list) =>
                list
                    .filter((n) => n.module === 'global' || n.module === moduleKey)
                    .sort((a, b) => b.date.getTime() - a.date.getTime())
            )
        );
    }

    unreadCountForModule(moduleKey: string | null): Observable<number> {
        return this.getForModule(moduleKey).pipe(
            map((list) => list.filter((n) => !n.read).length)
        );
    }

    add(notification: AppNotification): void {
        this.notificationsSubject.next([notification, ...this.notificationsSubject.value]);
    }

    markAsRead(id: string): void {
        this.notificationsSubject.next(
            this.notificationsSubject.value.map((n) => (n.id === id ? { ...n, read: true } : n))
        );
    }

    markAllAsReadForModule(moduleKey: string | null): void {
        this.notificationsSubject.next(
            this.notificationsSubject.value.map((n) =>
                n.module === 'global' || n.module === moduleKey ? { ...n, read: true } : n
            )
        );
    }
}