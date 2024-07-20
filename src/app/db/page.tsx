"use client";
import { ApolloTransaction } from "@/types/Transaction";
import React, { useState, useEffect } from "react";

const TransactionListPage: React.FC = () => {
  const [transactions, setTransactions] = useState<ApolloTransaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/transactions");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTransactions(data);
      setError(null);
    } catch (e) {
      setError("Failed to fetch transactions");
      console.error("Error fetching transactions:", e);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Transaction List</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.isPayment ? "Payment" : "Charge"}</td>
              <td>{transaction.category || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={fetchTransactions}>Refresh Transactions</button>
    </div>
  );
};

export default TransactionListPage;
