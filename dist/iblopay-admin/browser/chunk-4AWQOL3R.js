import {
  cniValidator,
  emailValidator,
  phoneValidator
} from "./chunk-YAQZZUDO.js";
import {
  AuthService
} from "./chunk-E42ILUAC.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VBNNW23C.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  RouterModule,
  Subject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UEC5R44.js";

// src/app/modules/users/components/users-list/users-list.component.ts
function UsersListComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement des administrateurs...");
    \u0275\u0275elementEnd()();
  }
}
function UsersListComponent_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucun administrateur trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Aucun administrateur ne correspond aux filtres de recherche actuels.");
    \u0275\u0275elementEnd()();
  }
}
function UsersListComponent_div_42_table_2_tr_16_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 66);
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", user_r2.photo_url, \u0275\u0275sanitizeUrl);
  }
}
function UsersListComponent_div_42_table_2_tr_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", user_r2.first_name[0], "", user_r2.last_name[0], "");
  }
}
function UsersListComponent_div_42_table_2_tr_16_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("CNI: ", user_r2.cni_number, "");
  }
}
function UsersListComponent_div_42_table_2_tr_16_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "Pas de CNI");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_div_42_table_2_tr_16_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function UsersListComponent_div_42_table_2_tr_16_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openStatusConfirm(user_r2, "ACTIVE"));
    });
    \u0275\u0275text(1, " \u{1F7E2} ");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_div_42_table_2_tr_16_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function UsersListComponent_div_42_table_2_tr_16_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openStatusConfirm(user_r2, "SUSPENDED"));
    });
    \u0275\u0275text(1, " \u{1F7E1} ");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_div_42_table_2_tr_16_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function UsersListComponent_div_42_table_2_tr_16_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openStatusConfirm(user_r2, "FROZEN"));
    });
    \u0275\u0275text(1, " \u2744\uFE0F ");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_div_42_table_2_tr_16_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function UsersListComponent_div_42_table_2_tr_16_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openStatusConfirm(user_r2, "CLOSED"));
    });
    \u0275\u0275text(1, " \u{1F534} ");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_div_42_table_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 37)(3, "div", 38);
    \u0275\u0275template(4, UsersListComponent_div_42_table_2_tr_16_img_4_Template, 1, 1, "img", 39)(5, UsersListComponent_div_42_table_2_tr_16_span_5_Template, 2, 2, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41)(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "div", 44)(13, "span", 45);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UsersListComponent_div_42_table_2_tr_16_span_15_Template, 2, 1, "span", 46)(16, UsersListComponent_div_42_table_2_tr_16_span_16_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "span", 48);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "span", 49);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "span", 50);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 35)(28, "div", 51)(29, "button", 52);
    \u0275\u0275listener("click", function UsersListComponent_div_42_table_2_tr_16_Template_button_click_29_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditModal(user_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 53);
    \u0275\u0275element(31, "path", 54)(32, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div", 56);
    \u0275\u0275template(34, UsersListComponent_div_42_table_2_tr_16_button_34_Template, 2, 0, "button", 57)(35, UsersListComponent_div_42_table_2_tr_16_button_35_Template, 2, 0, "button", 58)(36, UsersListComponent_div_42_table_2_tr_16_button_36_Template, 2, 0, "button", 59)(37, UsersListComponent_div_42_table_2_tr_16_button_37_Template, 2, 0, "button", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 61);
    \u0275\u0275listener("click", function UsersListComponent_div_42_table_2_tr_16_Template_button_click_38_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDeleteConfirm(user_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 53);
    \u0275\u0275element(40, "polyline", 62)(41, "path", 63)(42, "line", 64)(43, "line", 65);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", user_r2.photo_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r2.photo_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r2.first_name, " ", user_r2.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.phone_number);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r2.email || "Pas d'email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r2.cni_number);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r2.cni_number);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-sysadmin", (user_r2.role == null ? null : user_r2.role.name) === "SYSTEM_ADMIN")("badge-admin", (user_r2.role == null ? null : user_r2.role.name) === "ADMIN");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (user_r2.role == null ? null : user_r2.role.name) === "SYSTEM_ADMIN" ? "SystemAdmin" : "Admin", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + user_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 21, user_r2.created_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", user_r2.status !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r2.status === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r2.status !== "FROZEN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r2.status !== "CLOSED");
  }
}
function UsersListComponent_div_42_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 34)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "E-mail / CNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 35);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, UsersListComponent_div_42_table_2_tr_16_Template, 44, 24, "tr", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.filteredUsers);
  }
}
function UsersListComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, UsersListComponent_div_42_div_1_Template, 7, 0, "div", 30)(2, UsersListComponent_div_42_table_2_Template, 17, 1, "table", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredUsers.length > 0);
  }
}
function UsersListComponent_div_43_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formSuccess);
  }
}
function UsersListComponent_div_43_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formError);
  }
}
function UsersListComponent_div_43_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("first_name"), " ");
  }
}
function UsersListComponent_div_43_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("last_name"), " ");
  }
}
function UsersListComponent_div_43_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("phone_number"), " ");
  }
}
function UsersListComponent_div_43_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("email"), " ");
  }
}
function UsersListComponent_div_43_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("cni_number"), " ");
  }
}
function UsersListComponent_div_43_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.isEditMode ? "Mettre \xE0 jour" : "Cr\xE9er l'administrateur");
  }
}
function UsersListComponent_div_43_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enregistrement...");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "div", 75)(3, "div", 76)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 77);
    \u0275\u0275listener("click", function UsersListComponent_div_43_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 78);
    \u0275\u0275template(9, UsersListComponent_div_43_div_9_Template, 3, 1, "div", 79)(10, UsersListComponent_div_43_div_10_Template, 3, 1, "div", 80);
    \u0275\u0275elementStart(11, "form", 81);
    \u0275\u0275listener("ngSubmit", function UsersListComponent_div_43_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmitForm());
    });
    \u0275\u0275elementStart(12, "div", 82)(13, "div", 83)(14, "label", 84);
    \u0275\u0275text(15, "Pr\xE9nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 85);
    \u0275\u0275template(17, UsersListComponent_div_43_div_17_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 83)(19, "label", 87);
    \u0275\u0275text(20, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 88);
    \u0275\u0275template(22, UsersListComponent_div_43_div_22_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 82)(24, "div", 83)(25, "label", 89);
    \u0275\u0275text(26, "Num\xE9ro de t\xE9l\xE9phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 90);
    \u0275\u0275template(28, UsersListComponent_div_43_div_28_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 83)(30, "label", 91);
    \u0275\u0275text(31, "Adresse e-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 92);
    \u0275\u0275template(33, UsersListComponent_div_43_div_33_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 82)(35, "div", 83)(36, "label", 93);
    \u0275\u0275text(37, "Num\xE9ro CNI");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 94);
    \u0275\u0275template(39, UsersListComponent_div_43_div_39_Template, 2, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 83)(41, "label", 95);
    \u0275\u0275text(42, "URL de la photo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 82)(45, "div", 83)(46, "label", 97);
    \u0275\u0275text(47, "R\xF4le *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 15)(49, "select", 98)(50, "option", 99);
    \u0275\u0275text(51, "SystemAdmin (Acc\xE8s total)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 100);
    \u0275\u0275text(53, "Admin (Acc\xE8s partiel)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 83)(55, "label", 101);
    \u0275\u0275text(56, "Statut de l'utilisateur *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 15)(58, "select", 102)(59, "option", 20);
    \u0275\u0275text(60, "Actif (ACTIVE)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 21);
    \u0275\u0275text(62, "Suspendu (SUSPENDED)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 22);
    \u0275\u0275text(64, "Gel\xE9 (FROZEN)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 23);
    \u0275\u0275text(66, "Ferm\xE9 (CLOSED)");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 103)(68, "button", 104);
    \u0275\u0275listener("click", function UsersListComponent_div_43_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(69, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 105);
    \u0275\u0275template(71, UsersListComponent_div_43_span_71_Template, 2, 1, "span", 40)(72, UsersListComponent_div_43_span_72_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.isEditMode ? "Modifier l'administrateur" : "Cr\xE9er un administrateur");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.formSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.formError);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.userForm);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r2.getFieldError("first_name"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.getFieldError("first_name"));
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r2.getFieldError("last_name"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.getFieldError("last_name"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r2.getFieldError("phone_number"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.getFieldError("phone_number"));
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r2.getFieldError("email"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.getFieldError("email"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r2.getFieldError("cni_number"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.getFieldError("cni_number"));
    \u0275\u0275advance(31);
    \u0275\u0275property("disabled", ctx_r2.userForm.invalid || ctx_r2.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitting);
  }
}
function UsersListComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 109)(2, "div", 75)(3, "div", 76)(4, "h2");
    \u0275\u0275text(5, "Confirmation de l'action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 77);
    \u0275\u0275listener("click", function UsersListComponent_div_44_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirmModal());
    });
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 78)(9, "p", 110);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 103)(12, "button", 111);
    \u0275\u0275listener("click", function UsersListComponent_div_44_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirmModal());
    });
    \u0275\u0275text(13, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 112);
    \u0275\u0275listener("click", function UsersListComponent_div_44_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onExecuteConfirm());
    });
    \u0275\u0275text(15, "Confirmer et ex\xE9cuter");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.confirmMessage);
  }
}
var UsersListComponent = class _UsersListComponent {
  constructor(fb, authService) {
    this.fb = fb;
    this.authService = authService;
    this.users = [];
    this.filteredUsers = [];
    this.isLoading = false;
    this.searchTerm = "";
    this.roleFilter = "";
    this.statusFilter = "";
    this.showAddEditModal = false;
    this.isEditMode = false;
    this.selectedUserId = null;
    this.formError = "";
    this.formSuccess = "";
    this.submitting = false;
    this.showConfirmModal = false;
    this.confirmActionType = "delete";
    this.confirmMessage = "";
    this.targetUserId = "";
    this.targetStatus = "";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.initForm();
    this.loadUsers();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.userForm = this.fb.group({
      first_name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      last_name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      phone_number: ["", [Validators.required, phoneValidator()]],
      email: ["", [emailValidator()]],
      cni_number: ["", [cniValidator()]],
      photo_url: [""],
      role_id: ["role-admin", [Validators.required]],
      status: ["ACTIVE", [Validators.required]]
    });
  }
  loadUsers() {
    this.isLoading = true;
    this.authService.getUsers().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.users = data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Failed to load users", err);
        this.isLoading = false;
      }
    });
  }
  applyFilters() {
    this.filteredUsers = this.users.filter((u) => {
      const matchesSearch = u.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.phone_number.includes(this.searchTerm) || u.email && u.email.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.cni_number && u.cni_number.includes(this.searchTerm);
      const matchesRole = !this.roleFilter || u.role?.name === this.roleFilter;
      const matchesStatus = !this.statusFilter || u.status === this.statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }
  onSearchChange() {
    this.applyFilters();
  }
  onFilterChange() {
    this.applyFilters();
  }
  openAddModal() {
    this.isEditMode = false;
    this.selectedUserId = null;
    this.formError = "";
    this.formSuccess = "";
    this.userForm.reset({
      role_id: "role-admin",
      status: "ACTIVE"
    });
    this.showAddEditModal = true;
  }
  openEditModal(user) {
    this.isEditMode = true;
    this.selectedUserId = user.user_id;
    this.formError = "";
    this.formSuccess = "";
    this.userForm.setValue({
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      email: user.email || "",
      cni_number: user.cni_number || "",
      photo_url: user.photo_url || "",
      role_id: user.role_id,
      status: user.status
    });
    this.showAddEditModal = true;
  }
  closeModal() {
    this.showAddEditModal = false;
  }
  onSubmitForm() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.formError = "";
    this.formSuccess = "";
    const formData = this.userForm.value;
    if (this.isEditMode && this.selectedUserId) {
      const updateData = formData;
      this.authService.updateUser(this.selectedUserId, updateData).subscribe({
        next: () => {
          this.submitting = false;
          this.formSuccess = "Utilisateur mis \xE0 jour avec succ\xE8s!";
          this.loadUsers();
          setTimeout(() => this.closeModal(), 1200);
        },
        error: (err) => {
          this.submitting = false;
          this.formError = err.error?.message || "Erreur lors de la mise \xE0 jour.";
        }
      });
    } else {
      const createData = formData;
      this.authService.createUser(createData).subscribe({
        next: () => {
          this.submitting = false;
          this.formSuccess = "Utilisateur cr\xE9\xE9 avec succ\xE8s! PIN par d\xE9faut: 1234";
          this.loadUsers();
          setTimeout(() => this.closeModal(), 1500);
        },
        error: (err) => {
          this.submitting = false;
          this.formError = err.error?.message || "Erreur lors de la cr\xE9ation.";
        }
      });
    }
  }
  openDeleteConfirm(user) {
    this.confirmActionType = "delete";
    this.targetUserId = user.user_id;
    this.confirmMessage = `\xCAtes-vous s\xFBr de vouloir supprimer l'utilisateur "${user.first_name} ${user.last_name}" ? Cette action est irr\xE9versible.`;
    this.showConfirmModal = true;
  }
  openStatusConfirm(user, newStatus) {
    this.confirmActionType = "status";
    this.targetUserId = user.user_id;
    this.targetStatus = newStatus;
    this.confirmMessage = `Voulez-vous changer le statut de "${user.first_name} ${user.last_name}" \xE0 "${newStatus}" ?`;
    this.showConfirmModal = true;
  }
  closeConfirmModal() {
    this.showConfirmModal = false;
  }
  onExecuteConfirm() {
    if (this.confirmActionType === "delete") {
      this.authService.deleteUser(this.targetUserId).subscribe({
        next: () => {
          this.loadUsers();
          this.showConfirmModal = false;
        },
        error: (err) => {
          console.error("Delete failed", err);
          this.showConfirmModal = false;
        }
      });
    } else if (this.confirmActionType === "status") {
      this.authService.changeUserStatus(this.targetUserId, this.targetStatus).subscribe({
        next: () => {
          this.loadUsers();
          this.showConfirmModal = false;
        },
        error: (err) => {
          console.error("Status change failed", err);
          this.showConfirmModal = false;
        }
      });
    }
  }
  getFieldError(fieldName) {
    const control = this.userForm.get(fieldName);
    if (!control || !control.errors || !control.touched)
      return "";
    if (control.errors["required"])
      return "Ce champ est requis";
    if (control.errors["minlength"])
      return "Longueur minimale non respect\xE9e";
    if (control.errors["phoneFormat"])
      return control.errors["phoneFormat"];
    if (control.errors["emailFormat"])
      return control.errors["emailFormat"];
    if (control.errors["cniFormat"])
      return control.errors["cniFormat"];
    return "Valeur invalide";
  }
  static {
    this.\u0275fac = function UsersListComponent_Factory(t) {
      return new (t || _UsersListComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersListComponent, selectors: [["app-users-list"]], decls: 45, vars: 7, consts: [[1, "user-management-container"], [1, "page-header"], [1, "header-text"], [1, "btn-add-user", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "filters-panel"], [1, "search-box"], [1, "search-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Rechercher par nom, t\xE9l\xE9phone, e-mail, CNI...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-dropdowns"], [1, "select-wrapper"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "SYSTEM_ADMIN"], ["value", "ADMIN"], ["value", "ACTIVE"], ["value", "SUSPENDED"], ["value", "FROZEN"], ["value", "CLOSED"], ["class", "loading-state", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], ["class", "modal-backdrop", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "table-container"], ["class", "empty-state", 4, "ngIf"], ["class", "users-table", 4, "ngIf"], [1, "empty-state"], [1, "empty-icon"], [1, "users-table"], [1, "text-right"], [4, "ngFor", "ngForOf"], [1, "user-cell"], [1, "avatar"], ["alt", "Avatar", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "user-details"], [1, "user-name"], [1, "user-phone"], [1, "docs-cell"], [1, "doc-email"], ["class", "doc-cni", 4, "ngIf"], ["class", "doc-cni empty", 4, "ngIf"], [1, "role-badge"], [1, "status-badge"], [1, "date-cell"], [1, "actions-cell"], ["title", "Modifier", 1, "btn-action", "btn-edit", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "status-actions"], ["class", "btn-action btn-activate", "title", "Activer", 3, "click", 4, "ngIf"], ["class", "btn-action btn-suspend", "title", "Suspendre", 3, "click", 4, "ngIf"], ["class", "btn-action btn-freeze", "title", "Geler", 3, "click", 4, "ngIf"], ["class", "btn-action btn-close-user", "title", "Fermer", 3, "click", 4, "ngIf"], ["title", "Supprimer", 1, "btn-action", "btn-delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], ["alt", "Avatar", 3, "src"], [1, "doc-cni"], [1, "doc-cni", "empty"], ["title", "Activer", 1, "btn-action", "btn-activate", 3, "click"], ["title", "Suspendre", 1, "btn-action", "btn-suspend", 3, "click"], ["title", "Geler", 1, "btn-action", "btn-freeze", 3, "click"], ["title", "Fermer", 1, "btn-action", "btn-close-user", 3, "click"], [1, "modal-backdrop"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "first_name"], ["type", "text", "id", "first_name", "formControlName", "first_name", "placeholder", "Ex: Jean"], ["class", "field-error", 4, "ngIf"], ["for", "last_name"], ["type", "text", "id", "last_name", "formControlName", "last_name", "placeholder", "Ex: Dupont"], ["for", "phone_number"], ["type", "tel", "id", "phone_number", "formControlName", "phone_number", "placeholder", "Ex: +237 6XXXXXXXX"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Ex: jean.dupont@email.com"], ["for", "cni_number"], ["type", "text", "id", "cni_number", "formControlName", "cni_number", "placeholder", "Num\xE9ro carte d'identit\xE9"], ["for", "photo_url"], ["type", "text", "id", "photo_url", "formControlName", "photo_url", "placeholder", "https://..."], ["for", "role_id"], ["id", "role_id", "formControlName", "role_id"], ["value", "role-sys-admin"], ["value", "role-admin"], ["for", "status"], ["id", "status", "formControlName", "status"], [1, "modal-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "field-error"], [1, "confirm-dialog"], [1, "confirm-message"], [1, "btn-secondary", 3, "click"], [1, "btn-danger", 3, "click"]], template: function UsersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Gestion des Administrateurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Cr\xE9ez, modifiez et g\xE9rez le statut des administrateurs (SystemAdmin et Admin) ayant acc\xE8s au syst\xE8me.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function UsersListComponent_Template_button_click_7_listener() {
          return ctx.openAddModal();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 4);
        \u0275\u0275element(9, "line", 5)(10, "line", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "Ajouter un administrateur");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "div", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 10);
        \u0275\u0275element(17, "circle", 11)(18, "line", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function UsersListComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("input", function UsersListComponent_Template_input_input_19_listener() {
          return ctx.onSearchChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 14)(21, "div", 15)(22, "select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function UsersListComponent_Template_select_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.roleFilter, $event) || (ctx.roleFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function UsersListComponent_Template_select_change_22_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(23, "option", 17);
        \u0275\u0275text(24, "Tous les r\xF4les");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 18);
        \u0275\u0275text(26, "SystemAdmin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 19);
        \u0275\u0275text(28, "Admin");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function UsersListComponent_Template_select_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function UsersListComponent_Template_select_change_30_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(31, "option", 17);
        \u0275\u0275text(32, "Tous les statuts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 20);
        \u0275\u0275text(34, "Actif");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 21);
        \u0275\u0275text(36, "Suspendu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option", 22);
        \u0275\u0275text(38, "Gel\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option", 23);
        \u0275\u0275text(40, "Ferm\xE9");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(41, UsersListComponent_div_41_Template, 4, 0, "div", 24)(42, UsersListComponent_div_42_Template, 3, 2, "div", 25)(43, UsersListComponent_div_43_Template, 73, 22, "div", 26)(44, UsersListComponent_div_44_Template, 16, 1, "div", 26);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.roleFilter);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAddEditModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showConfirmModal);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n.user-management-container[_ngcontent-%COMP%] {\n  padding: 24px 28px 40px;\n  min-height: 100vh;\n  color: var(--text);\n  font-family:\n    "Inter",\n    -apple-system,\n    sans-serif;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      var(--text),\n      var(--text-dim));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 0 0 6px 0;\n  letter-spacing: -0.7px;\n}\n.page-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-dim);\n  font-size: 14px;\n  margin: 0;\n  max-width: 600px;\n}\n.btn-add-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #2563eb);\n  color: #fff;\n  font-weight: 600;\n  font-size: 13px;\n  padding: 12px 20px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(var(--blue-rgb), 0.3);\n}\n.btn-add-user[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(var(--blue-rgb), 0.4);\n}\n.btn-add-user[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.filters-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding: 16px 20px;\n  background: var(--surface);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  border-radius: 8px;\n  padding: 10px 16px;\n  flex: 1;\n  max-width: 480px;\n  min-width: 280px;\n  transition: all 0.3s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(var(--blue-rgb), 0.15);\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(--text-faint);\n  display: flex;\n  align-items: center;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  color: var(--text);\n  font-size: 14px;\n  width: 100%;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-faint);\n}\n.filter-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  border-radius: 8px;\n  padding: 10px 36px 10px 16px;\n  color: var(--text);\n  font-size: 13px;\n  cursor: pointer;\n  font-family: inherit;\n  outline: none;\n  transition: all 0.3s ease;\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n  background: var(--surface-3);\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--blue);\n}\n.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  color: var(--text);\n}\n.select-wrapper[_ngcontent-%COMP%]::after {\n  content: "\\25bc";\n  font-size: 8px;\n  color: var(--text-faint);\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  box-shadow: 0 10px 30px var(--shadow-color);\n  overflow-x: auto;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 14px;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-weight: 600;\n  color: var(--text-dim);\n  border-bottom: 1px solid var(--border-soft);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-soft);\n  color: var(--text);\n  vertical-align: middle;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-2);\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-cell[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--purple));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: #fff;\n  font-size: 14px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px var(--shadow-color);\n}\n.user-cell[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-cell[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-cell[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text);\n}\n.user-cell[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-phone[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-dim);\n  font-family: monospace;\n}\n.docs-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.docs-cell[_ngcontent-%COMP%]   .doc-email[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 13px;\n}\n.docs-cell[_ngcontent-%COMP%]   .doc-cni[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-faint);\n  font-family: monospace;\n}\n.docs-cell[_ngcontent-%COMP%]   .doc-cni.empty[_ngcontent-%COMP%] {\n  color: rgba(var(--text-rgb), 0.15);\n  font-style: italic;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.role-badge.badge-sysadmin[_ngcontent-%COMP%] {\n  background: rgba(var(--purple-rgb), 0.15);\n  color: var(--purple);\n  border: 1px solid rgba(var(--purple-rgb), 0.25);\n}\n.role-badge.badge-admin[_ngcontent-%COMP%] {\n  background: rgba(var(--blue-rgb), 0.15);\n  color: var(--blue);\n  border: 1px solid rgba(var(--blue-rgb), 0.25);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}\n.status-badge.badge-active[_ngcontent-%COMP%] {\n  background: rgba(var(--green-rgb), 0.15);\n  color: var(--green);\n  border: 1px solid rgba(var(--green-rgb), 0.25);\n}\n.status-badge.badge-suspended[_ngcontent-%COMP%] {\n  background: rgba(var(--sun-rgb), 0.15);\n  color: var(--sun);\n  border: 1px solid rgba(var(--sun-rgb), 0.25);\n}\n.status-badge.badge-frozen[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  color: #67e8f9;\n  border: 1px solid rgba(6, 182, 212, 0.25);\n}\n.status-badge.badge-closed[_ngcontent-%COMP%] {\n  background: rgba(var(--red-rgb), 0.15);\n  color: var(--red);\n  border: 1px solid rgba(var(--red-rgb), 0.25);\n}\n.date-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-dim);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  color: var(--text-dim);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: var(--surface-3);\n  color: var(--text);\n  transform: translateY(-1px);\n}\n.btn-action.btn-edit[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.btn-action.btn-delete[_ngcontent-%COMP%]:hover {\n  border-color: var(--red);\n  color: var(--red);\n}\n.status-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  background: var(--surface-2);\n  border-radius: 8px;\n  padding: 2px;\n  border: 1px solid var(--border-soft);\n}\n.status-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: none;\n  font-size: 11px;\n}\n.status-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--text-rgb), 0.05);\n  transform: scale(1.1);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(var(--blue-rgb), 0.1);\n  border-top-color: var(--blue);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-dim);\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0 0 8px 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-dim);\n  font-size: 14px;\n  margin: 0;\n  max-width: 320px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 100;\n  background: rgba(3, 10, 20, 0.8);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 680px;\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.confirm-dialog[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  box-shadow: 0 25px 50px -12px var(--shadow-color);\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text);\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-faint);\n  font-size: 24px;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-soft);\n  background: var(--surface-2);\n}\n.modal-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-dim);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border: 1px solid var(--border-soft);\n  border-radius: 8px;\n  padding: 11px 14px;\n  color: var(--text);\n  font-size: 14px;\n  outline: none;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-faint);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(var(--blue-rgb), 0.15);\n}\n.form-group.has-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: var(--red);\n}\n.form-group.has-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(var(--red-rgb), 0.15);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--red);\n  margin-top: -2px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #2563eb);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(var(--blue-rgb), 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text-dim);\n  border: 1px solid var(--border-soft);\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--text);\n  border-color: var(--border);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--red),\n      #dc2626);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(var(--red-rgb), 0.3);\n}\n.confirm-message[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text);\n  line-height: 1.6;\n  margin: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: rgba(var(--green-rgb), 0.15);\n  color: var(--green);\n  border: 1px solid rgba(var(--green-rgb), 0.25);\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: rgba(var(--red-rgb), 0.15);\n  color: var(--red);\n  border: 1px solid rgba(var(--red-rgb), 0.25);\n}\n/*# sourceMappingURL=users-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersListComponent, { className: "UsersListComponent", filePath: "app\\modules\\users\\components\\users-list\\users-list.component.ts", lineNumber: 16 });
})();

// src/app/modules/users/users-routing.module.ts
var routes = [
  { path: "", component: UsersListComponent }
];
var UsersRoutingModule = class _UsersRoutingModule {
  static {
    this.\u0275fac = function UsersRoutingModule_Factory(t) {
      return new (t || _UsersRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/users/users.module.ts
var UsersModule = class _UsersModule {
  static {
    this.\u0275fac = function UsersModule_Factory(t) {
      return new (t || _UsersModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      UsersRoutingModule
    ] });
  }
};
export {
  UsersModule
};
//# sourceMappingURL=chunk-4AWQOL3R.js.map
