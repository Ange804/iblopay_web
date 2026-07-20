import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VBNNW23C.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  __spreadProps,
  __spreadValues,
  of,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
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

// src/app/modules/agents/models/agent.model.ts
var DocumentType;
(function(DocumentType2) {
  DocumentType2["CIN"] = "CIN";
  DocumentType2["NIF"] = "NIF";
  DocumentType2["COMMERCE_REGISTER"] = "COMMERCE_REGISTER";
  DocumentType2["APPROVAL_LETTER"] = "APPROVAL_LETTER";
  DocumentType2["PROFILE_PICTURE"] = "PROFILE_PICTURE";
})(DocumentType || (DocumentType = {}));
var AgentStatus;
(function(AgentStatus2) {
  AgentStatus2["PENDING"] = "PENDING";
  AgentStatus2["ACTIVE"] = "ACTIVE";
  AgentStatus2["SUSPENDED"] = "SUSPENDED";
  AgentStatus2["BLOCKED"] = "BLOCKED";
  AgentStatus2["INACTIVE"] = "INACTIVE";
})(AgentStatus || (AgentStatus = {}));
var AgentType;
(function(AgentType2) {
  AgentType2["SUPER_AGENT"] = "SUPER_AGENT";
  AgentType2["MASTER_AGENT"] = "MASTER_AGENT";
  AgentType2["AGENT"] = "AGENT";
  AgentType2["SUB_AGENT"] = "SUB_AGENT";
  AgentType2["RETAILER"] = "RETAILER";
})(AgentType || (AgentType = {}));

