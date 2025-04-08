'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoIosMenu } from 'react-icons/io';
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container pt-6 relative">
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

       
        <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>

          {isOpen ? (
            <IoMdClose className=" text-accent" size={30} />
          ) : (
            <IoIosMenu className="text-accent" size={30} />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden px-6 py-4 z-40">
          <ul className="flex flex-col gap-4 font-semibold text-[14px]">
            <Link href="#about" onClick={toggleMenu} className="hover:text-red-600">About Us</Link>
            <Link href="#menu" onClick={toggleMenu} className="hover:text-red-600">Menu</Link>
            <Link href="#testi" onClick={toggleMenu} className="hover:text-red-600">Testimonials</Link>
            <Link href="#gall" onClick={toggleMenu} className="hover:text-red-600">Gallery</Link>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 text-pink-600 hover:scale-110 transition-transform" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="w-5 h-5 text-blue-600 hover:scale-110 transition-transform" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
