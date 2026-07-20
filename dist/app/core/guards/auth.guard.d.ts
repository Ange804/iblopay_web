import type { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
export declare class AuthGuard implements CanActivate {
    private authService;
    private router;
    constructor(authService: AuthService, router: Router);
    canActivate(): boolean;
}
//# sourceMappingURL=auth.guard.d.ts.map