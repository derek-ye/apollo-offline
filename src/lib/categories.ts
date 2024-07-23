export const getCategoryForDescription = async (description: string): Promise<any[]> => {
    console.log(description)
    const a = await fetch(`/api/categories/get-category/${description}`);
    const res = await a.json()
    console.log(res)
    return res;
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
