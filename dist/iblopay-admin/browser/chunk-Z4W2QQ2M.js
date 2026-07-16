import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VBNNW23C.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  EventEmitter,
  JsonPipe,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  __spreadProps,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6UEC5R44.js";

// src/app/modules/transactions/enums/commission-status.enum.ts
var CommissionStatus;
(function(CommissionStatus2) {
  CommissionStatus2["PENDING"] = "PENDING";
  CommissionStatus2["CREDITED"] = "CREDITED";
  CommissionStatus2["FAILED"] = "FAILED";
})(CommissionStatus || (CommissionStatus = {}));

// src/app/modules/transactions/enums/commission-type.enum.ts
var CommissionType;
(function(CommissionType2) {
  CommissionType2["AGENT_COMMISSION"] = "AGENT_COMMISSION";
  CommissionType2["SUPER_AGENT_COMMISSION"] = "SUPER_AGENT_COMMISSION";
})(CommissionType || (CommissionType = {}));

// src/app/modules/transactions/enums/payment-mode.enum.ts
var PaymentMode;
(function(PaymentMode2) {
  PaymentMode2["NFC"] = "NFC";
  PaymentMode2["USSD"] = "USSD";
  PaymentMode2["MOBILE_APP"] = "MOBILE_APP";
  PaymentMode2["WEB"] = "WEB";
  PaymentMode2["AGENT"] = "AGENT";
})(PaymentMode || (PaymentMode = {}));

// src/app/modules/transactions/enums/sweep-status.enum.ts
var SweepStatus;
(function(SweepStatus2) {
  SweepStatus2["PENDING"] = "PENDING";
  SweepStatus2["COMPLETED"] = "COMPLETED";
  SweepStatus2["ROLLED_BACK"] = "ROLLED_BACK";
})(SweepStatus || (SweepStatus = {}));

// src/app/modules/transactions/enums/transaction-status.enum.ts
var TransactionStatus;
(function(TransactionStatus2) {
  TransactionStatus2["PENDING"] = "PENDING";
  TransactionStatus2["COMPLETED"] = "COMPLETED";
  TransactionStatus2["FAILED"] = "FAILED";
  TransactionStatus2["REVERSED"] = "REVERSED";
})(TransactionStatus || (TransactionStatus = {}));

// src/app/modules/transactions/enums/transaction-type.enum.ts
var TransactionType;
(function(TransactionType2) {
  TransactionType2["DEPOSIT"] = "DEPOSIT";
  TransactionType2["WITHDRAWAL"] = "WITHDRAWAL";
  TransactionType2["TRANSFER"] = "TRANSFER";
  TransactionType2["PAYMENT_NFC"] = "PAYMENT_NFC";
  TransactionType2["SWEEP"] = "SWEEP";
  TransactionType2["SWEEP_INVERSE"] = "SWEEP_INVERSE";
  TransactionType2["COMMISSION"] = "COMMISSION";
  TransactionType2["REIMBURSEMENT"] = "REIMBURSEMENT";
})(TransactionType || (TransactionType = {}));

