"use client";

import { Button } from "@/components/ui/button";
import { parseAndLoadFile } from "@/lib/parse/papaparse";
import { LineChart } from "lucide-react";

export const loadAllFilesIntoDb = () =>
  parseAndLoadFile("/csvs/chase-example.csv", "chase");

export function SyncCsvButton(props: any) {
  return (
    <Button
      onClick={loadAllFilesIntoDb}
      variant="ghost"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
    >
      <LineChart className="h-5 w-5" />
    </Button>
  );
}
