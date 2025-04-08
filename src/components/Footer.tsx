
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">

      {/* Top Half - Light Yellow Background */}
      <div className="bg-[#F2C94C] text-[#7C1D1D] py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo + Description */}
          <div>
            <img src="/logo.png" alt="Aaoji Logo" className="w-32 h-auto mb-4" />
            <p className="text-sm leading-relaxed">
              Aaoji is your perfect pit stop serving up bold, authentic flavors that are fast, fun, and full of taste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
              <li><a href="#" className="hover:underline">Gallery</a></li>
              <li><a href="#" className="hover:underline">Get in Touch</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p className="text-sm">+91 12461234567899</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-[#7C1D1D] text-white rounded-full hover:bg-[#a82828] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-[#7C1D1D] text-white rounded-full hover:bg-[#a82828] transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-[#7C1D1D] text-white rounded-full hover:bg-[#a82828] transition">
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Divider Line */}
      <div className="h-[2px] bg-[#7C1D1D]" />

      {/* Bottom Half - Dark Red Footer */}
      <div className="bg-[#7C1D1D] text-white text-center py-4 px-4">
        <p className="text-sm">© {new Date().getFullYear()} Aaoji Highway Dhaba. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
