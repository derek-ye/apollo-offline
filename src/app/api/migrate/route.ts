import { migrate } from "./migrations"

export async function GET() {
  try {
    const res = await migrate()
    return Response.json({ data: 'Migration complete' })
  }
  catch (err) {
    // do nothing rn
    return Response.json({ error: 'Something went wrong w/ the migration' })
  }
}