// src/app/modules/agents/services/agent.service.ts
var AgentService = class _AgentService {
  constructor() {
    this.mockAgents = [
      // ================================================================
      // SUPER AGENT 1 - Jean Mukiza (5 agents)
      // ================================================================
      {
        id: "1",
        code: "SA-001",
        firstName: "Jean",
        lastName: "Mukiza",
        email: "jean.mukiza@iblopay.com",
        phone: "+257 79 900 11 22",
        cin: "1-234567-89012",
        cardNumber: "CARTE-IBP-2024-0001",
        dateOfBirth: /* @__PURE__ */ new Date("1980-05-15"),
        address: {
          province: "Bujumbura Mairie",
          commune: "Mukaza",
          zone: "Nyakabiga",
          colline: "Nyakabiga",
          quartier: "Nyakabiga",
          completeAddress: "Nyakabiga, Mukaza, Bujumbura",
          latitude: "-3.3860",
          longitude: "29.3583"
        },
        nif: "NIF-123456789",
        commerceRegister: "RC-2024-001",
        status: AgentStatus.ACTIVE,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-01-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-01-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-01-01"),
        documents: [],
        electronics: [
          {
            id: "e1",
            type: "POS_TERMINAL",
            brand: "Ingenico",
            model: "Move 5000",
            serialNumber: "SN-ING-2024-001",
            status: "ACTIVE",
            assignedDate: /* @__PURE__ */ new Date("2024-01-15"),
            notes: "Terminal principal",
            amountInCirculation: 1e7,
            currency: "BIF"
          },
          {
            id: "e2",
            type: "PHONE",
            brand: "Samsung",
            model: "Galaxy S24",
            serialNumber: "SN-SAM-2024-002",
            status: "ACTIVE",
            assignedDate: /* @__PURE__ */ new Date("2024-02-01"),
            notes: "Smartphone",
            amountInCirculation: 5e6,
            currency: "BIF"
          }
        ],
        deposits: [
          {
            id: "d1",
            agentId: "2",
            agentName: "Marie Niyonzima",
            amount: 5e5,
            currency: "BIF",
            date: /* @__PURE__ */ new Date("2024-06-10"),
            status: "COMPLETED",
            reference: "DEP-2024-001"
          },
          {
            id: "d2",
            agentId: "3",
            agentName: "Pierre Ndayishimiye",
            amount: 75e4,
            currency: "BIF",
            date: /* @__PURE__ */ new Date("2024-06-12"),
            status: "COMPLETED",
            reference: "DEP-2024-002"
          },
          {
            id: "d3",
            agentId: "4",
            agentName: "Claire Iradukunda",
            amount: 3e5,
            currency: "BIF",
            date: /* @__PURE__ */ new Date("2024-06-14"),
            status: "PENDING",
            reference: "DEP-2024-003"
          },
          {
            id: "d4",
            agentId: "5",
            agentName: "David Hakizimana",
            amount: 45e4,
            currency: "BIF",
            date: /* @__PURE__ */ new Date("2024-06-15"),
            status: "COMPLETED",
            reference: "DEP-2024-004"
          },
          {
            id: "d5",
            agentId: "6",
            agentName: "Esther Niyonkuru",
            amount: 6e5,
            currency: "BIF",
            date: /* @__PURE__ */ new Date("2024-06-16"),
            status: "COMPLETED",
            reference: "DEP-2024-005"
          }
        ],
        agents: [
          {
            id: "2",
            code: "AG-001",
            firstName: "Marie",
            lastName: "Niyonzima",
            email: "marie.niyonzima@iblopay.com",
            phone: "+257 79 900 33 44",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-02-01"),
            transactions: [
              { id: "t1", type: "DEPOSIT", amount: 5e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-06-10"), status: "COMPLETED", reference: "TXN-2024-001", description: "D\xE9p\xF4t initial" },
              { id: "t2", type: "TRANSFER", amount: 1e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-06-11"), status: "COMPLETED", reference: "TXN-2024-002", description: "Transfert vers client" }
            ]
          },
          {
            id: "3",
            code: "AG-002",
            firstName: "Pierre",
            lastName: "Ndayishimiye",
            email: "pierre.ndayishimiye@iblopay.com",
            phone: "+257 79 900 55 66",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-03-01"),
            transactions: [
              { id: "t3", type: "DEPOSIT", amount: 75e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-06-12"), status: "COMPLETED", reference: "TXN-2024-003", description: "D\xE9p\xF4t" },
              { id: "t4", type: "TRANSFER", amount: 2e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-06-14"), status: "PENDING", reference: "TXN-2024-004", description: "Transfert en attente" }
            ]
          },
          {
            id: "4",
            code: "AG-003",
            firstName: "Claire",
            lastName: "Iradukunda",
            email: "claire.iradukunda@iblopay.com",
            phone: "+257 79 900 77 88",
            status: "PENDING",
            joinDate: /* @__PURE__ */ new Date("2024-04-01"),
            transactions: [
              { id: "t5", type: "DEPOSIT", amount: 3e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-06-14"), status: "PENDING", reference: "TXN-2024-005", description: "D\xE9p\xF4t en attente" }
            ]
          },
          {
            id: "5",
            code: "AG-004",
            firstName: "David",
            lastName: "Hakizimana",
            email: "david.hakizimana@iblopay.com",
            phone: "+257 79 900 88 99",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-05-01"),
            transactions: [
              { id: "t6", type: "DEPOSIT", amount: 45e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-06-15"), status: "COMPLETED", reference: "TXN-2024-006", description: "D\xE9p\xF4t" },
              { id: "t7", type: "TRANSFER", amount: 15e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-06-16"), status: "COMPLETED", reference: "TXN-2024-007", description: "Transfert" }
            ]
          },
          {
            id: "6",
            code: "AG-005",
            firstName: "Esther",
            lastName: "Niyonkuru",
            email: "esther.niyonkuru@iblopay.com",
            phone: "+257 79 900 99 00",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-06-01"),
            transactions: [
              { id: "t8", type: "DEPOSIT", amount: 6e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-06-17"), status: "COMPLETED", reference: "TXN-2024-008", description: "D\xE9p\xF4t" }
            ]
          }
        ]
      },
      // ================================================================
      // SUPER AGENT 2 - Marie Ndayisenga (5 agents)
      // ================================================================
      {
        id: "2",
        code: "SA-002",
        firstName: "Marie",
        lastName: "Ndayisenga",
        email: "marie.ndayisenga@iblopay.com",
        phone: "+257 79 900 22 33",
        cin: "2-345678-90123",
        cardNumber: "CARTE-IBP-2024-0002",
        dateOfBirth: /* @__PURE__ */ new Date("1985-08-20"),
        address: {
          province: "Bujumbura",
          commune: "Bujumbura Mairie",
          zone: "Kinindo",
          colline: "Kinindo",
          quartier: "Kinindo",
          completeAddress: "Kinindo, Bujumbura Mairie, Bujumbura",
          latitude: "-3.3760",
          longitude: "29.3633"
        },
        nif: "NIF-234567890",
        commerceRegister: "RC-2024-002",
        status: AgentStatus.ACTIVE,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-02-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-02-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-02-01"),
        documents: [],
        electronics: [
          {
            id: "e4",
            type: "POS_TERMINAL",
            brand: "Verifone",
            model: "VX 520",
            serialNumber: "SN-VER-2024-004",
            status: "ACTIVE",
            assignedDate: /* @__PURE__ */ new Date("2024-03-01"),
            amountInCirculation: 8e6,
            currency: "BIF"
          }
        ],
        deposits: [
          { id: "d6", agentId: "7", agentName: "Fabrice Nkurunziza", amount: 2e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-01"), status: "COMPLETED", reference: "DEP-2024-006" },
          { id: "d7", agentId: "8", agentName: "Grace Ndayishimiye", amount: 35e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-05"), status: "COMPLETED", reference: "DEP-2024-007" },
          { id: "d8", agentId: "9", agentName: "Henry Muhirwa", amount: 5e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-10"), status: "PENDING", reference: "DEP-2024-008" },
          { id: "d9", agentId: "10", agentName: "Isabelle Niyonkuru", amount: 7e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-15"), status: "COMPLETED", reference: "DEP-2024-009" },
          { id: "d10", agentId: "11", agentName: "Jean Paul Niyonzima", amount: 25e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-20"), status: "COMPLETED", reference: "DEP-2024-010" }
        ],
        agents: [
          {
            id: "7",
            code: "AG-006",
            firstName: "Fabrice",
            lastName: "Nkurunziza",
            email: "fabrice.nkurunziza@iblopay.com",
            phone: "+257 79 900 77 88",
            status: "SUSPENDED",
            joinDate: /* @__PURE__ */ new Date("2024-07-01"),
            transactions: [
              { id: "t9", type: "DEPOSIT", amount: 2e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-01"), status: "COMPLETED", reference: "TXN-2024-009", description: "D\xE9p\xF4t" }
            ]
          },
          {
            id: "8",
            code: "AG-007",
            firstName: "Grace",
            lastName: "Ndayishimiye",
            email: "grace.ndayishimiye@iblopay.com",
            phone: "+257 79 900 88 99",
            status: "PENDING",
            joinDate: /* @__PURE__ */ new Date("2024-07-05"),
            transactions: [
              { id: "t10", type: "DEPOSIT", amount: 35e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-05"), status: "PENDING", reference: "TXN-2024-010", description: "D\xE9p\xF4t en attente" }
            ]
          },
          {
            id: "9",
            code: "AG-008",
            firstName: "Henry",
            lastName: "Muhirwa",
            email: "henry.muhirwa@iblopay.com",
            phone: "+257 79 900 99 00",
            status: "BLOCKED",
            joinDate: /* @__PURE__ */ new Date("2024-07-10"),
            transactions: [
              { id: "t11", type: "DEPOSIT", amount: 5e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-10"), status: "COMPLETED", reference: "TXN-2024-011", description: "D\xE9p\xF4t" }
            ]
          },
          {
            id: "10",
            code: "AG-009",
            firstName: "Isabelle",
            lastName: "Niyonkuru",
            email: "isabelle.niyonkuru@iblopay.com",
            phone: "+257 79 900 00 11",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-07-15"),
            transactions: [
              { id: "t12", type: "DEPOSIT", amount: 7e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-15"), status: "COMPLETED", reference: "TXN-2024-012", description: "D\xE9p\xF4t" },
              { id: "t13", type: "TRANSFER", amount: 3e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-16"), status: "COMPLETED", reference: "TXN-2024-013", description: "Transfert" }
            ]
          },
          {
            id: "11",
            code: "AG-010",
            firstName: "Jean Paul",
            lastName: "Niyonzima",
            email: "jeanpaul.niyonzima@iblopay.com",
            phone: "+257 79 900 11 33",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-07-20"),
            transactions: [
              { id: "t14", type: "DEPOSIT", amount: 25e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-07-20"), status: "COMPLETED", reference: "TXN-2024-014", description: "D\xE9p\xF4t" }
            ]
          }
        ]
      },
      // ================================================================
      // SUPER AGENT 3 - Pierre Ndayishimiye (5 agents)
      // ================================================================
      {
        id: "3",
        code: "SA-003",
        firstName: "Pierre",
        lastName: "Ndayishimiye",
        email: "pierre.ndayishimiye@iblopay.com",
        phone: "+257 79 900 33 44",
        cin: "3-456789-01234",
        cardNumber: "CARTE-IBP-2024-0003",
        dateOfBirth: /* @__PURE__ */ new Date("1978-12-10"),
        address: {
          province: "Gitega",
          commune: "Gitega",
          zone: "Centre",
          colline: "Gitega",
          quartier: "Gitega",
          completeAddress: "Centre, Gitega, Gitega",
          latitude: "-3.4264",
          longitude: "29.9302"
        },
        nif: "NIF-345678901",
        commerceRegister: "RC-2024-003",
        status: AgentStatus.ACTIVE,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-03-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-03-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-03-01"),
        documents: [],
        electronics: [
          {
            id: "e5",
            type: "TABLET",
            brand: "Apple",
            model: "iPad Pro",
            serialNumber: "SN-APP-2024-005",
            status: "ACTIVE",
            assignedDate: /* @__PURE__ */ new Date("2024-04-01"),
            amountInCirculation: 3e6,
            currency: "BIF"
          },
          {
            id: "e6",
            type: "PHONE",
            brand: "iPhone",
            model: "15 Pro Max",
            serialNumber: "SN-IPH-2024-006",
            status: "ACTIVE",
            assignedDate: /* @__PURE__ */ new Date("2024-05-01"),
            amountInCirculation: 2e6,
            currency: "BIF"
          }
        ],
        deposits: [
          { id: "d11", agentId: "12", agentName: "Alice Niyomwungere", amount: 4e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-01"), status: "COMPLETED", reference: "DEP-2024-011" },
          { id: "d12", agentId: "13", agentName: "Emmanuel Ndayishimiye", amount: 55e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-05"), status: "COMPLETED", reference: "DEP-2024-012" },
          { id: "d13", agentId: "14", agentName: "Rosine Niyonzima", amount: 32e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-10"), status: "PENDING", reference: "DEP-2024-013" },
          { id: "d14", agentId: "15", agentName: "Olivier Nkurunziza", amount: 48e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-15"), status: "COMPLETED", reference: "DEP-2024-014" },
          { id: "d15", agentId: "16", agentName: "Pascaline Niyonkuru", amount: 6e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-20"), status: "COMPLETED", reference: "DEP-2024-015" }
        ],
        agents: [
          {
            id: "12",
            code: "AG-011",
            firstName: "Alice",
            lastName: "Niyomwungere",
            email: "alice.niyomwungere@iblopay.com",
            phone: "+257 79 900 12 34",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-08-01"),
            transactions: [
              { id: "t15", type: "DEPOSIT", amount: 4e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-01"), status: "COMPLETED", reference: "TXN-2024-015", description: "D\xE9p\xF4t" }
            ]
          },
          {
            id: "13",
            code: "AG-012",
            firstName: "Emmanuel",
            lastName: "Ndayishimiye",
            email: "emmanuel.ndayishimiye@iblopay.com",
            phone: "+257 79 900 23 45",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-08-05"),
            transactions: [
              { id: "t16", type: "DEPOSIT", amount: 55e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-05"), status: "COMPLETED", reference: "TXN-2024-016", description: "D\xE9p\xF4t" },
              { id: "t17", type: "TRANSFER", amount: 2e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-06"), status: "COMPLETED", reference: "TXN-2024-017", description: "Transfert" }
            ]
          },
          {
            id: "14",
            code: "AG-013",
            firstName: "Rosine",
            lastName: "Niyonzima",
            email: "rosine.niyonzima@iblopay.com",
            phone: "+257 79 900 34 56",
            status: "PENDING",
            joinDate: /* @__PURE__ */ new Date("2024-08-10"),
            transactions: [
              { id: "t18", type: "DEPOSIT", amount: 32e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-10"), status: "PENDING", reference: "TXN-2024-018", description: "D\xE9p\xF4t en attente" }
            ]
          },
          {
            id: "15",
            code: "AG-014",
            firstName: "Olivier",
            lastName: "Nkurunziza",
            email: "olivier.nkurunziza@iblopay.com",
            phone: "+257 79 900 45 67",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-08-15"),
            transactions: [
              { id: "t19", type: "DEPOSIT", amount: 48e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-15"), status: "COMPLETED", reference: "TXN-2024-019", description: "D\xE9p\xF4t" }
            ]
          },
          {
            id: "16",
            code: "AG-015",
            firstName: "Pascaline",
            lastName: "Niyonkuru",
            email: "pascaline.niyonkuru@iblopay.com",
            phone: "+257 79 900 56 78",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-08-20"),
            transactions: [
              { id: "t20", type: "DEPOSIT", amount: 6e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-08-20"), status: "COMPLETED", reference: "TXN-2024-020", description: "D\xE9p\xF4t" }
            ]
          }
        ]
      },
      // ================================================================
      // SUPER AGENT 4 - Claire Iradukunda (5 agents)
      // ================================================================
      {
        id: "4",
        code: "SA-004",
        firstName: "Claire",
        lastName: "Iradukunda",
        email: "claire.iradukunda@iblopay.com",
        phone: "+257 79 900 44 55",
        cin: "4-567890-12345",
        cardNumber: "CARTE-IBP-2024-0004",
        dateOfBirth: /* @__PURE__ */ new Date("1990-03-25"),
        address: {
          province: "Bujumbura Mairie",
          commune: "Ntahangwa",
          zone: "Rohero",
          colline: "Rohero",
          quartier: "Rohero",
          completeAddress: "Rohero, Ntahangwa, Bujumbura",
          latitude: "-3.3760",
          longitude: "29.3633"
        },
        nif: "NIF-456789012",
        commerceRegister: "RC-2024-004",
        status: AgentStatus.PENDING,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-04-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-04-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-04-01"),
        documents: [],
        electronics: [],
        deposits: [
          { id: "d16", agentId: "17", agentName: "Thierry Niyonzima", amount: 28e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-01"), status: "PENDING", reference: "DEP-2024-016" },
          { id: "d17", agentId: "18", agentName: "Catherine Ndayishimiye", amount: 42e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-05"), status: "COMPLETED", reference: "DEP-2024-017" },
          { id: "d18", agentId: "19", agentName: "Michel Nkurunziza", amount: 35e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-10"), status: "PENDING", reference: "DEP-2024-018" },
          { id: "d19", agentId: "20", agentName: "Fran\xE7oise Niyonkuru", amount: 5e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-15"), status: "COMPLETED", reference: "DEP-2024-019" },
          { id: "d20", agentId: "21", agentName: "Jean Claude Ndayisenga", amount: 45e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-20"), status: "COMPLETED", reference: "DEP-2024-020" }
        ],
        agents: [
          {
            id: "17",
            code: "AG-016",
            firstName: "Thierry",
            lastName: "Niyonzima",
            email: "thierry.niyonzima@iblopay.com",
            phone: "+257 79 900 67 89",
            status: "PENDING",
            joinDate: /* @__PURE__ */ new Date("2024-09-01"),
            transactions: [
              { id: "t21", type: "DEPOSIT", amount: 28e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-01"), status: "PENDING", reference: "TXN-2024-021", description: "D\xE9p\xF4t en attente" }
            ]
          },
          {
            id: "18",
            code: "AG-017",
            firstName: "Catherine",
            lastName: "Ndayishimiye",
            email: "catherine.ndayishimiye@iblopay.com",
            phone: "+257 79 900 78 90",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-09-05"),
            transactions: [
              { id: "t22", type: "DEPOSIT", amount: 42e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-05"), status: "COMPLETED", reference: "TXN-2024-022", description: "D\xE9p\xF4t" }
            ]
          },
          {
            id: "19",
            code: "AG-018",
            firstName: "Michel",
            lastName: "Nkurunziza",
            email: "michel.nkurunziza@iblopay.com",
            phone: "+257 79 900 89 01",
            status: "PENDING",
            joinDate: /* @__PURE__ */ new Date("2024-09-10"),
            transactions: [
              { id: "t23", type: "DEPOSIT", amount: 35e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-10"), status: "PENDING", reference: "TXN-2024-023", description: "D\xE9p\xF4t en attente" }
            ]
          },
          {
            id: "20",
            code: "AG-019",
            firstName: "Fran\xE7oise",
            lastName: "Niyonkuru",
            email: "francoise.niyonkuru@iblopay.com",
            phone: "+257 79 900 90 12",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-09-15"),
            transactions: [
              { id: "t24", type: "DEPOSIT", amount: 5e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-15"), status: "COMPLETED", reference: "TXN-2024-024", description: "D\xE9p\xF4t" },
              { id: "t25", type: "TRANSFER", amount: 15e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-16"), status: "COMPLETED", reference: "TXN-2024-025", description: "Transfert" }
            ]
          },
          {
            id: "21",
            code: "AG-020",
            firstName: "Jean Claude",
            lastName: "Ndayisenga",
            email: "jeanclaude.ndayisenga@iblopay.com",
            phone: "+257 79 900 01 23",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-09-20"),
            transactions: [
              { id: "t26", type: "DEPOSIT", amount: 45e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-09-20"), status: "COMPLETED", reference: "TXN-2024-026", description: "D\xE9p\xF4t" }
            ]
          }
        ]
      },
      // ================================================================
      // SUPER AGENT 5 - David Hakizimana (5 agents)
      // ================================================================
      {
        id: "5",
        code: "SA-005",
        firstName: "David",
        lastName: "Hakizimana",
        email: "david.hakizimana@iblopay.com",
        phone: "+257 79 900 55 66",
        cin: "5-678901-23456",
        cardNumber: "CARTE-IBP-2024-0005",
        dateOfBirth: /* @__PURE__ */ new Date("1982-07-15"),
        address: {
          province: "Muyinga",
          commune: "Muyinga",
          zone: "Centre",
          colline: "Muyinga",
          quartier: "Muyinga",
          completeAddress: "Centre, Muyinga, Muyinga",
          latitude: "-2.8490",
          longitude: "30.3414"
        },
        nif: "NIF-567890123",
        commerceRegister: "RC-2024-005",
        status: AgentStatus.ACTIVE,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-05-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-05-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-05-01"),
        documents: [],
        electronics: [
          {
            id: "e7",
            type: "POS_TERMINAL",
            brand: "Ingenico",
            model: "Move 5000",
            serialNumber: "SN-ING-2024-007",
            status: "ACTIVE",
            assignedDate: /* @__PURE__ */ new Date("2024-06-01"),
            amountInCirculation: 6e6,
            currency: "BIF"
          }
        ],
        deposits: [
          { id: "d21", agentId: "22", agentName: "Aim\xE9 Niyonzima", amount: 38e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-01"), status: "COMPLETED", reference: "DEP-2024-021" },
          { id: "d22", agentId: "23", agentName: "B\xE9atrice Ndayishimiye", amount: 52e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-05"), status: "COMPLETED", reference: "DEP-2024-022" },
          { id: "d23", agentId: "24", agentName: "Charles Nkurunziza", amount: 3e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-10"), status: "PENDING", reference: "DEP-2024-023" },
          { id: "d24", agentId: "25", agentName: "Diane Niyonkuru", amount: 65e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-15"), status: "COMPLETED", reference: "DEP-2024-024" },
          { id: "d25", agentId: "26", agentName: "Eric Ndayisenga", amount: 42e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-20"), status: "COMPLETED", reference: "DEP-2024-025" }
        ],
        agents: [
          {
            id: "22",
            code: "AG-021",
            firstName: "Aim\xE9",
            lastName: "Niyonzima",
            email: "aime.niyonzima@iblopay.com",
            phone: "+257 79 900 12 34",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-10-01"),
            transactions: [
              { id: "t27", type: "DEPOSIT", amount: 38e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-01"), status: "COMPLETED", reference: "TXN-2024-027", description: "D\xE9p\xF4t" }
            ]
          },
          {
            id: "23",
            code: "AG-022",
            firstName: "B\xE9atrice",
            lastName: "Ndayishimiye",
            email: "beatrice.ndayishimiye@iblopay.com",
            phone: "+257 79 900 23 45",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-10-05"),
            transactions: [
              { id: "t28", type: "DEPOSIT", amount: 52e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-05"), status: "COMPLETED", reference: "TXN-2024-028", description: "D\xE9p\xF4t" }
            ]
          },
          {
            id: "24",
            code: "AG-023",
            firstName: "Charles",
            lastName: "Nkurunziza",
            email: "charles.nkurunziza@iblopay.com",
            phone: "+257 79 900 34 56",
            status: "PENDING",
            joinDate: /* @__PURE__ */ new Date("2024-10-10"),
            transactions: [
              { id: "t29", type: "DEPOSIT", amount: 3e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-10"), status: "PENDING", reference: "TXN-2024-029", description: "D\xE9p\xF4t en attente" }
            ]
          },
          {
            id: "25",
            code: "AG-024",
            firstName: "Diane",
            lastName: "Niyonkuru",
            email: "diane.niyonkuru@iblopay.com",
            phone: "+257 79 900 45 67",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-10-15"),
            transactions: [
              { id: "t30", type: "DEPOSIT", amount: 65e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-15"), status: "COMPLETED", reference: "TXN-2024-030", description: "D\xE9p\xF4t" },
              { id: "t31", type: "TRANSFER", amount: 25e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-16"), status: "COMPLETED", reference: "TXN-2024-031", description: "Transfert" }
            ]
          },
          {
            id: "26",
            code: "AG-025",
            firstName: "Eric",
            lastName: "Ndayisenga",
            email: "eric.ndayisenga@iblopay.com",
            phone: "+257 79 900 56 78",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-10-20"),
            transactions: [
              { id: "t32", type: "DEPOSIT", amount: 42e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-10-20"), status: "COMPLETED", reference: "TXN-2024-032", description: "D\xE9p\xF4t" }
            ]
          }
        ]
      },
      // ================================================================
      // SUPER AGENT 6 - Esther Niyonzima (5 agents)
      // ================================================================
      {
        id: "6",
        code: "SA-006",
        firstName: "Esther",
        lastName: "Niyonzima",
        email: "esther.niyonzima@iblopay.com",
        phone: "+257 79 900 66 77",
        cin: "6-789012-34567",
        cardNumber: "CARTE-IBP-2024-0006",
        dateOfBirth: /* @__PURE__ */ new Date("1988-11-30"),
        address: {
          province: "Ngozi",
          commune: "Ngozi",
          zone: "Centre",
          colline: "Ngozi",
          quartier: "Ngozi",
          completeAddress: "Centre, Ngozi, Ngozi",
          latitude: "-2.9000",
          longitude: "29.8333"
        },
        nif: "NIF-678901234",
        commerceRegister: "RC-2024-006",
        status: AgentStatus.ACTIVE,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-06-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-06-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-06-01"),
        documents: [],
        electronics: [
          {
            id: "e8",
            type: "PHONE",
            brand: "Samsung",
            model: "Galaxy S23",
            serialNumber: "SN-SAM-2024-008",
            status: "ACTIVE",
            assignedDate: /* @__PURE__ */ new Date("2024-07-01"),
            amountInCirculation: 4e6,
            currency: "BIF"
          }
        ],
        deposits: [
          { id: "d26", agentId: "27", agentName: "F\xE9licien Niyonzima", amount: 35e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-01"), status: "COMPLETED", reference: "DEP-2024-026" },
          { id: "d27", agentId: "28", agentName: "Gis\xE8le Ndayishimiye", amount: 48e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-05"), status: "COMPLETED", reference: "DEP-2024-027" },
          { id: "d28", agentId: "29", agentName: "Herv\xE9 Nkurunziza", amount: 32e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-10"), status: "PENDING", reference: "DEP-2024-028" },
          { id: "d29", agentId: "30", agentName: "In\xE8s Niyonkuru", amount: 55e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-15"), status: "COMPLETED", reference: "DEP-2024-029" },
          { id: "d30", agentId: "31", agentName: "Jacques Ndayisenga", amount: 4e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-20"), status: "COMPLETED", reference: "DEP-2024-030" }
        ],
        agents: [
          {
            id: "27",
            code: "AG-026",
            firstName: "F\xE9licien",
            lastName: "Niyonzima",
            email: "felicien.niyonzima@iblopay.com",
            phone: "+257 79 900 67 89",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-11-01"),
            transactions: [
              { id: "t33", type: "DEPOSIT", amount: 35e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-01"), status: "COMPLETED", reference: "TXN-2024-033", description: "D\xE9p\xF4t" }
            ]
          },
          {
            id: "28",
            code: "AG-027",
            firstName: "Gis\xE8le",
            lastName: "Ndayishimiye",
            email: "gisele.ndayishimiye@iblopay.com",
            phone: "+257 79 900 78 90",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-11-05"),
            transactions: [
              { id: "t34", type: "DEPOSIT", amount: 48e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-05"), status: "COMPLETED", reference: "TXN-2024-034", description: "D\xE9p\xF4t" }
            ]
          },
          {
            id: "29",
            code: "AG-028",
            firstName: "Herv\xE9",
            lastName: "Nkurunziza",
            email: "herve.nkurunziza@iblopay.com",
            phone: "+257 79 900 89 01",
            status: "PENDING",
            joinDate: /* @__PURE__ */ new Date("2024-11-10"),
            transactions: [
              { id: "t35", type: "DEPOSIT", amount: 32e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-10"), status: "PENDING", reference: "TXN-2024-035", description: "D\xE9p\xF4t en attente" }
            ]
          },
          {
            id: "30",
            code: "AG-029",
            firstName: "In\xE8s",
            lastName: "Niyonkuru",
            email: "ines.niyonkuru@iblopay.com",
            phone: "+257 79 900 90 12",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-11-15"),
            transactions: [
              { id: "t36", type: "DEPOSIT", amount: 55e4, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-15"), status: "COMPLETED", reference: "TXN-2024-036", description: "D\xE9p\xF4t" },
              { id: "t37", type: "TRANSFER", amount: 2e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-16"), status: "COMPLETED", reference: "TXN-2024-037", description: "Transfert" }
            ]
          },
          {
            id: "31",
            code: "AG-030",
            firstName: "Jacques",
            lastName: "Ndayisenga",
            email: "jacques.ndayisenga@iblopay.com",
            phone: "+257 79 900 01 23",
            status: "ACTIVE",
            joinDate: /* @__PURE__ */ new Date("2024-11-20"),
            transactions: [
              { id: "t38", type: "DEPOSIT", amount: 4e5, currency: "BIF", date: /* @__PURE__ */ new Date("2024-11-20"), status: "COMPLETED", reference: "TXN-2024-038", description: "D\xE9p\xF4t" }
            ]
          }
        ]
      },
      // ================================================================
      // SUPER AGENT 7 à 10 (sans agents pour l'instant)
      // ================================================================
      {
        id: "7",
        code: "SA-007",
        firstName: "Fabrice",
        lastName: "Nkurunziza",
        email: "fabrice.nkurunziza@iblopay.com",
        phone: "+257 79 900 77 88",
        cin: "7-890123-45678",
        cardNumber: "CARTE-IBP-2024-0007",
        dateOfBirth: /* @__PURE__ */ new Date("1975-04-20"),
        address: {
          province: "Bururi",
          commune: "Bururi",
          zone: "Centre",
          colline: "Bururi",
          quartier: "Bururi",
          completeAddress: "Centre, Bururi, Bururi",
          latitude: "-3.9500",
          longitude: "29.6167"
        },
        nif: "NIF-789012345",
        commerceRegister: "RC-2024-007",
        status: AgentStatus.SUSPENDED,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-07-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-07-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-07-01"),
        documents: [],
        electronics: [],
        deposits: [],
        agents: []
      },
      {
        id: "8",
        code: "SA-008",
        firstName: "Grace",
        lastName: "Ndayishimiye",
        email: "grace.ndayishimiye@iblopay.com",
        phone: "+257 79 900 88 99",
        cin: "8-901234-56789",
        cardNumber: "CARTE-IBP-2024-0008",
        dateOfBirth: /* @__PURE__ */ new Date("1992-09-10"),
        address: {
          province: "Cankuzo",
          commune: "Cankuzo",
          zone: "Centre",
          colline: "Cankuzo",
          quartier: "Cankuzo",
          completeAddress: "Centre, Cankuzo, Cankuzo",
          latitude: "-3.2167",
          longitude: "30.5500"
        },
        nif: "NIF-890123456",
        commerceRegister: "RC-2024-008",
        status: AgentStatus.PENDING,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-08-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-08-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-08-01"),
        documents: [],
        electronics: [],
        deposits: [],
        agents: []
      },
      {
        id: "9",
        code: "SA-009",
        firstName: "Henry",
        lastName: "Muhirwa",
        email: "henry.muhirwa@iblopay.com",
        phone: "+257 79 900 99 00",
        cin: "9-012345-67890",
        cardNumber: "CARTE-IBP-2024-0009",
        dateOfBirth: /* @__PURE__ */ new Date("1983-06-05"),
        address: {
          province: "Ruyigi",
          commune: "Ruyigi",
          zone: "Centre",
          colline: "Ruyigi",
          quartier: "Ruyigi",
          completeAddress: "Centre, Ruyigi, Ruyigi",
          latitude: "-3.4667",
          longitude: "30.2500"
        },
        nif: "NIF-901234567",
        commerceRegister: "RC-2024-009",
        status: AgentStatus.BLOCKED,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-09-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-09-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-09-01"),
        documents: [],
        electronics: [
          {
            id: "e9",
            type: "TABLET",
            brand: "Samsung",
            model: "Galaxy Tab S9",
            serialNumber: "SN-SAM-2024-009",
            status: "INACTIVE",
            assignedDate: /* @__PURE__ */ new Date("2024-10-01"),
            amountInCirculation: 25e5,
            currency: "BIF"
          }
        ],
        deposits: [],
        agents: []
      },
      {
        id: "10",
        code: "SA-010",
        firstName: "Isabelle",
        lastName: "Niyonkuru",
        email: "isabelle.niyonkuru@iblopay.com",
        phone: "+257 79 900 00 11",
        cin: "0-123456-78901",
        cardNumber: "CARTE-IBP-2024-0010",
        dateOfBirth: /* @__PURE__ */ new Date("1987-01-25"),
        address: {
          province: "Kayanza",
          commune: "Kayanza",
          zone: "Centre",
          colline: "Kayanza",
          quartier: "Kayanza",
          completeAddress: "Centre, Kayanza, Kayanza",
          latitude: "-2.9167",
          longitude: "29.6167"
        },
        nif: "NIF-012345678",
        commerceRegister: "RC-2024-010",
        status: AgentStatus.ACTIVE,
        type: AgentType.SUPER_AGENT,
        joinDate: /* @__PURE__ */ new Date("2024-10-01"),
        createdBy: "admin@iblopay.com",
        createdAt: /* @__PURE__ */ new Date("2024-10-01"),
        updatedAt: /* @__PURE__ */ new Date("2024-10-01"),
        documents: [],
        electronics: [
          {
            id: "e10",
            type: "POS_TERMINAL",
            brand: "Verifone",
            model: "VX 520",
            serialNumber: "SN-VER-2024-010",
            status: "ACTIVE",
            assignedDate: /* @__PURE__ */ new Date("2024-11-01"),
            amountInCirculation: 7e6,
            currency: "BIF"
          }
        ],
        deposits: [],
        agents: []
      }
    ];
  }
  // ============================================
  // MÉTHODES PUBLIQUES
  // ============================================
  getAgents() {
    return of([...this.mockAgents]);
  }
  getAgentById(id) {
    const agent = this.mockAgents.find((a) => a.id === id);
    if (agent) {
      return of(__spreadValues({}, agent));
    }
    return throwError(() => new Error("Agent non trouv\xE9"));
  }
  createAgent(agentData) {
    const newAgent = {
      id: Date.now().toString(),
      code: `SA-${String(this.mockAgents.length + 1).padStart(3, "0")}`,
      firstName: agentData.firstName,
      lastName: agentData.lastName,
      email: agentData.email || `${agentData.firstName.toLowerCase()}.${agentData.lastName.toLowerCase()}@iblopay.com`,
      phone: agentData.phone,
      cin: agentData.cin,
      cardNumber: agentData.cardNumber || `CARTE-IBP-2024-${String(this.mockAgents.length + 1).padStart(4, "0")}`,
      dateOfBirth: agentData.dateOfBirth,
      address: {
        province: agentData.province,
        commune: agentData.commune,
        zone: agentData.zone,
        colline: agentData.colline,
        quartier: agentData.quartier,
        completeAddress: `${agentData.zone || agentData.quartier || agentData.colline}, ${agentData.commune}, ${agentData.province}`
      },
      nif: agentData.nif,
      commerceRegister: agentData.commerceRegister,
      status: AgentStatus.PENDING,
      type: AgentType.SUPER_AGENT,
      joinDate: /* @__PURE__ */ new Date(),
      createdBy: "admin@iblopay.com",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      documents: [],
      electronics: [],
      deposits: [],
      agents: [],
      password: agentData.password
    };
    this.mockAgents.push(newAgent);
    return of(newAgent);
  }
  updateAgent(id, agentData) {
    const index = this.mockAgents.findIndex((a) => a.id === id);
    if (index === -1) {
      return throwError(() => new Error("Agent non trouv\xE9"));
    }
    const currentAgent = this.mockAgents[index];
    if (!currentAgent) {
      return throwError(() => new Error("Agent non trouv\xE9"));
    }
    const updatedAgent = __spreadProps(__spreadValues(__spreadValues({}, currentAgent), agentData), {
      updatedAt: /* @__PURE__ */ new Date()
    });
    this.mockAgents[index] = updatedAgent;
    return of(updatedAgent);
  }
  deleteAgent(id) {
    const index = this.mockAgents.findIndex((a) => a.id === id);
    if (index === -1) {
      return throwError(() => new Error("Agent non trouv\xE9"));
    }
    this.mockAgents.splice(index, 1);
    return of(void 0);
  }
  getAgentStats() {
    const total = this.mockAgents.length;
    const active = this.mockAgents.filter((a) => a.status === AgentStatus.ACTIVE).length;
    const pending = this.mockAgents.filter((a) => a.status === AgentStatus.PENDING).length;
    const blocked = this.mockAgents.filter((a) => a.status === AgentStatus.BLOCKED).length;
    const suspended = this.mockAgents.filter((a) => a.status === AgentStatus.SUSPENDED).length;
    const inactive = this.mockAgents.filter((a) => a.status === AgentStatus.INACTIVE).length;
    const totalElectronics = this.mockAgents.reduce((acc, a) => acc + (a.electronics?.length || 0), 0);
    const totalAgents = this.mockAgents.reduce((acc, a) => acc + (a.agents?.length || 0), 0);
    const totalDeposits = this.mockAgents.reduce((acc, a) => acc + (a.deposits?.length || 0), 0);
    let totalDepositAmount = 0;
    let totalTransactionAmount = 0;
    this.mockAgents.forEach((agent) => {
      agent.deposits?.forEach((d) => {
        if (d.status === "COMPLETED") {
          totalDepositAmount += d.amount;
        }
      });
      agent.agents?.forEach((subAgent) => {
        subAgent.transactions?.forEach((t) => {
          if (t.status === "COMPLETED") {
            totalTransactionAmount += t.amount;
          }
        });
      });
    });
    return of({
      total,
      active,
      pending,
      blocked,
      suspended,
      inactive,
      totalElectronics,
      totalAgents,
      totalDeposits,
      totalDepositAmount,
      totalTransactionAmount
    });
  }
  getSubAgents(agentId) {
    const agent = this.mockAgents.find((a) => a.id === agentId);
    return of(agent?.agents || []);
  }
  getElectronics(agentId) {
    const agent = this.mockAgents.find((a) => a.id === agentId);
    return of(agent?.electronics || []);
  }
  getDeposits(agentId) {
    const agent = this.mockAgents.find((a) => a.id === agentId);
    return of(agent?.deposits || []);
  }
  searchAgents(query) {
    if (!query || query.trim() === "") {
      return of([...this.mockAgents]);
    }
    const searchTerm = query.toLowerCase().trim();
    const filtered = this.mockAgents.filter((a) => a.firstName.toLowerCase().includes(searchTerm) || a.lastName.toLowerCase().includes(searchTerm) || a.phone.includes(searchTerm) || a.cardNumber.toLowerCase().includes(searchTerm) || a.code.toLowerCase().includes(searchTerm) || a.address.completeAddress.toLowerCase().includes(searchTerm));
    return of(filtered);
  }
  static {
    this.\u0275fac = function AgentService_Factory(t) {
      return new (t || _AgentService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AgentService, factory: _AgentService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/agents/pages/agent-list/agent-list.component.ts
var _c0 = () => [];
function AgentListComponent_div_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 91)(4, "div", 92);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 93);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 94);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 95);
    \u0275\u0275listener("click", function AgentListComponent_div_20_div_7_Template_button_click_10_listener() {
      const notif_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeNotification(notif_r4.id));
    });
    \u0275\u0275text(11, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r4 = ctx.$implicit;
    \u0275\u0275classProp("unread", !notif_r4.read);
    \u0275\u0275advance();
    \u0275\u0275classMap(notif_r4.type);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-check-circle", notif_r4.type === "success")("fa-exclamation-circle", notif_r4.type === "warning")("fa-times-circle", notif_r4.type === "error")("fa-info-circle", notif_r4.type === "info");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r4.time);
  }
}
function AgentListComponent_div_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "span");
    \u0275\u0275text(2, "Aucune notification");
    \u0275\u0275elementEnd()();
  }
}
function AgentListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 85);
    \u0275\u0275listener("click", function AgentListComponent_div_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markAllRead());
    });
    \u0275\u0275text(5, "Tout marquer comme lu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86);
    \u0275\u0275template(7, AgentListComponent_div_20_div_7_Template, 12, 15, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AgentListComponent_div_20_div_8_Template, 3, 0, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.notifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifications.length === 0);
  }
}
function AgentListComponent_option_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r5 = ctx.$implicit;
    \u0275\u0275property("value", status_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r5.label);
  }
}
function AgentListComponent_tr_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 98);
    \u0275\u0275element(2, "div", 99);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function AgentListComponent_tr_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 100);
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun super agent trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function AgentListComponent_tr_146_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 101)(3, "div", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 103)(6, "div", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 105);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 106);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 107)(15, "span", 108);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 109);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td")(20, "div", 110);
    \u0275\u0275element(21, "i", 111);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td", 112)(25, "span", 113);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementStart(28, "span", 114);
    \u0275\u0275text(29, "Fbu");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "td", 112)(31, "span", 14);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td")(34, "span", 115);
    \u0275\u0275element(35, "span", 116);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td")(38, "div", 117)(39, "button", 118);
    \u0275\u0275listener("click", function AgentListComponent_tr_146_Template_button_click_39_listener() {
      const agent_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewAgent(agent_r7));
    });
    \u0275\u0275element(40, "i", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 120);
    \u0275\u0275listener("click", function AgentListComponent_tr_146_Template_button_click_41_listener() {
      const agent_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBlockOtpModal(agent_r7));
    });
    \u0275\u0275element(42, "i", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const agent_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "hsl(" + (i_r8 * 45 + 200) + ", 70%, 50%)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(agent_r7.firstName, agent_r7.lastName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", agent_r7.firstName, " ", agent_r7.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(agent_r7.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(agent_r7.cardNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(agent_r7.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(agent_r7.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(agent_r7.address.completeAddress);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 22, ctx_r1.getTotalElectronicsAmount(agent_r7), "1.0-0"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((agent_r7.agents == null ? null : agent_r7.agents.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(agent_r7.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(agent_r7.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("unblock", agent_r7.status === "BLOCKED");
    \u0275\u0275propertyInterpolate("title", agent_r7.status === "BLOCKED" ? "D\xE9bloquer" : "Bloquer");
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-lock", agent_r7.status !== "BLOCKED")("fa-unlock", agent_r7.status === "BLOCKED");
  }
}
function AgentListComponent_button_161_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function AgentListComponent_button_161_Template_button_click_0_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(i_r10 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.currentPage === i_r10 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r10 + 1, " ");
  }
}
function AgentListComponent_div_164_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 138);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ", veuillez entrer le code de v\xE9rification envoy\xE9 \xE0 votre num\xE9ro de t\xE9l\xE9phone. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pour ", ctx_r1.blockAction, " l'agent ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.agentToBlock.firstName, " ", ctx_r1.agentToBlock.lastName, "");
  }
}
function AgentListComponent_div_164_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275element(1, "i", 140);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.otpError, " ");
  }
}
function AgentListComponent_div_164_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Confirmer ", ctx_r1.blockAction === "bloquer" ? "le blocage" : "le d\xE9blocage", "");
  }
}
function AgentListComponent_div_164_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275element(1, "span", 142);
    \u0275\u0275text(2, " V\xE9rification... ");
    \u0275\u0275elementEnd();
  }
}
function AgentListComponent_div_164_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Renvoyer le code dans ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.otpCooldown, "s");
  }
}
function AgentListComponent_div_164_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 143);
    \u0275\u0275listener("click", function AgentListComponent_div_164_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resendOtp());
    });
    \u0275\u0275element(1, "i", 144);
    \u0275\u0275text(2, " Renvoyer le code ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.otpLoading);
  }
}
function AgentListComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function AgentListComponent_div_164_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOtpModal());
    });
    \u0275\u0275elementStart(1, "div", 123);
    \u0275\u0275listener("click", function AgentListComponent_div_164_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 124);
    \u0275\u0275listener("click", function AgentListComponent_div_164_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOtpModal());
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 125);
    \u0275\u0275element(5, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AgentListComponent_div_164_p_8_Template, 5, 3, "p", 127)(9, AgentListComponent_div_164_div_9_Template, 3, 1, "div", 128);
    \u0275\u0275elementStart(10, "div", 129)(11, "label", 130);
    \u0275\u0275text(12, "Code de v\xE9rification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 131);
    \u0275\u0275listener("input", function AgentListComponent_div_164_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.otpCode = $event.target.value);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small");
    \u0275\u0275text(15, "Code de simulation : 123456");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 132)(17, "button", 133);
    \u0275\u0275listener("click", function AgentListComponent_div_164_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOtpModal());
    });
    \u0275\u0275text(18, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 134);
    \u0275\u0275listener("click", function AgentListComponent_div_164_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.verifyOtpAndBlock());
    });
    \u0275\u0275template(20, AgentListComponent_div_164_span_20_Template, 2, 1, "span", 73)(21, AgentListComponent_div_164_span_21_Template, 3, 0, "span", 135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 136);
    \u0275\u0275template(23, AgentListComponent_div_164_span_23_Template, 4, 1, "span", 73)(24, AgentListComponent_div_164_button_24_Template, 3, 1, "button", 137);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Confirmation ", ctx_r1.blockAction === "bloquer" ? "de blocage" : "de d\xE9blocage", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.agentToBlock);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.otpError);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.otpCode);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.otpLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.otpLoading || !ctx_r1.otpCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.otpLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.otpLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.otpCanResend);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.otpCanResend);
  }
}
var AgentListComponent = class _AgentListComponent {
  constructor(agentService, router) {
    this.agentService = agentService;
    this.router = router;
    this.agents = [];
    this.filteredAgents = [];
    this.isLoading = false;
    this.searchTerm = "";
    this.selectedStatus = "";
    this.isDarkMode = false;
    this.showNotifications = false;
    this.showOtpModal = false;
    this.otpCode = "";
    this.otpError = "";
    this.otpLoading = false;
    this.otpCooldown = 0;
    this.otpCanResend = false;
    this.agentToBlock = null;
    this.blockAction = "bloquer";
    this.notifications = [
      {
        id: 1,
        title: "Nouveau Super Agent",
        message: "Jean Mukiza a \xE9t\xE9 ajout\xE9 comme Super Agent",
        type: "success",
        time: "Il y a 5 minutes",
        read: false
      },
      {
        id: 2,
        title: "Transaction importante",
        message: "Une transaction de 5 000 000 Fbu a \xE9t\xE9 effectu\xE9e",
        type: "info",
        time: "Il y a 15 minutes",
        read: false
      },
      {
        id: 3,
        title: "Agent bloqu\xE9",
        message: "Henry Muhirwa a \xE9t\xE9 bloqu\xE9 suite \xE0 une fraude",
        type: "error",
        time: "Il y a 1 heure",
        read: false
      },
      {
        id: 4,
        title: "Mise \xE0 jour syst\xE8me",
        message: "Le syst\xE8me sera mis \xE0 jour le 15/07/2024 \xE0 02:00",
        type: "warning",
        time: "Il y a 2 heures",
        read: false
      }
    ];
    this.stats = {
      total: 0,
      active: 0,
      pending: 0,
      blocked: 0,
      totalElectronics: 0,
      totalElectronicsAmount: 0,
      totalAgents: 0,
      totalDeposits: 0,
      totalDepositAmount: 0,
      totalTransactionAmount: 0
    };
    this.statuses = [
      { value: "", label: "Tous les statuts" },
      { value: "ACTIVE", label: "Actif" },
      { value: "PENDING", label: "En attente" },
      { value: "SUSPENDED", label: "Suspendu" },
      { value: "BLOCKED", label: "Bloqu\xE9" },
      { value: "INACTIVE", label: "Inactif" }
    ];
    this.currentPage = 1;
    this.itemsPerPage = 10;
  }
  ngOnInit() {
    this.loadAgents();
    this.loadTheme();
  }
  ngOnDestroy() {
    this.clearOtpTimer();
  }
  loadTheme() {
    const saved = localStorage.getItem("iblopay-theme");
    if (saved === "dark") {
      this.isDarkMode = true;
      document.body.classList.add("dark-mode");
    }
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("iblopay-theme", this.isDarkMode ? "dark" : "light");
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  markAllRead() {
    this.notifications.forEach((n) => n.read = true);
  }
  removeNotification(id) {
    this.notifications = this.notifications.filter((n) => n.id !== id);
  }
  loadAgents() {
    this.isLoading = true;
    this.agentService.getAgents().subscribe({
      next: (data) => {
        this.agents = data;
        this.filteredAgents = data;
        this.isLoading = false;
        this.loadStats();
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  // Dans agent-list.component.ts, mettre à jour loadStats()
  loadStats() {
    this.agentService.getAgentStats().subscribe({
      next: (stats) => {
        let totalElectronicsAmount = 0;
        this.agents.forEach((agent) => {
          agent.electronics?.forEach((e) => {
            totalElectronicsAmount += e.amountInCirculation || 0;
          });
        });
        this.stats = __spreadProps(__spreadValues({}, stats), {
          totalElectronicsAmount
        });
      }
    });
  }
  applyFilters() {
    this.filteredAgents = this.agents.filter((agent) => {
      const searchLower = this.searchTerm.toLowerCase().trim();
      const matchesSearch = this.searchTerm === "" || agent.firstName.toLowerCase().includes(searchLower) || agent.lastName.toLowerCase().includes(searchLower) || agent.phone.includes(searchLower) || agent.cardNumber.toLowerCase().includes(searchLower) || agent.code.toLowerCase().includes(searchLower) || agent.address.completeAddress.toLowerCase().includes(searchLower);
      const matchesStatus = this.selectedStatus === "" || agent.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
    this.currentPage = 1;
  }
  onSearch(event) {
    this.searchTerm = event.target.value;
    this.applyFilters();
  }
  onStatusChange(event) {
    this.selectedStatus = event.target.value;
    this.applyFilters();
  }
  resetFilters() {
    this.searchTerm = "";
    this.selectedStatus = "";
    this.applyFilters();
  }
  viewAgent(agent) {
    this.router.navigate(["/agents", agent.id]);
  }
  createAgent() {
    this.router.navigate(["/agents/create"]);
  }
  // ─── OTP Modal pour blocage/déblocage ───────
  openBlockOtpModal(agent) {
    this.agentToBlock = agent;
    this.blockAction = agent.status === "BLOCKED" ? "d\xE9bloquer" : "bloquer";
    this.otpCode = "";
    this.otpError = "";
    this.showOtpModal = true;
    this.sendOtpSimulation();
  }
  closeOtpModal() {
    this.showOtpModal = false;
    this.agentToBlock = null;
    this.otpCode = "";
    this.otpError = "";
    this.otpLoading = false;
    this.clearOtpTimer();
  }
  sendOtpSimulation() {
    this.otpCooldown = 30;
    this.otpCanResend = false;
    this.startOtpTimer();
    console.log("[SIMULATION] Code OTP envoy\xE9 : 123456");
  }
  startOtpTimer() {
    this.clearOtpTimer();
    this.otpTimerInterval = setInterval(() => {
      if (this.otpCooldown > 0) {
        this.otpCooldown--;
      } else {
        this.otpCanResend = true;
        this.clearOtpTimer();
      }
    }, 1e3);
  }
  clearOtpTimer() {
    if (this.otpTimerInterval) {
      clearInterval(this.otpTimerInterval);
      this.otpTimerInterval = null;
    }
  }
  resendOtp() {
    if (!this.otpCanResend)
      return;
    this.otpError = "";
    this.sendOtpSimulation();
  }
  verifyOtpAndBlock() {
    if (!this.otpCode || this.otpCode.length < 4) {
      this.otpError = "Veuillez entrer le code OTP re\xE7u";
      return;
    }
    this.otpLoading = true;
    this.otpError = "";
    setTimeout(() => {
      if (this.otpCode === "123456") {
        this.executeBlock();
      } else {
        this.otpLoading = false;
        this.otpError = "Code OTP invalide. Veuillez r\xE9essayer.";
      }
    }, 1e3);
  }
  executeBlock() {
    if (!this.agentToBlock) {
      this.otpLoading = false;
      return;
    }
    const agent = this.agentToBlock;
    const newStatus = agent.status === "BLOCKED" ? "ACTIVE" : "BLOCKED";
    this.agentService.updateAgent(agent.id, { status: newStatus }).subscribe({
      next: () => {
        this.otpLoading = false;
        this.closeOtpModal();
        this.loadAgents();
        this.notifications.unshift({
          id: Date.now(),
          title: `Agent ${this.blockAction === "bloquer" ? "bloqu\xE9" : "d\xE9bloqu\xE9"}`,
          message: `${agent.firstName} ${agent.lastName} a \xE9t\xE9 ${this.blockAction === "bloquer" ? "bloqu\xE9" : "d\xE9bloqu\xE9"} avec succ\xE8s`,
          type: this.blockAction === "bloquer" ? "error" : "success",
          time: "\xC0 l'instant",
          read: false
        });
      },
      error: () => {
        this.otpLoading = false;
        this.otpError = "Erreur lors du blocage/d\xE9blocage";
      }
    });
  }
  getTotalElectronicsAmount(agent) {
    if (!agent.electronics || agent.electronics.length === 0) {
      return 0;
    }
    return agent.electronics.reduce((total, e) => total + (e.amountInCirculation || 0), 0);
  }
  getStatusLabel(status) {
    const labels = {
      "ACTIVE": "Actif",
      "PENDING": "En attente",
      "SUSPENDED": "Suspendu",
      "BLOCKED": "Bloqu\xE9",
      "INACTIVE": "Inactif"
    };
    return labels[status] || status;
  }
  getStatusClass(status) {
    const classes = {
      "ACTIVE": "active",
      "PENDING": "pending",
      "SUSPENDED": "suspended",
      "BLOCKED": "blocked",
      "INACTIVE": "inactive"
    };
    return classes[status] || "";
  }
  getInitials(firstName, lastName) {
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
  }
  get paginatedAgents() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredAgents.slice(start, end);
  }
  get totalPages() {
    return Math.ceil(this.filteredAgents.length / this.itemsPerPage);
  }
  changePage(direction) {
    if (direction === "prev" && this.currentPage > 1) {
      this.currentPage--;
    } else if (direction === "next" && this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  getStartIndex() {
    return this.filteredAgents.length > 0 ? (this.currentPage - 1) * this.itemsPerPage + 1 : 0;
  }
  getEndIndex() {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredAgents.length);
  }
  static {
    this.\u0275fac = function AgentListComponent_Factory(t) {
      return new (t || _AgentListComponent)(\u0275\u0275directiveInject(AgentService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentListComponent, selectors: [["app-agent-list"]], decls: 165, vars: 30, consts: [[1, "dashboard-container"], [1, "dashboard-header"], [1, "header-left"], [1, "logo"], [1, "logo-icon"], [1, "logo-text"], [1, "header-right"], ["title", "Changer de th\xE8me", 1, "theme-toggle", 3, "click"], [1, "fas"], [1, "search-box"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Rechercher par nom, carte...", 3, "input", "value"], [1, "notifications", 3, "click"], [1, "fas", "fa-bell"], [1, "badge"], ["class", "notifications-dropdown", 4, "ngIf"], [1, "user-profile"], [1, "avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "fas", "fa-chevron-down"], [1, "main-content"], [1, "page-title-section"], [1, "fas", "fa-user-tie"], [1, "subtitle"], [1, "btn-primary", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "stats-grid"], [1, "stat-card", "blue"], [1, "stat-icon"], [1, "fas", "fa-users"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-change", "positive"], [1, "fas", "fa-arrow-up"], [1, "stat-card", "green"], [1, "fas", "fa-check-circle"], [1, "stat-card", "orange"], [1, "fas", "fa-clock"], [1, "stat-card", "red"], [1, "fas", "fa-ban"], [1, "stat-change", "negative"], [1, "fas", "fa-arrow-down"], [1, "stat-card", "purple"], [1, "fas", "fa-coins"], [1, "filters-section"], [1, "filters-left"], [1, "filter-group"], [1, "fas", "fa-filter"], [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-calendar-alt"], ["type", "date", "placeholder", "Date de d\xE9but"], ["type", "date", "placeholder", "Date de fin"], [1, "btn-secondary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "table-wrapper"], [1, "table-header"], [1, "table-title"], [1, "table-count"], [1, "btn-export"], [1, "fas", "fa-file-export"], [1, "table-scroll"], [1, "modern-table"], [2, "min-width", "180px"], [2, "min-width", "130px"], [2, "min-width", "150px"], [2, "min-width", "110px", "text-align", "center"], [2, "min-width", "70px", "text-align", "center"], [2, "min-width", "100px"], [2, "min-width", "90px", "text-align", "center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "pagination-info"], [1, "pagination-controls"], [3, "click", "disabled"], [1, "fas", "fa-chevron-left"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"], ["class", "otp-modal-overlay", 3, "click", 4, "ngIf"], [1, "notifications-dropdown"], [1, "dropdown-header"], [1, "mark-all-read", 3, "click"], [1, "dropdown-body"], ["class", "notification-item", 3, "unread", 4, "ngFor", "ngForOf"], ["class", "dropdown-footer", 4, "ngIf"], [1, "notification-item"], [1, "notif-icon"], [1, "notif-content"], [1, "notif-title"], [1, "notif-message"], [1, "notif-time"], [1, "notif-close", 3, "click"], [1, "dropdown-footer"], [3, "value"], ["colspan", "8", 1, "loading-cell"], [1, "spinner"], ["colspan", "8", 1, "empty-cell"], [1, "agent-cell"], [1, "agent-avatar"], [1, "agent-info"], [1, "agent-name"], [1, "agent-code"], [1, "card-number"], [1, "contact-info"], [1, "phone"], [1, "email"], [1, "address-cell"], [1, "fas", "fa-map-marker-alt"], [2, "text-align", "center"], [1, "electronics-amount"], [1, "electronics-label"], [1, "status-badge"], [1, "status-dot"], [1, "action-buttons"], ["title", "Voir", 1, "action-btn", "view", 3, "click"], [1, "fas", "fa-eye"], [1, "action-btn", "block", 3, "click", "title"], [3, "click"], [1, "otp-modal-overlay", 3, "click"], [1, "otp-modal", 3, "click"], [1, "otp-modal-close", 3, "click"], [1, "otp-modal-icon"], [1, "fas", "fa-shield-alt"], ["class", "otp-modal-desc", 4, "ngIf"], ["class", "otp-error", 4, "ngIf"], [1, "otp-input-group"], ["for", "otpCode"], ["id", "otpCode", "type", "text", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "6", "placeholder", "123456", "autocomplete", "one-time-code", 1, "otp-input", 3, "input", "value"], [1, "otp-actions"], [1, "otp-btn-cancel", 3, "click", "disabled"], [1, "otp-btn-confirm", 3, "click", "disabled"], ["class", "otp-btn-loader", 4, "ngIf"], [1, "otp-resend"], ["class", "otp-resend-btn", 3, "disabled", "click", 4, "ngIf"], [1, "otp-modal-desc"], [1, "otp-error"], [1, "fas", "fa-exclamation-circle"], [1, "otp-btn-loader"], [1, "otp-spinner"], [1, "otp-resend-btn", 3, "click", "disabled"], [1, "fas", "fa-redo"]], template: function AgentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5, "IB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275text(7, "IbloPay");
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "Admin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function AgentListComponent_Template_button_click_11_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275element(12, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275element(14, "i", 10);
        \u0275\u0275elementStart(15, "input", 11);
        \u0275\u0275listener("input", function AgentListComponent_Template_input_input_15_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 12);
        \u0275\u0275listener("click", function AgentListComponent_Template_div_click_16_listener() {
          return ctx.toggleNotifications();
        });
        \u0275\u0275element(17, "i", 13);
        \u0275\u0275elementStart(18, "span", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, AgentListComponent_div_20_Template, 9, 2, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 16)(22, "div", 17);
        \u0275\u0275text(23, "AI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 18)(25, "span", 19);
        \u0275\u0275text(26, "Admin IbloPay");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 20);
        \u0275\u0275text(28, "Administrateur");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "i", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "main", 22)(31, "div", 23)(32, "div")(33, "h1");
        \u0275\u0275element(34, "i", 24);
        \u0275\u0275text(35, " Super Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p", 25);
        \u0275\u0275text(37, "G\xE9rez tous les super agents de la plateforme IbloPay");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "button", 26);
        \u0275\u0275listener("click", function AgentListComponent_Template_button_click_38_listener() {
          return ctx.createAgent();
        });
        \u0275\u0275element(39, "i", 27);
        \u0275\u0275text(40, " Nouveau Super Agent ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 28)(42, "div", 29)(43, "div", 30);
        \u0275\u0275element(44, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 32)(46, "span", 33);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "span", 34);
        \u0275\u0275text(49, "Total Super Agents");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "span", 35);
        \u0275\u0275element(51, "i", 36);
        \u0275\u0275text(52, " 12.5%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 37)(54, "div", 30);
        \u0275\u0275element(55, "i", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 32)(57, "span", 33);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "span", 34);
        \u0275\u0275text(60, "Actifs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "span", 35);
        \u0275\u0275element(62, "i", 36);
        \u0275\u0275text(63, " 8.3%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 39)(65, "div", 30);
        \u0275\u0275element(66, "i", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 32)(68, "span", 33);
        \u0275\u0275text(69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "span", 34);
        \u0275\u0275text(71, "En attente");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "span", 35);
        \u0275\u0275element(73, "i", 36);
        \u0275\u0275text(74, " 2.1%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 41)(76, "div", 30);
        \u0275\u0275element(77, "i", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 32)(79, "span", 33);
        \u0275\u0275text(80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "span", 34);
        \u0275\u0275text(82, "Bloqu\xE9s");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "span", 43);
        \u0275\u0275element(84, "i", 44);
        \u0275\u0275text(85, " 0.5%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 45)(87, "div", 30);
        \u0275\u0275element(88, "i", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 32)(90, "span", 33);
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "span", 34);
        \u0275\u0275text(94, "\xC9lectroniques en circulation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "span", 35);
        \u0275\u0275element(96, "i", 36);
        \u0275\u0275text(97, " 5.2%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 47)(99, "div", 48)(100, "div", 49);
        \u0275\u0275element(101, "i", 50);
        \u0275\u0275elementStart(102, "select", 51);
        \u0275\u0275listener("change", function AgentListComponent_Template_select_change_102_listener($event) {
          return ctx.onStatusChange($event);
        });
        \u0275\u0275template(103, AgentListComponent_option_103_Template, 2, 2, "option", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "div", 49);
        \u0275\u0275element(105, "i", 53)(106, "input", 54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 49);
        \u0275\u0275element(108, "i", 53)(109, "input", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "button", 56);
        \u0275\u0275listener("click", function AgentListComponent_Template_button_click_110_listener() {
          return ctx.resetFilters();
        });
        \u0275\u0275element(111, "i", 57);
        \u0275\u0275text(112, " R\xE9initialiser ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(113, "div", 58)(114, "div", 59)(115, "div", 60)(116, "span");
        \u0275\u0275text(117, "Liste des Super Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "span", 61);
        \u0275\u0275text(119);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "button", 62);
        \u0275\u0275element(121, "i", 63);
        \u0275\u0275text(122, " Exporter ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 64)(124, "table", 65)(125, "thead")(126, "tr")(127, "th", 66);
        \u0275\u0275text(128, "Super Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "th", 67);
        \u0275\u0275text(130, "Carte");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "th", 68);
        \u0275\u0275text(132, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "th", 68);
        \u0275\u0275text(134, "Adresse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "th", 69);
        \u0275\u0275text(136, "\xC9lectroniques");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "th", 70);
        \u0275\u0275text(138, "Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "th", 71);
        \u0275\u0275text(140, "Statut");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "th", 72);
        \u0275\u0275text(142, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "tbody");
        \u0275\u0275template(144, AgentListComponent_tr_144_Template, 5, 0, "tr", 73)(145, AgentListComponent_tr_145_Template, 5, 0, "tr", 73)(146, AgentListComponent_tr_146_Template, 43, 25, "tr", 74);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "div", 75)(148, "div", 76);
        \u0275\u0275text(149, " Affichage de ");
        \u0275\u0275elementStart(150, "strong");
        \u0275\u0275text(151);
        \u0275\u0275elementEnd();
        \u0275\u0275text(152, " \xE0 ");
        \u0275\u0275elementStart(153, "strong");
        \u0275\u0275text(154);
        \u0275\u0275elementEnd();
        \u0275\u0275text(155, " sur ");
        \u0275\u0275elementStart(156, "strong");
        \u0275\u0275text(157);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 77)(159, "button", 78);
        \u0275\u0275listener("click", function AgentListComponent_Template_button_click_159_listener() {
          return ctx.changePage("prev");
        });
        \u0275\u0275element(160, "i", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275template(161, AgentListComponent_button_161_Template, 2, 3, "button", 80);
        \u0275\u0275elementStart(162, "button", 78);
        \u0275\u0275listener("click", function AgentListComponent_Template_button_click_162_listener() {
          return ctx.changePage("next");
        });
        \u0275\u0275element(163, "i", 81);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(164, AgentListComponent_div_164_Template, 25, 10, "div", 82);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("dark-mode", ctx.isDarkMode);
        \u0275\u0275advance(12);
        \u0275\u0275classProp("fa-moon", !ctx.isDarkMode)("fa-sun", ctx.isDarkMode);
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.searchTerm);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.notifications.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNotifications);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.stats.total);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.stats.active);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.stats.pending);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.stats.blocked);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 26, ctx.stats.totalElectronicsAmount, "1.0-0"));
        \u0275\u0275advance(12);
        \u0275\u0275property("ngForOf", ctx.statuses);
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1("", ctx.filteredAgents.length, " agents");
        \u0275\u0275advance(25);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.paginatedAgents.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.paginatedAgents);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.getStartIndex());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.getEndIndex());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.filteredAgents.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(29, _c0).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showOtpModal);
      }
    }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DecimalPipe], styles: ['\n\n[_nghost-%COMP%] {\n  --bg-primary: #f0f2f5;\n  --bg-card: #ffffff;\n  --bg-header: #ffffff;\n  --bg-input: #f1f5f9;\n  --bg-table-header: #f8fafc;\n  --bg-hover: #f8fafc;\n  --text-primary: #1a1a2e;\n  --text-secondary: #64748b;\n  --text-muted: #94a3b8;\n  --border-color: #e8ecf1;\n  --shadow: 0 1px 3px rgba(0,0,0,0.04);\n  --shadow-hover: 0 8px 25px rgba(0,0,0,0.06);\n}\n.dark-mode[_nghost-%COMP%], .dark-mode   [_nghost-%COMP%] {\n  --bg-primary: #0f172a;\n  --bg-card: #1e293b;\n  --bg-header: #0f172a;\n  --bg-input: #334155;\n  --bg-table-header: #1e293b;\n  --bg-hover: #334155;\n  --text-primary: #f1f5f9;\n  --text-secondary: #94a3b8;\n  --text-muted: #64748b;\n  --border-color: #334155;\n  --shadow: 0 1px 3px rgba(0,0,0,0.3);\n  --shadow-hover: 0 8px 25px rgba(0,0,0,0.5);\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-primary);\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.3s ease;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 32px;\n  background: var(--bg-header);\n  border-bottom: 1px solid var(--border-color);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: var(--shadow);\n  transition: all 0.3s ease;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 800;\n  font-size: 16px;\n}\n.logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-card);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--bg-input);\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 14px;\n  background: var(--bg-input);\n  border-radius: 10px;\n  border: 1px solid transparent;\n  transition: all 0.2s;\n  min-width: 220px;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  color: var(--text-primary);\n  width: 100%;\n  font-family: inherit;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  background: var(--bg-card);\n  border-color: #4f46e5;\n  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.08);\n}\n.notifications[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-card);\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.2s;\n  font-size: 16px;\n}\n.notifications[_ngcontent-%COMP%]:hover {\n  background: var(--bg-input);\n}\n.notifications[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notifications-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 44px;\n  right: -120px;\n  width: 380px;\n  max-height: 420px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--border-color);\n}\n.dropdown-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.dropdown-header[_ngcontent-%COMP%]   .mark-all-read[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4f46e5;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.dropdown-header[_ngcontent-%COMP%]   .mark-all-read[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.dropdown-body[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n}\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 18px;\n  border-bottom: 1px solid var(--border-color);\n  transition: background 0.2s;\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.05);\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-input);\n}\n.notification-item[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-icon.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-icon.warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-icon.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-icon.info[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-content[_ngcontent-%COMP%]   .notif-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-content[_ngcontent-%COMP%]   .notif-message[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 12px;\n  margin-top: 2px;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-content[_ngcontent-%COMP%]   .notif-time[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 11px;\n  margin-top: 4px;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 1;\n  padding: 0 4px;\n}\n.notification-item[_ngcontent-%COMP%]   .notif-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.dropdown-footer[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 13px;\n  border-top: 1px solid var(--border-color);\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 4px 10px 4px 4px;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-card);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.user-profile[_ngcontent-%COMP%]:hover {\n  background: var(--bg-input);\n}\n.user-profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n}\n.user-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3;\n}\n.user-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.user-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.user-profile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12px;\n  margin-left: 4px;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 20px 32px 32px;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n.page-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-title-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 2px 0;\n}\n.page-title-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #4f46e5;\n}\n.page-title-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.3);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 12px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: var(--shadow);\n  border: 1px solid var(--border-color);\n  position: relative;\n  transition: all 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-hover);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-change[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  position: absolute;\n  top: 10px;\n  right: 12px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-change[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 9px;\n  margin-right: 2px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-change.positive[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-change.negative[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.stat-card.blue[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.stat-card.green[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.stat-card.orange[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.stat-card.red[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.stat-card.purple[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--bg-card);\n  border-radius: 12px;\n  padding: 10px 16px;\n  margin-bottom: 20px;\n  border: 1px solid var(--border-color);\n}\n.filters-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 10px;\n  background: var(--bg-input);\n  border-radius: 8px;\n  flex: 1;\n  min-width: 120px;\n}\n.filter-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 13px;\n  color: var(--text-primary);\n  font-family: inherit;\n  padding: 3px 0;\n  width: 100%;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--bg-card);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-input);\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: var(--shadow);\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--border-color);\n}\n.table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   .table-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  background: var(--bg-input);\n  padding: 2px 10px;\n  border-radius: 20px;\n}\n.btn-export[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--bg-card);\n  color: var(--text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.btn-export[_ngcontent-%COMP%]:hover {\n  background: var(--bg-input);\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.modern-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 850px;\n}\n.modern-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-table-header);\n}\n.modern-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-secondary);\n  border-bottom: 1px solid var(--border-color);\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n  transition: background 0.15s;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  vertical-align: middle;\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.agent-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.agent-cell[_ngcontent-%COMP%]   .agent-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.agent-cell[_ngcontent-%COMP%]   .agent-info[_ngcontent-%COMP%]   .agent-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n}\n.agent-cell[_ngcontent-%COMP%]   .agent-info[_ngcontent-%COMP%]   .agent-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.card-number[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Monaco",\n    "Consolas",\n    monospace;\n  font-size: 12px;\n  font-weight: 500;\n  color: #4f46e5;\n  background: #eef2ff;\n  padding: 2px 8px;\n  border-radius: 6px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.contact-info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n}\n.contact-info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.address-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.address-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.address-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  word-break: break-word;\n  line-height: 1.3;\n}\n.electronics-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #4f46e5;\n  font-family:\n    "SF Mono",\n    "Monaco",\n    "Consolas",\n    monospace;\n  white-space: nowrap;\n}\n.electronics-amount[_ngcontent-%COMP%]   .electronics-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 500;\n  margin-left: 2px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  background: #eef2ff;\n  color: #4f46e5;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  min-width: 28px;\n  text-align: center;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.status-badge.active[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.status-badge.pending[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.status-badge.suspended[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.status-badge.suspended[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.status-badge.blocked[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.status-badge.blocked[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: var(--bg-input);\n  color: var(--text-muted);\n}\n.status-badge.inactive[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.action-btn[_ngcontent-%COMP%]::after {\n  content: attr(title);\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 50%;\n  transform: translateX(-50%) scale(0.8);\n  background: #1a1a2e;\n  color: white;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.2s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transform: translateX(-50%) scale(1);\n}\n.action-btn.view[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.action-btn.view[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}\n.action-btn.view[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.action-btn.block[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.action-btn.block[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);\n}\n.action-btn.block[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.action-btn.block.unblock[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.action-btn.block.unblock[_ngcontent-%COMP%]:hover {\n  background: #16a34a;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);\n}\n.action-btn.block.unblock[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.otp-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.otp-modal[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 16px;\n  padding: 32px;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  position: relative;\n  animation: _ngcontent-%COMP%_scaleIn 0.25s ease;\n  text-align: center;\n}\n.otp-modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 16px;\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: color 0.2s;\n  padding: 4px;\n  line-height: 1;\n}\n.otp-modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.otp-modal-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.otp-modal-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.otp-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.otp-modal-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n.otp-modal-desc[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.otp-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.otp-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.otp-input-group[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 20px;\n}\n.otp-input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n}\n.otp-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  padding: 0 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n  background: var(--bg-input);\n  color: var(--text-primary);\n  font-size: 18px;\n  font-weight: 700;\n  text-align: center;\n  letter-spacing: 8px;\n  font-family:\n    "SF Mono",\n    "Monaco",\n    "Consolas",\n    monospace;\n  outline: none;\n  transition: all 0.2s;\n}\n.otp-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #4f46e5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n.otp-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  letter-spacing: normal;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.otp-input-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.otp-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.otp-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 42px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.otp-btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-input);\n  border: 1px solid var(--border-color);\n  color: var(--text-secondary);\n}\n.otp-btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.otp-btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.otp-btn-confirm[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border: none;\n  color: white;\n}\n.otp-btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);\n}\n.otp-btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.otp-btn-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.otp-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n.otp-resend[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.otp-resend[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.otp-resend-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #4f46e5;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0;\n  transition: color 0.2s;\n}\n.otp-resend-btn[_ngcontent-%COMP%]:hover {\n  color: #7c3aed;\n}\n.otp-resend-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.loading-cell[_ngcontent-%COMP%], .empty-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px !important;\n  color: var(--text-muted);\n}\n.loading-cell[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], .empty-cell[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color);\n  border-top: 3px solid #4f46e5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 12px;\n}\n.loading-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .empty-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.3;\n  display: block;\n  margin-bottom: 12px;\n}\n.loading-cell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .empty-cell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  border-top: 1px solid var(--border-color);\n  background: var(--bg-table-header);\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.pagination-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--bg-card);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s;\n  font-weight: 500;\n  font-size: 13px;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eef2ff;\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n.pagination-controls[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  border-color: #4f46e5;\n  color: white;\n}\n.pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n@media (max-width: 1200px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 992px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .notifications-dropdown[_ngcontent-%COMP%] {\n    right: -80px;\n    width: 320px;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-header[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    flex-wrap: wrap;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    min-width: 120px;\n    flex: 1;\n  }\n  .user-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 12px 16px 20px;\n  }\n  .page-title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 10px;\n  }\n  .page-title-section[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-change[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 4px;\n  }\n  .filters-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n    padding: 10px 14px;\n  }\n  .filters-left[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    align-items: stretch;\n    padding: 10px 14px;\n  }\n  .table-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    padding: 10px 14px;\n  }\n  .notifications-dropdown[_ngcontent-%COMP%] {\n    right: -20px;\n    width: 300px;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modern-table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .modern-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .modern-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n  }\n  .card-number[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 2px 6px;\n  }\n  .electronics-amount[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n  .notifications-dropdown[_ngcontent-%COMP%] {\n    right: -40px;\n    width: 280px;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=agent-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentListComponent, { className: "AgentListComponent", filePath: "app\\modules\\agents\\pages\\agent-list\\agent-list.component.ts", lineNumber: 21 });
})();

// src/app/modules/agents/pages/agent-detail/agent-detail.component.ts
function AgentDetailComponent_div_0_div_82_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span");
    \u0275\u0275text(2, "Colline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.agent.address.colline);
  }
}
function AgentDetailComponent_div_0_div_82_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span");
    \u0275\u0275text(2, "Quartier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.agent.address.quartier);
  }
}
function AgentDetailComponent_div_0_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "h4");
    \u0275\u0275element(4, "i", 46);
    \u0275\u0275text(5, " Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47)(7, "span");
    \u0275\u0275text(8, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 47)(12, "span");
    \u0275\u0275text(13, "Date naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 47)(18, "span");
    \u0275\u0275text(19, "CNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 47)(23, "span");
    \u0275\u0275text(24, "NIF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 47)(28, "span");
    \u0275\u0275text(29, "Registre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 45)(33, "h4");
    \u0275\u0275element(34, "i", 48);
    \u0275\u0275text(35, " Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 47)(37, "span");
    \u0275\u0275text(38, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 47)(42, "span");
    \u0275\u0275text(43, "Commune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 47)(47, "span");
    \u0275\u0275text(48, "Zone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, AgentDetailComponent_div_0_div_82_div_51_Template, 5, 1, "div", 49)(52, AgentDetailComponent_div_0_div_82_div_52_Template, 5, 1, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 45)(54, "h4");
    \u0275\u0275element(55, "i", 50);
    \u0275\u0275text(56, " Syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 47)(58, "span");
    \u0275\u0275text(59, "Adh\xE9sion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 47)(64, "span");
    \u0275\u0275text(65, "Derni\xE8re MAJ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 47)(70, "span");
    \u0275\u0275text(71, "Cr\xE9\xE9 par");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 47)(75, "span");
    \u0275\u0275text(76, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", ctx_r1.agent.firstName, " ", ctx_r1.agent.lastName, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 15, ctx_r1.agent.dateOfBirth, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.agent.cin);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.agent.nif);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.agent.commerceRegister);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.agent.address.province);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.agent.address.commune);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.agent.address.zone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.agent.address.colline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.agent.address.quartier);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 18, ctx_r1.agent.joinDate, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 21, ctx_r1.agent.updatedAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.agent.createdBy);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.agent.documents == null ? null : ctx_r1.agent.documents.length) || 0);
  }
}
function AgentDetailComponent_div_0_div_83_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_div_83_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearMovementSearch());
    });
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
}
function AgentDetailComponent_div_0_div_83_div_12_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 64)(3, "div", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 67);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 68);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sub_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + ctx_r1.getColor(sub_r5.id, 2) + ", " + ctx_r1.getColor(sub_r5.id, 3) + ")");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(sub_r5.firstName, sub_r5.lastName), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", sub_r5.firstName, " ", sub_r5.lastName, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getAgentCardNumber(sub_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 8, ctx_r1.getTotalSentAmount(sub_r5.id), "1.0-0"), " BIF");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 11, ctx_r1.getCommissionReceived(sub_r5.id), "1.0-0"), " BIF");
  }
}
function AgentDetailComponent_div_0_div_83_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "table", 62)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Carte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Monnaie envoy\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Commission re\xE7ue");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, AgentDetailComponent_div_0_div_83_div_12_tr_13_Template, 18, 14, "tr", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.filteredAgentsForMovement);
  }
}
function AgentDetailComponent_div_0_div_83_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.agent.agents == null ? null : ctx_r1.agent.agents.length) === 0 ? "Aucun agent affili\xE9" : "Aucun r\xE9sultat trouv\xE9");
  }
}
function AgentDetailComponent_div_0_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 51)(2, "h4");
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275text(4, " Mouvements des monnaies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 52)(6, "span", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 54);
    \u0275\u0275element(9, "i", 55);
    \u0275\u0275elementStart(10, "input", 56);
    \u0275\u0275listener("input", function AgentDetailComponent_div_0_div_83_Template_input_input_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMovementSearch($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function AgentDetailComponent_div_0_div_83_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.movementSearchTerm, $event) || (ctx_r1.movementSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AgentDetailComponent_div_0_div_83_button_11_Template, 2, 0, "button", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, AgentDetailComponent_div_0_div_83_div_12_Template, 14, 1, "div", 58)(13, AgentDetailComponent_div_0_div_83_div_13_Template, 4, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredAgentsForMovement.length || 0, " agents");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.movementSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.movementSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredAgentsForMovement.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredAgentsForMovement.length === 0);
  }
}
function AgentDetailComponent_div_0_div_84_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_div_84_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearDepositSearch());
    });
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
}
function AgentDetailComponent_div_0_div_84_div_12_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 64)(3, "div", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 71);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 68);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + ctx_r1.getColor(d_r8.agentId || "default", 4) + ", " + ctx_r1.getColor(d_r8.agentId || "default", 5) + ")");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitialsAgent(d_r8.agentName), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r8.agentName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getDepositCardNumber(d_r8.agentId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind2(13, 7, d_r8.amount, "1.0-0"), " BIF");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 10, d_r8.amount * 0.02, "1.0-0"), " BIF");
  }
}
function AgentDetailComponent_div_0_div_84_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "table", 62)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Carte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Montant d\xE9pos\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Commission");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, AgentDetailComponent_div_0_div_84_div_12_tr_13_Template, 18, 13, "tr", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.filteredDeposits);
  }
}
function AgentDetailComponent_div_0_div_84_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.agent.deposits == null ? null : ctx_r1.agent.deposits.length) === 0 ? "Aucun d\xE9p\xF4t" : "Aucun r\xE9sultat trouv\xE9");
  }
}
function AgentDetailComponent_div_0_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 51)(2, "h4");
    \u0275\u0275element(3, "i", 21);
    \u0275\u0275text(4, " D\xE9p\xF4ts effectu\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 52)(6, "span", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 54);
    \u0275\u0275element(9, "i", 55);
    \u0275\u0275elementStart(10, "input", 70);
    \u0275\u0275listener("input", function AgentDetailComponent_div_0_div_84_Template_input_input_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDepositSearch($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function AgentDetailComponent_div_0_div_84_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.depositSearchTerm, $event) || (ctx_r1.depositSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AgentDetailComponent_div_0_div_84_button_11_Template, 2, 0, "button", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, AgentDetailComponent_div_0_div_84_div_12_Template, 14, 1, "div", 58)(13, AgentDetailComponent_div_0_div_84_div_13_Template, 4, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredDeposits.length || 0, " d\xE9p\xF4ts");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.depositSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.depositSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredDeposits.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredDeposits.length === 0);
  }
}
function AgentDetailComponent_div_0_div_85_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_div_85_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearCommissionSearch());
    });
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
}
function AgentDetailComponent_div_0_div_85_div_24_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 64)(3, "div", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 68);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 76);
    \u0275\u0275element(16, "span", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sub_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + ctx_r1.getColor(sub_r11.id, 6) + ", " + ctx_r1.getColor(sub_r11.id, 7) + ")");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(sub_r11.firstName, sub_r11.lastName), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", sub_r11.firstName, " ", sub_r11.lastName, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getAgentCardNumber(sub_r11.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 10, ctx_r1.getCommissionReceived(sub_r11.id), "1.0-0"), " BIF");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStatusClass(sub_r11.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(sub_r11.status), " ");
  }
}
function AgentDetailComponent_div_0_div_85_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "table", 62)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Carte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Commission re\xE7ue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, AgentDetailComponent_div_0_div_85_div_24_tr_13_Template, 18, 13, "tr", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.filteredAgentsForCommission);
  }
}
function AgentDetailComponent_div_0_div_85_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.agent.agents == null ? null : ctx_r1.agent.agents.length) === 0 ? "Aucune commission" : "Aucun r\xE9sultat trouv\xE9");
  }
}
function AgentDetailComponent_div_0_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 72)(2, "div", 73)(3, "span", 74);
    \u0275\u0275text(4, "Total commissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 75);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73)(9, "span", 74);
    \u0275\u0275text(10, "Nombre commissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 51)(14, "h4");
    \u0275\u0275element(15, "i", 23);
    \u0275\u0275text(16, " Commissions par agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 52)(18, "span", 53);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 54);
    \u0275\u0275element(21, "i", 55);
    \u0275\u0275elementStart(22, "input", 70);
    \u0275\u0275listener("input", function AgentDetailComponent_div_0_div_85_Template_input_input_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCommissionSearch($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function AgentDetailComponent_div_0_div_85_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.commissionSearchTerm, $event) || (ctx_r1.commissionSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AgentDetailComponent_div_0_div_85_button_23_Template, 2, 0, "button", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, AgentDetailComponent_div_0_div_85_div_24_Template, 14, 1, "div", 58)(25, AgentDetailComponent_div_0_div_85_div_25_Template, 4, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 7, ctx_r1.getTotalCommissions(), "1.0-0"), " BIF");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.filteredAgentsForCommission.length || 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredAgentsForCommission.length || 0, " agents");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.commissionSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.commissionSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredAgentsForCommission.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredAgentsForCommission.length === 0);
  }
}
function AgentDetailComponent_div_0_div_95_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "div", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 83);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 84)(10, "span", 85);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(t_r12.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-arrow-down", t_r12.type === "DEPOSIT")("fa-arrow-up", t_r12.type === "WITHDRAWAL")("fa-exchange-alt", t_r12.type === "TRANSFER");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r12.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 17, t_r12.date, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(t_r12.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r12.type === "DEPOSIT" ? "+" : t_r12.type === "WITHDRAWAL" ? "-" : "", " ", \u0275\u0275pipeBind2(12, 20, t_r12.amount, "1.0-0"), " BIF ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(t_r12.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r12.status);
  }
}
function AgentDetailComponent_div_0_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, AgentDetailComponent_div_0_div_95_div_1_Template, 15, 23, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedSubAgent == null ? null : ctx_r1.selectedSubAgent.transactions);
  }
}
function AgentDetailComponent_div_0_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune transaction");
    \u0275\u0275elementEnd()();
  }
}
function AgentDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "button", 6);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(5, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9)(9, "h1");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTheme());
    });
    \u0275\u0275element(15, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 14);
    \u0275\u0275element(17, "span", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 16)(20, "div", 17);
    \u0275\u0275element(21, "i", 18);
    \u0275\u0275elementStart(22, "div")(23, "span", 19);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 20);
    \u0275\u0275text(26, "Mouvements");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 17);
    \u0275\u0275element(28, "i", 21);
    \u0275\u0275elementStart(29, "div")(30, "span", 19);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 20);
    \u0275\u0275text(33, "D\xE9p\xF4ts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275element(35, "i", 22);
    \u0275\u0275elementStart(36, "div")(37, "span", 19);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 20);
    \u0275\u0275text(40, "Affili\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 17);
    \u0275\u0275element(42, "i", 23);
    \u0275\u0275elementStart(43, "div")(44, "span", 19);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 20);
    \u0275\u0275text(48, "Commissions");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 24)(50, "div", 25);
    \u0275\u0275element(51, "i", 26);
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 25);
    \u0275\u0275element(55, "i", 27);
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 25);
    \u0275\u0275element(59, "i", 28);
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 29)(63, "button", 30);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("profile"));
    });
    \u0275\u0275element(64, "i", 31);
    \u0275\u0275text(65, " Profil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 30);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("mouvements"));
    });
    \u0275\u0275element(67, "i", 18);
    \u0275\u0275text(68, " Mouvements ");
    \u0275\u0275elementStart(69, "span", 32);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "button", 30);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("depots"));
    });
    \u0275\u0275element(72, "i", 21);
    \u0275\u0275text(73, " D\xE9p\xF4ts ");
    \u0275\u0275elementStart(74, "span", 32);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "button", 30);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("commissions"));
    });
    \u0275\u0275element(77, "i", 23);
    \u0275\u0275text(78, " Commissions ");
    \u0275\u0275elementStart(79, "span", 32);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 33);
    \u0275\u0275template(82, AgentDetailComponent_div_0_div_82_Template, 79, 24, "div", 34)(83, AgentDetailComponent_div_0_div_83_Template, 14, 5, "div", 34)(84, AgentDetailComponent_div_0_div_84_Template, 14, 5, "div", 34)(85, AgentDetailComponent_div_0_div_85_Template, 26, 10, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 35);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_Template_div_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTransactionsModal());
    });
    \u0275\u0275elementStart(87, "div", 36);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_Template_div_click_87_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(88, "div", 37)(89, "h3");
    \u0275\u0275element(90, "i", 18);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "button", 38);
    \u0275\u0275listener("click", function AgentDetailComponent_div_0_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTransactionsModal());
    });
    \u0275\u0275element(93, "i", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 40);
    \u0275\u0275template(95, AgentDetailComponent_div_0_div_95_Template, 2, 1, "div", 41)(96, AgentDetailComponent_div_0_div_96_Template, 4, 0, "div", 42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("dark-mode", ctx_r1.isDarkMode);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + ctx_r1.getColor(ctx_r1.agent.id, 0) + ", " + ctx_r1.getColor(ctx_r1.agent.id, 1) + ")");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.agent.firstName, ctx_r1.agent.lastName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.agent.firstName, " ", ctx_r1.agent.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.agent.code);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("fa-moon", !ctx_r1.isDarkMode)("fa-sun", ctx_r1.isDarkMode);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.agent.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.agent.status), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.agent.agents == null ? null : ctx_r1.agent.agents.length) || 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r1.agent.deposits == null ? null : ctx_r1.agent.deposits.length) || 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r1.agent.agents == null ? null : ctx_r1.agent.agents.length) || 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 43, ctx_r1.getTotalCommissions(), "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.agent.cardNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.agent.phone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.agent.address.completeAddress);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "profile");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "mouvements");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.filteredAgentsForMovement.length || 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "depots");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.filteredDeposits.length || 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "commissions");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.filteredAgentsForCommission.length || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "profile");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "mouvements");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "depots");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "commissions");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.showTransactionsModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" Transactions de ", ctx_r1.selectedSubAgent == null ? null : ctx_r1.selectedSubAgent.firstName, " ", ctx_r1.selectedSubAgent == null ? null : ctx_r1.selectedSubAgent.lastName, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.selectedSubAgent == null ? null : ctx_r1.selectedSubAgent.transactions == null ? null : ctx_r1.selectedSubAgent.transactions.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.selectedSubAgent == null ? null : ctx_r1.selectedSubAgent.transactions == null ? null : ctx_r1.selectedSubAgent.transactions.length));
  }
}
function AgentDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "div", 87);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
var AgentDetailComponent = class _AgentDetailComponent {
  constructor(route, router, agentService) {
    this.route = route;
    this.router = router;
    this.agentService = agentService;
    this.agent = null;
    this.isLoading = true;
    this.isDarkMode = false;
    this.activeTab = "profile";
    this.selectedSubAgent = null;
    this.showTransactionsModal = false;
    this.movementSearchTerm = "";
    this.depositSearchTerm = "";
    this.commissionSearchTerm = "";
    this.colorPalette = [
      ["#4f46e5", "#7c3aed"],
      ["#ec4899", "#f43f5e"],
      ["#8b5cf6", "#6d28d9"],
      ["#3b82f6", "#2563eb"],
      ["#10b981", "#059669"],
      ["#f59e0b", "#d97706"],
      ["#ef4444", "#dc2626"],
      ["#14b8a6", "#0d9488"]
    ];
    this.agentCards = {
      "2": "CARTE-AG-2024-001",
      "3": "CARTE-AG-2024-002",
      "4": "CARTE-AG-2024-003",
      "5": "CARTE-AG-2024-004",
      "6": "CARTE-AG-2024-005",
      "7": "CARTE-AG-2024-006",
      "8": "CARTE-AG-2024-007",
      "9": "CARTE-AG-2024-008",
      "10": "CARTE-AG-2024-009",
      "11": "CARTE-AG-2024-010",
      "12": "CARTE-AG-2024-011",
      "13": "CARTE-AG-2024-012",
      "14": "CARTE-AG-2024-013",
      "15": "CARTE-AG-2024-014",
      "16": "CARTE-AG-2024-015",
      "17": "CARTE-AG-2024-016",
      "18": "CARTE-AG-2024-017",
      "19": "CARTE-AG-2024-018",
      "20": "CARTE-AG-2024-019",
      "21": "CARTE-AG-2024-020",
      "22": "CARTE-AG-2024-021",
      "23": "CARTE-AG-2024-022",
      "24": "CARTE-AG-2024-023",
      "25": "CARTE-AG-2024-024",
      "26": "CARTE-AG-2024-025",
      "27": "CARTE-AG-2024-026",
      "28": "CARTE-AG-2024-027",
      "29": "CARTE-AG-2024-028",
      "30": "CARTE-AG-2024-029",
      "31": "CARTE-AG-2024-030"
    };
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id)
      this.loadAgent(id);
    this.loadTheme();
  }
  loadTheme() {
    const saved = localStorage.getItem("iblopay-theme");
    if (saved === "light") {
      this.isDarkMode = false;
      document.body.classList.add("light-mode");
    }
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle("light-mode");
    localStorage.setItem("iblopay-theme", this.isDarkMode ? "dark" : "light");
  }
  loadAgent(id) {
    this.isLoading = true;
    this.agentService.getAgentById(id).subscribe({
      next: (data) => {
        this.agent = data;
        this.isLoading = false;
        console.log("Agents affili\xE9s:", this.agent?.agents);
      },
      error: () => {
        this.isLoading = false;
        this.router.navigate(["/agents"]);
      }
    });
  }
  // ================================================================
  // FILTRE POUR LES MOUVEMENTS
  // ================================================================
  get filteredAgentsForMovement() {
    if (!this.agent?.agents)
      return [];
    if (!this.movementSearchTerm.trim())
      return this.agent.agents;
    const term = this.movementSearchTerm.toLowerCase().trim();
    return this.agent.agents.filter((sub) => sub.firstName.toLowerCase().includes(term) || sub.lastName.toLowerCase().includes(term) || sub.code.toLowerCase().includes(term) || this.getAgentCardNumber(sub.id).toLowerCase().includes(term));
  }
  onMovementSearch(event) {
    this.movementSearchTerm = event.target.value;
  }
  clearMovementSearch() {
    this.movementSearchTerm = "";
    const input = document.querySelector(".search-filter input");
    if (input) {
      input.value = "";
      input.dispatchEvent(new Event("input"));
    }
  }
  // ================================================================
  // FILTRE POUR LES DÉPÔTS
  // ================================================================
  get filteredDeposits() {
    if (!this.agent?.deposits)
      return [];
    if (!this.depositSearchTerm.trim())
      return this.agent.deposits;
    const term = this.depositSearchTerm.toLowerCase().trim();
    return this.agent.deposits.filter((d) => d.agentName.toLowerCase().includes(term) || d.reference.toLowerCase().includes(term) || this.getDepositCardNumber(d.agentId).toLowerCase().includes(term));
  }
  onDepositSearch(event) {
    this.depositSearchTerm = event.target.value;
  }
  clearDepositSearch() {
    this.depositSearchTerm = "";
    const input = document.querySelector(".search-filter input");
    if (input) {
      input.value = "";
      input.dispatchEvent(new Event("input"));
    }
  }
  // ================================================================
  // FILTRE POUR LES COMMISSIONS
  // ================================================================
  get filteredAgentsForCommission() {
    if (!this.agent?.agents)
      return [];
    if (!this.commissionSearchTerm.trim())
      return this.agent.agents;
    const term = this.commissionSearchTerm.toLowerCase().trim();
    return this.agent.agents.filter((sub) => sub.firstName.toLowerCase().includes(term) || sub.lastName.toLowerCase().includes(term) || sub.code.toLowerCase().includes(term) || this.getAgentCardNumber(sub.id).toLowerCase().includes(term));
  }
  onCommissionSearch(event) {
    this.commissionSearchTerm = event.target.value;
  }
  clearCommissionSearch() {
    this.commissionSearchTerm = "";
    const input = document.querySelector(".search-filter input");
    if (input) {
      input.value = "";
      input.dispatchEvent(new Event("input"));
    }
  }
  // ================================================================
  // MÉTHODES UTILITAIRES
  // ================================================================
  getColor(id, index) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colorIndex = Math.abs(hash % this.colorPalette.length);
    const colorPair = this.colorPalette[colorIndex];
    if (colorPair && colorPair.length > 0) {
      const selectedIndex = index % colorPair.length;
      return colorPair[selectedIndex] || "#4f46e5";
    }
    return index % 2 === 0 ? "#4f46e5" : "#7c3aed";
  }
  getAgentCardNumber(agentId) {
    return this.agentCards[agentId] || "CARTE-NON-TROUVEE";
  }
  getTotalSentAmount(agentId) {
    if (!this.agent)
      return 0;
    const subAgent = this.agent.agents?.find((a) => a.id === agentId);
    if (!subAgent)
      return 0;
    return subAgent.transactions?.reduce((sum, t) => sum + t.amount, 0) || 0;
  }
  getCommissionReceived(agentId) {
    if (!this.agent)
      return 0;
    const subAgent = this.agent.agents?.find((a) => a.id === agentId);
    if (!subAgent)
      return 0;
    const total = subAgent.transactions?.reduce((sum, t) => sum + t.amount, 0) || 0;
    return Math.round(total * 0.02);
  }
  getInitialsAgent(name) {
    if (!name)
      return "?";
    const parts = name.split(" ");
    return parts.map((p) => p.charAt(0)).join("").toUpperCase().substring(0, 2);
  }
  getDepositCardNumber(agentId) {
    return this.agentCards[agentId] || "CARTE-DEP-001";
  }
  getTotalCommissions() {
    if (!this.agent || !this.agent.agents)
      return 0;
    let total = 0;
    this.agent.agents.forEach((sub) => {
      total += this.getCommissionReceived(sub.id);
    });
    return total;
  }
  goBack() {
    this.router.navigate(["/agents"]);
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  getStatusLabel(status) {
    const labels = {
      "ACTIVE": "Actif",
      "PENDING": "En attente",
      "SUSPENDED": "Suspendu",
      "BLOCKED": "Bloqu\xE9",
      "INACTIVE": "Inactif"
    };
    return labels[status] || status;
  }
  getStatusClass(status) {
    const classes = {
      "ACTIVE": "active",
      "PENDING": "pending",
      "SUSPENDED": "suspended",
      "BLOCKED": "blocked",
      "INACTIVE": "inactive"
    };
    return classes[status] || "";
  }
  getTransactionTypeIcon(type) {
    const icons = {
      "DEPOSIT": "fa-arrow-down",
      "TRANSFER": "fa-exchange-alt",
      "WITHDRAWAL": "fa-arrow-up"
    };
    return icons[type] || "fa-circle";
  }
  getTransactionTypeLabel(type) {
    const labels = {
      "DEPOSIT": "D\xE9p\xF4t",
      "TRANSFER": "Transfert",
      "WITHDRAWAL": "Retrait"
    };
    return labels[type] || type;
  }
  getTransactionTypeClass(type) {
    const classes = {
      "DEPOSIT": "deposit",
      "TRANSFER": "transfer",
      "WITHDRAWAL": "withdrawal"
    };
    return classes[type] || "";
  }
  getTransactionStatusLabel(status) {
    const labels = {
      "PENDING": "En attente",
      "COMPLETED": "Compl\xE9t\xE9",
      "FAILED": "\xC9chou\xE9",
      "CANCELLED": "Annul\xE9"
    };
    return labels[status] || status;
  }
  getTransactionStatusClass(status) {
    const classes = {
      "PENDING": "pending",
      "COMPLETED": "completed",
      "FAILED": "failed",
      "CANCELLED": "cancelled"
    };
    return classes[status] || "";
  }
  getElectronicStatusClass(status) {
    const classes = {
      "ACTIVE": "active",
      "INACTIVE": "inactive",
      "MAINTENANCE": "maintenance",
      "LOST": "lost"
    };
    return classes[status] || "";
  }
  getElectronicStatusLabel(status) {
    const labels = {
      "ACTIVE": "Actif",
      "INACTIVE": "Inactif",
      "MAINTENANCE": "En maintenance",
      "LOST": "Perdu"
    };
    return labels[status] || status;
  }
  getElectronicTypeLabel(type) {
    const labels = {
      "PHONE": "T\xE9l\xE9phone",
      "TABLET": "Tablette",
      "POS_TERMINAL": "Terminal POS",
      "OTHER": "Autre"
    };
    return labels[type] || type;
  }
  getInitials(firstName, lastName) {
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
  }
  getDepositStatusLabel(status) {
    const labels = {
      "PENDING": "En attente",
      "COMPLETED": "Compl\xE9t\xE9",
      "FAILED": "\xC9chou\xE9"
    };
    return labels[status] || status;
  }
  getDepositStatusClass(status) {
    const classes = {
      "PENDING": "pending",
      "COMPLETED": "completed",
      "FAILED": "failed"
    };
    return classes[status] || "";
  }
  viewSubAgentTransactions(subAgent) {
    this.selectedSubAgent = subAgent;
    this.showTransactionsModal = true;
  }
  closeTransactionsModal() {
    this.showTransactionsModal = false;
    this.selectedSubAgent = null;
  }
  static {
    this.\u0275fac = function AgentDetailComponent_Factory(t) {
      return new (t || _AgentDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AgentService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentDetailComponent, selectors: [["app-agent-detail"]], decls: 2, vars: 2, consts: [["class", "detail-container", 3, "dark-mode", 4, "ngIf"], ["class", "loading-screen", 4, "ngIf"], [1, "detail-container"], [1, "main-card"], [1, "card-header"], [1, "header-left"], [1, "btn-back", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "avatar"], [1, "header-info"], [1, "agent-code"], [1, "header-right"], [1, "btn-theme", 3, "click"], [1, "fas"], [1, "status-badge"], [1, "dot"], [1, "stats-row"], [1, "stat-item"], [1, "fas", "fa-exchange-alt"], [1, "stat-number"], [1, "stat-label"], [1, "fas", "fa-arrow-down"], [1, "fas", "fa-users"], [1, "fas", "fa-percent"], [1, "contact-row"], [1, "contact-item"], [1, "fas", "fa-credit-card"], [1, "fas", "fa-phone"], [1, "fas", "fa-map-marker-alt"], [1, "tabs"], [1, "tab", 3, "click"], [1, "fas", "fa-user"], [1, "tab-count"], [1, "tab-content"], ["class", "pane", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], ["class", "item-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "pane"], [1, "profile-grid"], [1, "info-card"], [1, "fas", "fa-id-card"], [1, "info-item"], [1, "fas", "fa-map-pin"], ["class", "info-item", 4, "ngIf"], [1, "fas", "fa-clock"], [1, "table-header"], [1, "table-header-right"], [1, "count-badge"], [1, "search-filter"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Recherche ....", 3, "input", "ngModelChange", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "fas", "fa-times-circle"], [1, "table-responsive"], [1, "modern-table"], [4, "ngFor", "ngForOf"], [1, "agent-cell"], [1, "avatar-small"], [1, "card-number"], [1, "amount-sent"], [1, "commission-received"], [1, "empty-state"], ["type", "text", "placeholder", "Recherche .......", 3, "input", "ngModelChange", "ngModel"], [1, "amount-sent", "positive"], [1, "commissions-summary"], [1, "summary-card"], [1, "summary-label"], [1, "summary-value"], [1, "badge-small"], [1, "item-list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"], [1, "item-icon"], [1, "item-content"], [1, "item-title"], [1, "item-sub"], [1, "item-right"], [1, "item-amount"], [1, "loading-screen"], [1, "spinner"]], template: function AgentDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AgentDetailComponent_div_0_Template, 97, 46, "div", 0)(1, AgentDetailComponent_div_1_Template, 4, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.agent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, DecimalPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  --bg-body: #f0f2f5;\n  --bg-card: #ffffff;\n  --bg-hover: #f8f9fa;\n  --bg-input: #f1f3f5;\n  --text-primary: #1a1a2e;\n  --text-secondary: #6b7280;\n  --text-muted: #9ca3af;\n  --border-color: #e5e7eb;\n  --shadow: 0 2px 12px rgba(0,0,0,0.06);\n  --shadow-hover: 0 4px 20px rgba(0,0,0,0.1);\n  --radius: 12px;\n  --primary: #4f46e5;\n  --success: #10b981;\n  --warning: #f59e0b;\n  --danger: #ef4444;\n  --info: #3b82f6;\n  --purple: #8b5cf6;\n}\n.detail-container.dark-mode[_ngcontent-%COMP%] {\n  --bg-body: #0f172a;\n  --bg-card: #1e293b;\n  --bg-hover: #2d3a4f;\n  --bg-input: #2d3a4f;\n  --text-primary: #f1f5f9;\n  --text-secondary: #94a3b8;\n  --text-muted: #64748b;\n  --border-color: #334155;\n  --shadow: 0 2px 12px rgba(0,0,0,0.3);\n  --shadow-hover: 0 4px 20px rgba(0,0,0,0.4);\n}\n.detail-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-body);\n  padding: 20px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  transition: all 0.3s ease;\n}\n.main-card[_ngcontent-%COMP%] {\n  max-width: 780px;\n  width: 100%;\n  background: var(--bg-card);\n  border-radius: var(--radius);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow);\n  padding: 20px 24px;\n  transition: all 0.3s ease;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-card);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.header-info[_ngcontent-%COMP%]   .agent-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n  display: block;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-theme[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-card);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.btn-theme[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 12px;\n  border-radius: 16px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-badge[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: var(--success);\n}\n.status-badge.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: var(--warning);\n}\n.status-badge.pending[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.status-badge.blocked[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--danger);\n}\n.status-badge.blocked[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: var(--bg-input);\n  color: var(--text-secondary);\n}\n.status-badge.inactive[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--text-secondary);\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-color);\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  border-radius: 6px;\n  background: var(--bg-hover);\n  border: 1px solid var(--border-color);\n}\n.stat-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--primary);\n  width: 22px;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-secondary);\n}\n.contact-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border-color);\n}\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  background: var(--bg-hover);\n  font-size: 12px;\n  color: var(--text-primary);\n}\n.contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 13px;\n  width: 16px;\n}\n.contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  padding: 10px 0 0 0;\n  border-bottom: 2px solid var(--border-color);\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.08);\n  color: var(--primary);\n}\n.tab[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: var(--bg-input);\n  padding: 0 6px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.tab.active[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  min-height: 200px;\n}\n.pane[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 12px 14px;\n  border: 1px solid var(--border-color);\n}\n.info-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  color: var(--primary);\n  margin: 0 0 8px 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 1px solid var(--border-color);\n  font-size: 12px;\n}\n.info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-secondary);\n}\n.info-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.table-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-primary);\n}\n.table-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.count-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n  background: var(--bg-input);\n  padding: 1px 12px;\n  border-radius: 10px;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.modern-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.modern-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.modern-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  color: var(--text-secondary);\n  border-bottom: 2px solid var(--border-color);\n}\n.modern-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-bottom: 1px solid var(--border-color);\n  color: var(--text-primary);\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.agent-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.avatar-small[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.card-number[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  color: var(--primary);\n  background: rgba(79, 70, 229, 0.08);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.amount-sent[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--info);\n}\n.amount-sent.positive[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.commission-received[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--purple);\n}\n.badge-small[_ngcontent-%COMP%] {\n  padding: 1px 8px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 600;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n}\n.badge-small[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n}\n.badge-small.active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: var(--success);\n}\n.badge-small.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.badge-small.pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: var(--warning);\n}\n.badge-small.pending[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.badge-small.blocked[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--danger);\n}\n.badge-small.blocked[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.badge-small.inactive[_ngcontent-%COMP%] {\n  background: var(--bg-input);\n  color: var(--text-secondary);\n}\n.badge-small.inactive[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--text-secondary);\n}\n.commissions-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 10px 14px;\n  text-align: center;\n}\n.summary-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n.summary-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--primary);\n  margin-top: 2px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  opacity: 0.3;\n  display: block;\n  margin-bottom: 6px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n.modal-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius);\n  max-width: 480px;\n  width: 95%;\n  max-height: 80vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-hover);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-color);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-primary);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.modal-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 6px;\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--danger);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: var(--bg-hover);\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n}\n.item-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.item-icon.deposit[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--success);\n}\n.item-icon.withdrawal[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: var(--danger);\n}\n.item-icon.transfer[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.15);\n  color: var(--info);\n}\n.item-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.item-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-secondary);\n}\n.item-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.item-amount[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n}\n.item-amount.deposit[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.item-amount.withdrawal[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.item-amount.transfer[_ngcontent-%COMP%] {\n  color: var(--info);\n}\n.loading-screen[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: var(--bg-body);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.loading-screen[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color);\n  border-top: 3px solid var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-screen[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 13px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .detail-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .main-card[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    max-width: 100%;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .contact-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .profile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tabs[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n  }\n  .tab[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 5px 12px;\n    white-space: nowrap;\n  }\n  .commissions-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modern-table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .modern-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .modern-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 5px 8px;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .avatar[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n    font-size: 13px;\n  }\n  .header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .stat-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 13px;\n    width: 18px;\n  }\n  .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .modal-box[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 10px;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 10px;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .table-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 600;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    color: var(--text-primary);\n  }\n  .table-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: var(--primary);\n  }\n  .table-header-right[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex-wrap: wrap;\n  }\n  .count-badge[_ngcontent-%COMP%] {\n    font-size: 11px;\n    color: var(--text-secondary);\n    background: var(--bg-input);\n    padding: 2px 12px;\n    border-radius: 10px;\n    font-weight: 600;\n    white-space: nowrap;\n  }\n  .search-filter[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    background: var(--bg-input);\n    border: 1.5px solid var(--border-color);\n    border-radius: 8px;\n    padding: 4px 10px;\n    transition: all 0.3s ease;\n    min-width: 200px;\n  }\n  .search-filter[_ngcontent-%COMP%]:focus-within {\n    border-color: var(--primary);\n    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n    background: var(--bg-card);\n  }\n  .search-filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: var(--text-muted);\n    font-size: 13px;\n  }\n  .search-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: none;\n    background: transparent;\n    outline: none;\n    font-size: 12px;\n    color: var(--text-primary);\n    padding: 4px 0;\n    width: 130px;\n    font-family: inherit;\n    transition: all 0.3s ease;\n  }\n  .search-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: var(--text-muted);\n    font-size: 11px;\n  }\n  .search-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus::placeholder {\n    opacity: 0.5;\n  }\n  .search-clear[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    color: var(--text-muted);\n    cursor: pointer;\n    padding: 0 2px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.2s ease;\n  }\n  .search-clear[_ngcontent-%COMP%]:hover {\n    color: var(--danger);\n    transform: scale(1.1);\n  }\n}\n@media (max-width: 480px) and (max-width: 768px) {\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n  .table-header-right[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .search-filter[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 150px;\n  }\n  .search-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n@media (max-width: 480px) and (max-width: 480px) {\n  .search-filter[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n  .search-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 70px;\n    font-size: 11px;\n  }\n  .count-badge[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 1px 8px;\n  }\n}\n/*# sourceMappingURL=agent-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentDetailComponent, { className: "AgentDetailComponent", filePath: "app\\modules\\agents\\pages\\agent-detail\\agent-detail.component.ts", lineNumber: 12 });
})();

// src/app/modules/agents/pages/agent-create/agent-create.component.ts
function AgentCreateComponent_small_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Nom obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function AgentCreateComponent_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Pr\xE9nom obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function AgentCreateComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx_r0.agentForm.get("approvalLetter")) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.name, " ");
  }
}
function AgentCreateComponent_small_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Les mots de passe ne correspondent pas. ");
    \u0275\u0275elementEnd();
  }
}
function AgentCreateComponent_option_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const province_r2 = ctx.$implicit;
    \u0275\u0275property("value", province_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", province_r2, " ");
  }
}
function AgentCreateComponent_i_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 60);
  }
}
function AgentCreateComponent_span_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
var AgentCreateComponent = class _AgentCreateComponent {
  constructor(fb, agentService, router) {
    this.fb = fb;
    this.agentService = agentService;
    this.router = router;
    this.isLoading = false;
    this.provinces = [
      "Bujumbura Mairie",
      "Bubanza",
      "Bururi",
      "Cankuzo",
      "Cibitoke",
      "Gitega",
      "Karuzi",
      "Kayanza",
      "Kirundo",
      "Makamba",
      "Muramvya",
      "Muyinga",
      "Mwaro",
      "Ngozi",
      "Rutana",
      "Ruyigi"
    ];
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.agentForm = this.fb.group({
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ["", Validators.required],
      cin: ["", [Validators.required, Validators.minLength(10)]],
      phone: ["", [Validators.required, Validators.pattern(/^[0-9]{8,15}$/)]],
      cardNumber: ["", [Validators.required, Validators.minLength(10)]],
      province: ["", Validators.required],
      commune: ["", Validators.required],
      zone: ["", Validators.required],
      colline: [""],
      quartier: [""],
      nif: ["", [Validators.required, Validators.minLength(5)]],
      commerceRegister: ["", [Validators.required, Validators.minLength(5)]],
      approvalLetter: [null, Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });
  }
  passwordMatchValidator(g) {
    const password = g.get("password")?.value;
    const confirm = g.get("confirmPassword")?.value;
    return password === confirm ? null : { mismatch: true };
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.agentForm.patchValue({ approvalLetter: file });
    }
  }
  onSubmit() {
    if (this.agentForm.invalid) {
      this.agentForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    const formData = this.agentForm.value;
    const agentData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      cin: formData.cin,
      cardNumber: formData.cardNumber,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      province: formData.province,
      commune: formData.commune,
      zone: formData.zone,
      colline: formData.colline,
      quartier: formData.quartier,
      nif: formData.nif,
      commerceRegister: formData.commerceRegister,
      password: formData.password,
      approvalLetter: `documents/approval_${Date.now()}.pdf`,
      approvalLetterName: formData.approvalLetter?.name || "approval_letter.pdf"
    };
    this.agentService.createAgent(agentData).subscribe({
      next: (agent) => {
        this.isLoading = false;
        this.router.navigate(["/agents/detail", agent.id]);
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/agents"]);
  }
  static {
    this.\u0275fac = function AgentCreateComponent_Factory(t) {
      return new (t || _AgentCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AgentService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentCreateComponent, selectors: [["app-agent-create"]], decls: 143, vars: 12, consts: [[1, "create-container"], [1, "create-header"], [1, "header-left"], [1, "main-card"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "column"], [1, "form-section"], [1, "section-title"], [1, "icon-box"], [1, "fas", "fa-user"], [1, "form-row"], [1, "form-group"], ["for", "lastName"], ["id", "lastName", "type", "text", "formControlName", "lastName", "placeholder", "Nom"], [4, "ngIf"], ["for", "firstName"], ["id", "firstName", "type", "text", "formControlName", "firstName", "placeholder", "Pr\xE9nom"], ["for", "dateOfBirth"], ["id", "dateOfBirth", "type", "date", "formControlName", "dateOfBirth"], ["for", "cin"], ["id", "cin", "type", "text", "formControlName", "cin", "placeholder", "Num\xE9ro CNI"], ["for", "phone"], ["id", "phone", "type", "text", "formControlName", "phone", "placeholder", "79XXXXXX"], ["for", "cardNumber"], ["id", "cardNumber", "type", "text", "formControlName", "cardNumber", "placeholder", "IBP-00001"], [1, "fas", "fa-file-contract"], ["for", "nif"], ["id", "nif", "type", "text", "formControlName", "nif", "placeholder", "Num\xE9ro NIF"], ["for", "commerceRegister"], ["id", "commerceRegister", "type", "text", "formControlName", "commerceRegister", "placeholder", "Registre"], [1, "fas", "fa-cloud-upload-alt"], [1, "upload-zone"], ["id", "approvalLetter", "type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 3, "change"], [1, "fas", "fa-cloud-upload-alt", "upload-icon"], ["class", "file-name", 4, "ngIf"], [1, "fas", "fa-lock"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "********"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "placeholder", "********"], [1, "fas", "fa-map-marker-alt"], ["for", "province"], ["id", "province", "formControlName", "province"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "commune"], ["id", "commune", "type", "text", "formControlName", "commune", "placeholder", "Commune"], ["for", "zone"], ["id", "zone", "type", "text", "formControlName", "zone", "placeholder", "Zone"], ["for", "colline"], ["id", "colline", "type", "text", "formControlName", "colline", "placeholder", "Colline ou quartier"], [1, "form-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "fas fa-save", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "file-name"], [1, "fas", "fa-check-circle"], [3, "value"], [1, "fas", "fa-save"], [1, "spinner"]], template: function AgentCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
        \u0275\u0275text(5, "Nouveau Super Agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, " Remplissez les informations du nouveau super agent ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(8, "div", 3)(9, "form", 4);
        \u0275\u0275listener("ngSubmit", function AgentCreateComponent_Template_form_ngSubmit_9_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div")(17, "h3");
        \u0275\u0275text(18, "Informations personnelles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "Identit\xE9 du super agent");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "label", 13);
        \u0275\u0275text(24, "Nom *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 14);
        \u0275\u0275template(26, AgentCreateComponent_small_26_Template, 2, 0, "small", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 12)(28, "label", 16);
        \u0275\u0275text(29, "Pr\xE9nom *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 17);
        \u0275\u0275template(31, AgentCreateComponent_small_31_Template, 2, 0, "small", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 11)(33, "div", 12)(34, "label", 18);
        \u0275\u0275text(35, "Date de naissance *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 12)(38, "label", 20);
        \u0275\u0275text(39, "CNI *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 11)(42, "div", 12)(43, "label", 22);
        \u0275\u0275text(44, "T\xE9l\xE9phone *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "input", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 12)(47, "label", 24);
        \u0275\u0275text(48, "Num\xE9ro de carte *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(49, "input", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 7)(51, "div", 8)(52, "div", 9);
        \u0275\u0275element(53, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div")(55, "h3");
        \u0275\u0275text(56, "Informations l\xE9gales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span");
        \u0275\u0275text(58, "Documents administratifs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "div", 11)(60, "div", 12)(61, "label", 27);
        \u0275\u0275text(62, "NIF *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(63, "input", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 12)(65, "label", 29);
        \u0275\u0275text(66, "Registre du commerce *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(67, "input", 30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "div", 7)(69, "div", 8)(70, "div", 9);
        \u0275\u0275element(71, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div")(73, "h3");
        \u0275\u0275text(74, "Documents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "span");
        \u0275\u0275text(76, "Importer les documents obligatoires");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 32)(78, "input", 33);
        \u0275\u0275listener("change", function AgentCreateComponent_Template_input_change_78_listener($event) {
          return ctx.onFileSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(79, "i", 34);
        \u0275\u0275elementStart(80, "h4");
        \u0275\u0275text(81, "D\xE9poser le fichier ici");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p");
        \u0275\u0275text(83, "ou cliquez pour s\xE9lectionner un document");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "small");
        \u0275\u0275text(85, "PDF, JPG ou PNG");
        \u0275\u0275elementEnd();
        \u0275\u0275template(86, AgentCreateComponent_div_86_Template, 3, 1, "div", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "div", 6)(88, "div", 7)(89, "div", 8)(90, "div", 9);
        \u0275\u0275element(91, "i", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div")(93, "h3");
        \u0275\u0275text(94, "S\xE9curit\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "span");
        \u0275\u0275text(96, "Cr\xE9er les acc\xE8s du compte");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 12)(98, "label", 37);
        \u0275\u0275text(99, "Mot de passe *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(100, "input", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 12)(102, "label", 39);
        \u0275\u0275text(103, "Confirmation *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(104, "input", 40);
        \u0275\u0275template(105, AgentCreateComponent_small_105_Template, 2, 0, "small", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "div", 7)(107, "div", 8)(108, "div", 9);
        \u0275\u0275element(109, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div")(111, "h3");
        \u0275\u0275text(112, "Adresse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "span");
        \u0275\u0275text(114, "Localisation du super agent");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(115, "div", 11)(116, "div", 12)(117, "label", 42);
        \u0275\u0275text(118, "Province *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "select", 43)(120, "option", 44);
        \u0275\u0275text(121, "S\xE9lectionner une province");
        \u0275\u0275elementEnd();
        \u0275\u0275template(122, AgentCreateComponent_option_122_Template, 2, 2, "option", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 12)(124, "label", 46);
        \u0275\u0275text(125, "Commune *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(126, "input", 47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "div", 11)(128, "div", 12)(129, "label", 48);
        \u0275\u0275text(130, "Zone *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(131, "input", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 12)(133, "label", 50);
        \u0275\u0275text(134, "Colline / Quartier");
        \u0275\u0275elementEnd();
        \u0275\u0275element(135, "input", 51);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(136, "div", 52)(137, "button", 53);
        \u0275\u0275listener("click", function AgentCreateComponent_Template_button_click_137_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(138, " Annuler ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "button", 54);
        \u0275\u0275template(140, AgentCreateComponent_i_140_Template, 1, 0, "i", 55)(141, AgentCreateComponent_span_141_Template, 1, 0, "span", 56);
        \u0275\u0275text(142);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.agentForm);
        \u0275\u0275advance(17);
        \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.agentForm.get("lastName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.agentForm.get("lastName")) == null ? null : tmp_1_0.touched));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.agentForm.get("firstName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.agentForm.get("firstName")) == null ? null : tmp_2_0.touched));
        \u0275\u0275advance(46);
        \u0275\u0275classProp("has-file", (tmp_3_0 = ctx.agentForm.get("approvalLetter")) == null ? null : tmp_3_0.value);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.agentForm.get("approvalLetter")) == null ? null : tmp_4_0.value);
        \u0275\u0275advance(19);
        \u0275\u0275property("ngIf", ctx.agentForm.hasError("mismatch") && ((tmp_5_0 = ctx.agentForm.get("confirmPassword")) == null ? null : tmp_5_0.touched));
        \u0275\u0275advance(17);
        \u0275\u0275property("ngForOf", ctx.provinces);
        \u0275\u0275advance(17);
        \u0275\u0275property("disabled", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Cr\xE9ation..." : "Cr\xE9er le Super Agent", " ");
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: [`

*[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
[_nghost-%COMP%] {
  display: block;
}
.create-container[_ngcontent-%COMP%] {
  min-height: 100vh;
  padding: 32px;
  background:
    linear-gradient(
      180deg,
      #EFF4FF 0%,
      #F8FAFF 100%);
  font-family: "Inter", sans-serif;
}
.create-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 18px;
}
.btn-back[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 14px;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;
}
.btn-back[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
}
.btn-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #4F46E5;
  font-size: 18px;
}
.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 32px;
  color: #0F172A;
  margin-bottom: 4px;
  font-weight: 700;
}
.header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748B;
  font-size: 14px;
}
.step[_ngcontent-%COMP%] {
  padding: 10px 18px;
  border-radius: 30px;
  background: #EEF2FF;
  color: #4F46E5;
  font-weight: 600;
  font-size: 14px;
}
.main-card[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 980px;
  margin: 40px auto;
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 15px 40px rgba(15, 23, 42, 0.08);
}
.form-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
}
.column[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-section[_ngcontent-%COMP%] {
  background: #fff;
  border: 1px solid #EDF2F7;
  border-radius: 15px;
  padding: 18px;
  transition: 0.3s;
}
.form-section[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
}
.section-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}
.icon-box[_ngcontent-%COMP%] {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #EEF2FF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #4F46E5;
  font-size: 19px;
}
.section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 16px;
  color: #0F172A;
  font-weight: 700;
}
.section-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: #94A3B8;
  font-size: 13px;
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 14px;
}
.form-row[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.form-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 7px;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  width: 100%;
  height: 36px;
  padding: 0 14px;
  border: 1px solid #D9E2EC;
  border-radius: 12px;
  background: #fff;
  font-size: 13px;
  color: #0F172A;
  transition: 0.25s;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {
  color: #94A3B8;
}
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  appearance: none;
  cursor: pointer;
  padding-right: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%2394A3B8' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {
  border-color: #BFC9FF;
}
.form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select.ng-invalid.ng-touched[_ngcontent-%COMP%] {
  border-color: #EF4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.08);
}
.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  margin-top: 6px;
  font-size: 12px;
  color: #EF4444;
  font-weight: 500;
}
input[type=date][_ngcontent-%COMP%] {
  cursor: pointer;
}
input[type=password][_ngcontent-%COMP%] {
  letter-spacing: 0.4px;
}
input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled {
  background: #F8FAFC;
  opacity: 0.75;
  cursor: not-allowed;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  transition:
    border-color 0.25s,
    box-shadow 0.25s,
    transform 0.25s;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  transform: translateY(-1px);
}
.upload-zone[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  min-height: 80px;
  border: 2px dashed #4F46E5;
  border-radius: 18px;
  background:
    linear-gradient(
      180deg,
      #FAFBFF,
      #F3F6FF);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: 0.35s;
  overflow: hidden;
}
.upload-zone[_ngcontent-%COMP%]:hover {
  border-color: #4338CA;
  background: #EEF2FF;
  transform: translateY(-2px);
}
.upload-zone.has-file[_ngcontent-%COMP%] {
  border-color: #16A34A;
  background: #F0FDF4;
}
.upload-zone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}
.upload-icon[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EEF2FF;
  color: #4F46E5;
  font-size: 24px;
  margin-bottom: 18px;
}
.upload-zone[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 8px;
}
.upload-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #64748B;
  margin-bottom: 8px;
}
.upload-zone[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #94A3B8;
  font-size: 12px;
}
.file-name[_ngcontent-%COMP%] {
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #16A34A;
  font-weight: 600;
}
.file-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 18px;
}
.form-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid #EDF2F7;
}
.btn-cancel[_ngcontent-%COMP%] {
  height: 46px;
  padding: 0 24px;
  border: 1px solid #D9E2EC;
  border-radius: 12px;
  background: #FFF;
  color: #475569;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}
.btn-cancel[_ngcontent-%COMP%]:hover {
  background: #F8FAFC;
  transform: translateY(-2px);
}
.btn-submit[_ngcontent-%COMP%] {
  height: 46px;
  min-width: 176px;
  border: none;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #6366F1,
      #4338CA);
  color: #FFF;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 12px 25px rgba(79, 70, 229, 0.25);
}
.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 18px 35px rgba(79, 70, 229, 0.35);
}
.btn-submit[_ngcontent-%COMP%]:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.btn-submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 15px;
}
.spinner[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  border: 3px solid rgba(255, 255, 255, 0.35);
  border-top-color: #FFF;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.main-card[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeUp 0.45s ease;
}
.form-section[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeCard 0.45s ease;
}
@keyframes _ngcontent-%COMP%_fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _ngcontent-%COMP%_fadeCard {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 1100px) {
  .form-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .main-card[_ngcontent-%COMP%] {
    padding: 24px;
  }
}
@media (max-width: 768px) {
  .create-container[_ngcontent-%COMP%] {
    padding: 18px;
  }
  .create-header[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }
  .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    font-size: 26px;
  }
  .form-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .form-actions[_ngcontent-%COMP%] {
    flex-direction: column-reverse;
  }
  .btn-submit[_ngcontent-%COMP%], .btn-cancel[_ngcontent-%COMP%] {
    width: 100%;
  }
  .upload-zone[_ngcontent-%COMP%] {
    min-height: 180px;
  }
}
/*# sourceMappingURL=agent-create.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentCreateComponent, { className: "AgentCreateComponent", filePath: "app\\modules\\agents\\pages\\agent-create\\agent-create.component.ts", lineNumber: 12 });
})();

// src/app/modules/agents/agents-routing.module.ts
var routes = [
  {
    path: "",
    component: AgentListComponent
  },
  {
    path: "create",
    component: AgentCreateComponent
  },
  {
    path: ":id",
    component: AgentDetailComponent
  }
];
var AgentsRoutingModule = class _AgentsRoutingModule {
  static {
    this.\u0275fac = function AgentsRoutingModule_Factory(t) {
      return new (t || _AgentsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/modules/agents/pages/agent-documents/agent-documents.component.ts
function AgentDocumentsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h1");
    \u0275\u0275text(2, "Documents de l'agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "p")(5, "strong");
    \u0275\u0275text(6, "Agent:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 3)(13, "p");
    \u0275\u0275text(14, "Aucun document disponible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 4);
    \u0275\u0275listener("click", function AgentDocumentsComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(16, "Retour");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r1.agent.firstName, " ", ctx_r1.agent.lastName, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.agent.code, "");
  }
}
var AgentDocumentsComponent = class _AgentDocumentsComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.agent = null;
  }
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.agent = data["agent"];
    });
  }
  goBack() {
    this.router.navigate(["/agents"]);
  }
  static {
    this.\u0275fac = function AgentDocumentsComponent_Factory(t) {
      return new (t || _AgentDocumentsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentDocumentsComponent, selectors: [["app-agent-documents"]], decls: 1, vars: 1, consts: [["class", "documents-container", 4, "ngIf"], [1, "documents-container"], [1, "info-card"], [1, "documents-list"], [1, "btn-secondary", 3, "click"]], template: function AgentDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AgentDocumentsComponent_div_0_Template, 17, 3, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.agent);
      }
    }, dependencies: [NgIf], styles: ["\n\n.documents-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin: 20px 0;\n}\n.documents-list[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin: 20px 0;\n  text-align: center;\n  color: #666;\n  padding: 60px 20px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #666;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=agent-documents.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentDocumentsComponent, { className: "AgentDocumentsComponent", filePath: "app\\modules\\agents\\pages\\agent-documents\\agent-documents.component.ts", lineNumber: 54 });
})();

// src/app/modules/agents/pages/agent-edit/agent-edit.component.ts
function AgentEditComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h1");
    \u0275\u0275text(2, "Modifier l'agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "p");
    \u0275\u0275text(5, "Formulaire de modification en cours de d\xE9veloppement...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p")(7, "strong");
    \u0275\u0275text(8, "Agent:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 3);
    \u0275\u0275listener("click", function AgentEditComponent_div_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(11, "Retour");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2(" ", ctx_r1.agent.firstName, " ", ctx_r1.agent.lastName, "");
  }
}
var AgentEditComponent = class _AgentEditComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.agent = null;
  }
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.agent = data["agent"];
    });
  }
  goBack() {
    this.router.navigate(["/agents"]);
  }
  static {
    this.\u0275fac = function AgentEditComponent_Factory(t) {
      return new (t || _AgentEditComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentEditComponent, selectors: [["app-agent-edit"]], decls: 1, vars: 1, consts: [["class", "edit-container", 4, "ngIf"], [1, "edit-container"], [1, "form-card"], [1, "btn-secondary", 3, "click"]], template: function AgentEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AgentEditComponent_div_0_Template, 12, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.agent);
      }
    }, dependencies: [NgIf], styles: ["\n\n.edit-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin: 20px 0;\n  text-align: center;\n  padding: 60px 20px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #666;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=agent-edit.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentEditComponent, { className: "AgentEditComponent", filePath: "app\\modules\\agents\\pages\\agent-edit\\agent-edit.component.ts", lineNumber: 43 });
})();

// src/app/modules/agents/agents.module.ts
var AgentsModule = class _AgentsModule {
  static {
    this.\u0275fac = function AgentsModule_Factory(t) {
      return new (t || _AgentsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ReactiveFormsModule,
      AgentsRoutingModule
    ] });
  }
};
export {
  AgentsModule
};
//# sourceMappingURL=chunk-REMZT263.js.map
