"use client";

import { SpendingPieChart } from "@/components/custom/charts/SpendingPieChart";
import { Button } from "@/components/ui/button";
import { SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";

export default function AnalyticsPage() {
  const [description, setDescription] = useState("");
  const getCategoryForDescription = () => {
    fetch(`/api/categorize/get-category/${description}`);
  };
  const handleKeyUp = (e: any) => {
    setDescription(e.target.value);
  };
  return (
    <div>
      <SpendingPieChart></SpendingPieChart>
      <Input
        type="description"
        placeholder="Description"
        onKeyUp={handleKeyUp}
      />
      <Button onClick={getCategoryForDescription} variant="outline">
        Search description categories
      </Button>
    </div>
  );
}
