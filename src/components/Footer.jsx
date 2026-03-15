import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t-4 border-indigo-700">

      {/* Main Footer */}
      <div className="mx-auto px-12 py-12 grid lg:grid-cols-4 gap-10">

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
        <div className="lg:flex w-full gap-20">

          <div>
            <h3 className="text-indigo-700 font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-600">

              <li>
                <Link to="/about" className="hover:text-indigo-700">
                  About
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-indigo-700">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-indigo-700">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Shipping Lines */}
          <div className="mt-8 lg:mt-0">
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

        </div>

        {/* Offices */}
        <div className="lg:col-span-2">

          <h3 className="text-indigo-700 font-semibold text-xl mb-4">
            Our Offices
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">

            {/* India */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">

              <h4 className="font-semibold text-indigo-700">
                Alligator Exim Pvt. Ltd. — India
              </h4>

              <p className="text-gray-600 flex gap-2 mt-2">
                <FaMapMarkerAlt className="mt-1 text-indigo-600" />
                Office No.109, Sawant Arcades,<br />
                M Road, Ambernath East,<br />
                Pin Code: 421501
              </p>

              <div className="mt-4 space-y-2 text-gray-600">

                <a href="tel:+918454801839" className="flex items-center gap-2 hover:text-indigo-700">
                  <FaPhoneAlt className="text-indigo-600" />
                  +91 8454801839
                </a>

                <a href="mailto:info@alligatorexim.com" className="flex items-center gap-2 hover:text-indigo-700">
                  <FaEnvelope className="text-indigo-600" />
                  info@alligatorexim.com
                </a>

                <a href="mailto:commercial@alligatorexim.com" className="flex items-center gap-2 hover:text-indigo-700">
                  <FaEnvelope className="text-indigo-600" />
                  commercial@alligatorexim.com
                </a>

                <a href="mailto:admin@alligatorexim.com" className="flex items-center gap-2 hover:text-indigo-700">
                  <FaEnvelope className="text-indigo-600" />
                  admin@alligatorexim.com
                </a>

              </div>
            </div>


            {/* Dubai */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">

              <h4 className="font-semibold text-indigo-700">
                Alligator Exim — Dubai
              </h4>

              <p className="text-gray-600 flex gap-2 mt-2">
                <FaMapMarkerAlt className="mt-1 text-indigo-600" />
                Office No.312, Al Fajer Complex,<br />
                Umm Hurair Road,<br />
                Oud Metha, Dubai
              </p>

              <div className="mt-4 space-y-2 text-gray-600">

                <a href="tel:+971585432101" className="flex items-center gap-2 hover:text-indigo-700">
                  <FaPhoneAlt className="text-indigo-600" />
                  +971 58 5432101
                </a>

                <a href="mailto:info@alligatorexim.com" className="flex items-center gap-2 hover:text-indigo-700">
                  <FaEnvelope className="text-indigo-600" />
                  info@alligatorexim.com
                </a>

              </div>
            </div>


            {/* USA */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">

              <h4 className="font-semibold text-indigo-700">
                Alligator Exim INC — USA
              </h4>

              <p className="text-gray-600 flex gap-2 mt-2">
                <FaMapMarkerAlt className="mt-1 text-indigo-600" />
                1135 Jackson Avenue,<br />
                Franklin Square,<br />
                NY 11010
              </p>

              <div className="mt-4 space-y-2 text-gray-600">

                <a href="tel:+17189770453" className="flex items-center gap-2 hover:text-indigo-700">
                  <FaPhoneAlt className="text-indigo-600" />
                  (718) 977-0453
                </a>

              </div>
            </div>


            {/* Germany */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">

              <h4 className="font-semibold text-indigo-700">
                Alligator Exim GmbH — Germany
              </h4>

              <p className="text-gray-600 flex gap-2 mt-2">
                <FaMapMarkerAlt className="mt-1 text-indigo-600" />
                Holsteiner Ufer 4610557,<br />
                Berlin, Germany
              </p>

              <div className="mt-4 space-y-2 text-gray-600">

                <a href="tel:+4917647534233" className="flex items-center gap-2 hover:text-indigo-700">
                  <FaPhoneAlt className="text-indigo-600" />
                  +49 176 47534233
                </a>

                <a href="mailto:contact@alligatorpro.com" className="flex items-center gap-2 hover:text-indigo-700">
                  <FaEnvelope className="text-indigo-600" />
                  contact@alligatorpro.com
                </a>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-600 text-sm">
            Alligator Exim ©2026 All Rights Reserved.
          </p>

          <div className="flex gap-3">

            <a href="#" className="bg-blue-600 text-white p-2 rounded hover:scale-110 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="bg-red-600 text-white p-2 rounded hover:scale-110 transition">
              <FaPinterestP />
            </a>

            <a href="#" className="bg-blue-700 text-white p-2 rounded hover:scale-110 transition">
              <FaLinkedinIn />
            </a>

            <a href="#" className="bg-red-500 text-white p-2 rounded hover:scale-110 transition">
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/918454801839"
              className="bg-green-500 text-white p-2 rounded hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;