'use client'
import { useState, useEffect } from "react";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import SeatingPlan from "@/components/SeatingPlan";

interface CustomerDataProps {
  firstName: string,
  lastName: string,
  middleName: string,
  refNum: string,
  travelType: string,
  schedule: string,
  seat: string
}

export default function BookingPage() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [refNum, setRefNum] = useState('')

  const [travelOptions, setTravelOptions] = useState([])
  const [selectedTravelOption, setSelectedTravelOption] = useState('')

  const [schedules, setSchedules] = useState([])
  const [selectedSched, setSelectedSched] = useState('')

  const [seats, setSeats] = useState([])
  const [selectedSeat, setSelectedSeat] = useState('')

  useEffect(() => {

    const fetchTravelOptionData = async () => {
      try {

        const res = await fetch('/api/travelType')
        const travelOptionsData = await res.json()

        setTravelOptions(travelOptionsData.results)

      } catch (err) {
        return new Response(
          JSON.stringify({ message: `Data Fetch Error: ${err}` }),
          { status: 500 }
        )
      }
    }

    fetchTravelOptionData()

  }, [])

  useEffect(() => {

    const fetchScheduleData = async () => {
      if (!selectedTravelOption) return
      
      try {

        const res = await fetch(`/api/schedules?travel_type=${selectedTravelOption}`)
        const scheduleData = await res.json()

        setSchedules(scheduleData.results || scheduleData)

      } catch (err) {
        console.error(err)
        return new Response(
          JSON.stringify({ message: 'Fetch error' }),
          { status: 500 }
        )
      }
    }

    fetchScheduleData()

  }, [selectedTravelOption])

  useEffect(() => {
    if(!selectedTravelOption) return

    const fetchSeatsData = async () => {
      try {

        const res = await fetch(`/api/seats?travel_type=${selectedTravelOption}`)
        const seatData = await res.json()

        setSeats(seatData.results || seatData)

      } catch (err) {
        console.error(err)
        return new Response(
          JSON.stringify({ message: 'Fetch Error' }),
          { status: 500 }
        )
      }
    }

    fetchSeatsData()

  }, [selectedTravelOption])

  function clearInput() {
    setFirstName('')
    setLastName('')
    setMiddleName('')
    setRefNum('')
    setSelectedTravelOption('')
    setSelectedSched('')
    setSelectedSeat('')
  }

  const post = async (e) => {
    e.preventDefault()

    const data = {
      firstName,
      lastName,
      middleName,
      refNum,
      selectedTravelOption,
      selectedSched,
      selectedSeat
    }

    console.log(data)

    try {
      const res = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await res.json()
      console.log(result)
      // clearInput()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-10 overflow-x-hidden">
      <h1 className="font-bold text-3xl">Book Now!</h1>
      <form 
        onSubmit={post}
        className="flex flex-col justify-center items-center gap-5"
      >
        <section className="flex gap-28 my-5">
          <FormInput
            label="First Name"
            value={firstName}
            type="text"
            setValue={setFirstName}
          />
          <FormInput
            label="Last Name"
            value={lastName}
            type="text"
            setValue={setLastName}
          />
          <FormInput
            label="Middle Name (Optional)"
            value={middleName}
            type="text"
            setValue={setMiddleName}
          />
        </section>
        <section className="flex gap-28 my-5">
          <FormSelect
            label="Travel Type"
            selectValue={selectedTravelOption}
            setSelectValue={setSelectedTravelOption}
            defaultOption="Select Travel Type"
            options={travelOptions.map(opt => opt.type)}          
          />
          <FormSelect
            label="Schedule"
            selectValue={selectedSched}
            setSelectValue={setSelectedSched}
            defaultOption="Select Schedule"
            options={schedules.map(schedule => `${schedule.day} - ${schedule.time}`)}
          />
          <FormSelect
            label="Seating"
            selectValue={selectedSeat}
            setSelectValue={setSelectedSeat}
            defaultOption="Choose a seat"
            options={seats.map(seat => seat.seat)}
          />
        </section>
        <section className="flex gap-28 my-5">
          <SeatingPlan
            label="BUS SEATING"
            src='/Bus.png'
            alt="Bus Seating"
          />
          <SeatingPlan
            label="SHIP SEATING"
            src='/Ship.png'
            alt="Ship Seating"
          />
          <SeatingPlan
            label="PLANE SEATING"
            src='/Plane.png'
            alt="Plane Seating"
          />
        </section>
        <section className="flex gap-36 my-5 items-center">
          <div className="flex gap-3 flex-col bg-(--red-light) px-15 py-5">
            <h3 className="font-bold text-xl">Payment Information:</h3>
            <p>Name: <span>Online Ticket Pay</span></p>
            <p>Account Number: <span>123456789</span></p>
          </div>
          <FormInput
            label="Reference No."
            type="text"
            value={refNum}
            setValue={setRefNum}
          />
          <FormInput
            label="Upload Proof of Payment"
            type="file"
          />
        </section>
        <button 
          type="submit"
          className="bg-emerald-600 px-5 py-3 text-white font-bold hover:bg-emerald-700 cursor-pointer outline-none rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}