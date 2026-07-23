import { ServicePublic, Commission, Transaction } from '../models/service-public.model';

// ============================================================
// FONCTIONS HELPER
// ============================================================
const getRandomItem = <T>(array: readonly T[], fallback: T): T => {
    if (!array || array.length === 0) {
        return fallback;
    }
    const index = Math.floor(Math.random() * array.length);
    return array[index] ?? fallback;
};

const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDate = (daysAgo: number): Date => {
    return new Date(Date.now() - Math.random() * daysAgo * 24 * 60 * 60 * 1000);
};

const getRandomBoolean = (probability: number = 0.5): boolean => {
    return Math.random() < probability;
};

// ============================================================
// TYPES CONSTANTS
// ============================================================
const COMMISSION_TYPES = ['FIXE', 'PERCENTAGE'] as const;
type CommissionType = typeof COMMISSION_TYPES[number];

const COMMISSION_FREQUENCES = ['MENSUEL', 'TRIMESTRIEL', 'ANNUEL', 'PONCTUEL'] as const;
type CommissionFrequence = typeof COMMISSION_FREQUENCES[number];

const TRANSACTION_TYPES = ['PAIEMENT', 'REMBOURSEMENT', 'ADJUSTEMENT'] as const;
type TransactionType = typeof TRANSACTION_TYPES[number];

const TRANSACTION_STATUTS = ['SUCCES', 'ECHEC', 'EN_ATTENTE'] as const;
type TransactionStatut = typeof TRANSACTION_STATUTS[number];

const COMMISSION_NAMES = [
    'Frais de dossier',
    'Commission de gestion',
    'Frais de traitement',
    'Redevance annuelle',
    "Frais d'activation",
    'Commission de transaction',
    'Frais de maintenance',
    "Frais d'agrément"
];

const TRANSACTION_DESCRIPTIONS = [
    'Paiement reçu',
    'Remboursement effectué',
    'Ajustement de compte',
    'Transaction mensuelle',
    'Paiement commission',
    'Frais de service'
];

// ============================================================
// COMMISSIONS MOCK
// ============================================================
const generateMockCommissions = (serviceId: number, count: number): Commission[] => {
    const commissions: Commission[] = [];

    for (let i = 0; i < count; i++) {
        const type = getRandomItem(COMMISSION_TYPES, 'FIXE');
        const frequence = getRandomItem(COMMISSION_FREQUENCES, 'MENSUEL');
        const nom = getRandomItem(COMMISSION_NAMES, 'Frais de dossier');

        commissions.push({
            id: i + 1,
            nom: nom,
            description: `Description de la commission ${i + 1} pour le service ${serviceId}`,
            montant: Math.round((Math.random() * 100000 + 1000) / 10) * 10,
            devise: 'BIF',
            type: type,
            frequence: frequence,
            actif: getRandomBoolean(0.7),
            dateCreation: getRandomDate(365)
        });
    }
    return commissions;
};

// ============================================================
// TRANSACTIONS MOCK
// ============================================================
const generateMockTransactions = (serviceId: number, count: number): Transaction[] => {
    const transactions: Transaction[] = [];

    for (let i = 0; i < count; i++) {
        const type = getRandomItem(TRANSACTION_TYPES, 'PAIEMENT');
        const statut = getRandomItem(TRANSACTION_STATUTS, 'SUCCES');
        const description = getRandomItem(TRANSACTION_DESCRIPTIONS, 'Paiement reçu');

        // ✅ CORRECTION : commissionId est optionnel, on ne l'ajoute que si présent
        const commissionId = Math.random() > 0.5 ? getRandomInt(1, 5) : undefined;

        const transaction: Transaction = {
            id: i + 1,
            reference: `TXN-${String(serviceId).padStart(3, '0')}-${String(i + 1).padStart(6, '0')}`,
            type: type,
            montant: Math.round((Math.random() * 500000 + 10000) / 10) * 10,
            devise: 'BIF',
            statut: statut,
            dateTransaction: getRandomDate(180),
            description: description,
            utilisateur: `Utilisateur ${getRandomInt(1, 50)}`
        };

        // ✅ CORRECTION : on ajoute commissionId uniquement s'il est défini
        if (commissionId !== undefined) {
            transaction.commissionId = commissionId;
        }

        transactions.push(transaction);
    }
    return transactions;
};

