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
          <div className="flex flex-col">
            <label>Travel Type</label>
            <select 
              className="border border-solid border-black px-2 py-2 w-96"
              value={selectedTravelOption}
              onChange={(e) => setSelectedTravelOption(e.target.value)}
            >
              <option value="" defaultChecked>Select Travel Type</option>

              {
                travelOptions.map((travelOption) => (
                  <option value={travelOption.type} key={travelOption.type}>
                    {travelOption.type}
                  </option>
                ))
              }

            </select>
          </div>

          <FormSelect
            label="Travel Type"
            selectValue={selectedTravelOption}
            setSelectValue={setSelectedTravelOption}
            defaultForSelect="Select Travel Type"
            optionValue={travelOptions.type}
          />

          <div className="flex flex-col">
            <label>Schedule</label>
            <select
              className="border border-solid border-black px-2 py-2 w-96"
              value={selectedSched}
              onChange={(e) => setSelectedSched(e.target.value)}
            >
              <option value="" defaultChecked>Select Schedule</option>

              {
                schedules.map((sched, i) => (
                  <option 
                    value={`${sched.day} - ${sched.time}`}
                    key={i}
                  >{`${sched.day} - ${sched.time}`}</option>
                ))
              }
            </select>
          </div>

          <div className="flex flex-col">
              <label>Seating</label>
              <select
                className="border border-solid border-black px-2 py-2 w-96"

              >
                <option value="" defaultChecked>Choose Seat</option>

                
              </select>
          </div>
        </section>
      </form>
    </div>
  );
}