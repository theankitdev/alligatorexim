import React from 'react'
import { FaIndustry, FaWarehouse, FaTshirt, FaGlobe } from "react-icons/fa";
import Categories from '../components/Categories';
import ISOSection from '../components/ISOSection';
import WhyChoose from '../components/WhyChoose';
import BlogSection from '../components/Blog';
import QuoteSection from '../components/Quote';

const stats = [
  {
    icon: <FaIndustry />,
    number: "18+",
    text: "Years Industry Experience",
  },
  {
    icon: <FaWarehouse />,
    number: "45,000+",
    text: "Manufacturing & Warehouse Area",
  },
  {
    icon: <FaTshirt />,
    number: "2,000,000+",
    text: "Annual Garment Production",
  },
  {
    icon: <FaGlobe />,
    number: "100+",
    text: "Countries We Export To",
  },
];

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">

          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Garment Manufacturer & Global Exporter
            <span className="block text-indigo-500 mt-2">
              Alligator Exim
            </span>
          </h1>

          <p className="text-gray-200 mt-4 text-lg md:text-xl">
            Over 17 years of experience in garment manufacturing and exporting
            high-quality apparel to global markets including the Gulf, USA,
            Europe, Asia and West Africa.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

            <button className="bg-indigo-700 hover:bg-indigo-900 text-white px-6 py-3 rounded-md font-medium transition">
              Get Instant Quote →
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
              Contact Us →
            </button>

          </div>

        </div>
      </section>


      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-indigo-700 mb-14">
            Trusted Garment Manufacturing & Export Network
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 px-6 rounded-lg shadow-sm hover:shadow-md transition"
              >

                <div className="text-indigo-600 text-3xl mb-4 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold text-gray-800">
                  {item.number}
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      <Categories />

      {/* ISO Section */}
      <ISOSection />

      {/* WhyChoose Section */}
      <WhyChoose />

      {/* Blog Section */}
      <BlogSection />

      {/* Quote Section */}
      <QuoteSection />

    </div>
  )
}

export default Home