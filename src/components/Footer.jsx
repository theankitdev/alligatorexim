import React from "react";
import { FaFacebookF, FaPinterestP, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t-4 border-indigo-700">

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-5 gap-10">

        {/* Logo + About */}
        <div>
          <div className="text-3xl font-bold text-indigo-700 mb-4">
            Alligator Exim
          </div>

          <p className="text-gray-600 leading-relaxed text-sm">
            Alligator Exim is a global export company specializing in garments,
            workwear, sportswear, kidswear and accessories. We export cargo
            worldwide across the Gulf, USA, Europe, Asia and West Africa with
            reliable logistics and strong international partnerships.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-indigo-700 font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-indigo-700 cursor-pointer">About</li>
            <li className="hover:text-indigo-700 cursor-pointer">Products</li>
            <li className="hover:text-indigo-700 cursor-pointer">Services</li>
            <li className="hover:text-indigo-700 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Shipping Lines */}
        <div>
          <h3 className="text-indigo-700 font-semibold text-lg mb-4">
            Shipping Lines
          </h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li>CMA CGM</li>
            <li>HAPAG-LLOYD</li>
            <li>COSCO</li>
            <li>CUL LINE</li>
            <li>MSC</li>
            <li>MAERSK</li>
            <li>Ocean Network Express</li>
            <li>Sea Lead</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-indigo-700 font-semibold text-lg mb-4">
            Contact
          </h3>

          <ul className="space-y-2 text-gray-600 text-sm">

            <li>
              Germany: +49 176 47534233
            </li>

            <li>
              USA: (718) 977-0453
            </li>

            <li className="flex gap-1">
              <span>Email:</span>
                <a href="mailto:contact@alligatorpro.com" className="hover:text-indigo-700 ">
                  contact@alligatorpro.com
                </a>
            </li>

          </ul>
        </div>

        {/* Offices */}
        <div>
          <h3 className="text-indigo-700 font-semibold text-lg mb-4">
            Offices
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm">

            <li>
              <strong>India:</strong><br />
              Office No.109, Sawant Arcades,<br />
              M Road, Ambernath East,<br />
              Pin Code: 421501
            </li>

            <li>
              <strong>Dubai:</strong><br />
              Office No.312, Al Fajer Complex,<br />
              Umm Hurair Road, Oud Metha, Dubai
            </li>

            <li>
              <strong>USA:</strong><br />
              1135 Jackson Avenue,<br />
              Franklin Square, NY 11010
            </li>

            <li>
              <strong>Germany:</strong><br />
              Holsteiner Ufer 46,<br />
              10557 Berlin, Germany
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-600 text-sm">
            Alligator Exim ©2026 All Rights Reserved.
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