// src/app/modules/transactions/data/transaction-dummy.data.ts
var DUMMY_TRANSACTIONS = [
  {
    transactionId: "tx-001",
    reference: "DEP-20260715-001",
    fromWalletId: null,
    toWalletId: "wallet-001",
    amount: 25e4,
    fee: 0,
    transactionType: TransactionType.DEPOSIT,
    status: TransactionStatus.COMPLETED,
    description: "Cash deposit through agent",
    paymentMode: PaymentMode.AGENT,
    metadata: { agentId: "agent-001" },
    createdAt: "2026-07-15T09:12:00.000Z",
    completedAt: "2026-07-15T09:13:00.000Z"
  },
  {
    transactionId: "tx-002",
    reference: "NFC-20260715-002",
    fromWalletId: "wallet-002",
    toWalletId: "wallet-merchant-01",
    amount: 48e3,
    fee: 500,
    transactionType: TransactionType.PAYMENT_NFC,
    status: TransactionStatus.COMPLETED,
    description: "Payment at Bujumbura Market",
    paymentMode: PaymentMode.NFC,
    metadata: { merchant: "Bujumbura Market" },
    createdAt: "2026-07-15T08:10:00.000Z",
    completedAt: "2026-07-15T08:10:08.000Z"
  },
  {
    transactionId: "tx-003",
    reference: "TRF-20260714-003",
    fromWalletId: "wallet-001",
    toWalletId: "wallet-004",
    amount: 85e3,
    fee: 850,
    transactionType: TransactionType.TRANSFER,
    status: TransactionStatus.COMPLETED,
    description: "Wallet transfer",
    paymentMode: PaymentMode.MOBILE_APP,
    metadata: null,
    createdAt: "2026-07-14T14:45:00.000Z",
    completedAt: "2026-07-14T14:45:12.000Z"
  },
  {
    transactionId: "tx-004",
    reference: "WDL-20260714-004",
    fromWalletId: "wallet-005",
    toWalletId: null,
    amount: 6e4,
    fee: 1200,
    transactionType: TransactionType.WITHDRAWAL,
    status: TransactionStatus.COMPLETED,
    description: "Agent cash withdrawal",
    paymentMode: PaymentMode.AGENT,
    metadata: { agentId: "agent-003" },
    createdAt: "2026-07-14T07:55:00.000Z",
    completedAt: "2026-07-14T07:57:00.000Z"
  },
  {
    transactionId: "tx-005",
    reference: "NFC-20260713-005",
    fromWalletId: "wallet-001",
    toWalletId: "wallet-merchant-02",
    amount: 12e3,
    fee: 120,
    transactionType: TransactionType.PAYMENT_NFC,
    status: TransactionStatus.PENDING,
    description: "NFC payment awaiting confirmation",
    paymentMode: PaymentMode.NFC,
    metadata: { merchant: "Caf\xE9 du Centre" },
    createdAt: "2026-07-13T17:05:00.000Z",
    completedAt: null
  },
  {
    transactionId: "tx-006",
    reference: "DEP-20260713-006",
    fromWalletId: null,
    toWalletId: "wallet-007",
    amount: 175e3,
    fee: 0,
    transactionType: TransactionType.DEPOSIT,
    status: TransactionStatus.FAILED,
    description: "Bank deposit declined",
    paymentMode: PaymentMode.WEB,
    metadata: { failureReason: "Provider timeout" },
    createdAt: "2026-07-13T10:20:00.000Z",
    completedAt: null
  },
  {
    transactionId: "tx-007",
    reference: "SWP-20260712-007",
    fromWalletId: "wallet-004",
    toWalletId: "wallet-settlement",
    amount: 32e4,
    fee: 0,
    transactionType: TransactionType.SWEEP,
    status: TransactionStatus.COMPLETED,
    description: "Automatic merchant sweep",
    paymentMode: PaymentMode.WEB,
    metadata: null,
    createdAt: "2026-07-12T23:00:00.000Z",
    completedAt: "2026-07-12T23:00:35.000Z"
  },
  {
    transactionId: "tx-008",
    reference: "COM-20260712-008",
    fromWalletId: "wallet-system",
    toWalletId: "wallet-agent-01",
    amount: 6400,
    fee: 0,
    transactionType: TransactionType.COMMISSION,
    status: TransactionStatus.COMPLETED,
    description: "Weekly agent commission",
    paymentMode: PaymentMode.WEB,
    metadata: { agentId: "agent-001" },
    createdAt: "2026-07-12T23:01:00.000Z",
    completedAt: "2026-07-12T23:01:05.000Z"
  },
  {
    transactionId: "tx-009",
    reference: "TRF-20260711-009",
    fromWalletId: "wallet-002",
    toWalletId: "wallet-005",
    amount: 15e4,
    fee: 1500,
    transactionType: TransactionType.TRANSFER,
    status: TransactionStatus.REVERSED,
    description: "Transfer reversed by support",
    paymentMode: PaymentMode.USSD,
    metadata: { reversalReason: "Duplicate transfer" },
    createdAt: "2026-07-11T16:40:00.000Z",
    completedAt: "2026-07-11T17:02:00.000Z"
  },
  {
    transactionId: "tx-010",
    reference: "RMB-20260710-010",
    fromWalletId: "wallet-merchant-01",
    toWalletId: "wallet-002",
    amount: 48e3,
    fee: 0,
    transactionType: TransactionType.REIMBURSEMENT,
    status: TransactionStatus.COMPLETED,
    description: "Merchant refund",
    paymentMode: PaymentMode.MOBILE_APP,
    metadata: { originalTransactionId: "tx-old-114" },
    createdAt: "2026-07-10T15:30:00.000Z",
    completedAt: "2026-07-10T15:31:00.000Z"
  },
  {
    transactionId: "tx-011",
    reference: "SWI-20260710-011",
    fromWalletId: "wallet-settlement",
    toWalletId: "wallet-004",
    amount: 32e3,
    fee: 0,
    transactionType: TransactionType.SWEEP_INVERSE,
    status: TransactionStatus.COMPLETED,
    description: "Partial sweep rollback",
    paymentMode: PaymentMode.WEB,
    metadata: null,
    createdAt: "2026-07-10T11:22:00.000Z",
    completedAt: "2026-07-10T11:22:20.000Z"
  },
  {
    transactionId: "tx-012",
    reference: "WDL-20260709-012",
    fromWalletId: "wallet-001",
    toWalletId: null,
    amount: 1e5,
    fee: 2e3,
    transactionType: TransactionType.WITHDRAWAL,
    status: TransactionStatus.FAILED,
    description: "Withdrawal cancelled",
    paymentMode: PaymentMode.AGENT,
    metadata: { failureReason: "Insufficient agent float" },
    createdAt: "2026-07-09T09:05:00.000Z",
    completedAt: null
  }
];
var DUMMY_SWEEPS = [
  {
    sweepId: "sweep-001",
    transactionId: "tx-007",
    fromWalletId: "wallet-004",
    toWalletId: "wallet-settlement",
    amount: 32e4,
    reason: "PAYMENT_NFC",
    status: SweepStatus.COMPLETED,
    parentTransactionId: null,
    createdAt: "2026-07-12T23:00:00.000Z",
    completedAt: "2026-07-12T23:00:35.000Z",
    rolledBackAt: null
  },
  {
    sweepId: "sweep-002",
    transactionId: "tx-011",
    fromWalletId: "wallet-settlement",
    toWalletId: "wallet-004",
    amount: 32e3,
    reason: "REIMBURSEMENT",
    status: SweepStatus.ROLLED_BACK,
    parentTransactionId: "tx-007",
    createdAt: "2026-07-10T11:22:00.000Z",
    completedAt: "2026-07-10T11:22:20.000Z",
    rolledBackAt: "2026-07-10T11:22:20.000Z"
  }
];
var DUMMY_COMMISSIONS = [
  {
    commissionId: "commission-001",
    transactionId: "tx-008",
    agentId: "agent-001",
    amount: 6400,
    rate: 2,
    commissionType: CommissionType.AGENT_COMMISSION,
    status: CommissionStatus.CREDITED,
    createdAt: "2026-07-12T23:01:00.000Z",
    creditedAt: "2026-07-12T23:01:05.000Z"
  }
];

