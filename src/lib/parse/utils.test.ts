import { ChaseTransaction, CitiTransaction, WfTransaction } from "@/types/Transaction";
import { toStandardizedFormat } from "./utils";

const correctAnswer = {
  transactionDate: '2024-07-20',
  amount: '4.20',
  description: 'Egg tart',
  isPayment: false,
}

test('Citi transaction standardizing function works', () => {
    const t: CitiTransaction = {
      status: 'Cleared',
      date: '2024-07-20',
      description: 'Egg tart',
      debit: '',
      credit: '4.20',
      areAmountsNegative: false,
      bank: 'citi'
    }

  expect(toStandardizedFormat(t)).toEqual(correctAnswer);
});

test('Wf transaction standardizing function works', () => {
  const t: WfTransaction = {
    date: '2024-07-20',
    amount: '-4.20',
    notSureWhatThisIs: 'Some value',
    notSureWhatThisIs2: 'Another value',
    description: 'Egg tart',
    areAmountsNegative: true,
    bank: 'wf'
  }

expect(toStandardizedFormat(t)).toEqual(correctAnswer);
});

test('Chase transaction standardizing function works', () => {
  const t: ChaseTransaction = {
    transactionDate: '2024-07-20',
    postDate: '2024-07-21',
    description: 'Egg tart',
    category: 'Food',
    type: 'Debit',
    amount: '-4.20',
    memo: '',
    areAmountsNegative: true,
    bank: 'chase'
  }

expect(toStandardizedFormat(t)).toEqual(correctAnswer);
});