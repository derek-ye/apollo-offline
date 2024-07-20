import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
   db.run(
    `
      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        transactionDate TEXT NOT NULL,
        amount TEXT NOT NULL,
        description TEXT NOT NULL,
        isPayment BOOLEAN,
        category TEXT
      );
    `,
    (err: Error) => {
     if (err) {
      console.error(err.message);
      throw err.message
     }
     console.log("Transactions table created successfully.");
    }
   );
  });
}