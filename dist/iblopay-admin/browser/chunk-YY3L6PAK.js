import {
  otpValidator,
  phoneValidator
} from "./chunk-YAQZZUDO.js";
import {
  AUTH_CONSTANTS,
  AuthService
} from "./chunk-E42ILUAC.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VBNNW23C.js";
import {
  ActivatedRoute,
  CommonModule,
  NgIf,
  Router,
  RouterModule,
  Subject,
  takeUntil,
  timer,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6UEC5R44.js";

// src/app/modules/auth/validators/password.validator.ts
function pinValidator() {
  return (control) => {
    const value = control.value;
    if (!value)
      return null;
    const isDigitsOnly = /^\d+$/.test(value);
    if (!isDigitsOnly) {
      return { pinFormat: "Le PIN doit contenir uniquement des chiffres" };
    }
    if (value.length < AUTH_CONSTANTS.PIN_MIN_LENGTH) {
      return { pinMinLength: `Le PIN doit avoir au moins ${AUTH_CONSTANTS.PIN_MIN_LENGTH} chiffres` };
    }
    if (value.length > AUTH_CONSTANTS.PIN_MAX_LENGTH) {
      return { pinMaxLength: `Le PIN ne doit pas d\xE9passer ${AUTH_CONSTANTS.PIN_MAX_LENGTH} chiffres` };
    }
    return null;
  };
}
function pinMatchValidator(pinField, confirmField) {
  return (group) => {
    const pin = group.get(pinField)?.value;
    const confirm = group.get(confirmField)?.value;
    if (pin && confirm && pin !== confirm) {
      return { pinMismatch: "Les PINs ne correspondent pas" };
    }
    return null;
  };
}

// src/app/modules/auth/login/login.component.ts
function LoginComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Votre session a expir\xE9. Veuillez vous reconnecter. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " Le num\xE9ro de t\xE9l\xE9phone est requis ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Afficher");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Masquer");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " Le code PIN est requis ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Se connecter");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275element(1, "span", 46);
    \u0275\u0275text(2, " Connexion en cours... ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, authService, router, route) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.isLoading = false;
    this.errorMessage = "";
    this.sessionExpired = false;
    this.showPin = false;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      phone_number: ["", [Validators.required, phoneValidator()]],
      pin: ["", [Validators.required, pinValidator()]]
    });
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params["expired"] === "true") {
        this.sessionExpired = true;
        this.errorMessage = AUTH_CONSTANTS.MESSAGES.SESSION_EXPIRED;
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.sessionExpired = false;
    const credentials = this.loginForm.value;
    this.authService.login(credentials).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          if (response.data?.user) {
            this.router.navigate([AUTH_CONSTANTS.DASHBOARD_ROUTE]);
          }
        }
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 401) {
          this.errorMessage = AUTH_CONSTANTS.MESSAGES.LOGIN_FAILED;
        } else if (error.status === 0) {
          this.errorMessage = AUTH_CONSTANTS.MESSAGES.NETWORK_ERROR;
        } else if (error.status === 403 && error.error?.requires_2fa) {
          this.router.navigate([AUTH_CONSTANTS.TWO_FACTOR_ROUTE], {
            queryParams: { phone: credentials.phone_number }
          });
        } else {
          this.errorMessage = error.userMessage || error.error?.message || AUTH_CONSTANTS.MESSAGES.LOGIN_FAILED;
        }
      }
    });
  }
  togglePinVisibility() {
    this.showPin = !this.showPin;
  }
  getFieldError(fieldName) {
    const control = this.loginForm.get(fieldName);
    if (!control || !control.errors || !control.touched)
      return "";
    if (control.errors["required"])
      return "Ce champ est requis";
    if (control.errors["phoneFormat"])
      return control.errors["phoneFormat"];
    if (control.errors["pinFormat"])
      return control.errors["pinFormat"];
    if (control.errors["pinMinLength"])
      return control.errors["pinMinLength"];
    if (control.errors["pinMaxLength"])
      return control.errors["pinMaxLength"];
    return "Valeur invalide";
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 17, consts: [[1, "auth-page"], [1, "auth-bg"], [1, "bg-gradient"], [1, "bg-pattern"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "auth-container"], [1, "auth-branding"], [1, "branding-content"], [1, "logo-section"], [1, "logo-icon"], [1, "brand-name"], [1, "branding-text"], [1, "branding-features"], [1, "feature-item"], [1, "feature-icon"], [1, "feature-text"], [1, "auth-form-section"], [1, "auth-form-wrapper"], [1, "mobile-logo"], [1, "logo-icon-sm"], [1, "mobile-brand"], [1, "form-header"], [3, "ngSubmit", "formGroup"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], [1, "form-group"], ["for", "phone_number"], [1, "input-wrapper"], ["type", "text", "id", "phone_number", "formControlName", "phone_number", "placeholder", "Entrez votre num\xE9ro", "autocomplete", "tel"], ["class", "field-error", 4, "ngIf"], ["for", "pin"], ["id", "pin", "formControlName", "pin", "placeholder", "Entrez votre code PIN", "autocomplete", "current-password", 3, "type"], ["type", "button", 1, "toggle-pin", 3, "click"], [4, "ngIf"], [1, "form-actions-top"], ["href", "/authentication/forgot-password", 1, "forgot-link"], ["type", "submit", 1, "btn-login", 3, "disabled"], ["class", "btn-loader", 4, "ngIf"], [1, "form-footer"], [1, "alert", "alert-error"], [1, "alert", "alert-warning"], [1, "field-error"], [1, "btn-loader"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11);
        \u0275\u0275element(12, "div", 12);
        \u0275\u0275elementStart(13, "span", 13);
        \u0275\u0275text(14, "IBLO PAY");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 14)(16, "h2");
        \u0275\u0275text(17, "G\xE9rez vos transactions en toute s\xE9curit\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "Plateforme d'administration IBLO PAY.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "div", 17);
        \u0275\u0275text(23, "\u{1F512}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 18)(25, "strong");
        \u0275\u0275text(26, "S\xE9curis\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span");
        \u0275\u0275text(28, "Authentification par PIN");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "div", 21);
        \u0275\u0275element(32, "div", 22);
        \u0275\u0275elementStart(33, "span", 23);
        \u0275\u0275text(34, "IBLO PAY");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 24)(36, "h2");
        \u0275\u0275text(37, "Connexion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, "Acc\xE9dez \xE0 votre espace administrateur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "form", 25);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_40_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275template(41, LoginComponent_div_41_Template, 2, 1, "div", 26)(42, LoginComponent_div_42_Template, 2, 0, "div", 27);
        \u0275\u0275elementStart(43, "div", 28)(44, "label", 29);
        \u0275\u0275text(45, "Num\xE9ro de t\xE9l\xE9phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 30);
        \u0275\u0275element(47, "input", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, LoginComponent_div_48_Template, 2, 0, "div", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 28)(50, "label", 33);
        \u0275\u0275text(51, "Code PIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 30);
        \u0275\u0275element(53, "input", 34);
        \u0275\u0275elementStart(54, "button", 35);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_54_listener() {
          return ctx.togglePinVisibility();
        });
        \u0275\u0275template(55, LoginComponent_span_55_Template, 2, 0, "span", 36)(56, LoginComponent_span_56_Template, 2, 0, "span", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(57, LoginComponent_div_57_Template, 2, 0, "div", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 37)(59, "a", 38);
        \u0275\u0275text(60, " Mot de passe oubli\xE9? ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "button", 39);
        \u0275\u0275template(62, LoginComponent_span_62_Template, 2, 0, "span", 36)(63, LoginComponent_span_63_Template, 3, 0, "span", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 41)(65, "p");
        \u0275\u0275text(66, "\xA9 2026 IBLO PAY");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_9_0;
        \u0275\u0275advance(40);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sessionExpired);
        \u0275\u0275advance();
        \u0275\u0275classProp("has-error", ((tmp_3_0 = ctx.loginForm.get("phone_number")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.loginForm.get("phone_number")) == null ? null : tmp_3_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.loginForm.get("phone_number")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.loginForm.get("phone_number")) == null ? null : tmp_4_0.touched));
        \u0275\u0275advance();
        \u0275\u0275classProp("has-error", ((tmp_5_0 = ctx.loginForm.get("pin")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.loginForm.get("pin")) == null ? null : tmp_5_0.touched));
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.showPin ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showPin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.loginForm.get("pin")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.loginForm.get("pin")) == null ? null : tmp_9_0.touched));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("loading", ctx.isLoading);
        \u0275\u0275property("disabled", ctx.isLoading || ctx.loginForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n}\n.auth-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n}\n.auth-bg[_ngcontent-%COMP%]   .bg-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F0F23 0%,\n      #1a1a3e 25%,\n      #0F0F23 50%,\n      #0d1b2a 100%);\n}\n.auth-bg[_ngcontent-%COMP%]   .bg-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0.03;\n  background-image:\n    radial-gradient(\n      circle at 25% 25%,\n      #6366F1 1px,\n      transparent 1px),\n    radial-gradient(\n      circle at 75% 75%,\n      #8B5CF6 1px,\n      transparent 1px);\n  background-size: 50px 50px;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n.auth-bg[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  animation: _ngcontent-%COMP%_float 20s infinite;\n}\n.auth-bg[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: rgba(99, 102, 241, 0.08);\n  top: -100px;\n  left: -100px;\n  animation-duration: 25s;\n}\n.auth-bg[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: rgba(139, 92, 246, 0.06);\n  top: 50%;\n  right: -50px;\n  animation-duration: 20s;\n  animation-delay: -5s;\n}\n.auth-bg[_ngcontent-%COMP%]   .shape.shape-3[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  background: rgba(6, 182, 212, 0.05);\n  bottom: -50px;\n  left: 30%;\n  animation-duration: 22s;\n  animation-delay: -10s;\n}\n.auth-bg[_ngcontent-%COMP%]   .shape.shape-4[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: rgba(129, 140, 248, 0.04);\n  top: 20%;\n  left: 60%;\n  animation-duration: 18s;\n  animation-delay: -3s;\n}\n.auth-bg[_ngcontent-%COMP%]   .shape.shape-5[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  background: rgba(236, 72, 153, 0.03);\n  bottom: 20%;\n  right: 30%;\n  animation-duration: 28s;\n  animation-delay: -8s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  25% {\n    transform: translate(30px, -30px) scale(1.05);\n  }\n  50% {\n    transform: translate(-20px, 20px) scale(0.95);\n  }\n  75% {\n    transform: translate(20px, 10px) scale(1.02);\n  }\n}\n.auth-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  width: 100%;\n  max-width: 1100px;\n  min-height: 640px;\n  margin: 24px;\n  border-radius: 24px;\n  overflow: hidden;\n  background: rgba(26, 26, 46, 0.6);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(51, 65, 85, 0.3);\n  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.03) inset;\n}\n.auth-branding[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(139, 92, 246, 0.08) 100%);\n  border-right: 1px solid rgba(51, 65, 85, 0.2);\n  position: relative;\n}\n.auth-branding[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 30% 50%,\n      rgba(99, 102, 241, 0.1) 0%,\n      transparent 70%);\n}\n.branding-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 400px;\n}\n.logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 40px;\n}\n.logo-section[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n}\n.logo-section[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.logo-section[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #818CF8);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  letter-spacing: -0.5px;\n}\n.branding-text[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.branding-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #F8FAFC;\n  margin-bottom: 12px;\n  line-height: 1.3;\n}\n.branding-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #94A3B8;\n  line-height: 1.6;\n}\n.branding-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(51, 65, 85, 0.15);\n  transition: all 0.3s ease;\n}\n.feature-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(99, 102, 241, 0.2);\n  transform: translateX(4px);\n}\n.feature-item[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(99, 102, 241, 0.1);\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #F8FAFC;\n}\n.feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n}\n.auth-form-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n}\n.auth-form-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n.mobile-logo[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 32px;\n}\n.mobile-logo[_ngcontent-%COMP%]   .logo-icon-sm[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.mobile-logo[_ngcontent-%COMP%]   .logo-icon-sm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.mobile-logo[_ngcontent-%COMP%]   .mobile-brand[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #818CF8);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #F8FAFC;\n  margin-bottom: 8px;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94A3B8;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  font-size: 13px;\n  line-height: 1.4;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #FCA5A5;\n}\n.alert.alert-error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #EF4444;\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  color: #FDE68A;\n}\n.alert.alert-warning[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #F59E0B;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #94A3B8;\n  margin-bottom: 8px;\n  letter-spacing: 0.3px;\n}\n.form-group.has-error[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.5);\n}\n.form-group.has-error[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #EF4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: #16213E;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #6366F1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.input-wrapper[_ngcontent-%COMP%]:hover:not(:focus-within) {\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  flex-shrink: 0;\n  color: #64748B;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 12px 14px 12px 0;\n  font-size: 14px;\n  color: #F8FAFC;\n  font-family: inherit;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #64748B;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px #16213E inset;\n  -webkit-text-fill-color: #F8FAFC;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pin[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #64748B;\n  transition: color 0.2s;\n  padding: 0;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pin[_ngcontent-%COMP%]:hover {\n  color: #94A3B8;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #FCA5A5;\n  margin-top: 6px;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n}\n.form-actions-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 24px;\n}\n.form-actions-top[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #818CF8;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.form-actions-top[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]:hover {\n  color: #6366F1;\n  text-decoration: underline;\n}\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366F1,\n      #8B5CF6);\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.btn-login[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      transparent,\n      rgba(255, 255, 255, 0.1));\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);\n}\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  opacity: 1;\n}\n.btn-login[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-login[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-login.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.btn-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.btn-loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  text-align: center;\n}\n.form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n}\n@media (max-width: 900px) {\n  .auth-branding[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-container[_ngcontent-%COMP%] {\n    max-width: 480px;\n  }\n  .mobile-logo[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 520px) {\n  .auth-container[_ngcontent-%COMP%] {\n    margin: 12px;\n    border-radius: 16px;\n  }\n  .auth-form-section[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app\\modules\\auth\\login\\login.component.ts", lineNumber: 20 });
})();

