export interface ServicePublic {
    id: number;
    numero: number;
    abreviation: string;
    description: string;
    type: 'INTERNE' | 'EXTERNE';
    actif?: boolean;
    dateCreation?: Date;
    version?: string;
    responsable?: string;
    email?: string;
    telephone?: string;
    siteWeb?: string;
    commissions?: Commission[];
    transactions?: Transaction[];
}

export interface Commission {
    id: number;
    nom: string;
    description: string;
    montant: number;
    devise: string;
    type: 'FIXE' | 'PERCENTAGE';
    frequence: 'MENSUEL' | 'TRIMESTRIEL' | 'ANNUEL' | 'PONCTUEL';
    actif: boolean;
    dateCreation: Date;
}

export interface Transaction {
    id: number;
    reference: string;
    type: 'PAIEMENT' | 'REMBOURSEMENT' | 'ADJUSTEMENT';
    montant: number;
    devise: string;
    statut: 'SUCCES' | 'ECHEC' | 'EN_ATTENTE';
    dateTransaction: Date;
    description: string;
    commissionId?: number;
    utilisateur?: string;
}