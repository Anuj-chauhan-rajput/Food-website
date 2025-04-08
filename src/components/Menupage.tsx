import React from 'react'
import Image from 'next/image'

const ExploreMenu = () => {
  return (
    <div id="menu" className=" bg-[#FFFBEA]  py-20 px-6 md:px-20 text-center space-y-8">
      
      
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-red-600" />
        <h3 className="text-red-600 font-semibold tracking-widest text-sm sm:text-base uppercase">
          EXPLORE OUR MENU
        </h3>
        <div className="h-px w-16 bg-red-600" />
      </div>

      
      <h2 className="text-4xl sm:text-5xl font-bold text-red-600 leading-snug">
        EXPLORE THE MAGIC <br className="hidden sm:block" />
        OF OUR SAVORY CREATIONS
      </h2>

      

      
      <div className="flex justify-center">
        <Image
          src="/Image9.png" 
          alt="Menu Banner"
          width={700}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
      <a
    href="/menu.pdf" 
    download 
    className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300 text-center"
  >
    Download Menu
  </a>
        <a href="#callus">
        <button className="cursor-pointer bg-white border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-full font-semibold transition duration-300">
          Call Us for Bookings
        </button>
        </a>
      </div>
    </div>
  )
}

export default ExploreMenu
