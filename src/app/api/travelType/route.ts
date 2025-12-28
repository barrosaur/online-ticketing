import { db } from '../db'

export async function GET() {
  try {

    const query = 'SELECT * FROM travel_types'
    const [results] = await db.query(query)

    return new Response(
      JSON.stringify({ results, message: 'Data Fetch Successful' }),
      { 
        status : 200,
        headers: { 'Content-type' : 'application/json' } 
      }
    )

  } catch (err) {
    console.error(err)

    return new Response(
      JSON.stringify({ message: `Fetch Error: ${err}` }),
      { status: 500 }
    )
  }
}