// src/app/modules/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 31)(3, "polyline", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function ForgotPasswordComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "circle", 34)(3, "line", 35)(4, "line", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ForgotPasswordComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("phone_number"), " ");
  }
}
function ForgotPasswordComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Envoyer le code");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713 Code envoy\xE9");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Envoi en cours...");
    \u0275\u0275elementEnd()();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.isLoading = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.otpSent = false;
    this.destroy$ = new Subject();
    this.forgotForm = this.fb.group({
      phone_number: ["", [Validators.required, phoneValidator()]]
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSubmit() {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    const phoneNumber = this.forgotForm.value.phone_number;
    this.authService.forgotPassword({ phone_number: phoneNumber }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          this.otpSent = true;
          this.successMessage = AUTH_CONSTANTS.MESSAGES.OTP_SENT;
          setTimeout(() => {
            this.router.navigate([AUTH_CONSTANTS.RESET_PASSWORD_ROUTE], {
              queryParams: { phone: phoneNumber }
            });
          }, 2e3);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.userMessage || "Ce num\xE9ro de t\xE9l\xE9phone n'est pas associ\xE9 \xE0 un compte.";
      }
    });
  }
  getFieldError(fieldName) {
    const control = this.forgotForm.get(fieldName);
    if (!control || !control.errors || !control.touched)
      return "";
    if (control.errors["required"])
      return "Ce champ est requis";
    if (control.errors["phoneFormat"])
      return control.errors["phoneFormat"];
    return "Valeur invalide";
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(t) {
      return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 12, consts: [[1, "auth-page"], [1, "auth-bg"], [1, "bg-gradient"], [1, "bg-pattern"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "auth-card"], [1, "card-content"], ["routerLink", "/auth/login", "id", "back-to-login", 1, "back-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15 18 9 12 15 6"], [1, "card-icon"], [1, "icon-bg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], [1, "card-header"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["id", "forgot-password-form", 1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "forgot_phone"], [1, "input-wrapper"], [1, "input-icon"], ["type", "tel", "id", "forgot_phone", "formControlName", "phone_number", "placeholder", "+237 6XX XXX XXX", "autocomplete", "tel"], ["class", "field-error", 4, "ngIf"], ["type", "submit", "id", "send-otp-btn", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "btn-loader", 4, "ngIf"], [1, "alert", "alert-success"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "alert", "alert-error"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "field-error"], [1, "btn-loader"], [1, "spinner"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 11);
        \u0275\u0275element(12, "polyline", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "Retour \xE0 la connexion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 13)(16, "div", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 15);
        \u0275\u0275element(18, "path", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "div", 17)(20, "h2");
        \u0275\u0275text(21, "Mot de passe oubli\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23, "Entrez votre num\xE9ro de t\xE9l\xE9phone pour recevoir un code de v\xE9rification par SMS");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, ForgotPasswordComponent_div_24_Template, 6, 1, "div", 18)(25, ForgotPasswordComponent_div_25_Template, 7, 1, "div", 19);
        \u0275\u0275elementStart(26, "form", 20);
        \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_26_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(27, "div", 21)(28, "label", 22);
        \u0275\u0275text(29, "Num\xE9ro de t\xE9l\xE9phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 23)(31, "div", 24);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 11);
        \u0275\u0275element(33, "path", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(34, "input", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, ForgotPasswordComponent_div_35_Template, 2, 1, "div", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 27);
        \u0275\u0275template(37, ForgotPasswordComponent_span_37_Template, 2, 0, "span", 28)(38, ForgotPasswordComponent_span_38_Template, 2, 0, "span", 28)(39, ForgotPasswordComponent_div_39_Template, 4, 0, "div", 29);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(24);
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.forgotForm);
        \u0275\u0275advance();
        \u0275\u0275classProp("has-error", ctx.getFieldError("phone_number"));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.getFieldError("phone_number"));
        \u0275\u0275advance();
        \u0275\u0275classProp("loading", ctx.isLoading);
        \u0275\u0275property("disabled", ctx.isLoading || ctx.otpSent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.otpSent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.otpSent && !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n}\n.auth-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n}\n.auth-bg[_ngcontent-%COMP%]   .bg-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F0F23 0%,\n      #1a1a3e 25%,\n      #0F0F23 50%,\n      #0d1b2a 100%);\n}\n.auth-bg[_ngcontent-%COMP%]   .bg-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0.03;\n  background-image:\n    radial-gradient(\n      circle at 25% 25%,\n      #6366F1 1px,\n      transparent 1px),\n    radial-gradient(\n      circle at 75% 75%,\n      #8B5CF6 1px,\n      transparent 1px);\n  background-size: 50px 50px;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  animation: _ngcontent-%COMP%_float 20s infinite;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: rgba(99, 102, 241, 0.08);\n  top: -50px;\n  left: -50px;\n  animation-duration: 25s;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  background: rgba(139, 92, 246, 0.06);\n  bottom: -30px;\n  right: -30px;\n  animation-duration: 20s;\n  animation-delay: -5s;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-3[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: rgba(6, 182, 212, 0.05);\n  top: 50%;\n  left: 50%;\n  animation-duration: 22s;\n  animation-delay: -10s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  25% {\n    transform: translate(30px, -30px) scale(1.05);\n  }\n  50% {\n    transform: translate(-20px, 20px) scale(0.95);\n  }\n  75% {\n    transform: translate(20px, 10px) scale(1.02);\n  }\n}\n.auth-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 460px;\n  margin: 24px;\n  border-radius: 24px;\n  background: rgba(26, 26, 46, 0.7);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(51, 65, 85, 0.3);\n  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);\n  animation: _ngcontent-%COMP%_cardAppear 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_cardAppear {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #64748B;\n  text-decoration: none;\n  margin-bottom: 28px;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #818CF8;\n}\n.card-icon[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.card-icon[_ngcontent-%COMP%]   .icon-bg[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #818CF8;\n}\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #F8FAFC;\n  margin-bottom: 8px;\n}\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94A3B8;\n  line-height: 1.5;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  font-size: 13px;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #FCA5A5;\n}\n.alert.alert-error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #EF4444;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #6EE7B7;\n}\n.alert.alert-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #10B981;\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  color: #FDE68A;\n}\n.alert.alert-warning[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #F59E0B;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #94A3B8;\n  margin-bottom: 8px;\n}\n.form-group.has-error[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.5);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #16213E;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #6366F1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  flex-shrink: 0;\n  color: #64748B;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 12px 14px 12px 0;\n  font-size: 14px;\n  color: #F8FAFC;\n  font-family: inherit;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #64748B;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px #16213E inset;\n  -webkit-text-fill-color: #F8FAFC;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pin[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #64748B;\n  padding: 0;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pin[_ngcontent-%COMP%]:hover {\n  color: #94A3B8;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #FCA5A5;\n  margin-top: 6px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366F1,\n      #8B5CF6);\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  background: transparent;\n  color: #94A3B8;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: 12px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #818CF8;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.btn-loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.otp-inputs[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 56px;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  color: #F8FAFC;\n  background: #16213E;\n  border: 1.5px solid #334155;\n  border-radius: 8px;\n  outline: none;\n  transition: all 0.2s ease;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n}\n.otp-inputs[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366F1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.otp-inputs[_ngcontent-%COMP%]   .otp-input.filled[_ngcontent-%COMP%] {\n  border-color: #818CF8;\n  background: rgba(99, 102, 241, 0.05);\n}\n.otp-actions[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.otp-actions[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n}\n.otp-actions[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  color: #818CF8;\n  font-weight: 600;\n}\n.otp-actions[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #818CF8;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: inherit;\n  padding: 4px 8px;\n}\n.otp-actions[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.otp-actions[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]:disabled {\n  color: #64748B;\n  cursor: not-allowed;\n}\n@media (max-width: 520px) {\n  .auth-card[_ngcontent-%COMP%] {\n    margin: 12px;\n  }\n  .card-content[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n  .otp-inputs[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 50px;\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "app\\modules\\auth\\forgot-password\\forgot-password.component.ts", lineNumber: 19 });
})();

// src/app/modules/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 42)(3, "polyline", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function ResetPasswordComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "circle", 45)(3, "line", 46)(4, "line", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ResetPasswordComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("otp_code"), " ");
  }
}
function ResetPasswordComponent__svg_svg_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 49)(2, "circle", 50);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent__svg_svg_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 51)(2, "line", 52);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("new_pin"), " ");
  }
}
function ResetPasswordComponent__svg_svg_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 49)(2, "circle", 50);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent__svg_svg_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 51)(2, "line", 52);
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("confirm_pin"), " ");
  }
}
function ResetPasswordComponent_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "R\xE9initialiser le PIN");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Traitement...");
    \u0275\u0275elementEnd()();
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  constructor(fb, route, router, authService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.isLoading = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.phoneNumber = "";
    this.showNewPin = false;
    this.showConfirmPin = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.phoneNumber = params["phone"] || "";
      if (!this.phoneNumber) {
        this.router.navigate([AUTH_CONSTANTS.FORGOT_PASSWORD_ROUTE]);
      }
    });
    this.resetForm = this.fb.group({
      otp_code: ["", [Validators.required, otpValidator()]],
      new_pin: ["", [Validators.required, pinValidator()]],
      confirm_pin: ["", [Validators.required]]
    }, {
      validators: [pinMatchValidator("new_pin", "confirm_pin")]
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  toggleNewPinVisibility() {
    this.showNewPin = !this.showNewPin;
  }
  toggleConfirmPinVisibility() {
    this.showConfirmPin = !this.showConfirmPin;
  }
  onSubmit() {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    const request = {
      phone_number: this.phoneNumber,
      otp_code: this.resetForm.value.otp_code,
      new_pin: this.resetForm.value.new_pin,
      confirm_pin: this.resetForm.value.confirm_pin
    };
    this.authService.resetPassword(request).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          this.successMessage = AUTH_CONSTANTS.MESSAGES.PASSWORD_RESET_SUCCESS;
          setTimeout(() => {
            this.router.navigate([AUTH_CONSTANTS.LOGIN_ROUTE]);
          }, 2e3);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || AUTH_CONSTANTS.MESSAGES.OTP_INVALID;
      }
    });
  }
  getFieldError(fieldName) {
    const control = this.resetForm.get(fieldName);
    if (!control)
      return "";
    if (fieldName === "confirm_pin" && this.resetForm.errors?.["pinMismatch"] && control.touched) {
      return "Les PINs ne correspondent pas";
    }
    if (!control.errors || !control.touched)
      return "";
    if (control.errors["required"])
      return "Ce champ est requis";
    if (control.errors["otpFormat"])
      return control.errors["otpFormat"];
    if (control.errors["otpLength"])
      return control.errors["otpLength"];
    if (control.errors["pinFormat"])
      return control.errors["pinFormat"];
    if (control.errors["pinMinLength"])
      return control.errors["pinMinLength"];
    if (control.errors["pinMaxLength"])
      return control.errors["pinMaxLength"];
    return "Valeur invalide";
  }
  static {
    this.\u0275fac = function ResetPasswordComponent_Factory(t) {
      return new (t || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 74, vars: 24, consts: [[1, "auth-page"], [1, "auth-bg"], [1, "bg-gradient"], [1, "bg-pattern"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "auth-card"], [1, "card-content"], ["routerLink", "/auth/login", "id", "back-to-login", 1, "back-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15 18 9 12 15 6"], [1, "card-icon"], [1, "icon-bg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"], [1, "card-header"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["id", "reset-password-form", 1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "input-wrapper", "disabled"], [1, "input-icon"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], ["type", "text", "disabled", "", 3, "value"], ["for", "otp_code"], [1, "input-wrapper"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["type", "text", "id", "otp_code", "formControlName", "otp_code", "placeholder", "123456", "maxlength", "6", "autocomplete", "one-time-code"], ["class", "field-error", 4, "ngIf"], ["for", "new_pin"], ["id", "new_pin", "formControlName", "new_pin", "placeholder", "\u2022\u2022\u2022\u2022", "maxlength", "6", "autocomplete", "new-password", 3, "type"], ["type", "button", "tabindex", "-1", 1, "toggle-pin", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["for", "confirm_pin"], ["id", "confirm_pin", "formControlName", "confirm_pin", "placeholder", "\u2022\u2022\u2022\u2022", "maxlength", "6", "autocomplete", "new-password", 3, "type"], ["type", "submit", "id", "reset-pin-btn", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "btn-loader", 4, "ngIf"], [1, "alert", "alert-success"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "alert", "alert-error"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "field-error"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "btn-loader"], [1, "spinner"]], template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 11);
        \u0275\u0275element(12, "polyline", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "Retour \xE0 la connexion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 13)(16, "div", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 15);
        \u0275\u0275element(18, "path", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "div", 17)(20, "h2");
        \u0275\u0275text(21, "Nouveau PIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23, "Entrez le code OTP re\xE7u par SMS et d\xE9finissez votre nouveau PIN de connexion.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, ResetPasswordComponent_div_24_Template, 6, 1, "div", 18)(25, ResetPasswordComponent_div_25_Template, 7, 1, "div", 19);
        \u0275\u0275elementStart(26, "form", 20);
        \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_26_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(27, "div", 21)(28, "label");
        \u0275\u0275text(29, "Num\xE9ro de t\xE9l\xE9phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 22)(31, "div", 23);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 11);
        \u0275\u0275element(33, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(34, "input", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 21)(36, "label", 26);
        \u0275\u0275text(37, "Code OTP (6 chiffres)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 27)(39, "div", 23);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(40, "svg", 11);
        \u0275\u0275element(41, "rect", 28)(42, "path", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(43, "input", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, ResetPasswordComponent_div_44_Template, 2, 1, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 21)(46, "label", 32);
        \u0275\u0275text(47, "Nouveau PIN (4-6 chiffres)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 27)(49, "div", 23);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(50, "svg", 11);
        \u0275\u0275element(51, "rect", 28)(52, "path", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(53, "input", 33);
        \u0275\u0275elementStart(54, "button", 34);
        \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_54_listener() {
          return ctx.toggleNewPinVisibility();
        });
        \u0275\u0275template(55, ResetPasswordComponent__svg_svg_55_Template, 3, 0, "svg", 35)(56, ResetPasswordComponent__svg_svg_56_Template, 3, 0, "svg", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(57, ResetPasswordComponent_div_57_Template, 2, 1, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 21)(59, "label", 36);
        \u0275\u0275text(60, "Confirmer le PIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 27)(62, "div", 23);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(63, "svg", 11);
        \u0275\u0275element(64, "rect", 28)(65, "path", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(66, "input", 37);
        \u0275\u0275elementStart(67, "button", 34);
        \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_67_listener() {
          return ctx.toggleConfirmPinVisibility();
        });
        \u0275\u0275template(68, ResetPasswordComponent__svg_svg_68_Template, 3, 0, "svg", 35)(69, ResetPasswordComponent__svg_svg_69_Template, 3, 0, "svg", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(70, ResetPasswordComponent_div_70_Template, 2, 1, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "button", 38);
        \u0275\u0275template(72, ResetPasswordComponent_span_72_Template, 2, 0, "span", 39)(73, ResetPasswordComponent_div_73_Template, 4, 0, "div", 40);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(24);
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.resetForm);
        \u0275\u0275advance(8);
        \u0275\u0275property("value", ctx.phoneNumber);
        \u0275\u0275advance();
        \u0275\u0275classProp("has-error", ctx.getFieldError("otp_code"));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.getFieldError("otp_code"));
        \u0275\u0275advance();
        \u0275\u0275classProp("has-error", ctx.getFieldError("new_pin"));
        \u0275\u0275advance(8);
        \u0275\u0275property("type", ctx.showNewPin ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showNewPin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNewPin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.getFieldError("new_pin"));
        \u0275\u0275advance();
        \u0275\u0275classProp("has-error", ctx.getFieldError("confirm_pin"));
        \u0275\u0275advance(8);
        \u0275\u0275property("type", ctx.showConfirmPin ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showConfirmPin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showConfirmPin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.getFieldError("confirm_pin"));
        \u0275\u0275advance();
        \u0275\u0275classProp("loading", ctx.isLoading);
        \u0275\u0275property("disabled", ctx.isLoading || ctx.resetForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n}\n.auth-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n}\n.auth-bg[_ngcontent-%COMP%]   .bg-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F0F23 0%,\n      #1a1a3e 25%,\n      #0F0F23 50%,\n      #0d1b2a 100%);\n}\n.auth-bg[_ngcontent-%COMP%]   .bg-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0.03;\n  background-image:\n    radial-gradient(\n      circle at 25% 25%,\n      #6366F1 1px,\n      transparent 1px),\n    radial-gradient(\n      circle at 75% 75%,\n      #8B5CF6 1px,\n      transparent 1px);\n  background-size: 50px 50px;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  animation: _ngcontent-%COMP%_float 20s infinite;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: rgba(99, 102, 241, 0.08);\n  top: -50px;\n  left: -50px;\n  animation-duration: 25s;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  background: rgba(139, 92, 246, 0.06);\n  bottom: -30px;\n  right: -30px;\n  animation-duration: 20s;\n  animation-delay: -5s;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-3[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: rgba(6, 182, 212, 0.05);\n  top: 50%;\n  left: 50%;\n  animation-duration: 22s;\n  animation-delay: -10s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  25% {\n    transform: translate(30px, -30px) scale(1.05);\n  }\n  50% {\n    transform: translate(-20px, 20px) scale(0.95);\n  }\n  75% {\n    transform: translate(20px, 10px) scale(1.02);\n  }\n}\n.auth-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 460px;\n  margin: 24px;\n  border-radius: 24px;\n  background: rgba(26, 26, 46, 0.7);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(51, 65, 85, 0.3);\n  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);\n  animation: _ngcontent-%COMP%_cardAppear 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_cardAppear {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #64748B;\n  text-decoration: none;\n  margin-bottom: 28px;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #818CF8;\n}\n.card-icon[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.card-icon[_ngcontent-%COMP%]   .icon-bg[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #818CF8;\n}\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #F8FAFC;\n  margin-bottom: 8px;\n}\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94A3B8;\n  line-height: 1.5;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  font-size: 13px;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #FCA5A5;\n}\n.alert.alert-error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #EF4444;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #6EE7B7;\n}\n.alert.alert-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #10B981;\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  color: #FDE68A;\n}\n.alert.alert-warning[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #F59E0B;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #94A3B8;\n  margin-bottom: 8px;\n}\n.form-group.has-error[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.5);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #16213E;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #6366F1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  flex-shrink: 0;\n  color: #64748B;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 12px 14px 12px 0;\n  font-size: 14px;\n  color: #F8FAFC;\n  font-family: inherit;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #64748B;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px #16213E inset;\n  -webkit-text-fill-color: #F8FAFC;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pin[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #64748B;\n  padding: 0;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pin[_ngcontent-%COMP%]:hover {\n  color: #94A3B8;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #FCA5A5;\n  margin-top: 6px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366F1,\n      #8B5CF6);\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  background: transparent;\n  color: #94A3B8;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: 12px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #818CF8;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.btn-loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.otp-inputs[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 56px;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  color: #F8FAFC;\n  background: #16213E;\n  border: 1.5px solid #334155;\n  border-radius: 8px;\n  outline: none;\n  transition: all 0.2s ease;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n}\n.otp-inputs[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366F1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.otp-inputs[_ngcontent-%COMP%]   .otp-input.filled[_ngcontent-%COMP%] {\n  border-color: #818CF8;\n  background: rgba(99, 102, 241, 0.05);\n}\n.otp-actions[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.otp-actions[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n}\n.otp-actions[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  color: #818CF8;\n  font-weight: 600;\n}\n.otp-actions[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #818CF8;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: inherit;\n  padding: 4px 8px;\n}\n.otp-actions[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.otp-actions[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]:disabled {\n  color: #64748B;\n  cursor: not-allowed;\n}\n@media (max-width: 520px) {\n  .auth-card[_ngcontent-%COMP%] {\n    margin: 12px;\n  }\n  .card-content[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n  .otp-inputs[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 50px;\n    font-size: 20px;\n  }\n}\n.input-wrapper.disabled[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  border-color: rgba(255, 255, 255, 0.05);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.input-wrapper.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=reset-password.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "app\\modules\\auth\\reset-password\\reset-password.component.ts", lineNumber: 20 });
})();

// src/app/modules/auth/two-factor-auth/two-factor-auth.component.ts
function TwoFactorAuthComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 35)(3, "polyline", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function TwoFactorAuthComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "circle", 38)(3, "line", 39)(4, "line", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function TwoFactorAuthComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("otp_code"), " ");
  }
}
function TwoFactorAuthComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "V\xE9rifier et continuer");
    \u0275\u0275elementEnd();
  }
}
function TwoFactorAuthComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "V\xE9rification...");
    \u0275\u0275elementEnd()();
  }
}
function TwoFactorAuthComponent_p_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Renvoyer le code dans ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.cooldown, "s");
  }
}
function TwoFactorAuthComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function TwoFactorAuthComponent_button_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resendOtp());
    });
    \u0275\u0275text(1, " Renvoyer le code SMS ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
var TwoFactorAuthComponent = class _TwoFactorAuthComponent {
  constructor(fb, route, router, authService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.isLoading = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.phoneNumber = "";
    this.maskedPhone = "";
    this.cooldown = AUTH_CONSTANTS.OTP_RESEND_COOLDOWN;
    this.canResend = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.phoneNumber = params["phone"] || "";
      if (!this.phoneNumber) {
        this.router.navigate([AUTH_CONSTANTS.LOGIN_ROUTE]);
        return;
      }
      this.maskPhoneNumber();
    });
    this.otpForm = this.fb.group({
      otp_code: ["", [Validators.required, otpValidator()]]
    });
    this.startResendTimer();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }
  maskPhoneNumber() {
    const len = this.phoneNumber.length;
    if (len > 7) {
      this.maskedPhone = this.phoneNumber.substring(0, len - 6) + "\u2022\u2022\u2022\u2022" + this.phoneNumber.substring(len - 2);
    } else {
      this.maskedPhone = this.phoneNumber;
    }
  }
  startResendTimer() {
    this.canResend = false;
    this.cooldown = AUTH_CONSTANTS.OTP_RESEND_COOLDOWN;
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
    this.timerSub = timer(0, 1e3).pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.cooldown > 0) {
        this.cooldown--;
      } else {
        this.canResend = true;
        if (this.timerSub) {
          this.timerSub.unsubscribe();
        }
      }
    });
  }
  resendOtp() {
    if (!this.canResend)
      return;
    this.isLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    this.authService.forgotPassword({ phone_number: this.phoneNumber }).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          this.successMessage = AUTH_CONSTANTS.MESSAGES.OTP_RESENT;
          this.startResendTimer();
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || AUTH_CONSTANTS.MESSAGES.NETWORK_ERROR;
      }
    });
  }
  onSubmit() {
    if (this.otpForm.invalid) {
      this.otpForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    const request = {
      phone_number: this.phoneNumber,
      otp_code: this.otpForm.value.otp_code
    };
    this.authService.verifyTwoFactor(request).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          this.successMessage = AUTH_CONSTANTS.MESSAGES.LOGIN_SUCCESS;
          setTimeout(() => {
            this.router.navigate([AUTH_CONSTANTS.DASHBOARD_ROUTE]);
          }, 1e3);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || AUTH_CONSTANTS.MESSAGES.OTP_INVALID;
      }
    });
  }
  getFieldError(fieldName) {
    const control = this.otpForm.get(fieldName);
    if (!control || !control.errors || !control.touched)
      return "";
    if (control.errors["required"])
      return "Le code de v\xE9rification est requis";
    if (control.errors["otpFormat"])
      return control.errors["otpFormat"];
    if (control.errors["otpLength"])
      return control.errors["otpLength"];
    return "Code invalide";
  }
  static {
    this.\u0275fac = function TwoFactorAuthComponent_Factory(t) {
      return new (t || _TwoFactorAuthComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TwoFactorAuthComponent, selectors: [["app-two-factor-auth"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 14, consts: [[1, "auth-page"], [1, "auth-bg"], [1, "bg-gradient"], [1, "bg-pattern"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "auth-card"], [1, "card-content"], ["routerLink", "/auth/login", "id", "back-to-login", 1, "back-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15 18 9 12 15 6"], [1, "card-icon"], [1, "icon-bg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "5", "y", "11", "width", "14", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "card-header"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["id", "two-factor-form", 1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "otp_code"], [1, "input-wrapper"], [1, "input-icon"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["type", "text", "id", "otp_code", "formControlName", "otp_code", "placeholder", "123456", "maxlength", "6", "autocomplete", "one-time-code"], ["class", "field-error", 4, "ngIf"], ["type", "submit", "id", "verify-otp-btn", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "btn-loader", 4, "ngIf"], [1, "resend-container"], ["type", "button", "class", "btn-resend", 3, "disabled", "click", 4, "ngIf"], [1, "alert", "alert-success"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "alert", "alert-error"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "field-error"], [1, "btn-loader"], [1, "spinner"], ["type", "button", 1, "btn-resend", 3, "click", "disabled"]], template: function TwoFactorAuthComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 11);
        \u0275\u0275element(12, "polyline", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "Retour \xE0 la connexion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 13)(16, "div", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 15);
        \u0275\u0275element(18, "rect", 16)(19, "path", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "div", 18)(21, "h2");
        \u0275\u0275text(22, "Double Facteur (2FA)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, "Pour des raisons de s\xE9curit\xE9, nous avons envoy\xE9 un code de v\xE9rification \xE0 6 chiffres par SMS au num\xE9ro ");
        \u0275\u0275elementStart(25, "strong");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, ".");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, TwoFactorAuthComponent_div_28_Template, 6, 1, "div", 19)(29, TwoFactorAuthComponent_div_29_Template, 7, 1, "div", 20);
        \u0275\u0275elementStart(30, "form", 21);
        \u0275\u0275listener("ngSubmit", function TwoFactorAuthComponent_Template_form_ngSubmit_30_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(31, "div", 22)(32, "label", 23);
        \u0275\u0275text(33, "Code de v\xE9rification (6 chiffres)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 24)(35, "div", 25);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 11);
        \u0275\u0275element(37, "rect", 26)(38, "path", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(39, "input", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(40, TwoFactorAuthComponent_div_40_Template, 2, 1, "div", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 29);
        \u0275\u0275template(42, TwoFactorAuthComponent_span_42_Template, 2, 0, "span", 30)(43, TwoFactorAuthComponent_div_43_Template, 4, 0, "div", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 32);
        \u0275\u0275template(45, TwoFactorAuthComponent_p_45_Template, 4, 1, "p", 30)(46, TwoFactorAuthComponent_button_46_Template, 2, 1, "button", 33);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.maskedPhone);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.otpForm);
        \u0275\u0275advance();
        \u0275\u0275classProp("has-error", ctx.getFieldError("otp_code"));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.getFieldError("otp_code"));
        \u0275\u0275advance();
        \u0275\u0275classProp("loading", ctx.isLoading);
        \u0275\u0275property("disabled", ctx.isLoading || ctx.otpForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.canResend);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.canResend);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n}\n.auth-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n}\n.auth-bg[_ngcontent-%COMP%]   .bg-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0F0F23 0%,\n      #1a1a3e 25%,\n      #0F0F23 50%,\n      #0d1b2a 100%);\n}\n.auth-bg[_ngcontent-%COMP%]   .bg-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0.03;\n  background-image:\n    radial-gradient(\n      circle at 25% 25%,\n      #6366F1 1px,\n      transparent 1px),\n    radial-gradient(\n      circle at 75% 75%,\n      #8B5CF6 1px,\n      transparent 1px);\n  background-size: 50px 50px;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  animation: _ngcontent-%COMP%_float 20s infinite;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: rgba(99, 102, 241, 0.08);\n  top: -50px;\n  left: -50px;\n  animation-duration: 25s;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-2[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  background: rgba(139, 92, 246, 0.06);\n  bottom: -30px;\n  right: -30px;\n  animation-duration: 20s;\n  animation-delay: -5s;\n}\n.auth-bg[_ngcontent-%COMP%]   .floating-shapes[_ngcontent-%COMP%]   .shape.shape-3[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: rgba(6, 182, 212, 0.05);\n  top: 50%;\n  left: 50%;\n  animation-duration: 22s;\n  animation-delay: -10s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  25% {\n    transform: translate(30px, -30px) scale(1.05);\n  }\n  50% {\n    transform: translate(-20px, 20px) scale(0.95);\n  }\n  75% {\n    transform: translate(20px, 10px) scale(1.02);\n  }\n}\n.auth-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 460px;\n  margin: 24px;\n  border-radius: 24px;\n  background: rgba(26, 26, 46, 0.7);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(51, 65, 85, 0.3);\n  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);\n  animation: _ngcontent-%COMP%_cardAppear 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_cardAppear {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #64748B;\n  text-decoration: none;\n  margin-bottom: 28px;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #818CF8;\n}\n.card-icon[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.card-icon[_ngcontent-%COMP%]   .icon-bg[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #818CF8;\n}\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #F8FAFC;\n  margin-bottom: 8px;\n}\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94A3B8;\n  line-height: 1.5;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  font-size: 13px;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #FCA5A5;\n}\n.alert.alert-error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #EF4444;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #6EE7B7;\n}\n.alert.alert-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #10B981;\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  color: #FDE68A;\n}\n.alert.alert-warning[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #F59E0B;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #94A3B8;\n  margin-bottom: 8px;\n}\n.form-group.has-error[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.5);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #16213E;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #6366F1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  flex-shrink: 0;\n  color: #64748B;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 12px 14px 12px 0;\n  font-size: 14px;\n  color: #F8FAFC;\n  font-family: inherit;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #64748B;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px #16213E inset;\n  -webkit-text-fill-color: #F8FAFC;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pin[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #64748B;\n  padding: 0;\n}\n.input-wrapper[_ngcontent-%COMP%]   .toggle-pin[_ngcontent-%COMP%]:hover {\n  color: #94A3B8;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #FCA5A5;\n  margin-top: 6px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366F1,\n      #8B5CF6);\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  background: transparent;\n  color: #94A3B8;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: 12px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #818CF8;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.btn-loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.otp-inputs[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 56px;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  color: #F8FAFC;\n  background: #16213E;\n  border: 1.5px solid #334155;\n  border-radius: 8px;\n  outline: none;\n  transition: all 0.2s ease;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n}\n.otp-inputs[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366F1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.otp-inputs[_ngcontent-%COMP%]   .otp-input.filled[_ngcontent-%COMP%] {\n  border-color: #818CF8;\n  background: rgba(99, 102, 241, 0.05);\n}\n.otp-actions[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.otp-actions[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n}\n.otp-actions[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  color: #818CF8;\n  font-weight: 600;\n}\n.otp-actions[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #818CF8;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: inherit;\n  padding: 4px 8px;\n}\n.otp-actions[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.otp-actions[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]:disabled {\n  color: #64748B;\n  cursor: not-allowed;\n}\n@media (max-width: 520px) {\n  .auth-card[_ngcontent-%COMP%] {\n    margin: 12px;\n  }\n  .card-content[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n  .otp-inputs[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 50px;\n    font-size: 20px;\n  }\n}\n.resend-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.resend-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n}\n.resend-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #818CF8;\n}\n.btn-resend[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #818CF8;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 4px 8px;\n  transition: color 0.2s;\n  font-family: inherit;\n}\n.btn-resend[_ngcontent-%COMP%]:hover {\n  color: #6366F1;\n  text-decoration: underline;\n}\n.btn-resend[_ngcontent-%COMP%]:disabled {\n  color: #64748B;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=two-factor-auth.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TwoFactorAuthComponent, { className: "TwoFactorAuthComponent", filePath: "app\\modules\\auth\\two-factor-auth\\two-factor-auth.component.ts", lineNumber: 19 });
})();

// src/app/modules/auth/auth-routing.module.ts
var routes = [
  { path: "login", component: LoginComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "2fa", component: TwoFactorAuthComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static {
    this.\u0275fac = function AuthRoutingModule_Factory(t) {
      return new (t || _AuthRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static {
    this.\u0275fac = function AuthModule_Factory(t) {
      return new (t || _AuthModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      AuthRoutingModule,
      LoginComponent,
      ForgotPasswordComponent,
      ResetPasswordComponent,
      TwoFactorAuthComponent
    ] });
  }
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-YY3L6PAK.js.map
