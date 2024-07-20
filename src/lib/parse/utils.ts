import { ApolloTransaction, BankTransaction, ChaseTransaction, CitiTransaction, SupportedBanks, WfTransaction } from "@/types/Transaction";

export const bankFormatArrayToObject = (transactionFieldArr: string[], bankType: SupportedBanks): BankTransaction | undefined => {
    const t = transactionFieldArr
     switch (bankType) {
        case "bofa":
            break
        case "citi":
            return {
                status: t[0],
                date: t[1],
                description: t[2],
                debit: t[3],
                credit: t[4],
                areAmountsNegative: false,
                bank: 'citi'
            }
        case "wf":
            return {
                date: t[0],
                amount: t[1],
                notSureWhatThisIs: t[2],
                notSureWhatThisIs2: t[3],
                description: t[4],
                areAmountsNegative: true,
                bank: 'wf'
            }
        case "chase":
            return {
                transactionDate: t[0],
                postDate: t[1],
                description: t[2],
                category: t[3],
                type: t[4],
                amount: t[5],
                memo: t[6],
                areAmountsNegative: true,
                bank: 'chase'
            }
        default:
            throw 'Unidentified bank detected'
     }
}

export function toStandardizedFormat (transaction: BankTransaction): ApolloTransaction | undefined {
    switch(transaction.bank) {
        // case 'bofa':
        //     return 
        case "citi":
            return standardizeCiti(transaction as CitiTransaction)
        case "wf":
            return standardizeWf(transaction as WfTransaction)
        case "chase":
            return standardizeChase(transaction as ChaseTransaction)
    }
}

export function standardizeCiti (t: CitiTransaction): ApolloTransaction {
    const a = t.debit === '' ? Number(t.credit) : Number(t.debit)
    const isPayment: boolean = t.debit === '' ? false : true
    const amount: string = t.areAmountsNegative ? (-a).toFixed(2) : a.toFixed(2)
    return {
        transactionDate: t.date,
        amount,
        description: t.description,
        isPayment,
    }
}

export function standardizeWf (t: WfTransaction): ApolloTransaction {
    const a = Number(t.amount)
    const isPayment: boolean = t.areAmountsNegative && a > 0 ? true : false
    const amount: string = t.areAmountsNegative ? (-a).toFixed(2) : a.toFixed(2)
    return {
        transactionDate: t.date,
        amount,
        description: t.description,
        isPayment,
    }
}

export function standardizeChase (t: ChaseTransaction): ApolloTransaction {
    const a = Number(t.amount)
    const isPayment: boolean = t.areAmountsNegative && a > 0 ? true : false
    const amount: string = t.areAmountsNegative ? (-a).toFixed(2) : a.toFixed(2)
    return {
        transactionDate: t.transactionDate,
        amount,
        description: t.description,
        isPayment,
    }
}