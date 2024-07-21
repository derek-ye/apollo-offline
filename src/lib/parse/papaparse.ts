import { SupportedBanks } from '@/types/Transaction';
import Papa from 'papaparse';
import { bankFormatArrayToObject, toStandardizedFormat } from './utils';

export const parseAndLoadFile = (url: string, bankType: SupportedBanks) => {
    const header = bankType === 'wf' ? true : false
    return Papa.parse(url, {
        header,
        download: true,
        step: function(row: any) {
            // console.log("Row:", row.data);
            // add to database
            const unstandardizedTrans = bankFormatArrayToObject(row.data, bankType)
            if (unstandardizedTrans) {
                const standardTransaction = toStandardizedFormat(unstandardizedTrans)
                // the following line is purely for getting rid of the header function. maybe find a better way to do this
                if (standardTransaction?.amount && Number(standardTransaction.amount) >= 0) {
                    fetch('/api/transactions', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(standardTransaction)
                    })
                }
            }
        },
        complete: function() {
            console.log("All done!");
        }
    });
}