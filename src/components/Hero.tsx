import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative bg-[#fff3cd] min-h-screen overflow-hidden">
      
      <Navbar />

      
      <div className="container mx-auto px-4 py-12 flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-12 min-h-[calc(100vh-120px)]">
        
       
        <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] aspect-[3/4] rounded-t-[280px] rounded-b-none shadow-2xl overflow-hidden mx-auto lg:mx-20">
          <Image
            src="/Im10.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        
        <div className="z-10 max-w-2xl space-y-6 text-center lg:text-left lg:ml-8">
          
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="h-px w-12 bg-red-600" />
            <h2 className="text-lg sm:text-xl font-semibold text-red-600 tracking-widest">AAOJI</h2>
            <div className="h-px w-12 bg-red-600" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-red-600 leading-snug">
            Bold Flavors, Fun Vibes,
            <br className="hidden md:block" />
            Authentic Taste
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
            Aaoji is your perfect pit stop on the highway, serving up bold, authentic flavors that are fast,
            fun, and full of taste. Whether you're craving a quick bite or a satisfying meal on the go,
            Aaoji brings the perfect blend of tradition and excitement to your journey.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a href="#callus">
          <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
          Call Us for Bookings
          </button>
          </a>
          <a href="#menu">
          <button className="cursor-pointer bg-white border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-full font-semibold transition duration-300">
            Explore Menu
          </button>
          </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
