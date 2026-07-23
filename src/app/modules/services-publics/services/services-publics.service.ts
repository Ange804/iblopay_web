import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServicePublic, Commission, Transaction } from '../models/service-public.model';
import { SERVICES_PUBLICS_MOCK } from '../data/services-publics.mock';

@Injectable({
    providedIn: 'root'
})
export class ServicesPublicsService {

    private readonly apiUrl = '/api/services-publics';

    constructor(private http: HttpClient) { }

    getAll(): Observable<ServicePublic[]> {
        // return this.http.get<ServicePublic[]>(this.apiUrl);
        return of(SERVICES_PUBLICS_MOCK);
    }

    getById(id: number): Observable<ServicePublic | undefined> {
        // return this.http.get<ServicePublic>(`${this.apiUrl}/${id}`);
        return this.getAll().pipe(
            map(services => services.find(s => s.id === id))
        );
    }

    update(service: ServicePublic): Observable<ServicePublic> {
        // return this.http.put<ServicePublic>(`${this.apiUrl}/${service.id}`, service);
        return of(service);
    }

    create(service: ServicePublic): Observable<ServicePublic> {
        // return this.http.post<ServicePublic>(this.apiUrl, service);
        return of({ ...service, id: Date.now() });
    }

    delete(id: number): Observable<void> {
        // return this.http.delete<void>(`${this.apiUrl}/${id}`);
        return of(void 0);
    }

    getCommissions(serviceId: number): Observable<Commission[]> {
        return this.getById(serviceId).pipe(
            map(service => service?.commissions || [])
        );
    }

    getTransactions(serviceId: number): Observable<Transaction[]> {
        return this.getById(serviceId).pipe(
            map(service => service?.transactions || [])
        );
    }

    addCommission(serviceId: number, commission: Commission): Observable<Commission> {
        // return this.http.post<Commission>(`${this.apiUrl}/${serviceId}/commissions`, commission);
        return of({ ...commission, id: Date.now() });
    }

    updateCommission(serviceId: number, commission: Commission): Observable<Commission> {
        // return this.http.put<Commission>(`${this.apiUrl}/${serviceId}/commissions/${commission.id}`, commission);
        return of(commission);
    }

    deleteCommission(serviceId: number, commissionId: number): Observable<void> {
        // return this.http.delete<void>(`${this.apiUrl}/${serviceId}/commissions/${commissionId}`);
        return of(void 0);
    }
}