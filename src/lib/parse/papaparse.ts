import { SupportedBanks } from '@/types/Transaction';
import Papa from 'papaparse';
import { bankFormatArrayToObject, toStandardizedFormat } from './utils';

export const parseFile = (url: string, bankType: SupportedBanks) => {
    const header = bankType === 'wf' ? true : false
    return Papa.parse(url, {
        header,
        download: true,
        step: function(row: any) {
            // console.log("Row:", row.data);
            // add to database
            const unstandardizedTrans = bankFormatArrayToObject(row.data, bankType)
            if (unstandardizedTrans) {
                console.log(unstandardizedTrans)
                console.log(toStandardizedFormat(unstandardizedTrans))
                fetch('/api/transactions', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(toStandardizedFormat(unstandardizedTrans))
                })
            }
            
        },
        complete: function() {
            console.log("All done!");
        }
    });
}