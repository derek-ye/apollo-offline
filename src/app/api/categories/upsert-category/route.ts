import { apiPost } from "../../migrate/database";

export async function POST(req: Request, res: Response) {
    const body = await req.json();

    const {
       description,
       category } = body;
   
    const query = `
       INSERT OR REPLACE INTO categorized_descriptions(
            description,
            category)
       VALUES(?, ?)
     `;
    const values = [
       description,
       category];
   
    let status, respBody;
    await apiPost(query, values)
     .then(() => {
      status = 200;
      respBody = { message: "Successfully added transaction" };
     })
     .catch((err) => {
      status = 400;
      respBody = err;
     });
    return Response.json(respBody, {
     status,
    });
}