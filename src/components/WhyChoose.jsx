import React from "react";
import { FaCogs, FaGem, FaUserTie, FaShippingFast } from "react-icons/fa";

const features = [
  {
    icon: <FaCogs />,
    title: "OEM / ODM Manufacturing",
    desc: "Professional garment manufacturing services with custom OEM and private label production for global apparel brands.",
  },
  {
    icon: <FaGem />,
    title: "Premium Quality Standards",
    desc: "Modern production facilities and strict quality control ensure high quality garments that meet international standards.",
  },
  {
    icon: <FaUserTie />,
    title: "Professional Export Team",
    desc: "Experienced team providing product development, sourcing support and complete export coordination for international clients.",
  },
  {
    icon: <FaShippingFast />,
    title: "Global Logistics Network",
    desc: "Reliable shipping and logistics partnerships delivering garments to markets across the Gulf, USA, Europe, Asia and Africa.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-indigo-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700">
            Why Choose Alligator Exim
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto mt-4">
            Alligator Exim combines garment manufacturing expertise with a
            strong global export network to supply high-quality apparel and
            textile products to international markets.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-10">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition text-center"
            >

              <div className="text-indigo-600 text-4xl mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;