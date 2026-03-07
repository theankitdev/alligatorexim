import React from "react";

const categories = [
  {
    title: "Hunting Clothing",
    image:
      "https://images.unsplash.com/photo-1603252109360-909baaf261c7",
    desc: "Durable hunting jackets, pants, and vests designed for camouflage, weather protection, and optimal field performance.",
  },
  {
    title: "Ski Clothing",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    desc: "High-performance ski jackets and apparel engineered for warmth, waterproofing, and flexibility in extreme winter conditions.",
  },
  {
    title: "Outdoor Clothing",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    desc: "Outdoor jackets and gear designed with breathable fabrics, durability, and mobility for hiking and adventure activities.",
  },
];

const Categories = () => {
  return (
    <section className="py-6 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700">
            Custom Functional Clothes By Categories
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto mt-4">
            Alligatorexim Garment specializes in OEM/ODM functional clothing
            manufacturing including hunting, ski, outdoor, fishing,
            heated and motorcycle apparel for global brands.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
            >

              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6">
                  {item.desc}
                </p>

                <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-900 transition">
                  View More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;