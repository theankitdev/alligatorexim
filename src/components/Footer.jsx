import React from "react";
import { FaFacebookF, FaPinterestP, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t-4 border-indigo-700 ">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="text-3xl font-bold text-indigo-700 mb-4">
            Alligatorexim
          </div>

          <p className="text-gray-600 leading-relaxed text-sm">
            Alligatorexim Garment is the leading custom functional clothing manufacturer
            and supplier from India. We have strong on demand manufacturing
            abilities with advanced equipment and craftsmanship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-indigo-700 font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-indigo-700 cursor-pointer">About</li>
            <li className="hover:text-indigo-700 cursor-pointer">Certificates</li>
            <li className="hover:text-indigo-700 cursor-pointer">Blog</li>
            <li className="hover:text-indigo-700 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-indigo-700 font-semibold text-lg mb-4">
            Products
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-indigo-700">Hunting Clothing</li>
            <li className="hover:text-indigo-700">Ski Clothing</li>
            <li className="hover:text-indigo-700">Outdoor Clothing</li>
            <li className="hover:text-indigo-700">Fishing Clothing</li>
            <li className="hover:text-indigo-700">Heated Clothing</li>
            <li className="hover:text-indigo-700">Motorcycle Clothing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-indigo-700 font-semibold text-lg mb-4">
            Get In Touch
          </h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Office: No. 59 Mingtang Road</li>
            <li>Taishan District, Taian City</li>
            <li>Shandong Province</li>
            <li>Phone: +86 0538-6292016</li>
            <li>Mobile: +86 186 5388 8531</li>
            <li className="flex gap-2">
              <span>Email:</span>
              <div className="flex flex-col">
                <a href="mailto:info@alligatorexim.com" className="hover:text-blue-600">
                  info@alligatorexim.com
                </a>
                <a href="mailto:commercial@alligatorexim.com" className="hover:text-blue-600">
                  commercial@alligatorexim.com
                </a>
                <a href="mailto:admin@alligatorexim.com" className="hover:text-blue-600">
                  admin@alligatorexim.com
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-600 text-sm">
            Alligatorexim Garment ©2026 All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">

            <div className="bg-blue-600 text-white p-2 rounded cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>

            <div className="bg-red-600 text-white p-2 rounded cursor-pointer hover:scale-110 transition">
              <FaPinterestP />
            </div>

            <div className="bg-blue-700 text-white p-2 rounded cursor-pointer hover:scale-110 transition">
              <FaLinkedinIn />
            </div>

            <div className="bg-red-500 text-white p-2 rounded cursor-pointer hover:scale-110 transition">
              <FaYoutube />
            </div>

            <div className="bg-green-500 text-white p-2 rounded cursor-pointer hover:scale-110 transition">
              <FaWhatsapp />
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;