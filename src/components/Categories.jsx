import React from "react";

const categories = [
  {
    title: "Workwear & Uniforms",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop",
    desc: "Corporate uniforms, industrial workwear and office uniforms manufactured for durability, comfort and professional appearance.",
  },
  {
    title: "Sportswear & Athleisure",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    desc: "High-performance sportswear and athleisure garments designed with breathable fabrics and modern activewear styling.",
  },
  {
    title: "Kidswear",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2070&auto=format&fit=crop",
    desc: "Comfortable and stylish children’s clothing with strong global demand due to rapid growth cycles.",
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop",
    desc: "Fashion accessories including scarves, caps, belts and bags that complement apparel collections.",
  },
  {
    title: "Home Textiles",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
    desc: "Bedsheets, curtains and cushion covers manufactured with quality fabrics for international markets.",
  },
  {
    title: "Eco-Friendly Apparel",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop",
    desc: "Sustainable garments made using organic cotton, bamboo fabric and recycled polyester.",
  },
];

const Categories = () => {
  return (
    <section className="py-6 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700">
            Garment Product Categories
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto mt-4">
            Alligator Exim manufactures and exports a wide range of garments
            and textile products including workwear, sportswear, kidswear,
            accessories and home textiles to global markets.
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