// src/app/modules/transactions/services/transaction.service.ts
var TransactionService = class _TransactionService {
  constructor() {
    this.transactions = [...DUMMY_TRANSACTIONS];
    this.sweeps = [...DUMMY_SWEEPS];
    this.commissions = [...DUMMY_COMMISSIONS];
    this.simDelay = 400;
  }
  getTransactions(filter = {}) {
    let filtered = [...this.transactions];
    if (filter.type) {
      filtered = filtered.filter((t) => t.transactionType === filter.type);
    }
    if (filter.status) {
      filtered = filtered.filter((t) => t.status === filter.status);
    }
    if (filter.paymentMode) {
      filtered = filtered.filter((t) => t.paymentMode === filter.paymentMode);
    }
    if (filter.walletId) {
      filtered = filtered.filter((t) => t.fromWalletId === filter.walletId || t.toWalletId === filter.walletId);
    }
    if (filter.dateFrom) {
      const from = new Date(filter.dateFrom).getTime();
      filtered = filtered.filter((t) => new Date(t.createdAt).getTime() >= from);
    }
    if (filter.dateTo) {
      const to = new Date(filter.dateTo).getTime();
      filtered = filtered.filter((t) => new Date(t.createdAt).getTime() <= to);
    }
    if (filter.minAmount !== void 0) {
      filtered = filtered.filter((t) => t.amount >= filter.minAmount);
    }
    if (filter.maxAmount !== void 0) {
      filtered = filtered.filter((t) => t.amount <= filter.maxAmount);
    }
    const total = filtered.length;
    const page = filter.page ?? 1;
    const pageSize = filter.pageSize ?? 20;
    const start = (page - 1) * pageSize;
    const items = filtered.slice(start, start + pageSize);
    return of({ items, total }).pipe(delay(this.simDelay));
  }
  getTransactionById(transactionId) {
    const tx = this.transactions.find((t) => t.transactionId === transactionId);
    if (!tx) {
      return throwError(() => new Error("Transaction not found")).pipe(delay(this.simDelay));
    }
    return of(__spreadValues({}, tx)).pipe(delay(this.simDelay));
  }
  getTransactionsByWallet(walletId, filter = {}) {
    return this.getTransactions(__spreadProps(__spreadValues({}, filter), { walletId }));
  }
  getSummary(filter = {}) {
    let filtered = [...this.transactions];
    if (filter.type) {
      filtered = filtered.filter((t) => t.transactionType === filter.type);
    }
    if (filter.status) {
      filtered = filtered.filter((t) => t.status === filter.status);
    }
    if (filter.paymentMode) {
      filtered = filtered.filter((t) => t.paymentMode === filter.paymentMode);
    }
    if (filter.walletId) {
      filtered = filtered.filter((t) => t.fromWalletId === filter.walletId || t.toWalletId === filter.walletId);
    }
    if (filter.dateFrom) {
      const from = new Date(filter.dateFrom).getTime();
      filtered = filtered.filter((t) => new Date(t.createdAt).getTime() >= from);
    }
    if (filter.dateTo) {
      const to = new Date(filter.dateTo).getTime();
      filtered = filtered.filter((t) => new Date(t.createdAt).getTime() <= to);
    }
    const totalCount = filtered.length;
    const totalAmount = filtered.reduce((sum, t) => sum + t.amount, 0);
    const totalFees = filtered.reduce((sum, t) => sum + t.fee, 0);
    const countByStatus = {};
    const countByType = {};
    for (const tx of filtered) {
      countByStatus[tx.status] = (countByStatus[tx.status] ?? 0) + 1;
      countByType[tx.transactionType] = (countByType[tx.transactionType] ?? 0) + 1;
    }
    const summary = {
      totalCount,
      totalAmount,
      totalFees,
      countByStatus,
      countByType
    };
    return of(summary).pipe(delay(this.simDelay));
  }
  getSweepDetails(transactionId) {
    const sweep = this.sweeps.find((s) => s.transactionId === transactionId);
    if (!sweep) {
      return throwError(() => new Error("Sweep details not found")).pipe(delay(this.simDelay));
    }
    return of(__spreadValues({}, sweep)).pipe(delay(this.simDelay));
  }
  getCommissionDetails(transactionId) {
    const commission = this.commissions.find((c) => c.transactionId === transactionId);
    if (!commission) {
      return throwError(() => new Error("Commission details not found")).pipe(delay(this.simDelay));
    }
    return of(__spreadValues({}, commission)).pipe(delay(this.simDelay));
  }
  static {
    this.\u0275fac = function TransactionService_Factory(t) {
      return new (t || _TransactionService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransactionService, factory: _TransactionService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/transactions/pages/transaction-filters/transaction-filters.component.ts
function TransactionFiltersComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1);
  }
}
function TransactionFiltersComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2);
  }
}
function TransactionFiltersComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3);
  }
}
var TransactionFiltersComponent = class _TransactionFiltersComponent {
  constructor() {
    this.filterChange = new EventEmitter();
    this.types = Object.values(TransactionType);
    this.statuses = Object.values(TransactionStatus);
    this.paymentModes = Object.values(PaymentMode);
    this.filter = {};
  }
  emitChange() {
    this.filterChange.emit(__spreadProps(__spreadValues({}, this.filter), { page: 1 }));
  }
  reset() {
    this.filter = {};
    this.emitChange();
  }
  static {
    this.\u0275fac = function TransactionFiltersComponent_Factory(t) {
      return new (t || _TransactionFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionFiltersComponent, selectors: [["app-transaction-filters"]], outputs: { filterChange: "filterChange" }, decls: 43, vars: 13, consts: [[1, "tx-filters", 3, "ngSubmit"], [1, "tx-filters__field"], ["name", "type", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["name", "status", 3, "ngModelChange", "ngModel"], ["name", "paymentMode", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dateFrom", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dateTo", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "minAmount", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "maxAmount", "min", "0", 3, "ngModelChange", "ngModel"], [1, "tx-filters__actions"], ["type", "submit", 1, "btn", "btn--primary"], ["type", "button", 1, "btn", 3, "click"]], template: function TransactionFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function TransactionFiltersComponent_Template_form_ngSubmit_0_listener() {
          return ctx.emitChange();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "label");
        \u0275\u0275text(3, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "select", 2);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionFiltersComponent_Template_select_ngModelChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.type, $event) || (ctx.filter.type = $event);
          return $event;
        });
        \u0275\u0275elementStart(5, "option", 3);
        \u0275\u0275text(6, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, TransactionFiltersComponent_option_7_Template, 2, 2, "option", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 1)(9, "label");
        \u0275\u0275text(10, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionFiltersComponent_Template_select_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.status, $event) || (ctx.filter.status = $event);
          return $event;
        });
        \u0275\u0275elementStart(12, "option", 3);
        \u0275\u0275text(13, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, TransactionFiltersComponent_option_14_Template, 2, 2, "option", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 1)(16, "label");
        \u0275\u0275text(17, "Payment mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionFiltersComponent_Template_select_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.paymentMode, $event) || (ctx.filter.paymentMode = $event);
          return $event;
        });
        \u0275\u0275elementStart(19, "option", 3);
        \u0275\u0275text(20, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, TransactionFiltersComponent_option_21_Template, 2, 2, "option", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 1)(23, "label");
        \u0275\u0275text(24, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionFiltersComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.dateFrom, $event) || (ctx.filter.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 1)(27, "label");
        \u0275\u0275text(28, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionFiltersComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.dateTo, $event) || (ctx.filter.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 1)(31, "label");
        \u0275\u0275text(32, "Min amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionFiltersComponent_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.minAmount, $event) || (ctx.filter.minAmount = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 1)(35, "label");
        \u0275\u0275text(36, "Max amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionFiltersComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.maxAmount, $event) || (ctx.filter.maxAmount = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 11)(39, "button", 12);
        \u0275\u0275text(40, "Apply");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 13);
        \u0275\u0275listener("click", function TransactionFiltersComponent_Template_button_click_41_listener() {
          return ctx.reset();
        });
        \u0275\u0275text(42, "Reset");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.type);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.types);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.status);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.statuses);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.paymentMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.paymentModes);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.dateTo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.minAmount);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.maxAmount);
      }
    }, dependencies: [NgForOf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm], styles: ["\n\n.tx-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  align-items: flex-end;\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #eef0f3;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n.tx-filters__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.tx-filters__field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a8f98;\n  text-transform: uppercase;\n}\n.tx-filters__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .tx-filters__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-radius: 8px;\n  border: 1px solid #d7dae0;\n  font-size: 13px;\n  min-width: 120px;\n}\n.tx-filters__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #d7dae0;\n  background: #fff;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #1c1e26;\n  color: #fff;\n  border-color: #1c1e26;\n}\n/*# sourceMappingURL=transaction-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionFiltersComponent, { className: "TransactionFiltersComponent", filePath: "app\\modules\\transactions\\pages\\transaction-filters\\transaction-filters.component.ts", lineNumber: 12 });
})();

