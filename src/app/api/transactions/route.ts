import { apiGet } from "../migrate/database";
import { apiPost } from "../migrate/database";

export async function GET(req: Request, res: Response) {

    const query = `
       SELECT * from transactions
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

export async function POST(req: Request, res: Response) {
    console.log(req.json())
 const body = await req.json();
 const { transactionDate,
    amount,
    description,
    isPayment,
    category } = body;

 const query = `
    INSERT INTO transactions(
        transactionDate,
        amount,
        description,
        isPayment,
        category)
    VALUES(?, ?, ?, ?, ?)
  `;
 const values = [transactionDate,
    amount,
    description,
    isPayment,
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