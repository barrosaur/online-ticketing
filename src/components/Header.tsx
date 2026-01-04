'use client'
import React from "react";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import NavBtn from "./NavBtn";

const Header = () => {
  const imgSize = 125;
  const router = useRouter();

  const btnProps = [
    { name: 'Home', page: '/' },
    { name: 'About Us', page: '/about_us' },
    { name: 'Book Now!', page: '/booking' }
  ];

  const switchPage = (page: string) => {
    router.push(page);
  }

  return (
    <header className="w-full bg-red-600 text-white h-30 font-bold flex items-center">
      <Image
        height={imgSize}
        width={imgSize}
        src="/logo.png"
        alt="Online Ticketing"
        className="mx-4"
      />
      <div className="ml-auto flex items-end h-full">
        <nav className="flex gap-40 justify-center p-5">
          {btnProps.map((props, i) => (
            <NavBtn 
              key={i} 
              btnLabel={props.name}
              onSwitchPage={() => switchPage(props.page)} 
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
