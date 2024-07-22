export const getCategoryForDescription = async (description: string) => {
    const a = await fetch(`/api/categories/get-category/${description}`);
    return await a.json();
};

// update or replace category for a certain description
export const writeCategoryForDescription = (description: string, category: string) => {
    fetch("/api/categories/upsert-category", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        description,
        category,
        }),
    });
};
