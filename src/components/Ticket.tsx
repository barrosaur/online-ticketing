import React from 'react'
import Image from 'next/image'

const Ticket = () => {
  const imgSize = 200

  return (
    <div className='shadow-2xl my-10 w-1/2 flex flex-col justify-center rounded-lg'>
      <div className='flex justify-center items-center bg-(--red)'>
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
          <p>Name: <span className='font-bold ml-10'>Test</span></p>
          <p>Trip Type: <span className='font-bold ml-5'>Bus</span></p>
          <p>Schedule: <span className='font-bold ml-5'>Monday, 8:00 AM - 10:00 AM</span></p>
          <p>Seat: <span className='font-bold ml-13'>A1</span></p>
          <p>Status: <span className='font-bold ml-10'>PAID</span></p>
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
    </div>
  )
}

export default Ticket