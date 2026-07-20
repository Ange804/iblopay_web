import type { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
export declare class ErrorInterceptor implements HttpInterceptor {
    private router;
    private authService;
    constructor(router: Router, authService: AuthService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
//# sourceMappingURL=error.interceptor.d.ts.map