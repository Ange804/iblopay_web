// src/app/core/guards/permission.guard.ts
import { Injectable } from '@angular/core';
import type { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredPermissions = route.data['permissions'] as Array<string>;
    const userPermissions = this.authService.getUserPermissions();
    
    const hasPermission = requiredPermissions.some(p => userPermissions.includes(p));
    if (hasPermission) {
      return true;
    }
    this.router.navigate(['/dashboard']);
    return false;
  }
}
