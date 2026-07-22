import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ─── Types ──────────────────────────────────────────────────────
export type TransactionType = 'DEPOT' | 'RETRAIT' | 'PAIEMENT_NFC' | 'TRANSFERT';
export type PersonRole = 'agent' | 'super_agent';

export interface CommissionSplit {
  etat: number;
  iblopay: number;
  tierce: number;
  personnelle: number;
}

export interface Transaction {
  reference: string;
  date: Date;
  type: TransactionType;
  montant: number;
  commissions: CommissionSplit;
}

export interface Person {
  id: string;
  nom: string;
  prenom: string;
  wallet: string;
  contact: string;
  transactions: Transaction[];
  role: PersonRole;
  superAgentNom?: string;
}

export interface PersonRow {
  person: Person;
  totalCommissionEtat: number;
  totalCommissionIblopay: number;
  totalCommissionTierce: number;
  totalCommissionPersonnelle: number;
  totalToutesCommissions: number;
  initials: string;
}

// ─── DUMMY DATA GENERATION ──────────────────────────────────────
const AGENT_NAMES: { nom: string; prenom: string }[] = [
  { nom: 'Hakizimana', prenom: 'Jean-Pierre' },
  { nom: 'Ndayishimiye', prenom: 'Marie-Claire' },
  { nom: 'Ciza', prenom: 'Pierre' },
  { nom: 'Habimana', prenom: 'Anastasie' },
  { nom: 'Mbonimpa', prenom: 'David' },
  { nom: 'Ntakirutimana', prenom: 'Jacqueline' },
  { nom: 'Bigirimana', prenom: 'Christophe' },
  { nom: 'Kamwenubusa', prenom: 'Béatrice' },
];

const SUPER_AGENT_NAMES: { nom: string; prenom: string }[] = [
  { nom: 'Niyonzima', prenom: 'Alphonse' },
  { nom: 'Rwasa', prenom: 'Emmanuel' },
  { nom: 'Mpundu', prenom: 'Sylvie' },
  { nom: 'Nkurunziza', prenom: 'Pascal' },
  { nom: 'Barancira', prenom: 'Marguerite' },
];

const TRANSACTION_TYPES: TransactionType[] = ['DEPOT', 'RETRAIT', 'PAIEMENT_NFC', 'TRANSFERT'];

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateWallet(): string {
  return `79${String(randomInt(10000000, 99999999))}`;
}

function generateContact(): string {
  return `+257 ${String(randomInt(70000000, 79999999))}`;
}

function generateTransactionRef(index: number): string {
  const prefixes = ['TXN', 'PAY', 'DEP', 'WTH'];
  return `${randomItem(prefixes)}-${String(2026000 + index).padStart(7, '0')}`;
}

const COMMISSION_RATES = {
  etat: 0.0025,
  iblopay: 0.004,
  tierce: 0.003,
  personnelle: 0.006,
};

function generateTransaction(index: number, date: Date): Transaction {
  const types = TRANSACTION_TYPES;
  const type = types[randomInt(0, types.length - 1)]!;
  const montant = randomInt(5000, 500000);
  const montantNum = montant;

  return {
    reference: generateTransactionRef(index),
    date,
    type,
    montant: montantNum,
    commissions: {
      etat: Math.round(montantNum * COMMISSION_RATES.etat),
      iblopay: Math.round(montantNum * COMMISSION_RATES.iblopay),
      tierce: Math.round(montantNum * COMMISSION_RATES.tierce),
      personnelle: Math.round(montantNum * COMMISSION_RATES.personnelle),
    },
  };
}

function getInitials(nom: string, prenom: string): string {
  return `${prenom.charAt(0)}${nom.charAt(0)}`.toUpperCase();
}

