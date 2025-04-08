import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoIosMenu } from 'react-icons/io';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className="container pt-6">
    <div className="flex justify-between items-center px-4">
    
      
      <Image src="/logo.png" width={150} height={150} alt="logo" />
  
     
      <ul className="md:flex hidden gap-8 items-center font-semibold text-[14px]">
      <Link href="#about" className="cursor-pointer hover:text-red-600 transition-colors">About Us</Link>
      <Link href="#menu" className="cursor-pointer hover:text-red-600 transition-colors">Menu</Link>
      <Link href="#testi" className="cursor-pointer hover:text-red-600 transition-colors">Testimonials</Link>
      <Link href="#gall" className="cursor-pointer hover:text-red-600 transition-colors">Gallery</Link>
      

      <li className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 text-pink-600 hover:scale-110 transition-transform" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-5 h-5 text-blue-600 hover:scale-110 transition-transform" />
            </a>
        </li>
      </ul>
      <IoIosMenu  className='md:hidden text-accent' size={30}/>
    </div>
  </div>
  
  )
}

export default Navbar
