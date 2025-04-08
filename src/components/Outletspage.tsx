'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const GianisSection = () => {
  const images = [
    "/Im1.jpeg",
    "/Im2.jpeg",
    "/Im3.jpeg",
    "/Im4.jpeg",
    "/Im5.jpeg",
  ]

  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() 
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const slidesToShow = isMobile ? 1 : 2

  const nextSlide = () => {
    setIndex((prev) =>
      prev + slidesToShow < images.length ? prev + slidesToShow : 0
    )
  }

  const prevSlide = () => {
    setIndex((prev) =>
      prev - slidesToShow >= 0 ? prev - slidesToShow : images.length - slidesToShow
    )
  }

  return (
    <div className="bg-[#fff3cd] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-10">

       
        <h3 className="text-lg font-semibold tracking-widest text-red-500 uppercase">
          Outlets
        </h3>

        
        <h2 className="text-4xl sm:text-5xl font-bold text-red-600">
          Relish Every Sweet Bite with Giani&apos;s
        </h2>

        
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
          
          <button
            onClick={prevSlide}
            className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-red-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-red-500" />
          </button>

          
          <div className="flex gap-4 justify-center w-full px-12 overflow-hidden">
            {images.slice(index, index + slidesToShow).map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Giani's Dessert ${index + idx + 1}`}
                width={300}
                height={200}
                className="rounded-xl shadow-lg object-cover w-[250px] sm:w-[280px] h-[200px]"
              />
            ))}
          </div>

         
          <button
            onClick={nextSlide}
            className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-red-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GianisSection