// src/app/modules/transactions/transactions.constants.ts
var TRANSACTION_STATUS_META = {
  [TransactionStatus.PENDING]: { label: "Pending", color: "#e0932c" },
  [TransactionStatus.COMPLETED]: { label: "Completed", color: "#1fae5b" },
  [TransactionStatus.FAILED]: { label: "Failed", color: "#e14b4b" },
  [TransactionStatus.REVERSED]: { label: "Reversed", color: "#6f6fef" }
};
var TRANSACTION_TYPE_META = {
  [TransactionType.DEPOSIT]: { label: "Deposit", icon: "\u2B07\uFE0F" },
  [TransactionType.WITHDRAWAL]: { label: "Withdrawal", icon: "\u2B06\uFE0F" },
  [TransactionType.TRANSFER]: { label: "Transfer", icon: "\u{1F501}" },
  [TransactionType.PAYMENT_NFC]: { label: "NFC payment", icon: "\u{1F4F6}" },
  [TransactionType.SWEEP]: { label: "Sweep", icon: "\u{1F9F9}" },
  [TransactionType.SWEEP_INVERSE]: { label: "Sweep (reverse)", icon: "\u{1F9F9}" },
  [TransactionType.COMMISSION]: { label: "Commission", icon: "\u{1F4BC}" },
  [TransactionType.REIMBURSEMENT]: { label: "Reimbursement", icon: "\u21A9\uFE0F" }
};
var PAYMENT_MODE_META = {
  [PaymentMode.NFC]: { label: "NFC" },
  [PaymentMode.USSD]: { label: "USSD" },
  [PaymentMode.MOBILE_APP]: { label: "Mobile app" },
  [PaymentMode.WEB]: { label: "Web" },
  [PaymentMode.AGENT]: { label: "Agent" }
};
function formatMinorAmount(amountMinorUnits, currency = "") {
  const major = amountMinorUnits / 100;
  const formatted = major.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return currency ? `${formatted} ${currency}` : formatted;
}

// src/app/modules/transactions/components/transaction-status-badge/transaction-status-badge.component.ts
var TransactionStatusBadgeComponent = class _TransactionStatusBadgeComponent {
  constructor() {
    this.status = TransactionStatus.PENDING;
  }
  get meta() {
    return TRANSACTION_STATUS_META[this.status];
  }
  static {
    this.\u0275fac = function TransactionStatusBadgeComponent_Factory(t) {
      return new (t || _TransactionStatusBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionStatusBadgeComponent, selectors: [["app-transaction-status-badge"]], inputs: { status: "status" }, decls: 3, vars: 3, consts: [[1, "status-badge"], [1, "status-dot"]], template: function TransactionStatusBadgeComponent_Template(rf, ctx) {
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
    }, styles: ["\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--badge-color);\n  background: color-mix(in srgb, var(--badge-color) 12%, transparent);\n  white-space: nowrap;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--badge-color);\n}\n/*# sourceMappingURL=transaction-status-badge.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionStatusBadgeComponent, { className: "TransactionStatusBadgeComponent", filePath: "app\\modules\\transactions\\components\\transaction-status-badge\\transaction-status-badge.component.ts", lineNumber: 10 });
})();

// src/app/modules/transactions/components/transaction-card/transaction-card.component.ts
function TransactionCardComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r0.transaction.reference, "");
  }
}
var OUTBOUND_TYPES = /* @__PURE__ */ new Set([TransactionType.WITHDRAWAL, TransactionType.TRANSFER, TransactionType.PAYMENT_NFC]);
var TransactionCardComponent = class _TransactionCardComponent {
  get typeMeta() {
    return TRANSACTION_TYPE_META[this.transaction.transactionType];
  }
  get isOutbound() {
    return OUTBOUND_TYPES.has(this.transaction.transactionType);
  }
  get formattedAmount() {
    const sign = this.isOutbound ? "-" : "+";
    return `${sign}${formatMinorAmount(this.transaction.amount)}`;
  }
  static {
    this.\u0275fac = function TransactionCardComponent_Factory(t) {
      return new (t || _TransactionCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionCardComponent, selectors: [["app-transaction-card"]], inputs: { transaction: "transaction" }, decls: 14, vars: 11, consts: [[1, "transaction-card"], [1, "transaction-card__icon"], [1, "transaction-card__main"], [1, "transaction-card__title"], ["class", "transaction-card__ref", 4, "ngIf"], [1, "transaction-card__date"], [1, "transaction-card__right"], [1, "transaction-card__amount"], [3, "status"], [1, "transaction-card__ref"]], template: function TransactionCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275template(6, TransactionCardComponent_span_6_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "app-transaction-status-badge", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.typeMeta.icon);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.typeMeta.label, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.transaction.reference);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, ctx.transaction.createdAt, "medium"));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("outbound", ctx.isOutbound);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.formattedAmount);
        \u0275\u0275advance();
        \u0275\u0275property("status", ctx.transaction.status);
      }
    }, dependencies: [NgIf, TransactionStatusBadgeComponent, DatePipe], styles: ["\n\n.transaction-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  background: #fff;\n  border: 1px solid #eef0f3;\n}\n.transaction-card__icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f6f8;\n  border-radius: 10px;\n}\n.transaction-card__main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.transaction-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1c1e26;\n}\n.transaction-card__ref[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #8a8f98;\n}\n.transaction-card__date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8f98;\n  margin-top: 2px;\n}\n.transaction-card__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n}\n.transaction-card__amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #1fae5b;\n}\n.transaction-card__amount.outbound[_ngcontent-%COMP%] {\n  color: #1c1e26;\n}\n/*# sourceMappingURL=transaction-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionCardComponent, { className: "TransactionCardComponent", filePath: "app\\modules\\transactions\\components\\transaction-card\\transaction-card.component.ts", lineNumber: 16 });
})();

