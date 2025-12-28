'use client'
import React, { useState, useEffect } from "react";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";

export default function BookingPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");

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

  
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="font-bold text-3xl">Book Now!</h1>
      <form className="flex flex-col justify-center items-center gap-5">
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
      </form>
    </div>
  );
}