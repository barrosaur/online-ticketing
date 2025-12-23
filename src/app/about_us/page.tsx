export default function AboutUsPage() {
  return (
    <div className="flex justify-center items-center h-screen flex-col px-10 overflow-x-hidden">
      <h1 className="font-bold text-6xl pb-10 mt-10">About Us</h1>
      <p className="text-center mx-32 mb-10 text-2xl">
        We are a dedicated travel booking platform created to make every journey simple, enjoyable, and worry-free. Our goal is 
        to connect travelers with reliable transportation options, by bus, plane, and ship; through one easy-to-use website. We 
        believe that travel should be accessible to everyone, which is why we focus on transparent pricing, trusted partners, and 
        a smooth booking process from start to finish. Whether you’re planning a quick local trip or a long-distance adventure, 
        our platform is designed to save you time, reduce stress, and give you confidence in every booking you make.
      </p>
      <p className="text-center mx-32 mb-10 text-2xl">
        At the heart of our service is a commitment to customer satisfaction and continuous improvement. We work closely with 
        transportation providers to ensure quality, safety, and comfort, while constantly enhancing our platform to meet modern 
        travelers’ needs. Our team values innovation, reliability, and excellent support, ensuring that help is always available 
        whenever you need it. More than just a booking site, we aim to be your trusted travel companion, helping you explore new 
        places, reconnect with loved ones, and create memorable experiences wherever your journey takes you.
      </p>
      <footer className="bg-(--red) w-screen px-10 mt-10 flex flex-col text-white justify-center h-44">
        <p>Email: <span className="underline">dummy@gmail.com</span></p>
        <p>Contact Number: <span className="underline">0912 345 6789</span></p>
      </footer>
    </div>
  );
}