// ============================================================
// SERVICES PUBLICS MOCK - TOUS LES SERVICES DU FICHIER EXCEL
// ============================================================
export const SERVICES_PUBLICS_MOCK: ServicePublic[] = [
    // ============================================================
    // SYSTEMES INTERNES A L'OBR
    // ============================================================
    {
        id: 1,
        numero: 1,
        abreviation: 'GPR-RNF',
        description: 'Système de gestion des factures émises par ARCT - Redevances annuelles, autorisations réseaux, fréquences',
        type: 'INTERNE',
        actif: true,
        dateCreation: new Date(2022, 5, 15),
        version: '2.3.1',
        responsable: 'Jean Ndayishimiye',
        email: 'gpr-rnf@obr.bi',
        telephone: '+257 22 22 22 22',
        siteWeb: 'https://obr.bi/gpr-rnf',
        commissions: generateMockCommissions(1, 5),
        transactions: generateMockTransactions(1, 15)
    },
    {
        id: 2,
        numero: 2,
        abreviation: 'SIGFIP',
        description: "Système d'Information pour la Gestion des Finances Publiques",
        type: 'INTERNE',
        actif: true,
        dateCreation: new Date(2023, 0, 15),
        version: '4.0.0',
        responsable: 'Pierre Nkurunziza',
        email: 'sigfip@obr.bi',
        telephone: '+257 22 22 22 23',
        siteWeb: 'https://obr.bi/sigfip',
        commissions: generateMockCommissions(2, 4),
        transactions: generateMockTransactions(2, 20)
    },
    {
        id: 3,
        numero: 3,
        abreviation: 'GED-ADMIN',
        description: "Gestion Électronique des Documents Administratifs de l'OBR",
        type: 'INTERNE',
        actif: true,
        dateCreation: new Date(2023, 3, 1),
        version: '2.1.5',
        responsable: 'Marie Uwimana',
        email: 'ged-admin@obr.bi',
        telephone: '+257 22 22 22 24',
        siteWeb: 'https://obr.bi/ged-admin',
        commissions: generateMockCommissions(3, 3),
        transactions: generateMockTransactions(3, 12)
    },
    {
        id: 4,
        numero: 4,
        abreviation: 'GPE-RH',
        description: "Gestion du Personnel et des Rémunérations de l'État",
        type: 'INTERNE',
        actif: true,
        dateCreation: new Date(2023, 7, 20),
        version: '1.0.0',
        responsable: 'Joseph Hakizimana',
        email: 'gpe-rh@obr.bi',
        telephone: '+257 22 22 22 25',
        siteWeb: 'https://obr.bi/gpe-rh',
        commissions: generateMockCommissions(4, 3),
        transactions: generateMockTransactions(4, 25)
    },

    // ============================================================
    // SYSTEMES EXTERNES A L'OBR
    // ============================================================
    {
        id: 5,
        numero: 1,
        abreviation: 'Easy-business',
        description: "Système utilisé par l'ADB pour la gestion des entreprises et des licences d'exploitation",
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2021, 2, 10),
        version: '3.0.5',
        responsable: 'Claire Niyonzima',
        email: 'easy-business@adb.bi',
        telephone: '+257 22 22 22 26',
        siteWeb: 'https://adb.bi/easy-business',
        commissions: generateMockCommissions(5, 6),
        transactions: generateMockTransactions(5, 30)
    },
    {
        id: 6,
        numero: 2,
        abreviation: 'BANCOBU E-NOTI',
        description: "Système de gestion des stands dans les marchés de l'Etat - Locations des stands et shops",
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 8, 1),
        version: '1.4.2',
        responsable: 'David Manirakiza',
        email: 'bancoebu@obr.bi',
        telephone: '+257 22 22 22 27',
        siteWeb: 'https://obr.bi/bancoebu',
        commissions: generateMockCommissions(6, 4),
        transactions: generateMockTransactions(6, 18)
    },
    {
        id: 7,
        numero: 3,
        abreviation: 'OTRACO',
        description: 'Système de gestion de contrôle technique des véhicules - Permis de conduire et contrôles',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2020, 11, 5),
        version: '2.1.0',
        responsable: 'Eric Bashirahishize',
        email: 'otraco@otraco.bi',
        telephone: '+257 22 22 22 28',
        siteWeb: 'https://otraco.bi',
        commissions: generateMockCommissions(7, 5),
        transactions: generateMockTransactions(7, 22)
    },
    {
        id: 8,
        numero: 4,
        abreviation: 'PAFE/MIGRATIONS',
        description: 'Système de gestion des documents de voyage - Passeports, visas et titres de voyage',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2019, 6, 20),
        version: '3.2.8',
        responsable: 'Isabelle Ndayisaba',
        email: 'pafe@migrations.bi',
        telephone: '+257 22 22 22 29',
        siteWeb: 'https://migrations.bi',
        commissions: generateMockCommissions(8, 7),
        transactions: generateMockTransactions(8, 35)
    },
    {
        id: 9,
        numero: 5,
        abreviation: 'PSR',
        description: 'Système de gestion de production des permis de conduire',
        type: 'EXTERNE',
        actif: false,
        dateCreation: new Date(2020, 3, 15),
        version: '1.9.3',
        responsable: 'André Habonimana',
        email: 'psr@transports.bi',
        telephone: '+257 22 22 22 30',
        siteWeb: 'https://transports.bi/psr',
        commissions: generateMockCommissions(9, 3),
        transactions: generateMockTransactions(9, 8)
    },
    {
        id: 10,
        numero: 6,
        abreviation: 'TITRES FONCIERS - BPS',
        description: 'Système de facturation Proforma pour transfert de titres de propriétés - Redevances domaniales',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2021, 9, 1),
        version: '2.0.4',
        responsable: 'Lucien Barakamfitiye',
        email: 'bps@titresfonciers.bi',
        telephone: '+257 22 22 22 31',
        siteWeb: 'https://titresfonciers.bi/bps',
        commissions: generateMockCommissions(10, 6),
        transactions: generateMockTransactions(10, 28)
    },
    {
        id: 11,
        numero: 7,
        abreviation: 'TITRES FONCIERS - PMS',
        description: "Système de gestion des données d'expertise lors des transferts de propriété",
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2021, 9, 1),
        version: '1.8.1',
        responsable: 'Martine Ndikumana',
        email: 'pms@titresfonciers.bi',
        telephone: '+257 22 22 22 32',
        siteWeb: 'https://titresfonciers.bi/pms',
        commissions: generateMockCommissions(11, 4),
        transactions: generateMockTransactions(11, 16)
    },
    {
        id: 12,
        numero: 8,
        abreviation: 'PJP/INTERPOL',
        description: 'Système de gestion des données liées au vol ou non des véhicules/motos',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 1, 10),
        version: '1.2.6',
        responsable: 'Charles Niyongabo',
        email: 'pjp@police.bi',
        telephone: '+257 22 22 22 33',
        siteWeb: 'https://police.bi/pjp',
        commissions: generateMockCommissions(12, 3),
        transactions: generateMockTransactions(12, 10)
    },
    {
        id: 13,
        numero: 9,
        abreviation: 'e-CMR',
        description: 'Système de gestion électronique des certificats de transport - Autorisation de transport',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 6, 20),
        version: '1.3.2',
        responsable: 'Jeanne Ntakarutimana',
        email: 'e-cmr@transport.bi',
        telephone: '+257 22 22 22 34',
        siteWeb: 'https://transport.bi/e-cmr',
        commissions: generateMockCommissions(13, 5),
        transactions: generateMockTransactions(13, 14)
    },
    {
        id: 14,
        numero: 10,
        abreviation: 'PORTAL-IMPOTS',
        description: 'Portail des contribuables pour les déclarations fiscales - Attestations fiscales, NIF',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 10, 5),
        version: '3.0.0',
        responsable: 'Marcel Niyungeko',
        email: 'portal@impots.bi',
        telephone: '+257 22 22 22 35',
        siteWeb: 'https://impots.bi/portal',
        commissions: generateMockCommissions(14, 8),
        transactions: generateMockTransactions(14, 40)
    },
    {
        id: 15,
        numero: 11,
        abreviation: 'e-DOUANES',
        description: 'Système de dédouanement électronique - Droits de douane',
        type: 'EXTERNE',
        actif: false,
        dateCreation: new Date(2021, 5, 12),
        version: '2.2.3',
        responsable: 'Suzanne Gahungu',
        email: 'e-douanes@douanes.bi',
        telephone: '+257 22 22 22 36',
        siteWeb: 'https://douanes.bi/e-douanes',
        commissions: generateMockCommissions(15, 6),
        transactions: generateMockTransactions(15, 12)
    },
    {
        id: 16,
        numero: 12,
        abreviation: 'AGREMENT-GARAGES',
        description: 'Système de gestion des agréments des garages et agences de transport',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 11, 1),
        version: '1.0.5',
        responsable: 'Sylvie Ndamukunda',
        email: 'agrement@transport.bi',
        telephone: '+257 22 22 22 37',
        siteWeb: 'https://transport.bi/agrement',
        commissions: generateMockCommissions(16, 4),
        transactions: generateMockTransactions(16, 20)
    },
    {
        id: 17,
        numero: 13,
        abreviation: 'LICENCES-DEBITS',
        description: "Système de gestion des licences d'exploitation des débits de boissons, restaurants et hôtels",
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 8, 15),
        version: '2.0.0',
        responsable: 'Emmanuel Hakizinka',
        email: 'licences@commercial.bi',
        telephone: '+257 22 22 22 38',
        siteWeb: 'https://commercial.bi/licences',
        commissions: generateMockCommissions(17, 7),
        transactions: generateMockTransactions(17, 25)
    },
    {
        id: 18,
        numero: 14,
        abreviation: 'AMENDES-ROUTIERES',
        description: 'Système de gestion des amendes routières et commerciales',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2023, 1, 10),
        version: '1.2.0',
        responsable: 'François Rutayisire',
        email: 'amendes@securite.bi',
        telephone: '+257 22 22 22 39',
        siteWeb: 'https://securite.bi/amendes',
        commissions: generateMockCommissions(18, 4),
        transactions: generateMockTransactions(18, 35)
    },
    {
        id: 19,
        numero: 15,
        abreviation: 'REDEVANCES-ENVIRONNEMENT',
        description: 'Système de gestion des redevances environnementales - Redevances annuelles environnementales',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 4, 20),
        version: '1.1.0',
        responsable: 'Rose Ndayizeye',
        email: 'environnement@minenv.bi',
        telephone: '+257 22 22 22 40',
        siteWeb: 'https://environnement.bi/redevances',
        commissions: generateMockCommissions(19, 5),
        transactions: generateMockTransactions(19, 18)
    },
    {
        id: 20,
        numero: 16,
        abreviation: 'SANTE-PUBLIQUE',
        description: 'Système de gestion des prestations de santé et des pharmacies - Prestations des services de santé',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 7, 1),
        version: '2.1.0',
        responsable: 'Claude Mukiza',
        email: 'sante@minsante.bi',
        telephone: '+257 22 22 22 41',
        siteWeb: 'https://sante.bi/services',
        commissions: generateMockCommissions(20, 6),
        transactions: generateMockTransactions(20, 30)
    },
    {
        id: 21,
        numero: 17,
        abreviation: 'AGRICULTURE-SEMENCES',
        description: 'Système de gestion des ventes de semences et produits agricoles - Ventes des semences',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 2, 15),
        version: '1.0.0',
        responsable: 'Henri Niyonshuti',
        email: 'agriculture@minagri.bi',
        telephone: '+257 22 22 22 42',
        siteWeb: 'https://agriculture.bi/semences',
        commissions: generateMockCommissions(21, 4),
        transactions: generateMockTransactions(21, 12)
    },
    {
        id: 22,
        numero: 18,
        abreviation: 'DIVIDENDES-ETAT',
        description: "Système de gestion des dividendes de l'État - Dividendes entreprises financières et non financières",
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2021, 11, 10),
        version: '1.5.0',
        responsable: 'Jeannine Niyikiza',
        email: 'dividendes@minfin.bi',
        telephone: '+257 22 22 22 43',
        siteWeb: 'https://minfin.bi/dividendes',
        commissions: generateMockCommissions(22, 3),
        transactions: generateMockTransactions(22, 45)
    },
    {
        id: 23,
        numero: 19,
        abreviation: 'PROTECTION-MARQUES',
        description: 'Système de gestion des dépôts et publications de marques - Protection des marques',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 9, 5),
        version: '1.0.2',
        responsable: 'Bertrand Hakorimana',
        email: 'marques@opi.bi',
        telephone: '+257 22 22 22 44',
        siteWeb: 'https://opi.bi/marques',
        commissions: generateMockCommissions(23, 4),
        transactions: generateMockTransactions(23, 8)
    },
    {
        id: 24,
        numero: 20,
        abreviation: 'POIDS-MESURES',
        description: 'Système de gestion de la vérification des poids et mesures',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 6, 15),
        version: '1.0.1',
        responsable: 'Suzanne Niyomugabo',
        email: 'poids@commerce.bi',
        telephone: '+257 22 22 22 45',
        siteWeb: 'https://commerce.bi/poids',
        commissions: generateMockCommissions(24, 3),
        transactions: generateMockTransactions(24, 15)
    },
    {
        id: 25,
        numero: 21,
        abreviation: 'ATTESTATIONS-FISCALES',
        description: 'Système de gestion des attestations fiscales et réimpression de NIF',
        type: 'EXTERNE',
        actif: true,
        dateCreation: new Date(2022, 10, 20),
        version: '2.0.0',
        responsable: 'Aline Ndayisenga',
        email: 'attestations@impots.bi',
        telephone: '+257 22 22 22 46',
        siteWeb: 'https://impots.bi/attestations',
        commissions: generateMockCommissions(25, 5),
        transactions: generateMockTransactions(25, 28)
    }
];