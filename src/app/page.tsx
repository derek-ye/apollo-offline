"use client";

import SpendingLineChart from "@/components/designsystem/charts/SpendingLineChart";
import { TransactionTable } from "@/components/designsystem/tables/TransactionTableOld";
import { useEffect } from "react";
import { parseFile } from "@/lib/parse/papaparse";

const stockData = [
  {
    id: "Close",
    color: "hsl(44, 70%, 50%)",
    data: [
      {
        x: "2024-07-01",
        y: 216.75,
      },
      {
        x: "2024-06-28",
        y: 210.62,
      },
      {
        x: "2024-06-27",
        y: 214.1,
      },
      {
        x: "2024-06-26",
        y: 213.25,
      },
      {
        x: "2024-06-25",
        y: 209.07,
      },
      {
        x: "2024-06-24",
        y: 208.14,
      },
      {
        x: "2024-06-21",
        y: 207.49,
      },
      {
        x: "2024-06-20",
        y: 209.68,
      },
      {
        x: "2024-06-18",
        y: 214.29,
      },
      {
        x: "2024-06-17",
        y: 216.67,
      },
      {
        x: "2024-06-14",
        y: 212.49,
      },
      {
        x: "2024-06-13",
        y: 214.24,
      },
      {
        x: "2024-06-12",
        y: 213.07,
      },
      {
        x: "2024-06-11",
        y: 207.15,
      },
      {
        x: "2024-06-10",
        y: 193.12,
      },
      {
        x: "2024-06-07",
        y: 196.89,
      },
      {
        x: "2024-06-06",
        y: 194.48,
      },
      {
        x: "2024-06-05",
        y: 195.87,
      },
      {
        x: "2024-06-04",
        y: 194.35,
      },
      {
        x: "2024-06-03",
        y: 194.03,
      },
      {
        x: "2024-05-31",
        y: 192.25,
      },
      {
        x: "2024-05-30",
        y: 191.29,
      },
      {
        x: "2024-05-29",
        y: 190.29,
      },
      {
        x: "2024-05-28",
        y: 189.99,
      },
      {
        x: "2024-05-24",
        y: 189.98,
      },
      {
        x: "2024-05-23",
        y: 186.88,
      },
      {
        x: "2024-05-22",
        y: 190.9,
      },
      {
        x: "2024-05-21",
        y: 192.35,
      },
      {
        x: "2024-05-20",
        y: 191.04,
      },
      {
        x: "2024-05-17",
        y: 189.87,
      },
      {
        x: "2024-05-16",
        y: 189.84,
      },
      {
        x: "2024-05-15",
        y: 189.72,
      },
      {
        x: "2024-05-14",
        y: 187.43,
      },
      {
        x: "2024-05-13",
        y: 186.28,
      },
      {
        x: "2024-05-10",
        y: 183.05,
      },
      {
        x: "2024-05-09",
        y: 184.57,
      },
      {
        x: "2024-05-08",
        y: 182.74,
      },
      {
        x: "2024-05-07",
        y: 182.4,
      },
      {
        x: "2024-05-06",
        y: 181.71,
      },
      {
        x: "2024-05-03",
        y: 183.38,
      },
      {
        x: "2024-05-02",
        y: 173.03,
      },
      {
        x: "2024-05-01",
        y: 169.3,
      },
      {
        x: "2024-04-30",
        y: 170.33,
      },
      {
        x: "2024-04-29",
        y: 173.5,
      },
      {
        x: "2024-04-26",
        y: 169.3,
      },
      {
        x: "2024-04-25",
        y: 169.89,
      },
      {
        x: "2024-04-24",
        y: 169.02,
      },
      {
        x: "2024-04-23",
        y: 166.9,
      },
      {
        x: "2024-04-22",
        y: 165.84,
      },
      {
        x: "2024-04-19",
        y: 165.0,
      },
      {
        x: "2024-04-18",
        y: 167.04,
      },
      {
        x: "2024-04-17",
        y: 168.0,
      },
      {
        x: "2024-04-16",
        y: 169.38,
      },
      {
        x: "2024-04-15",
        y: 172.69,
      },
      {
        x: "2024-04-12",
        y: 176.55,
      },
      {
        x: "2024-04-11",
        y: 175.04,
      },
      {
        x: "2024-04-10",
        y: 167.78,
      },
      {
        x: "2024-04-09",
        y: 169.67,
      },
      {
        x: "2024-04-08",
        y: 168.45,
      },
      {
        x: "2024-04-05",
        y: 169.58,
      },
      {
        x: "2024-04-04",
        y: 168.82,
      },
      {
        x: "2024-04-03",
        y: 169.65,
      },
      {
        x: "2024-04-02",
        y: 168.84,
      },
      {
        x: "2024-04-01",
        y: 170.03,
      },
      {
        x: "2024-03-28",
        y: 171.48,
      },
      {
        x: "2024-03-27",
        y: 173.31,
      },
      {
        x: "2024-03-26",
        y: 169.71,
      },
      {
        x: "2024-03-25",
        y: 170.85,
      },
      {
        x: "2024-03-22",
        y: 172.28,
      },
      {
        x: "2024-03-21",
        y: 171.37,
      },
      {
        x: "2024-03-20",
        y: 178.67,
      },
      {
        x: "2024-03-19",
        y: 176.08,
      },
      {
        x: "2024-03-18",
        y: 173.72,
      },
      {
        x: "2024-03-15",
        y: 172.62,
      },
      {
        x: "2024-03-14",
        y: 173.0,
      },
      {
        x: "2024-03-13",
        y: 171.13,
      },
      {
        x: "2024-03-12",
        y: 173.23,
      },
      {
        x: "2024-03-11",
        y: 172.75,
      },
      {
        x: "2024-03-08",
        y: 170.73,
      },
      {
        x: "2024-03-07",
        y: 169.0,
      },
      {
        x: "2024-03-06",
        y: 169.12,
      },
      {
        x: "2024-03-05",
        y: 170.12,
      },
      {
        x: "2024-03-04",
        y: 175.1,
      },
      {
        x: "2024-03-01",
        y: 179.66,
      },
      {
        x: "2024-02-29",
        y: 180.75,
      },
      {
        x: "2024-02-28",
        y: 181.42,
      },
      {
        x: "2024-02-27",
        y: 182.63,
      },
      {
        x: "2024-02-26",
        y: 181.16,
      },
      {
        x: "2024-02-23",
        y: 182.52,
      },
      {
        x: "2024-02-22",
        y: 184.37,
      },
      {
        x: "2024-02-21",
        y: 182.32,
      },
      {
        x: "2024-02-20",
        y: 181.56,
      },
      {
        x: "2024-02-16",
        y: 182.31,
      },
      {
        x: "2024-02-15",
        y: 183.86,
      },
      {
        x: "2024-02-14",
        y: 184.15,
      },
      {
        x: "2024-02-13",
        y: 185.04,
      },
      {
        x: "2024-02-12",
        y: 187.15,
      },
      {
        x: "2024-02-09",
        y: 188.85,
      },
      {
        x: "2024-02-08",
        y: 188.32,
      },
      {
        x: "2024-02-07",
        y: 189.41,
      },
      {
        x: "2024-02-06",
        y: 189.3,
      },
      {
        x: "2024-02-05",
        y: 187.68,
      },
      {
        x: "2024-02-02",
        y: 185.85,
      },
      {
        x: "2024-02-01",
        y: 186.86,
      },
      {
        x: "2024-01-31",
        y: 184.4,
      },
      {
        x: "2024-01-30",
        y: 188.04,
      },
      {
        x: "2024-01-29",
        y: 191.73,
      },
      {
        x: "2024-01-26",
        y: 192.42,
      },
      {
        x: "2024-01-25",
        y: 194.17,
      },
      {
        x: "2024-01-24",
        y: 194.5,
      },
      {
        x: "2024-01-23",
        y: 195.18,
      },
      {
        x: "2024-01-22",
        y: 193.89,
      },
      {
        x: "2024-01-19",
        y: 191.56,
      },
      {
        x: "2024-01-18",
        y: 188.63,
      },
      {
        x: "2024-01-17",
        y: 182.68,
      },
      {
        x: "2024-01-16",
        y: 183.63,
      },
      {
        x: "2024-01-12",
        y: 185.92,
      },
      {
        x: "2024-01-11",
        y: 185.59,
      },
      {
        x: "2024-01-10",
        y: 186.19,
      },
      {
        x: "2024-01-09",
        y: 185.14,
      },
      {
        x: "2024-01-08",
        y: 185.56,
      },
      {
        x: "2024-01-05",
        y: 181.18,
      },
      {
        x: "2024-01-04",
        y: 181.91,
      },
      {
        x: "2024-01-03",
        y: 184.25,
      },
      {
        x: "2024-01-02",
        y: 185.64,
      },
      {
        x: "2023-12-29",
        y: 192.53,
      },
      {
        x: "2023-12-28",
        y: 193.58,
      },
      {
        x: "2023-12-27",
        y: 193.15,
      },
      {
        x: "2023-12-26",
        y: 193.05,
      },
      {
        x: "2023-12-22",
        y: 193.6,
      },
      {
        x: "2023-12-21",
        y: 194.68,
      },
      {
        x: "2023-12-20",
        y: 194.83,
      },
      {
        x: "2023-12-19",
        y: 196.94,
      },
      {
        x: "2023-12-18",
        y: 195.89,
      },
      {
        x: "2023-12-15",
        y: 197.57,
      },
      {
        x: "2023-12-14",
        y: 198.11,
      },
      {
        x: "2023-12-13",
        y: 197.96,
      },
      {
        x: "2023-12-12",
        y: 194.71,
      },
      {
        x: "2023-12-11",
        y: 193.18,
      },
      {
        x: "2023-12-08",
        y: 195.71,
      },
      {
        x: "2023-12-07",
        y: 194.27,
      },
      {
        x: "2023-12-06",
        y: 192.32,
      },
      {
        x: "2023-12-05",
        y: 193.42,
      },
      {
        x: "2023-12-04",
        y: 189.43,
      },
      {
        x: "2023-12-01",
        y: 191.24,
      },
      {
        x: "2023-11-30",
        y: 189.95,
      },
      {
        x: "2023-11-29",
        y: 189.37,
      },
      {
        x: "2023-11-28",
        y: 190.4,
      },
      {
        x: "2023-11-27",
        y: 189.79,
      },
      {
        x: "2023-11-24",
        y: 189.97,
      },
      {
        x: "2023-11-22",
        y: 191.31,
      },
      {
        x: "2023-11-21",
        y: 190.64,
      },
      {
        x: "2023-11-20",
        y: 191.45,
      },
      {
        x: "2023-11-17",
        y: 189.69,
      },
      {
        x: "2023-11-16",
        y: 189.71,
      },
      {
        x: "2023-11-15",
        y: 188.01,
      },
      {
        x: "2023-11-14",
        y: 187.44,
      },
      {
        x: "2023-11-13",
        y: 184.8,
      },
      {
        x: "2023-11-10",
        y: 186.4,
      },
      {
        x: "2023-11-09",
        y: 182.41,
      },
      {
        x: "2023-11-08",
        y: 182.89,
      },
      {
        x: "2023-11-07",
        y: 181.82,
      },
      {
        x: "2023-11-06",
        y: 179.23,
      },
      {
        x: "2023-11-03",
        y: 176.65,
      },
      {
        x: "2023-11-02",
        y: 177.57,
      },
      {
        x: "2023-11-01",
        y: 173.97,
      },
      {
        x: "2023-10-31",
        y: 170.77,
      },
      {
        x: "2023-10-30",
        y: 170.29,
      },
      {
        x: "2023-10-27",
        y: 168.22,
      },
      {
        x: "2023-10-26",
        y: 166.89,
      },
      {
        x: "2023-10-25",
        y: 171.1,
      },
      {
        x: "2023-10-24",
        y: 173.44,
      },
      {
        x: "2023-10-23",
        y: 173.0,
      },
      {
        x: "2023-10-20",
        y: 172.88,
      },
      {
        x: "2023-10-19",
        y: 175.46,
      },
      {
        x: "2023-10-18",
        y: 175.84,
      },
      {
        x: "2023-10-17",
        y: 177.15,
      },
      {
        x: "2023-10-16",
        y: 178.72,
      },
      {
        x: "2023-10-13",
        y: 178.85,
      },
      {
        x: "2023-10-12",
        y: 180.71,
      },
      {
        x: "2023-10-11",
        y: 179.8,
      },
      {
        x: "2023-10-10",
        y: 178.39,
      },
      {
        x: "2023-10-09",
        y: 178.99,
      },
      {
        x: "2023-10-06",
        y: 177.49,
      },
      {
        x: "2023-10-05",
        y: 174.91,
      },
      {
        x: "2023-10-04",
        y: 173.66,
      },
      {
        x: "2023-10-03",
        y: 172.4,
      },
      {
        x: "2023-10-02",
        y: 173.75,
      },
      {
        x: "2023-09-29",
        y: 171.21,
      },
      {
        x: "2023-09-28",
        y: 170.69,
      },
      {
        x: "2023-09-27",
        y: 170.43,
      },
      {
        x: "2023-09-26",
        y: 171.96,
      },
      {
        x: "2023-09-25",
        y: 176.08,
      },
      {
        x: "2023-09-22",
        y: 174.79,
      },
      {
        x: "2023-09-21",
        y: 173.93,
      },
      {
        x: "2023-09-20",
        y: 175.49,
      },
      {
        x: "2023-09-19",
        y: 179.07,
      },
      {
        x: "2023-09-18",
        y: 177.97,
      },
      {
        x: "2023-09-15",
        y: 175.01,
      },
      {
        x: "2023-09-14",
        y: 175.74,
      },
      {
        x: "2023-09-13",
        y: 174.21,
      },
      {
        x: "2023-09-12",
        y: 176.3,
      },
      {
        x: "2023-09-11",
        y: 179.36,
      },
      {
        x: "2023-09-08",
        y: 178.18,
      },
      {
        x: "2023-09-07",
        y: 177.56,
      },
      {
        x: "2023-09-06",
        y: 182.91,
      },
      {
        x: "2023-09-05",
        y: 189.7,
      },
      {
        x: "2023-09-01",
        y: 189.46,
      },
      {
        x: "2023-08-31",
        y: 187.87,
      },
      {
        x: "2023-08-30",
        y: 187.65,
      },
      {
        x: "2023-08-29",
        y: 184.12,
      },
      {
        x: "2023-08-28",
        y: 180.19,
      },
      {
        x: "2023-08-25",
        y: 178.61,
      },
      {
        x: "2023-08-24",
        y: 176.38,
      },
      {
        x: "2023-08-23",
        y: 181.12,
      },
      {
        x: "2023-08-22",
        y: 177.23,
      },
      {
        x: "2023-08-21",
        y: 175.84,
      },
      {
        x: "2023-08-18",
        y: 174.49,
      },
      {
        x: "2023-08-17",
        y: 174.0,
      },
      {
        x: "2023-08-16",
        y: 176.57,
      },
      {
        x: "2023-08-15",
        y: 177.45,
      },
      {
        x: "2023-08-14",
        y: 179.46,
      },
      {
        x: "2023-08-11",
        y: 177.79,
      },
      {
        x: "2023-08-10",
        y: 177.97,
      },
      {
        x: "2023-08-09",
        y: 178.19,
      },
      {
        x: "2023-08-08",
        y: 179.8,
      },
      {
        x: "2023-08-07",
        y: 178.85,
      },
      {
        x: "2023-08-04",
        y: 181.99,
      },
      {
        x: "2023-08-03",
        y: 191.17,
      },
      {
        x: "2023-08-02",
        y: 192.58,
      },
      {
        x: "2023-08-01",
        y: 195.61,
      },
      {
        x: "2023-07-31",
        y: 196.45,
      },
      {
        x: "2023-07-28",
        y: 195.83,
      },
      {
        x: "2023-07-27",
        y: 193.22,
      },
      {
        x: "2023-07-26",
        y: 194.5,
      },
      {
        x: "2023-07-25",
        y: 193.62,
      },
      {
        x: "2023-07-24",
        y: 192.75,
      },
      {
        x: "2023-07-21",
        y: 191.94,
      },
      {
        x: "2023-07-20",
        y: 193.13,
      },
      {
        x: "2023-07-19",
        y: 195.1,
      },
      {
        x: "2023-07-18",
        y: 193.73,
      },
      {
        x: "2023-07-17",
        y: 193.99,
      },
      {
        x: "2023-07-14",
        y: 190.69,
      },
      {
        x: "2023-07-13",
        y: 190.54,
      },
      {
        x: "2023-07-12",
        y: 189.77,
      },
      {
        x: "2023-07-11",
        y: 188.08,
      },
      {
        x: "2023-07-10",
        y: 188.61,
      },
      {
        x: "2023-07-07",
        y: 190.68,
      },
      {
        x: "2023-07-06",
        y: 191.81,
      },
      {
        x: "2023-07-05",
        y: 191.33,
      },
      {
        x: "2023-07-03",
        y: 192.46,
      },
    ],
  },
];

export default function Home() {
  useEffect(() => {
    parseFile("/csvs/chase-example.csv", "chase");
  }, []);
  return (
    <div style={{ width: "1200px", height: "500px" }}>
      <SpendingLineChart data={stockData} />
      <TransactionTable></TransactionTable>
    </div>
  );
}
