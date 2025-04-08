import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div id="gall" className="bg-yellow-100 py-20 px-6 md:px-20 text-center space-y-10">

      
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-red-600" />
        <h3 className="text-red-600 font-semibold tracking-widest text-sm sm:text-base uppercase">
          EXPLORE OUR GALLERY
        </h3>
        <div className="h-px w-16 bg-red-600" />
      </div>

      
      <h2 className="text-3xl sm:text-4xl font-bold text-red-600 leading-snug">
        TASTE THE STORY: <br className="hidden sm:block" />
        A VISUAL JOURNEY THROUGH OUR DISHES!
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-6">
        
        <Image src="/Image1.png" alt="Image1 png" width={400} height={300} className="rounded-xl object-cover w-full h-full" />
        <Image src="/Image2.png" alt="Image2 png" width={400} height={300} className="rounded-xl object-cover w-full h-full" />
        <Image src="/Image3.png" alt="Image3 png" width={400} height={300} className="rounded-xl object-cover w-full h-full" />
        <Image src="/image4.png" alt="Image4 png" width={400} height={300} className="rounded-xl object-cover w-full h-full" />
        <Image src="/Image5.png" alt="Image5 png" width={400} height={300} className="rounded-xl object-cover w-full h-full" />
        <Image src="/Image6.png" alt="Image6 png" width={400} height={300} className="rounded-xl object-cover w-full h-full" />
      </div>

      
      <div className="pt-6">
        <a
          href="https://www.instagram.com/aaoji" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Visit Instagram
        </a>
      </div>

    </div>
  )
}

export default Gallery
