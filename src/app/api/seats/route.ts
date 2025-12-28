import { db } from '../db'

export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url)
    const travelType = searchParams.get('travel_type')

    let query = "";

    switch(travelType) {
      case "Bus":
        query = "SELECT * FROM bus_seating"
        break;
      case "Plane":
        query = "SELECT * FROM plane_seating"
        break;
      case "Ship":
        query = "SELECT * FROM ship_seating"
        break;
      default:
        return Response.json({ message: `Invalid travel type: ${travelType}` })
    }

    const [results] = await db.query(query)
    return Response.json({ results, message: 'Success fetch' }) 

  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ message: 'Error fetching seats data' }),
      { status: 500 }
    )
  }
}