// src/app/modules/transactions/components/transaction-chart/transaction-chart.component.ts
function TransactionChartComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275element(4, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", bar_r1.icon, " ", bar_r1.label, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", bar_r1.widthPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r1.count);
  }
}
function TransactionChartComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, TransactionChartComponent_div_0_div_1_Template, 7, 5, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.bars);
  }
}
function TransactionChartComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "No data to chart yet.");
    \u0275\u0275elementEnd();
  }
}
var TransactionChartComponent = class _TransactionChartComponent {
  constructor() {
    this.summary = null;
  }
  get bars() {
    if (!this.summary)
      return [];
    const entries = Object.entries(this.summary.countByType);
    const max = Math.max(1, ...entries.map(([, count]) => count));
    return entries.filter(([, count]) => count > 0).sort(([, a], [, b]) => b - a).map(([type, count]) => ({
      label: TRANSACTION_TYPE_META[type].label,
      icon: TRANSACTION_TYPE_META[type].icon,
      count,
      widthPercent: count / max * 100
    }));
  }
  static {
    this.\u0275fac = function TransactionChartComponent_Factory(t) {
      return new (t || _TransactionChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionChartComponent, selectors: [["app-transaction-chart"]], inputs: { summary: "summary" }, decls: 3, vars: 2, consts: [["noData", ""], ["class", "tx-chart", 4, "ngIf", "ngIfElse"], [1, "tx-chart"], ["class", "tx-chart__row", 4, "ngFor", "ngForOf"], [1, "tx-chart__row"], [1, "tx-chart__label"], [1, "tx-chart__track"], [1, "tx-chart__fill"], [1, "tx-chart__count"], [1, "tx-chart", "tx-chart--empty"]], template: function TransactionChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TransactionChartComponent_div_0_Template, 2, 1, "div", 1)(1, TransactionChartComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const noData_r3 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.bars.length > 0)("ngIfElse", noData_r3);
      }
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n.tx-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.tx-chart--empty[_ngcontent-%COMP%] {\n  color: #8a8f98;\n  font-size: 13px;\n  padding: 16px 0;\n}\n.tx-chart__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr 32px;\n  align-items: center;\n  gap: 10px;\n}\n.tx-chart__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4a4f57;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tx-chart__track[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 999px;\n  background: #eef0f3;\n  overflow: hidden;\n}\n.tx-chart__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: #6f6fef;\n  transition: width 0.2s ease;\n}\n.tx-chart__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-align: right;\n  color: #1c1e26;\n}\n/*# sourceMappingURL=transaction-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionChartComponent, { className: "TransactionChartComponent", filePath: "app\\modules\\transactions\\components\\transaction-chart\\transaction-chart.component.ts", lineNumber: 18 });
})();

// src/app/modules/transactions/components/transaction-summary/transaction-summary.component.ts
function TransactionSummaryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3, "Total transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3)(7, "span", 4);
    \u0275\u0275text(8, "Total volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 3)(12, "span", 4);
    \u0275\u0275text(13, "Total fees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 5);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.summary.totalCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formattedTotalAmount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formattedTotalFees);
  }
}
function TransactionSummaryComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Loading summary\u2026");
    \u0275\u0275elementEnd();
  }
}
var TransactionSummaryComponent = class _TransactionSummaryComponent {
  constructor() {
    this.summary = null;
  }
  get formattedTotalAmount() {
    return this.summary ? formatMinorAmount(this.summary.totalAmount) : "\u2014";
  }
  get formattedTotalFees() {
    return this.summary ? formatMinorAmount(this.summary.totalFees) : "\u2014";
  }
  static {
    this.\u0275fac = function TransactionSummaryComponent_Factory(t) {
      return new (t || _TransactionSummaryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionSummaryComponent, selectors: [["app-transaction-summary"]], inputs: { summary: "summary" }, decls: 3, vars: 2, consts: [["noSummary", ""], ["class", "summary-cards", 4, "ngIf", "ngIfElse"], [1, "summary-cards"], [1, "summary-card"], [1, "summary-card__label"], [1, "summary-card__value"], [1, "summary-cards", "summary-cards--loading"]], template: function TransactionSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TransactionSummaryComponent_div_0_Template, 16, 3, "div", 1)(1, TransactionSummaryComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const noSummary_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.summary)("ngIfElse", noSummary_r2);
      }
    }, dependencies: [NgIf], styles: ["\n\n.summary-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-cards--loading[_ngcontent-%COMP%] {\n  color: #8a8f98;\n  font-size: 14px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #fff;\n  border: 1px solid #eef0f3;\n  border-radius: 12px;\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.summary-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a8f98;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.summary-card__value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1c1e26;\n}\n/*# sourceMappingURL=transaction-summary.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionSummaryComponent, { className: "TransactionSummaryComponent", filePath: "app\\modules\\transactions\\components\\transaction-summary\\transaction-summary.component.ts", lineNumber: 10 });
})();

