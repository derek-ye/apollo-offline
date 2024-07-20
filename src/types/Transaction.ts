/**
 * @typedef Transaction
 * @type {object}
 * @property {string} transactionDate: the date that the transaction occurred
 * @property {number} amount: value of transaction
 */

/** @type {Transaction} */

interface ApolloTransaction {
    transactionDate: string
    amount: number
    isPayment?: boolean
    category?: string
}

export type SupportedBanks = 'bofa' | 'citi' | 'wf' | 'chase'
interface IBankTransaction {
    bank: SupportedBanks
    areAmountsNegative: boolean // some banks have negative transaction amounts
}

interface BofaTransaction extends IBankTransaction {
    // todo
}

export interface CitiTransaction extends IBankTransaction {
    status: string
    date: string
    description: string
    debit: string
    credit: string
    areAmountsNegative: false
}

interface WfTransaction extends IBankTransaction {
    // note: does not have a header
    date: string
    amount: string
    notSureWhatThisIs: string
    notSureWhatThisIs2: string
    description: string
    areAmountsNegative: true
}

interface ChaseTransaction extends IBankTransaction {
    transactionDate: string
    postDate: string
    description: string
    category: string
    type: string
    amount: string
    memo: string
    areAmountsNegative: true
}

export type BankTransaction = BofaTransaction | WfTransaction | CitiTransaction | ChaseTransaction

export type Transaction = ApolloTransaction | BankTransaction