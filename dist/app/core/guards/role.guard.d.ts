import type { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
export declare class RoleGuard implements CanActivate {
    private authService;
    private router;
    constructor(authService: AuthService, router: Router);
    canActivate(route: ActivatedRouteSnapshot): boolean;
}
//# sourceMappingURL=role.guard.d.ts.map