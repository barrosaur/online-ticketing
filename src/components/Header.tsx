import React from 'react'
import Image from 'next/image'
import Button from './Button';

const Header = () => {
  const imgSize = 125;
  
  const labels = ['Home', 'About Us', 'Book Now!']

  return (
    <header className='w-full bg-(--red) text-white h-30 font-bold flex items-center'>
        <Image
          height={imgSize}
          width={imgSize}
          src='/logo.png'
          alt='Online Ticketing'
          className='mx-4'
        />
        <div className='ml-auto flex items-end h-full'>
          <nav className='flex gap-40 justify-center p-5'>
            { labels.map((label, i) => ( <Button key={i} btnLabel={label} /> )) }
          </nav>
        </div>
    </header>
  )
}

export default Header