// src/app/modules/transactions/pages/transaction-list/transaction-list.component.ts
function TransactionListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Loading transactions\u2026");
    \u0275\u0275elementEnd();
  }
}
function TransactionListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function TransactionListComponent_div_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadTransactions());
    });
    \u0275\u0275text(3, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function TransactionListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " No transactions match this filter. ");
    \u0275\u0275elementEnd();
  }
}
function TransactionListComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function TransactionListComponent_div_13_div_1_Template_div_click_0_listener() {
      const tx_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openTransaction(tx_r4));
    });
    \u0275\u0275element(1, "app-transaction-card", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("transaction", tx_r4);
  }
}
function TransactionListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, TransactionListComponent_div_13_div_1_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.transactions);
  }
}
function TransactionListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20);
    \u0275\u0275listener("click", function TransactionListComponent_div_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275text(2, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function TransactionListComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(6, "Next");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.currentPage, " of ", ctx_r1.totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage >= ctx_r1.totalPages);
  }
}
var DEFAULT_PAGE_SIZE = 20;
var TransactionListComponent = class _TransactionListComponent {
  constructor(transactionService, router) {
    this.transactionService = transactionService;
    this.router = router;
    this.transactions = [];
    this.summary = null;
    this.total = 0;
    this.isLoading = true;
    this.isLoadingSummary = true;
    this.errorMessage = "";
    this.filter = { page: 1, pageSize: DEFAULT_PAGE_SIZE };
  }
  ngOnInit() {
    this.loadTransactions();
    this.loadSummary();
  }
  onFilterChange(filter) {
    this.filter = __spreadProps(__spreadValues({}, filter), { pageSize: DEFAULT_PAGE_SIZE });
    this.loadTransactions();
    this.loadSummary();
  }
  loadTransactions() {
    this.isLoading = true;
    this.errorMessage = "";
    this.transactionService.getTransactions(this.filter).subscribe({
      next: ({ items, total }) => {
        this.transactions = items;
        this.total = total;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load transactions.";
        this.isLoading = false;
      }
    });
  }
  loadSummary() {
    this.isLoadingSummary = true;
    this.transactionService.getSummary(this.filter).subscribe({
      next: (summary) => {
        this.summary = summary;
        this.isLoadingSummary = false;
      },
      error: () => {
        this.isLoadingSummary = false;
      }
    });
  }
  goToPage(page) {
    this.filter = __spreadProps(__spreadValues({}, this.filter), { page });
    this.loadTransactions();
  }
  get totalPages() {
    const pageSize = this.filter.pageSize ?? DEFAULT_PAGE_SIZE;
    return Math.max(1, Math.ceil(this.total / pageSize));
  }
  get currentPage() {
    return this.filter.page ?? 1;
  }
  openTransaction(transaction) {
    this.router.navigate(["/transactions", transaction.transactionId]);
  }
  static {
    this.\u0275fac = function TransactionListComponent_Factory(t) {
      return new (t || _TransactionListComponent)(\u0275\u0275directiveInject(TransactionService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionListComponent, selectors: [["app-transaction-list"]], decls: 19, vars: 7, consts: [[1, "transaction-list-page"], [1, "transaction-list-page__header"], ["routerLink", "/transactions/export", 1, "btn"], [3, "summary"], [1, "transaction-list-page__layout"], [1, "transaction-list-page__main"], [3, "filterChange"], ["class", "state-message", 4, "ngIf"], ["class", "state-message state-message--error", 4, "ngIf"], ["class", "transaction-list", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "transaction-list-page__sidebar"], [1, "state-message"], [1, "state-message", "state-message--error"], [3, "click"], [1, "transaction-list"], ["class", "transaction-list__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "transaction-list__item", 3, "click"], [3, "transaction"], [1, "pagination"], [3, "click", "disabled"]], template: function TransactionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
        \u0275\u0275text(3, "Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 2);
        \u0275\u0275text(5, "Export");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(6, "app-transaction-summary", 3);
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "app-transaction-filters", 6);
        \u0275\u0275listener("filterChange", function TransactionListComponent_Template_app_transaction_filters_filterChange_9_listener($event) {
          return ctx.onFilterChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, TransactionListComponent_div_10_Template, 2, 0, "div", 7)(11, TransactionListComponent_div_11_Template, 4, 1, "div", 8)(12, TransactionListComponent_div_12_Template, 2, 0, "div", 7)(13, TransactionListComponent_div_13_Template, 2, 1, "div", 9)(14, TransactionListComponent_div_14_Template, 7, 4, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "aside", 11)(16, "h2");
        \u0275\u0275text(17, "By type");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "app-transaction-chart", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("summary", ctx.summary);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.transactions.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.totalPages > 1);
        \u0275\u0275advance(4);
        \u0275\u0275property("summary", ctx.summary);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink, TransactionFiltersComponent, TransactionCardComponent, TransactionChartComponent, TransactionSummaryComponent], styles: ["\n\n.transaction-list-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n}\n.transaction-list-page__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.transaction-list-page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n.transaction-list-page__layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 280px;\n  gap: 24px;\n  align-items: start;\n}\n.transaction-list-page__sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eef0f3;\n  border-radius: 12px;\n  padding: 18px;\n}\n.transaction-list-page__sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0 0 14px;\n}\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #d7dae0;\n  background: #fff;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  color: #1c1e26;\n}\n.state-message[_ngcontent-%COMP%] {\n  color: #6f737c;\n  padding: 24px 0;\n  text-align: center;\n}\n.state-message--error[_ngcontent-%COMP%] {\n  color: #e14b4b;\n}\n.state-message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  border: none;\n  background: #1c1e26;\n  color: #fff;\n  padding: 6px 14px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.transaction-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.transaction-list__item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 20px;\n  font-size: 13px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #d7dae0;\n  background: #fff;\n  padding: 6px 14px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n@media (max-width: 900px) {\n  .transaction-list-page__layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=transaction-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionListComponent, { className: "TransactionListComponent", filePath: "app\\modules\\transactions\\pages\\transaction-list\\transaction-list.component.ts", lineNumber: 15 });
})();

// src/app/modules/transactions/pages/transaction-detail/transaction-detail.component.ts
function TransactionDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading transaction\u2026");
    \u0275\u0275elementEnd();
  }
}
function TransactionDetailComponent_div_2_Template(rf, ctx) {
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
function TransactionDetailComponent_ng_container_3_details_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 12)(1, "summary");
    \u0275\u0275text(2, "Raw metadata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.transaction.metadata));
  }
}
function TransactionDetailComponent_ng_container_3_section_47_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading sweep details\u2026");
    \u0275\u0275elementEnd();
  }
}
function TransactionDetailComponent_ng_container_3_section_47_dl_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 9)(1, "dt");
    \u0275\u0275text(2, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dt");
    \u0275\u0275text(6, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "dd");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dt");
    \u0275\u0275text(10, "Parent transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dt");
    \u0275\u0275text(14, "Rolled back at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.sweep.reason || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.sweep.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.sweep.parentTransactionId || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.sweep.rolledBackAt || "\u2014");
  }
}
function TransactionDetailComponent_ng_container_3_section_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "h2");
    \u0275\u0275text(2, "Sweep details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TransactionDetailComponent_ng_container_3_section_47_div_3_Template, 2, 0, "div", 1)(4, TransactionDetailComponent_ng_container_3_section_47_dl_4_Template, 17, 4, "dl", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isLoadingSweep);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sweep && !ctx_r0.isLoadingSweep);
  }
}
function TransactionDetailComponent_ng_container_3_section_48_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading commission details\u2026");
    \u0275\u0275elementEnd();
  }
}
function TransactionDetailComponent_ng_container_3_section_48_dl_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 9)(1, "dt");
    \u0275\u0275text(2, "Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dt");
    \u0275\u0275text(6, "Commission type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "dd");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dt");
    \u0275\u0275text(10, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dt");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dt");
    \u0275\u0275text(18, "Credited at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.commission.agentId);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.commission.commissionType);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (tmp_5_0 = ctx_r0.commission.rate) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "\u2014", "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.commission.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.commission.creditedAt || "\u2014");
  }
}
function TransactionDetailComponent_ng_container_3_section_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "h2");
    \u0275\u0275text(2, "Commission details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TransactionDetailComponent_ng_container_3_section_48_div_3_Template, 2, 0, "div", 1)(4, TransactionDetailComponent_ng_container_3_section_48_dl_4_Template, 21, 5, "dl", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isLoadingCommission);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.commission && !ctx_r0.isLoadingCommission);
  }
}
function TransactionDetailComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "header", 6)(2, "div")(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-transaction-status-badge", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "section", 8)(7, "h2");
    \u0275\u0275text(8, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dl", 9)(10, "dt");
    \u0275\u0275text(11, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dt");
    \u0275\u0275text(19, "Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dt");
    \u0275\u0275text(23, "From wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dt");
    \u0275\u0275text(27, "To wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dt");
    \u0275\u0275text(31, "Payment mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "dt");
    \u0275\u0275text(35, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "dd");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "dt");
    \u0275\u0275text(39, "Created at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "dd");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "dt");
    \u0275\u0275text(43, "Completed at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "dd");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, TransactionDetailComponent_ng_container_3_details_46_Template, 6, 3, "details", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, TransactionDetailComponent_ng_container_3_section_47_Template, 5, 2, "section", 11)(48, TransactionDetailComponent_ng_container_3_section_48_Template, 5, 2, "section", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.transaction.reference || ctx_r0.transaction.transactionId);
    \u0275\u0275advance();
    \u0275\u0275property("status", ctx_r0.transaction.status);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.transaction.transactionType);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.transaction.amount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.transaction.fee);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.transaction.fromWalletId || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.transaction.toWalletId || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.transaction.paymentMode || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.transaction.description || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.transaction.createdAt);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.transaction.completedAt || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.transaction.metadata);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.transaction.transactionType === ctx_r0.TransactionType.SWEEP || ctx_r0.transaction.transactionType === ctx_r0.TransactionType.SWEEP_INVERSE);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.transaction.transactionType === ctx_r0.TransactionType.COMMISSION);
  }
}
var TransactionDetailComponent = class _TransactionDetailComponent {
  constructor(route, transactionService) {
    this.route = route;
    this.transactionService = transactionService;
    this.transaction = null;
    this.isLoading = true;
    this.errorMessage = "";
    this.sweep = null;
    this.isLoadingSweep = false;
    this.commission = null;
    this.isLoadingCommission = false;
    this.TransactionType = TransactionType;
  }
  ngOnInit() {
    const transactionId = this.route.snapshot.paramMap.get("id");
    if (!transactionId) {
      this.errorMessage = "No transaction id provided.";
      this.isLoading = false;
      return;
    }
    this.loadTransaction(transactionId);
  }
  loadTransaction(transactionId) {
    this.isLoading = true;
    this.errorMessage = "";
    this.transactionService.getTransactionById(transactionId).subscribe({
      next: (transaction) => {
        this.transaction = transaction;
        this.isLoading = false;
        if (transaction.transactionType === TransactionType.SWEEP || transaction.transactionType === TransactionType.SWEEP_INVERSE) {
          this.loadSweep(transactionId);
        }
        if (transaction.transactionType === TransactionType.COMMISSION) {
          this.loadCommission(transactionId);
        }
      },
      error: () => {
        this.errorMessage = "Unable to load this transaction.";
        this.isLoading = false;
      }
    });
  }
  loadSweep(transactionId) {
    this.isLoadingSweep = true;
    this.transactionService.getSweepDetails(transactionId).subscribe({
      next: (sweep) => {
        this.sweep = sweep;
        this.isLoadingSweep = false;
      },
      error: () => {
        this.isLoadingSweep = false;
      }
    });
  }
  loadCommission(transactionId) {
    this.isLoadingCommission = true;
    this.transactionService.getCommissionDetails(transactionId).subscribe({
      next: (commission) => {
        this.commission = commission;
        this.isLoadingCommission = false;
      },
      error: () => {
        this.isLoadingCommission = false;
      }
    });
  }
  static {
    this.\u0275fac = function TransactionDetailComponent_Factory(t) {
      return new (t || _TransactionDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TransactionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionDetailComponent, selectors: [["app-transaction-detail"]], decls: 4, vars: 3, consts: [[1, "transaction-detail-page"], ["class", "state-message", 4, "ngIf"], ["class", "state-message state-message--error", 4, "ngIf"], [4, "ngIf"], [1, "state-message"], [1, "state-message", "state-message--error"], [1, "transaction-detail-page__header"], [3, "status"], [1, "info-section"], [1, "info-grid"], ["class", "metadata", 4, "ngIf"], ["class", "info-section", 4, "ngIf"], [1, "metadata"], ["class", "info-grid", 4, "ngIf"]], template: function TransactionDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, TransactionDetailComponent_div_1_Template, 2, 0, "div", 1)(2, TransactionDetailComponent_div_2_Template, 2, 1, "div", 2)(3, TransactionDetailComponent_ng_container_3_Template, 49, 14, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.transaction && !ctx.isLoading);
      }
    }, dependencies: [NgIf, TransactionStatusBadgeComponent, JsonPipe], styles: ["\n\n.transaction-detail-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  max-width: 720px;\n}\n.transaction-detail-page__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.transaction-detail-page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0 0 8px;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  row-gap: 12px;\n  column-gap: 16px;\n}\n.info-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #6f737c;\n  font-size: 13px;\n}\n.info-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  word-break: break-all;\n}\n.metadata[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.metadata[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 13px;\n  color: #6f737c;\n}\n.metadata[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: #f5f6f8;\n  border-radius: 8px;\n  padding: 12px;\n  font-size: 12px;\n  overflow-x: auto;\n}\n.state-message[_ngcontent-%COMP%] {\n  color: #6f737c;\n  padding: 24px 0;\n}\n.state-message--error[_ngcontent-%COMP%] {\n  color: #e14b4b;\n}\n/*# sourceMappingURL=transaction-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionDetailComponent, { className: "TransactionDetailComponent", filePath: "app\\modules\\transactions\\pages\\transaction-detail\\transaction-detail.component.ts", lineNumber: 14 });
})();

