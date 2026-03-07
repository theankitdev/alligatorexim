import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="bg-indigo-700 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">

        {/* Logo */}
        <div className="text-[20px] text-white font-bold">
          Alligatorexim
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="text-white hover:text-black">Home</a>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-white hover:text-black">
              About <MdOutlineArrowDropDown />
            </button>

            <div className="absolute left-0 top-full z-50 pt-3 opacity-0 invisible
            group-hover:visible group-hover:opacity-100 transition-all duration-200">
              <div className="w-48 bg-white shadow-lg rounded-md">
                <a className="block px-4 py-2 hover:bg-gray-100">Certificates</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Garment Factory</a>
              </div>
            </div>
          </div>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-white hover:text-black">
              Products <MdOutlineArrowDropDown />
            </button>

            <div className="absolute left-0 top-full z-50 pt-3 opacity-0 invisible
            group-hover:visible group-hover:opacity-100 transition-all duration-200">
              <div className="w-56 bg-white shadow-lg rounded-md">
                <a className="block px-4 py-2 hover:bg-gray-100">Hunting Clothing</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Ski Clothing</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Outdoor Clothing</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Fishing Clothing</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Heated Clothing</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Motorcycle Clothing</a>
              </div>
            </div>
          </div>

          <a href="#" className="text-white hover:text-black">Blog</a>
          <a href="#" className="text-white hover:text-black">Contact</a>
        </nav>

        {/* Right Section Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-white rounded-md px-3 py-2 text-sm text-white placeholder:text-white bg-transparent outline-none"
            />
            <FaSearch className="absolute top-3 right-2 text-white" />
          </div>

          <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
            Get Instant Quote →
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 text-white">

          {/* Mobile Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-white rounded-md px-3 py-2 text-sm text-white placeholder:text-white bg-transparent outline-none"
            />
            <FaSearch className="absolute top-3 right-3 text-white" />
          </div>

          <a className="block">Home</a>

          {/* About Accordion */}
          <div>

            <button
              className="flex items-center justify-between w-full"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
              <MdOutlineArrowDropDown
                className={`transition ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>

            {aboutOpen && (
              <div className="ml-4 mt-2 space-y-2 text-gray-200">
                <a className="block">Certificates</a>
                <a className="block">Garment Factory</a>
              </div>
            )}

          </div>

          {/* Products Accordion */}
          <div>

            <button
              className="flex items-center justify-between w-full"
              onClick={() => setProductOpen(!productOpen)}
            >
              Products
              <MdOutlineArrowDropDown
                className={`transition ${productOpen ? "rotate-180" : ""}`}
              />
            </button>

            {productOpen && (
              <div className="ml-4 mt-2 space-y-2 text-gray-200">

                <a className="block">Hunting Clothing</a>
                <a className="block">Ski Clothing</a>
                <a className="block">Outdoor Clothing</a>
                <a className="block">Fishing Clothing</a>
                <a className="block">Heated Clothing</a>
                <a className="block">Motorcycle Clothing</a>

              </div>
            )}

          </div>

          <a className="block">Blog</a>
          <a className="block">Contact</a>

        </div>
      )}
    </header>
  );
};

export default Header;