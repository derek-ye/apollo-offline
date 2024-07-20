import { SupportedBanks } from '@/types/Transaction';
import Papa from 'papaparse';
import { bankFormatArrayToObject } from './utils';

export const parseFile = (url: string, bankType: SupportedBanks) => {
    return Papa.parse(url, {
        download: true,
        step: function(row: any) {
            // console.log("Row:", row.data);
            // add to database
            console.log(bankFormatArrayToObject(row.data, bankType))
            fetch('/api/transactions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(row.data)
            })
        },
        complete: function() {
            console.log("All done!");
        }
    });
}