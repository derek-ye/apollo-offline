"use client";
import { TransactionTable } from "@/components/custom/tables/TransactionTable";
import { Button } from "@/components/ui/button";
import { ApolloTransaction } from "@/types/Transaction";
import { clear } from "console";
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
  const clearTransactions = async () => {
    fetch("/api/reset-database");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="mt-4 mb-8 text-2xl font-medium">Transaction List</h1>
      <div className="space-x-4 mb-4">
        <Button onClick={fetchTransactions} variant="outline">
          Refresh Transactions
        </Button>
        <Button onClick={clearTransactions} variant="destructive">
          Clear DB
        </Button>
      </div>
      <TransactionTable transactions={transactions}></TransactionTable>
    </div>
  );
};

export default TransactionListPage;
