import React from 'react';
import Image from 'next/image';

const FeatureFlipped = () => {
  return (
    <div id="about" className="relative min-h-screen flex items-center justify-center bg-[#FFFBEA] ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36 py-12 gap-12">
      
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px] h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] xl:h-[560px] rounded-xl shadow-2xl overflow-hidden">
            <Image
              src="/Im6.png"
              alt="Aaoji Story"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6 bg-[#ffffffcc] p-6 sm:p-8 lg:p-10 xl:p-12 rounded-lg">
         
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="h-px w-12 bg-red-600" />
            <h2 className="text-lg sm:text-xl font-semibold text-red-600 tracking-widest">The Story</h2>
            <div className="h-px w-12 bg-red-600" />
          </div>

         
          <h2 className="text-3xl sm:text-5xl font-bold text-red-600 leading-tight text-center md:text-left">
            What Aaoji is all about!
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center md:text-left">
            Founded in 2020, Aaoji was born out of a passion for bringing authentic, bold flavors to the streets,
            offering a fun twist on traditional cuisine. We’ve quickly become a favorite destination for locals
            and travelers alike, serving up not just meals, but unforgettable experiences.
            Whether you're stopping by for a quick bite or settling in for a leisurely meal, we take pride in offering
            delicious dishes made from the finest, locally sourced ingredients.
          </p>

     
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
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

export default FeatureFlipped;
