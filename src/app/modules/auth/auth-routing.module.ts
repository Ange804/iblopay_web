// src/app/modules/auth/auth-routing.module.ts
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import type { Routes } from '@angular/router';

@Component({
  template: '<h1>Login</h1><p>Placeholder login page.</p>'
})
class LoginComponent {}

@Component({
  template: '<h1>Register</h1><p>Placeholder register page.</p>'
})
class RegisterComponent {}

@Component({
  template: '<h1>Forgot Password</h1><p>Placeholder forgot password page.</p>'
})
class ForgotPasswordComponent {}

@Component({
  template: '<h1>Reset Password</h1><p>Placeholder reset password page.</p>'
})
class ResetPasswordComponent {}

@Component({
  template: '<h1>Two-Factor Auth</h1><p>Placeholder two-factor auth page.</p>'
})
class TwoFactorAuthComponent {}

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '2fa', component: TwoFactorAuthComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TwoFactorAuthComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
