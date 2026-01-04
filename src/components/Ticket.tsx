'use client'
import { useState } from 'react'
import jsPDF from 'jspdf'
import { snapdom } from '@zumer/snapdom'
import Image from 'next/image'

interface TicketProps {
  firstName: string,
  lastName: string,
  middleName: string,
  trip_type: string,
  schedule: string,
  seat: string,
  refNum: string
}

const Ticket = ({ firstName, lastName, middleName, trip_type, schedule, seat, refNum} : TicketProps) => {
  const imgSize = 200
  const [download, setDownload] = useState(false)

  const toDataURL = async (blob : Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  }

  const downloadTicket = async () => {
    const ticket = document.querySelector('#ticket')
    const imgData = await snapdom.toBlob(ticket, { type: 'png'})
    const imgDataURL = await toDataURL(imgData)

    const rect = ticket?.getBoundingClientRect()
    const pxWidth = rect?.width
    const pxHeight = rect?.height

    const inchWidth = pxWidth / 96
    const inchHeight = pxHeight / 96

    const pdf = new jsPDF({
      orientation: inchWidth > inchHeight ? 'landscape' : 'portrait',
      unit: 'in',
      format: [inchWidth, inchHeight]
    })
    pdf.addImage(imgDataURL, 'PNG', 0, 0, inchWidth, inchHeight)
    pdf.save(`Ticket-${firstName}${lastName}.pdf`)
  }

  return (
    <div className='shadow-2xl my-10 w-1/2 flex flex-col justify-center rounded-lg' id='ticket'>
      <div className='flex justify-center items-center bg-red-600'>
        <Image
          src='/logo.png'
          width={imgSize}
          height={imgSize}
          alt='Logo'
        />
        <h1 className='font-bold text-5xl ml-15 text-white'>Online Ticketing</h1>
      </div>
      <div className='my-10 flex justify-center gap-36'>
        <div className='flex flex-col justify-center gap-4'>
          <p>Name: <span className='font-bold ml-10'>{firstName} {middleName} {lastName}</span></p>
          <p>Trip Type: <span className='font-bold ml-5'>{trip_type}</span></p>
          <p>Schedule: <span className='font-bold ml-5'>{schedule}</span></p>
          <p>Seat: <span className='font-bold ml-13'>{seat}</span></p>
          <p>Status: <span className='font-bold ml-10'>{refNum ? 'PAID' : 'TO BE PAID'}</span></p>
        </div>
        <div className='flex justify-center items-center border border-solid border-black'>
          <Image
            src='/logo.png'
            width={imgSize}
            height={imgSize}
            alt='QR - Code'
          />
        </div>
      </div>
      <div className='flex mr-5 my-3 items-center justify-end'>
        {
          download ? (
            <div></div>
          ) : (
            <button 
              className='font-bold text-white text-lg bg-emerald-600 
              hover:bg-emerald-700 cursor-pointer px-5 py-2 rounded-sm'
              onClick={() => {
                downloadTicket(); 
                setDownload(true)
              }}
            >
              Download
          </button>
          )
        }
      </div>
    </div>
  )
}

export default Ticket