// ─── Generate all persons ────────────────────────────────────────
function generateAllPersons(): Person[] {
  const startDate = new Date('2026-07-01');
  const endDate = new Date('2026-07-31');
  const persons: Person[] = [];
  let txIndex = 0;

  // Generate 8 Agents
  for (let i = 0; i < AGENT_NAMES.length; i++) {
    const agentEntry = AGENT_NAMES[i]!;
    const { nom, prenom } = agentEntry;
    const saIndex = Math.floor(i / 2) % SUPER_AGENT_NAMES.length;
    const sa = SUPER_AGENT_NAMES[saIndex]!;
    const txCount = randomInt(4, 17);
    const transactions: Transaction[] = [];

    for (let t = 0; t < txCount; t++) {
      transactions.push(generateTransaction(txIndex++, randomDate(startDate, endDate)));
    }

    transactions.sort((a, b) => b.date.getTime() - a.date.getTime());

    persons.push({
      id: `AGT-${String(i + 1).padStart(3, '0')}`,
      nom,
      prenom,
      wallet: generateWallet(),
      contact: generateContact(),
      transactions,
      role: 'agent',
      superAgentNom: `${sa.prenom} ${sa.nom}`,
    });
  }

  // Generate 5 Super-Agents
  for (let i = 0; i < SUPER_AGENT_NAMES.length; i++) {
    const saEntry = SUPER_AGENT_NAMES[i]!;
    const { nom, prenom } = saEntry;
    const txCount = randomInt(6, 20);
    const transactions: Transaction[] = [];

    for (let t = 0; t < txCount; t++) {
      transactions.push(generateTransaction(txIndex++, randomDate(startDate, endDate)));
    }

    transactions.sort((a, b) => b.date.getTime() - a.date.getTime());

    persons.push({
      id: `SA-${String(i + 1).padStart(3, '0')}`,
      nom,
      prenom,
      wallet: generateWallet(),
      contact: generateContact(),
      transactions,
      role: 'super_agent',
    });
  }

  return persons;
}

// ─── Component ──────────────────────────────────────────────────
@Component({
  selector: 'app-commission-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './commission-dashboard.component.html',
  styleUrls: ['./commission-dashboard.component.scss'],
})
export class CommissionDashboardComponent implements OnInit {
  // Data
  allPersons: Person[] = [];
  filteredPersons: Person[] = [];
  activeTab: PersonRole = 'agent';

  // Search
  searchQuery = '';

  // Modal
  selectedPerson: Person | null = null;
  isModalOpen = false;

  // Modal precomputed totals (to avoid arrow functions in template)
  modalTotalMontant = 0;
  modalTotalEtat = 0;
  modalTotalIblopay = 0;
  modalTotalTierce = 0;
  modalTotalPersonnelle = 0;

  // KPI computed values
  totalCommissionEtat = 0;
  totalCommissionIblopay = 0;
  totalCommissionTierce = 0;
  totalCommissionPersonnelle = 0;
  totalToutesCommissions = 0;

  ngOnInit(): void {
    this.allPersons = generateAllPersons();
    this.applyFilter();
  }

  get agents(): PersonRow[] {
    return this.filteredPersons
      .filter(p => p.role === 'agent')
      .map(p => this.toRow(p));
  }

  get superAgents(): PersonRow[] {
    return this.filteredPersons
      .filter(p => p.role === 'super_agent')
      .map(p => this.toRow(p));
  }

  private toRow(person: Person): PersonRow {
    const etat = person.transactions.reduce((s, t) => s + t.commissions.etat, 0);
    const iblopay = person.transactions.reduce((s, t) => s + t.commissions.iblopay, 0);
    const tierce = person.transactions.reduce((s, t) => s + t.commissions.tierce, 0);
    const personnelle = person.transactions.reduce((s, t) => s + t.commissions.personnelle, 0);
    return {
      person,
      totalCommissionEtat: etat,
      totalCommissionIblopay: iblopay,
      totalCommissionTierce: tierce,
      totalCommissionPersonnelle: personnelle,
      totalToutesCommissions: etat + iblopay + tierce + personnelle,
      initials: getInitials(person.nom, person.prenom),
    };
  }

  get currentRows(): PersonRow[] {
    return this.activeTab === 'agent' ? this.agents : this.superAgents;
  }

