import { apiGet } from "../../../migrate/database";

export async function GET(req: Request, { params }: { params: { description: string } }) {
  const description = params.description
    const query = `
       SELECT * from categorized_descriptions WHERE description='${description}'
     `;
   
    let status, body;
    try {
     await apiGet(query)
      .then((res) => {
       status = 200;
       body = res;
      })
      .catch((err: Error) => {
       status = 400;
       body = { error: err };
      });
     return Response.json(body, {
      status,
     });
    } catch (error: any) {
     console.error(error.message);
     return Response.json(
      { error: error },
      {
       status: 400,
      }
     );
    }
}