import React from "react";
import { FaCogs, FaGem, FaUserTie, FaShippingFast } from "react-icons/fa";

const features = [
  {
    icon: <FaCogs />,
    title: "OEM / ODM Service",
    desc: "Professional OEM/ODM functional clothing manufacturing with over 17+ years of industry experience.",
  },
  {
    icon: <FaGem />,
    title: "Premium Quality",
    desc: "Advanced manufacturing equipment and lean production processes ensure consistent high quality.",
  },
  {
    icon: <FaUserTie />,
    title: "Excellent Service",
    desc: "Dedicated experts providing consultation, custom design, and full quality control.",
  },
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    desc: "Efficient supply chain and global logistics delivering products to over 100+ countries.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-indigo-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700">
            Why Choose Alligatorexim Garment
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto mt-4">
            We provide high-quality functional clothing manufacturing solutions
            for global brands including hunting, heated, outdoor, fishing,
            motorcycle and ski apparel.
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