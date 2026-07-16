import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VBNNW23C.js";
import {
  ActivatedRoute,
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  __spreadValues,
  delay,
  of,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UEC5R44.js";

// src/app/modules/cards/enums/card-status.enum.ts
var CardStatus;
(function(CardStatus2) {
  CardStatus2["NEUTRAL"] = "NEUTRAL";
  CardStatus2["ACTIVE"] = "ACTIVE";
  CardStatus2["BLOCKED"] = "BLOCKED";
  CardStatus2["REPLACED"] = "REPLACED";
  CardStatus2["CLOSED"] = "CLOSED";
})(CardStatus || (CardStatus = {}));

// src/app/modules/cards/enums/card-type.enum.ts
var CardType;
(function(CardType2) {
  CardType2["PHYSICAL"] = "PHYSICAL";
  CardType2["VIRTUAL"] = "VIRTUAL";
})(CardType || (CardType = {}));

// src/app/modules/cards/data/card-dummy.data.ts
var DUMMY_CARDS = [
  {
    cardId: "card-001",
    cardUid: "04A1B2C3D4E5F6",
    userId: "user-001",
    walletId: "wallet-001",
    status: CardStatus.ACTIVE,
    transactionCounter: 18,
    activatedAt: "2026-05-12T08:30:00.000Z",
    activatedBy: "agent-001",
    blockedAt: null,
    replacedAt: null,
    oldCardId: null,
    cardType: CardType.PHYSICAL,
    maskedPan: "5399 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 1024",
    holderName: "Aline Ndayizeye"
  },
  {
    cardId: "card-002",
    cardUid: "04B2C3D4E5F6A7",
    userId: "user-002",
    walletId: "wallet-002",
    status: CardStatus.ACTIVE,
    transactionCounter: 9,
    activatedAt: "2026-06-03T10:15:00.000Z",
    activatedBy: "agent-002",
    blockedAt: null,
    replacedAt: null,
    oldCardId: null,
    cardType: CardType.VIRTUAL,
    maskedPan: "5399 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 2381",
    holderName: "Eric Manirakiza"
  },
  {
    cardId: "card-003",
    cardUid: "04C3D4E5F6A7B8",
    userId: null,
    walletId: null,
    status: CardStatus.NEUTRAL,
    transactionCounter: 0,
    activatedAt: null,
    activatedBy: null,
    blockedAt: null,
    replacedAt: null,
    oldCardId: null,
    cardType: CardType.PHYSICAL,
    maskedPan: "5399 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 3417",
    holderName: "Unassigned card"
  },
  {
    cardId: "card-004",
    cardUid: "04D4E5F6A7B8C9",
    userId: "user-004",
    walletId: "wallet-004",
    status: CardStatus.BLOCKED,
    transactionCounter: 27,
    activatedAt: "2026-02-18T13:40:00.000Z",
    activatedBy: "agent-001",
    blockedAt: "2026-07-10T16:20:00.000Z",
    replacedAt: null,
    oldCardId: null,
    cardType: CardType.PHYSICAL,
    maskedPan: "5399 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4650",
    holderName: "Diane Irakoze"
  },
  {
    cardId: "card-005",
    cardUid: "04E5F6A7B8C9D0",
    userId: "user-005",
    walletId: "wallet-005",
    status: CardStatus.REPLACED,
    transactionCounter: 41,
    activatedAt: "2025-11-08T09:00:00.000Z",
    activatedBy: "agent-003",
    blockedAt: null,
    replacedAt: "2026-06-22T11:35:00.000Z",
    oldCardId: null,
    cardType: CardType.PHYSICAL,
    maskedPan: "5399 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 5793",
    holderName: "Patrick Nkurunziza"
  },
  {
    cardId: "card-006",
    cardUid: "04F6A7B8C9D0E1",
    userId: "user-005",
    walletId: "wallet-005",
    status: CardStatus.ACTIVE,
    transactionCounter: 6,
    activatedAt: "2026-06-22T11:40:00.000Z",
    activatedBy: "agent-003",
    blockedAt: null,
    replacedAt: null,
    oldCardId: "card-005",
    cardType: CardType.PHYSICAL,
    maskedPan: "5399 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 6826",
    holderName: "Patrick Nkurunziza"
  },
  {
    cardId: "card-007",
    cardUid: "047A8B9C0D1E2F",
    userId: "user-007",
    walletId: "wallet-007",
    status: CardStatus.CLOSED,
    transactionCounter: 12,
    activatedAt: "2025-09-14T07:25:00.000Z",
    activatedBy: "agent-002",
    blockedAt: null,
    replacedAt: null,
    oldCardId: null,
    cardType: CardType.VIRTUAL,
    maskedPan: "5399 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 7149",
    holderName: "Claude Hakizimana"
  }
];
var DUMMY_CARD_TRANSACTIONS = [
  { transactionId: "tx-001", cardId: "card-001", amount: 25e3, currency: "BIF", status: "COMPLETED", createdAt: "2026-07-15T09:12:00.000Z" },
  { transactionId: "tx-002", cardId: "card-001", amount: 8500, currency: "BIF", status: "COMPLETED", createdAt: "2026-07-14T14:45:00.000Z" },
  { transactionId: "tx-003", cardId: "card-001", amount: 12e3, currency: "BIF", status: "PENDING", createdAt: "2026-07-13T17:05:00.000Z" },
  { transactionId: "tx-004", cardId: "card-002", amount: 48e3, currency: "BIF", status: "COMPLETED", createdAt: "2026-07-15T08:10:00.000Z" },
  { transactionId: "tx-005", cardId: "card-002", amount: 15e3, currency: "BIF", status: "FAILED", createdAt: "2026-07-12T12:30:00.000Z" },
  { transactionId: "tx-006", cardId: "card-004", amount: 32e3, currency: "BIF", status: "COMPLETED", createdAt: "2026-07-09T11:22:00.000Z" },
  { transactionId: "tx-007", cardId: "card-006", amount: 6e3, currency: "BIF", status: "COMPLETED", createdAt: "2026-07-14T07:55:00.000Z" }
];

// src/app/modules/cards/services/card.service.ts
var CardService = class _CardService {
  constructor() {
    this.cards = [...DUMMY_CARDS];
    this.transactions = [...DUMMY_CARD_TRANSACTIONS];
    this.simDelay = 400;
  }
  getCards() {
    return of([...this.cards]).pipe(delay(this.simDelay));
  }
  getCardById(cardId) {
    const card = this.cards.find((c) => c.cardId === cardId);
    if (!card) {
      return throwError(() => new Error("Card not found")).pipe(delay(this.simDelay));
    }
    return of(__spreadValues({}, card)).pipe(delay(this.simDelay));
  }
  generateId() {
    return "card-" + Math.random().toString(36).substring(2, 8);
  }
  generateUid() {
    return "04" + Array.from({ length: 10 }, () => Math.floor(Math.random() * 16).toString(16).toUpperCase()).join("");
  }
  createCard(payload) {
    const newCard = {
      cardId: this.generateId(),
      cardUid: this.generateUid(),
      userId: payload.userId,
      walletId: payload.walletId,
      status: CardStatus.NEUTRAL,
      transactionCounter: 0,
      activatedAt: null,
      activatedBy: null,
      blockedAt: null,
      replacedAt: null,
      oldCardId: null
    };
    if (payload.cardType) {
      newCard.cardType = payload.cardType;
    }
    this.cards.unshift(newCard);
    return of(__spreadValues({}, newCard)).pipe(delay(this.simDelay));
  }
  activateCard(cardId) {
    const card = this.cards.find((c) => c.cardId === cardId);
    if (!card) {
      return throwError(() => new Error("Card not found")).pipe(delay(this.simDelay));
    }
    card.status = CardStatus.ACTIVE;
    card.activatedAt = (/* @__PURE__ */ new Date()).toISOString();
    return of(__spreadValues({}, card)).pipe(delay(this.simDelay));
  }
  blockCard(cardId, _reason) {
    const card = this.cards.find((c) => c.cardId === cardId);
    if (!card) {
      return throwError(() => new Error("Card not found")).pipe(delay(this.simDelay));
    }
    card.status = CardStatus.BLOCKED;
    card.blockedAt = (/* @__PURE__ */ new Date()).toISOString();
    return of(__spreadValues({}, card)).pipe(delay(this.simDelay));
  }
  replaceCard(cardId) {
    const card = this.cards.find((c) => c.cardId === cardId);
    if (!card) {
      return throwError(() => new Error("Card not found")).pipe(delay(this.simDelay));
    }
    card.status = CardStatus.REPLACED;
    card.replacedAt = (/* @__PURE__ */ new Date()).toISOString();
    const replacement = {
      cardId: this.generateId(),
      cardUid: this.generateUid(),
      userId: card.userId,
      walletId: card.walletId,
      status: CardStatus.NEUTRAL,
      transactionCounter: 0,
      activatedAt: null,
      activatedBy: null,
      blockedAt: null,
      replacedAt: null,
      oldCardId: card.cardId
    };
    if (card.cardType) {
      replacement.cardType = card.cardType;
    }
    this.cards.unshift(replacement);
    return of(__spreadValues({}, replacement)).pipe(delay(this.simDelay));
  }
  getCardTransactions(cardId) {
    const txns = this.transactions.filter((t) => t.cardId === cardId);
    return of([...txns]).pipe(delay(this.simDelay));
  }
  static {
    this.\u0275fac = function CardService_Factory(t) {
      return new (t || _CardService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CardService, factory: _CardService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/cards/cards.constants.ts
var CARD_STATUS_META = {
  [CardStatus.NEUTRAL]: { label: "Not activated", color: "#8a8f98" },
  [CardStatus.ACTIVE]: { label: "Active", color: "#1fae5b" },
  [CardStatus.BLOCKED]: { label: "Blocked", color: "#e0932c" },
  [CardStatus.REPLACED]: { label: "Replaced", color: "#6f6fef" },
  [CardStatus.CLOSED]: { label: "Closed", color: "#e14b4b" }
};
var CARD_TYPE_META = {
  [CardType.PHYSICAL]: { label: "Physical", icon: "\u{1F4B3}" },
  [CardType.VIRTUAL]: { label: "Virtual", icon: "\u{1F5A5}\uFE0F" }
};

// src/app/modules/cards/components/card-status/card-status.component.ts
var CardStatusComponent = class _CardStatusComponent {
  constructor() {
    this.status = CardStatus.NEUTRAL;
  }
  get meta() {
    return CARD_STATUS_META[this.status];
  }
  static {
    this.\u0275fac = function CardStatusComponent_Factory(t) {
      return new (t || _CardStatusComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardStatusComponent, selectors: [["app-card-status"]], inputs: { status: "status" }, decls: 3, vars: 3, consts: [[1, "status-badge"], [1, "status-dot"]], template: function CardStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275element(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("--badge-color", ctx.meta.color);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.meta.label, "\n");
      }
    }, styles: ["\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--badge-color);\n  background: color-mix(in srgb, var(--badge-color) 12%, transparent);\n  white-space: nowrap;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--badge-color);\n}\n/*# sourceMappingURL=card-status.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardStatusComponent, { className: "CardStatusComponent", filePath: "app\\modules\\cards\\components\\card-status\\card-status.component.ts", lineNumber: 10 });
})();

// src/app/modules/cards/components/card-type-badge/card-type-badge.component.ts
function CardTypeBadgeComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.meta.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.meta.label, "\n");
  }
}
var CardTypeBadgeComponent = class _CardTypeBadgeComponent {
  get meta() {
    return this.type ? CARD_TYPE_META[this.type] : null;
  }
  static {
    this.\u0275fac = function CardTypeBadgeComponent_Factory(t) {
      return new (t || _CardTypeBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardTypeBadgeComponent, selectors: [["app-card-type-badge"]], inputs: { type: "type" }, decls: 1, vars: 1, consts: [["class", "type-badge", 4, "ngIf"], [1, "type-badge"], [1, "type-icon"]], template: function CardTypeBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CardTypeBadgeComponent_span_0_Template, 4, 2, "span", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.meta);
      }
    }, dependencies: [NgIf], styles: ["\n\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #4a4f57;\n  background: #eef0f3;\n}\n.type-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=card-type-badge.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardTypeBadgeComponent, { className: "CardTypeBadgeComponent", filePath: "app\\modules\\cards\\components\\card-type-badge\\card-type-badge.component.ts", lineNumber: 10 });
})();

// src/app/modules/cards/components/card-preview/card-preview.component.ts
var CardPreviewComponent = class _CardPreviewComponent {
  get isDimmed() {
    return this.card.status === CardStatus.BLOCKED || this.card.status === CardStatus.CLOSED || this.card.status === CardStatus.REPLACED;
  }
  static {
    this.\u0275fac = function CardPreviewComponent_Factory(t) {
      return new (t || _CardPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardPreviewComponent, selectors: [["app-card-preview"]], inputs: { card: "card" }, decls: 11, vars: 6, consts: [[1, "card-preview"], [1, "card-preview__top"], [1, "card-preview__brand"], [3, "type"], [1, "card-preview__pan"], [1, "card-preview__bottom"], [1, "card-preview__holder"], [3, "status"]], template: function CardPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "IBLOPAY");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "app-card-type-badge", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "app-card-status", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("dimmed", ctx.isDimmed);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.card.cardType);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.card.maskedPan || "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 " + ctx.card.cardUid.slice(-4), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.card.holderName || "Cardholder");
        \u0275\u0275advance();
        \u0275\u0275property("status", ctx.card.status);
      }
    }, dependencies: [CardStatusComponent, CardTypeBadgeComponent], styles: ["\n\n.card-preview[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1c1e26 0%,\n      #2c2f3a 100%);\n  color: #fff;\n  min-width: 280px;\n  max-width: 340px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  transition: opacity 0.2s ease;\n}\n.card-preview.dimmed[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  filter: grayscale(40%);\n}\n.card-preview__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-preview__brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  font-size: 13px;\n}\n.card-preview__pan[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  font-size: 18px;\n  letter-spacing: 0.08em;\n  font-variant-numeric: tabular-nums;\n}\n.card-preview__bottom[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-preview__holder[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.85;\n}\n/*# sourceMappingURL=card-preview.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardPreviewComponent, { className: "CardPreviewComponent", filePath: "app\\modules\\cards\\components\\card-preview\\card-preview.component.ts", lineNumber: 10 });
})();

// src/app/modules/cards/pages/card-list/card-list.component.ts
function CardListComponent_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", opt_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r1 === "ALL" ? "All statuses" : opt_r1, " ");
  }
}
function CardListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Loading cards\u2026");
    \u0275\u0275elementEnd();
  }
}
function CardListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function CardListComponent_div_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadCards());
    });
    \u0275\u0275text(3, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMessage, " ");
  }
}
function CardListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, " No cards match this filter. ");
    \u0275\u0275elementEnd();
  }
}
function CardListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function CardListComponent_div_9_div_1_Template_div_click_0_listener() {
      const card_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCard(card_r5));
    });
    \u0275\u0275element(1, "app-card-preview", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("card", card_r5);
  }
}
function CardListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, CardListComponent_div_9_div_1_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredCards);
  }
}
var CardListComponent = class _CardListComponent {
  constructor(cardService, router) {
    this.cardService = cardService;
    this.router = router;
    this.cards = [];
    this.isLoading = true;
    this.errorMessage = "";
    this.statusFilter = "ALL";
    this.statusOptions = [
      "ALL",
      CardStatus.NEUTRAL,
      CardStatus.ACTIVE,
      CardStatus.BLOCKED,
      CardStatus.REPLACED,
      CardStatus.CLOSED
    ];
  }
  ngOnInit() {
    this.loadCards();
  }
  loadCards() {
    this.isLoading = true;
    this.errorMessage = "";
    this.cardService.getCards().subscribe({
      next: (cards) => {
        this.cards = cards;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load cards. Please try again.";
        this.isLoading = false;
      }
    });
  }
  get filteredCards() {
    if (this.statusFilter === "ALL") {
      return this.cards;
    }
    return this.cards.filter((c) => c.status === this.statusFilter);
  }
  openCard(card) {
    this.router.navigate(["/cards", card.cardId]);
  }
  static {
    this.\u0275fac = function CardListComponent_Factory(t) {
      return new (t || _CardListComponent)(\u0275\u0275directiveInject(CardService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardListComponent, selectors: [["app-card-list"]], decls: 10, vars: 6, consts: [[1, "card-list-page"], [1, "card-list-page__header"], [1, "status-filter", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "state-message", 4, "ngIf"], ["class", "state-message state-message--error", 4, "ngIf"], ["class", "card-grid", 4, "ngIf"], [3, "ngValue"], [1, "state-message"], [1, "state-message", "state-message--error"], [3, "click"], [1, "card-grid"], ["class", "card-grid__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "card-grid__item", 3, "click"], [3, "card"]], template: function CardListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
        \u0275\u0275text(3, "Cards");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "select", 2);
        \u0275\u0275twoWayListener("ngModelChange", function CardListComponent_Template_select_ngModelChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
          return $event;
        });
        \u0275\u0275template(5, CardListComponent_option_5_Template, 2, 2, "option", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, CardListComponent_div_6_Template, 2, 0, "div", 4)(7, CardListComponent_div_7_Template, 4, 1, "div", 5)(8, CardListComponent_div_8_Template, 2, 0, "div", 4)(9, CardListComponent_div_9_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.statusOptions);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.filteredCards.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, CardPreviewComponent], styles: ["\n\n.card-list-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n}\n.card-list-page__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.card-list-page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n.status-filter[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: 1px solid #d7dae0;\n  background: #fff;\n  font-size: 14px;\n}\n.state-message[_ngcontent-%COMP%] {\n  color: #6f737c;\n  padding: 40px 0;\n  text-align: center;\n}\n.state-message--error[_ngcontent-%COMP%] {\n  color: #e14b4b;\n}\n.state-message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  border: none;\n  background: #1c1e26;\n  color: #fff;\n  padding: 6px 14px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.card-grid__item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.15s ease;\n}\n.card-grid__item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=card-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardListComponent, { className: "CardListComponent", filePath: "app\\modules\\cards\\pages\\card-list\\card-list.component.ts", lineNumber: 12 });
})();

// src/app/modules/cards/pages/card-detail/card-detail.component.ts
function CardDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading card\u2026");
    \u0275\u0275elementEnd();
  }
}
function CardDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function CardDetailComponent_ng_container_3_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CardDetailComponent_ng_container_3_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.activateCard());
    });
    \u0275\u0275text(1, " Activate ");
    \u0275\u0275elementEnd();
  }
}
function CardDetailComponent_ng_container_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function CardDetailComponent_ng_container_3_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.blockCard());
    });
    \u0275\u0275text(1, " Block ");
    \u0275\u0275elementEnd();
  }
}
function CardDetailComponent_ng_container_3_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading transactions\u2026");
    \u0275\u0275elementEnd();
  }
}
function CardDetailComponent_ng_container_3_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p");
    \u0275\u0275text(2, "No transactions to show yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4, "This card's transaction history will appear here once the transactions feature ships.");
    \u0275\u0275elementEnd()();
  }
}
function CardDetailComponent_ng_container_3_table_47_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r4.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", tx_r4.amount, " ", tx_r4.currency, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r4.status);
  }
}
function CardDetailComponent_ng_container_3_table_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 21)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275template(10, CardDetailComponent_ng_container_3_table_47_tr_10_Template, 7, 4, "tr", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.transactions);
  }
}
function CardDetailComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275element(2, "app-card-preview", 7);
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, CardDetailComponent_ng_container_3_button_4_Template, 2, 0, "button", 9)(5, CardDetailComponent_ng_container_3_button_5_Template, 2, 0, "button", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "section", 11)(7, "h2");
    \u0275\u0275text(8, "Card details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dl", 12)(10, "dt");
    \u0275\u0275text(11, "Card UID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd");
    \u0275\u0275element(17, "app-card-status", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dt");
    \u0275\u0275text(19, "Wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dt");
    \u0275\u0275text(23, "Transaction count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dt");
    \u0275\u0275text(27, "Activated at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dt");
    \u0275\u0275text(31, "Blocked at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "dt");
    \u0275\u0275text(35, "Replaced at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "dd");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "dt");
    \u0275\u0275text(39, "Previous card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "dd");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "section", 14)(43, "h2");
    \u0275\u0275text(44, "Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, CardDetailComponent_ng_container_3_div_45_Template, 2, 0, "div", 1)(46, CardDetailComponent_ng_container_3_div_46_Template, 5, 0, "div", 15)(47, CardDetailComponent_ng_container_3_table_47_Template, 11, 1, "table", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("card", ctx_r0.card);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.card.status !== ctx_r0.CardStatus.ACTIVE);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.card.status === ctx_r0.CardStatus.ACTIVE);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.card.cardUid);
    \u0275\u0275advance(4);
    \u0275\u0275property("status", ctx_r0.card.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.card.walletId || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.card.transactionCounter);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.card.activatedAt || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.card.blockedAt || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.card.replacedAt || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.card.oldCardId || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isLoadingTransactions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingTransactions && ctx_r0.transactions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingTransactions && ctx_r0.transactions.length > 0);
  }
}
var CardDetailComponent = class _CardDetailComponent {
  constructor(route, cardService) {
    this.route = route;
    this.cardService = cardService;
    this.card = null;
    this.isLoading = true;
    this.errorMessage = "";
    this.transactions = [];
    this.isLoadingTransactions = true;
    this.CardStatus = CardStatus;
  }
  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get("id");
    if (!cardId) {
      this.errorMessage = "No card id provided.";
      this.isLoading = false;
      this.isLoadingTransactions = false;
      return;
    }
    this.loadCard(cardId);
    this.loadTransactions(cardId);
  }
  loadCard(cardId) {
    this.isLoading = true;
    this.errorMessage = "";
    this.cardService.getCardById(cardId).subscribe({
      next: (card) => {
        this.card = card;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load this card.";
        this.isLoading = false;
      }
    });
  }
  loadTransactions(cardId) {
    this.isLoadingTransactions = true;
    this.cardService.getCardTransactions(cardId).subscribe({
      next: (transactions) => {
        this.transactions = transactions;
        this.isLoadingTransactions = false;
      },
      error: () => {
        this.isLoadingTransactions = false;
      }
    });
  }
  blockCard() {
    if (!this.card)
      return;
    this.cardService.blockCard(this.card.cardId).subscribe((updated) => this.card = updated);
  }
  activateCard() {
    if (!this.card)
      return;
    this.cardService.activateCard(this.card.cardId).subscribe((updated) => this.card = updated);
  }
  static {
    this.\u0275fac = function CardDetailComponent_Factory(t) {
      return new (t || _CardDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CardService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardDetailComponent, selectors: [["app-card-detail"]], decls: 4, vars: 3, consts: [[1, "card-detail-page"], ["class", "state-message", 4, "ngIf"], ["class", "state-message state-message--error", 4, "ngIf"], [4, "ngIf"], [1, "state-message"], [1, "state-message", "state-message--error"], [1, "card-detail-page__hero"], [3, "card"], [1, "card-actions"], ["class", "btn btn--primary", 3, "click", 4, "ngIf"], ["class", "btn btn--danger", 3, "click", 4, "ngIf"], [1, "card-info"], [1, "card-info__grid"], [3, "status"], [1, "card-transactions"], ["class", "empty-state", 4, "ngIf"], ["class", "transactions-table", 4, "ngIf"], [1, "btn", "btn--primary", 3, "click"], [1, "btn", "btn--danger", 3, "click"], [1, "empty-state"], [1, "empty-state__hint"], [1, "transactions-table"], [4, "ngFor", "ngForOf"]], template: function CardDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, CardDetailComponent_div_1_Template, 2, 0, "div", 1)(2, CardDetailComponent_div_2_Template, 2, 1, "div", 2)(3, CardDetailComponent_ng_container_3_Template, 48, 14, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.card && !ctx.isLoading);
      }
    }, dependencies: [NgForOf, NgIf, CardPreviewComponent, CardStatusComponent], styles: ["\n\n.card-detail-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  max-width: 720px;\n}\n.card-detail-page__hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 10px 18px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #1c1e26;\n  color: #fff;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #fdeceb;\n  color: #e14b4b;\n}\n.card-info[_ngcontent-%COMP%], .card-transactions[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.card-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card-transactions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.card-info__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  row-gap: 12px;\n  column-gap: 16px;\n}\n.card-info__grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #6f737c;\n  font-size: 13px;\n}\n.card-info__grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.state-message[_ngcontent-%COMP%] {\n  color: #6f737c;\n  padding: 24px 0;\n}\n.state-message--error[_ngcontent-%COMP%] {\n  color: #e14b4b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  border: 1px dashed #d7dae0;\n  border-radius: 12px;\n  padding: 32px;\n  text-align: center;\n  color: #6f737c;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.empty-state__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 6px;\n}\n.transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.transactions-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .transactions-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 12px;\n  border-bottom: 1px solid #eef0f3;\n  font-size: 14px;\n}\n.transactions-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #6f737c;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=card-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardDetailComponent, { className: "CardDetailComponent", filePath: "app\\modules\\cards\\pages\\card-detail\\card-detail.component.ts", lineNumber: 13 });
})();

// src/app/modules/cards/pages/card-activation/card-activation.component.ts
var CardActivationComponent = class _CardActivationComponent {
  static {
    this.\u0275fac = function CardActivationComponent_Factory(t) {
      return new (t || _CardActivationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardActivationComponent, selectors: [["app-card-activation"]], decls: 5, vars: 0, consts: [[1, "stub-page"]], template: function CardActivationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Activation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "This page is a placeholder \u2014 implementation coming once requirements are defined.");
        \u0275\u0275elementEnd()();
      }
    }, styles: ["\n\n.stub-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  color: #6f737c;\n}\n.stub-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1c1e26;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=card-activation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardActivationComponent, { className: "CardActivationComponent", filePath: "app\\modules\\cards\\pages\\card-activation\\card-activation.component.ts", lineNumber: 11 });
})();

// src/app/modules/cards/pages/card-distribution/card-distribution.component.ts
var CardDistributionComponent = class _CardDistributionComponent {
  static {
    this.\u0275fac = function CardDistributionComponent_Factory(t) {
      return new (t || _CardDistributionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardDistributionComponent, selectors: [["app-card-distribution"]], decls: 5, vars: 0, consts: [[1, "stub-page"]], template: function CardDistributionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Distribution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "This page is a placeholder \u2014 implementation coming once requirements are defined.");
        \u0275\u0275elementEnd()();
      }
    }, styles: ["\n\n.stub-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  color: #6f737c;\n}\n.stub-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1c1e26;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=card-distribution.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardDistributionComponent, { className: "CardDistributionComponent", filePath: "app\\modules\\cards\\pages\\card-distribution\\card-distribution.component.ts", lineNumber: 11 });
})();

// src/app/modules/cards/pages/card-stock/card-stock.component.ts
var CardStockComponent = class _CardStockComponent {
  static {
    this.\u0275fac = function CardStockComponent_Factory(t) {
      return new (t || _CardStockComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardStockComponent, selectors: [["app-card-stock"]], decls: 5, vars: 0, consts: [[1, "stub-page"]], template: function CardStockComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "This page is a placeholder \u2014 implementation coming once requirements are defined.");
        \u0275\u0275elementEnd()();
      }
    }, styles: ["\n\n.stub-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  color: #6f737c;\n}\n.stub-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1c1e26;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=card-stock.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardStockComponent, { className: "CardStockComponent", filePath: "app\\modules\\cards\\pages\\card-stock\\card-stock.component.ts", lineNumber: 11 });
})();

// src/app/modules/cards/cards-routing.module.ts
var routes = [
  { path: "", component: CardListComponent },
  { path: "stock", component: CardStockComponent },
  { path: "distribution", component: CardDistributionComponent },
  { path: "activation", component: CardActivationComponent },
  { path: ":id", component: CardDetailComponent }
];
var CardsRoutingModule = class _CardsRoutingModule {
  static {
    this.\u0275fac = function CardsRoutingModule_Factory(t) {
      return new (t || _CardsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CardsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/cards/components/card-qr-scanner/card-qr-scanner.component.ts
var CardQrScannerComponent = class _CardQrScannerComponent {
  constructor() {
    this.scannedUid = new EventEmitter();
  }
  static {
    this.\u0275fac = function CardQrScannerComponent_Factory(t) {
      return new (t || _CardQrScannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardQrScannerComponent, selectors: [["app-card-qr-scanner"]], outputs: { scannedUid: "scannedUid" }, decls: 5, vars: 0, consts: [[1, "qr-placeholder"], [1, "qr-placeholder__hint"]], template: function CardQrScannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p");
        \u0275\u0275text(2, "QR scanning isn't wired up yet.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Plug in a scanner library here and emit the decoded card UID via (scannedUid).");
        \u0275\u0275elementEnd()();
      }
    }, styles: ["\n\n.qr-placeholder[_ngcontent-%COMP%] {\n  border: 1px dashed #c7cad1;\n  border-radius: 12px;\n  padding: 32px;\n  text-align: center;\n  color: #6f737c;\n}\n.qr-placeholder__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 6px;\n}\n/*# sourceMappingURL=card-qr-scanner.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardQrScannerComponent, { className: "CardQrScannerComponent", filePath: "app\\modules\\cards\\components\\card-qr-scanner\\card-qr-scanner.component.ts", lineNumber: 11 });
})();

// src/app/modules/cards/cards.module.ts
var CardsModule = class _CardsModule {
  static {
    this.\u0275fac = function CardsModule_Factory(t) {
      return new (t || _CardsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CardsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, CardsRoutingModule] });
  }
};
export {
  CardsModule
};
//# sourceMappingURL=chunk-Q23MOV5V.js.map
