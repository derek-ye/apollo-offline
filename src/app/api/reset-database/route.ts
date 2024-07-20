import { apiGet } from "../migrate/database";
import { migrate } from "../migrate/migrations";

export async function GET(req: Request, res: Response) {

    const query = `
       DROP TABLE transactions;
     `;
   
    let status, body;
    try {
     await apiGet(query)
      .then((res) => {
       status = 200;
       body = res;
       console.log('Table dropped successfully!')
      })
      .catch((err: Error) => {
       status = 400;
       body = { error: err };
      });
      await migrate()
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