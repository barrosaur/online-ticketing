import { db } from '../db'

export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url)
    const travelType = searchParams.get("travel_type")

    let query = ""

    switch(travelType) {
      case "Bus":
        query = "SELECT * FROM bus_scheds"
        break
      case "Ship":
        query = "SELECT * FROM ship_scheds"
        break
      case "Plane":
        query = "SELECT * FROM plane_scheds"
        break
      default:
        return Response.json({ message: 'Invalid query' })
    }

    const [results] = await db.query(query)
    return Response.json(results)

  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ message: 'Error fetching data' }),
      { status: 500 }
    )
  }
}