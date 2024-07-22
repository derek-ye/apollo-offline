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
import CategoryDropdown from "./TransactionTableCategoryDropdown";

export function TransactionTable({
  transactions,
}: {
  transactions: ApolloTransaction[];
}) {
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-inherit">
          <TableHead className="max-w-[240px]">Transaction Date</TableHead>
          <TableHead>Description</TableHead>
          {/* <TableHead>Is Payment</TableHead> */}
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: ApolloTransaction) => (
          <TableRow key={t.id} className="hover:bg-neutral-100">
            <TableCell className="font-medium">{t.transactionDate}</TableCell>
            <TableCell>{t.description}</TableCell>
            {/* <TableCell className="text-center">
              {t.isPayment ? "✅" : "❌"}
            </TableCell> */}
            <TableCell>
              <CategoryDropdown description={t.description}></CategoryDropdown>
            </TableCell>
            <TableCell
              className={
                "text-right " +
                (t.isPayment ? "text-red-700" : "text-green-700")
              }
            >
              {t.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">
            {transactions
              .reduce((accumulator, t) => accumulator + Number(t.amount), 0)
              .toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
