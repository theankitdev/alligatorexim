import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="bg-indigo-700 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">

        {/* Logo */}
        <div className="text-[20px] text-white font-bold">
          <Link to="/">Alligator Exim</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

          <Link to="/" className="text-white hover:text-black">
            Home
          </Link>

          {/* About */}
          <div className="relative group">
            <Link to="/about" className="flex items-center text-white hover:text-black">
              About
            </Link>
          </div>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-white hover:text-black">
              Products <MdOutlineArrowDropDown />
            </button>

            <div className="absolute left-0 top-full z-50 pt-3 opacity-0 invisible
            group-hover:visible group-hover:opacity-100 transition-all duration-200">
              <div className="w-56 bg-white shadow-lg rounded-md">

                <Link to="/products/hunting" className="block px-4 py-2 hover:bg-gray-100">
                  Hunting Clothing
                </Link>

                <Link to="/products/ski" className="block px-4 py-2 hover:bg-gray-100">
                  Ski Clothing
                </Link>

                <Link to="/products/outdoor" className="block px-4 py-2 hover:bg-gray-100">
                  Outdoor Clothing
                </Link>

                <Link to="/products/fishing" className="block px-4 py-2 hover:bg-gray-100">
                  Fishing Clothing
                </Link>

                <Link to="/products/heated" className="block px-4 py-2 hover:bg-gray-100">
                  Heated Clothing
                </Link>

                <Link to="/products/motorcycle" className="block px-4 py-2 hover:bg-gray-100">
                  Motorcycle Clothing
                </Link>

              </div>
            </div>
          </div>

          <Link to="/blog" className="text-white hover:text-black">
            Blog
          </Link>

          <Link to="/contact" className="text-white hover:text-black">
            Contact
          </Link>

        </nav>

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

          {menuOpen && (
  <div className="md:hidden px-6 pb-6 space-y-4 text-white">

    <Link
      to="/"
      className="block"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </Link>

    <Link
      to="/about"
      className="block"
      onClick={() => setMenuOpen(false)}
    >
      About
    </Link>

    <Link
      to="/blog"
      className="block"
      onClick={() => setMenuOpen(false)}
    >
      Blog
    </Link>

    <Link
      to="/contact"
      className="block"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </Link>
  </div>
)}

        </div>
      )}
    </header>
  );
};

export default Header;