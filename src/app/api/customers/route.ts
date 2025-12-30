import { db } from '../db'

export async function POST(req: Request) {
  try {

    const body = await req.json()
    const { 
      firstName, 
      lastName,
      middleName, 
      refNum, 
      selectedTravelOption, 
      selectedSched, 
      selectedSeat
    } = body

    const query = `INSERT INTO customers 
    (last_name, first_name, middle_name, reference_num, travel_option, sched, seat) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`
    const [result] = await db.query(query, [firstName, lastName, middleName, refNum, selectedTravelOption, selectedSched, selectedSeat])

    return new Response(
      JSON.stringify({ message: 'POST OK', result }),
      { status: 200, headers: { 'Content-Type': 'application/json' }}
    )

  } catch (err) {
    console.error(`Data Post Error: ${err}`)
    return new Response(
      JSON.stringify({ message: err }),
      { status: 500 }
    )
  }
}