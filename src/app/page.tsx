import Image from "next/image";

export default function Home() {
  const imgSize = 330;

  return (
    <div className="flex h-screen overflow-hidden">
      <section 
        className='px-10 flex flex-col justify-center items-center'
      >
        <Image
          height={imgSize}
          width={imgSize}
          alt="Travel Image"
          src="/home-img-1.png"
        />
        <p className="text-center">
          When you book with our site, you unlock a seamless, reliable, and all-in-one travel experience. Enjoy easy comparisons, 
          secure payments, and exclusive deals across buses, planes, and ships; all in just a few clicks. With trusted partners, 
          clear pricing, and 24/7 support, our platform makes planning your journey simple, stress-free, and perfectly tailored 
          to your travel needs.
        </p>
      </section>
      <section 
        className='px-10 flex flex-col justify-center items-center bg-(--red-light)'
      >
        <Image
          height={imgSize}
          width={imgSize}
          alt="Travel Image"
          src="/home-img-2.png"
        />
        <p className="text-center">
          When you book with us, flying becomes fast, smooth, and hassle-free. Enjoy efficient check-in, comfortable seating, 
          and top-notch service that gets you to your destination in no time. Whether you’re traveling for business or leisure, 
          our plane travel option offers speed, safety, and convenience so you can focus on enjoying your trip from takeoff to 
          landing.
        </p>
      </section>
      <section 
        className='px-10 flex flex-col justify-center items-center'
      >
        <Image
          height={imgSize}
          width={imgSize}
          alt="Travel Image"
          src="/home-img-3.png"
        />
        <p className="text-center">
          Book your journey with us and enjoy a comfortable, affordable, and scenic travel experience by bus. Sit back in spacious, 
          air-conditioned seats while you relax, stay connected, and take in beautiful views along the way. With flexible schedules, 
          convenient pick-up points, and friendly service, traveling by bus with us is the perfect choice for stress-free and 
          budget-friendly adventures.
        </p>
      </section>
      <section 
        className='px-10 flex flex-col justify-center items-center bg-(--red-light)'
      >
        <Image
          height={imgSize}
          width={imgSize}
          alt="Travel Image"
          src="/home-img-4.png"
        />
        <p className="text-center">
          Book with us and experience travel by ship like never before; relaxing, luxurious, and unforgettable. Enjoy breathtaking 
          ocean views, fresh sea air, and onboard amenities designed for your comfort and entertainment. Perfect for travelers who 
          want to slow down and savor the journey, our ship travel offers a unique and peaceful way to reach your destination while 
          creating lasting memories.
        </p>
      </section>
    </div>
  );
}