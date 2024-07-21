import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TransactionTable } from "../tables/TransactionTable";
import { ApolloTransaction } from "@/types/Transaction";
import { useState, useEffect } from "react";

export default function TransactionListCard() {
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
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>Most recent transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <TransactionTable transactions={transactions}></TransactionTable>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