  get totals(): { etat: number; iblopay: number; tierce: number; personnelle: number; total: number } {
    const rows = this.currentRows;
    return {
      etat: rows.reduce((s, r) => s + r.totalCommissionEtat, 0),
      iblopay: rows.reduce((s, r) => s + r.totalCommissionIblopay, 0),
      tierce: rows.reduce((s, r) => s + r.totalCommissionTierce, 0),
      personnelle: rows.reduce((s, r) => s + r.totalCommissionPersonnelle, 0),
      total: rows.reduce((s, r) => s + r.totalToutesCommissions, 0),
    };
  }

  switchTab(tab: PersonRole): void {
    this.activeTab = tab;
    this.applyFilter();
  }

  onSearch(): void {
    this.applyFilter();
  }

  private applyFilter(): void {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) {
      this.filteredPersons = [...this.allPersons];
    } else {
      this.filteredPersons = this.allPersons.filter(
        p =>
          p.nom.toLowerCase().includes(q) ||
          p.prenom.toLowerCase().includes(q) ||
          `${p.prenom} ${p.nom}`.toLowerCase().includes(q) ||
          p.wallet.includes(q) ||
          p.contact.includes(q)
      );
    }
    this.computeKpis();
  }

  private computeKpis(): void {
    const visible = this.filteredPersons;
    this.totalCommissionEtat = visible.reduce((s, p) => s + p.transactions.reduce((t, tx) => t + tx.commissions.etat, 0), 0);
    this.totalCommissionIblopay = visible.reduce((s, p) => s + p.transactions.reduce((t, tx) => t + tx.commissions.iblopay, 0), 0);
    this.totalCommissionTierce = visible.reduce((s, p) => s + p.transactions.reduce((t, tx) => t + tx.commissions.tierce, 0), 0);
    this.totalCommissionPersonnelle = visible.reduce((s, p) => s + p.transactions.reduce((t, tx) => t + tx.commissions.personnelle, 0), 0);
    this.totalToutesCommissions = this.totalCommissionEtat + this.totalCommissionIblopay + this.totalCommissionTierce + this.totalCommissionPersonnelle;
  }

  // ─── Modal ──────────────────────────────────────────────────────
  openDetail(person: Person): void {
    this.selectedPerson = person;
    this.modalTotalMontant = person.transactions.reduce((s, t) => s + t.montant, 0);
    this.modalTotalEtat = person.transactions.reduce((s, t) => s + t.commissions.etat, 0);
    this.modalTotalIblopay = person.transactions.reduce((s, t) => s + t.commissions.iblopay, 0);
    this.modalTotalTierce = person.transactions.reduce((s, t) => s + t.commissions.tierce, 0);
    this.modalTotalPersonnelle = person.transactions.reduce((s, t) => s + t.commissions.personnelle, 0);
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedPerson = null;
    document.body.style.overflow = '';
  }

  // ─── CSV Export ──────────────────────────────────────────────────
  downloadCsv(): void {
    if (!this.selectedPerson) return;
    const tx = this.selectedPerson.transactions;
    const header = 'Référence;Date;Type;Montant (FBu);Commission État (FBu);Commission IBLOPay (FBu);Commission Tierce (FBu);Commission Personnelle (FBu);Total Commissions (FBu)';
    const rows = tx.map(t => {
      const totalCom = t.commissions.etat + t.commissions.iblopay + t.commissions.tierce + t.commissions.personnelle;
      return [
        t.reference,
        this.formatDate(t.date),
        this.transactionTypeLabel(t.type),
        t.montant.toLocaleString('fr-FR'),
        t.commissions.etat.toLocaleString('fr-FR'),
        t.commissions.iblopay.toLocaleString('fr-FR'),
        t.commissions.tierce.toLocaleString('fr-FR'),
        t.commissions.personnelle.toLocaleString('fr-FR'),
        totalCom.toLocaleString('fr-FR'),
      ].join(';');
    });

    const totalRow = [
      'TOTAUX',
      '',
      '',
      this.modalTotalMontant.toLocaleString('fr-FR'),
      this.modalTotalEtat.toLocaleString('fr-FR'),
      this.modalTotalIblopay.toLocaleString('fr-FR'),
      this.modalTotalTierce.toLocaleString('fr-FR'),
      this.modalTotalPersonnelle.toLocaleString('fr-FR'),
      (this.modalTotalEtat + this.modalTotalIblopay + this.modalTotalTierce + this.modalTotalPersonnelle).toLocaleString('fr-FR'),
    ].join(';');

    const csv = '\uFEFF' + header + '\n' + rows.join('\n') + '\n' + totalRow;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeName = `${this.selectedPerson.prenom}_${this.selectedPerson.nom}`.replace(/\s+/g, '_');
    a.href = url;
    a.download = `commissions_${safeName}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  getInitials(nom: string, prenom: string): string {
    return `${prenom.charAt(0)}${nom.charAt(0)}`.toUpperCase();
  }

  // ─── Format helpers ──────────────────────────────────────────────
  formatBif(amount: number): string {
    return `${amount.toLocaleString('fr-FR')} FBu`;
  }

  formatDate(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  formatDateShort(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  transactionTypeLabel(type: TransactionType): string {
    const labels: Record<TransactionType, string> = {
      DEPOT: 'Dépôt',
      RETRAIT: 'Retrait',
      PAIEMENT_NFC: 'Paiement NFC',
      TRANSFERT: 'Transfert',
    };
    return labels[type] || type;
  }

  getTransactionTypeClass(type: TransactionType): string {
    const classes: Record<string, string> = {
      DEPOT: 'type-depot',
      RETRAIT: 'type-retrait',
      PAIEMENT_NFC: 'type-nfc',
      TRANSFERT: 'type-transfert',
    };
    return classes[type] || '';
  }

  getAvatarColor(initials: string): string {
    const colors: string[] = [
      '#3b82f6', '#a855f7', '#22c55e', '#f97316',
      '#ec4899', '#14b8a6', '#eab308', '#06b6d4',
    ];
    let hash = 0;
    for (let i = 0; i < initials.length; i++) {
      hash = initials.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length]!;
  }

  getMiniBarTitle(pct: { etat: number; iblopay: number; tierce: number; personnelle: number }): string {
    const e = pct.etat.toFixed(0);
    const i = pct.iblopay.toFixed(0);
    const t = pct.tierce.toFixed(0);
    const p = pct.personnelle.toFixed(0);
    return `État ${e}% · IBLOPay ${i}% · Tierce ${t}% · Perso ${p}%`;
  }

  getMiniBarPercentages(commissions: CommissionSplit): { etat: number; iblopay: number; tierce: number; personnelle: number } {
    const total = commissions.etat + commissions.iblopay + commissions.tierce + commissions.personnelle;
    if (total === 0) return { etat: 0, iblopay: 0, tierce: 0, personnelle: 0 };
    return {
      etat: (commissions.etat / total) * 100,
      iblopay: (commissions.iblopay / total) * 100,
      tierce: (commissions.tierce / total) * 100,
      personnelle: (commissions.personnelle / total) * 100,
    };
  }

  getBarPercentagesFromTotals(row: PersonRow): { etat: number; iblopay: number; tierce: number; personnelle: number } {
    const total = row.totalToutesCommissions;
    if (total === 0) return { etat: 0, iblopay: 0, tierce: 0, personnelle: 0 };
    return {
      etat: (row.totalCommissionEtat / total) * 100,
      iblopay: (row.totalCommissionIblopay / total) * 100,
      tierce: (row.totalCommissionTierce / total) * 100,
      personnelle: (row.totalCommissionPersonnelle / total) * 100,
    };
  }

  get percentageEtatGlobale(): number {
    return this.totalToutesCommissions > 0 ? (this.totalCommissionEtat / this.totalToutesCommissions) * 100 : 0;
  }
  get percentageIblopayGlobale(): number {
    return this.totalToutesCommissions > 0 ? (this.totalCommissionIblopay / this.totalToutesCommissions) * 100 : 0;
  }
  get percentageTierceGlobale(): number {
    return this.totalToutesCommissions > 0 ? (this.totalCommissionTierce / this.totalToutesCommissions) * 100 : 0;
  }
  get percentagePersonnelleGlobale(): number {
    return this.totalToutesCommissions > 0 ? (this.totalCommissionPersonnelle / this.totalToutesCommissions) * 100 : 0;
  }
}