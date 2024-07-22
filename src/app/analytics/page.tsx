"use client";

import { SpendingPieChart } from "@/components/custom/charts/SpendingPieChart";
import { Button } from "@/components/ui/button";
import { SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  getCategoryForDescription,
  writeCategoryForDescription,
} from "@/lib/categories";

export default function AnalyticsPage() {
  const [description, setDescription] = useState("");
  const [descriptionToUpdate, setDescriptionToUpdate] = useState("");
  const [category, setCategory] = useState("");
  const handleKeyUp = (e: any) => {
    setDescription(e.target.value);
  };
  const handleUpdateDescriptionKeyUp = (e: any) => {
    setDescriptionToUpdate(e.target.value);
  };
  const handleCategoryKeyUp = (e: any) => {
    setCategory(e.target.value);
  };
  return (
    <div>
      <SpendingPieChart></SpendingPieChart>
      <Input
        type="description"
        placeholder="Description"
        onKeyUp={handleKeyUp}
      />
      <Button
        onClick={() => getCategoryForDescription(description)}
        variant="outline"
      >
        Search description categories
      </Button>

      <Input
        type="description"
        placeholder="Description to update"
        onKeyUp={handleUpdateDescriptionKeyUp}
      />
      <Input
        type="description"
        placeholder="Category"
        onKeyUp={handleCategoryKeyUp}
      />
      <Button
        onClick={() =>
          writeCategoryForDescription(descriptionToUpdate, category)
        }
        variant="outline"
      >
        Update description
      </Button>
    </div>
  );
}