// src/app/modules/transactions/services/transaction-export.service.ts
var TransactionExportService = class _TransactionExportService {
  constructor() {
  }
  /**
   * Client-side CSV export of whatever transactions are already loaded
   * (e.g. the current page in transaction-list). Fine for small/filtered
   * sets. For full-dataset exports, wire up a server-side streaming endpoint.
   */
  exportToCsv(transactions, filename = "transactions.csv") {
    const header = ["Transaction ID", "Reference", "Type", "Status", "Amount", "Fee", "From Wallet", "To Wallet", "Created At"];
    const rows = transactions.map((t) => [
      t.transactionId,
      t.reference ?? "",
      t.transactionType,
      t.status,
      String(t.amount),
      String(t.fee),
      t.fromWalletId ?? "",
      t.toWalletId ?? "",
      t.createdAt
    ]);
    const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function TransactionExportService_Factory(t) {
      return new (t || _TransactionExportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransactionExportService, factory: _TransactionExportService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/transactions/pages/transaction-export/transaction-export.component.ts
function TransactionExportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var EXPORT_PAGE_SIZE = 1e3;
var TransactionExportComponent = class _TransactionExportComponent {
  constructor(transactionService, exportService) {
    this.transactionService = transactionService;
    this.exportService = exportService;
    this.dateFrom = "";
    this.dateTo = "";
    this.isExporting = false;
    this.errorMessage = "";
  }
  export() {
    this.isExporting = true;
    this.errorMessage = "";
    const filter = {
      page: 1,
      pageSize: EXPORT_PAGE_SIZE
    };
    if (this.dateFrom) {
      filter.dateFrom = this.dateFrom;
    }
    if (this.dateTo) {
      filter.dateTo = this.dateTo;
    }
    this.transactionService.getTransactions(filter).subscribe({
      next: ({ items, total }) => {
        this.exportService.exportToCsv(items, "transactions.csv");
        this.isExporting = false;
        if (total > EXPORT_PAGE_SIZE) {
          this.errorMessage = `Only the first ${EXPORT_PAGE_SIZE} of ${total} matching transactions were exported. Narrow your date range for a complete export.`;
        }
      },
      error: () => {
        this.errorMessage = "Export failed. Please try again.";
        this.isExporting = false;
      }
    });
  }
  static {
    this.\u0275fac = function TransactionExportComponent_Factory(t) {
      return new (t || _TransactionExportComponent)(\u0275\u0275directiveInject(TransactionService), \u0275\u0275directiveInject(TransactionExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionExportComponent, selectors: [["app-transaction-export"]], decls: 17, vars: 5, consts: [[1, "export-page"], [1, "export-page__hint"], [1, "export-form"], [1, "export-form__field"], ["type", "date", "name", "dateFrom", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dateTo", 3, "ngModelChange", "ngModel"], [1, "btn", "btn--primary", 3, "click", "disabled"], ["class", "state-message state-message--error", 4, "ngIf"], [1, "state-message", "state-message--error"]], template: function TransactionExportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Export transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Exports as CSV. PDF export is not built yet.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "label");
        \u0275\u0275text(8, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionExportComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 3)(11, "label");
        \u0275\u0275text(12, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionExportComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function TransactionExportComponent_Template_button_click_14_listener() {
          return ctx.export();
        });
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, TransactionExportComponent_div_16_Template, 2, 1, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isExporting);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isExporting ? "Exporting\u2026" : "Export CSV", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.export-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  max-width: 480px;\n}\n.export-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 4px;\n}\n.export-page__hint[_ngcontent-%COMP%] {\n  color: #8a8f98;\n  font-size: 13px;\n  margin-bottom: 24px;\n}\n.export-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.export-form__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.export-form__field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a8f98;\n  text-transform: uppercase;\n}\n.export-form__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-radius: 8px;\n  border: 1px solid #d7dae0;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 10px 18px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #1c1e26;\n  color: #fff;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.state-message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n}\n.state-message--error[_ngcontent-%COMP%] {\n  color: #e0932c;\n}\n/*# sourceMappingURL=transaction-export.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionExportComponent, { className: "TransactionExportComponent", filePath: "app\\modules\\transactions\\pages\\transaction-export\\transaction-export.component.ts", lineNumber: 13 });
})();

// src/app/modules/transactions/transactions-routing.module.ts
var routes = [
  { path: "", component: TransactionListComponent },
  { path: "export", component: TransactionExportComponent },
  { path: ":id", component: TransactionDetailComponent }
];
var TransactionsRoutingModule = class _TransactionsRoutingModule {
  static {
    this.\u0275fac = function TransactionsRoutingModule_Factory(t) {
      return new (t || _TransactionsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TransactionsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/transactions/transactions.module.ts
var TransactionsModule = class _TransactionsModule {
  static {
    this.\u0275fac = function TransactionsModule_Factory(t) {
      return new (t || _TransactionsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TransactionsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, TransactionsRoutingModule] });
  }
};
export {
  TransactionsModule
};
//# sourceMappingURL=chunk-Z4W2QQ2M.js.map
