import { SupportedBanks } from '@/types/Transaction';
import Papa from 'papaparse';

export const parseFile = (url: string, bankType: SupportedBanks) => {
    return Papa.parse(url, {
        download: true,
        step: function(row: any) {
            console.log("Row:", row.data);
            // probably write to a file locally here
        },
        complete: function() {
            console.log("All done!");
        }
    });
}