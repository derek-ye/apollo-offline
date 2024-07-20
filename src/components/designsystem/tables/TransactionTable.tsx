import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApolloTransaction } from "@/types/Transaction";

export function TransactionTable({
  transactions,
}: {
  transactions: ApolloTransaction[];
}) {
  console.log(transactions);
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-inherit">
          <TableHead className="max-w-[240px]">Transaction Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Is Payment</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: ApolloTransaction) => (
          <TableRow key={t.id} className="hover:bg-neutral-100">
            <TableCell className="font-medium">{t.transactionDate}</TableCell>
            <TableCell>{t.description}</TableCell>
            <TableCell
              className={
                "text-right " +
                (t.isPayment ? "text-red-700" : "text-green-700")
              }
            >
              {t.amount}
            </TableCell>
            <TableCell className="text-center">
              {t.isPayment ? "✅" : "❌"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {transactions.reduce(
              (accumulator, t) => accumulator + Number(t.amount),
              0
            )}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
