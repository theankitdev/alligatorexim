import React from "react";

const blogs = [
  {
    title: "Top 10 Global Motor Jacket Brands",
    desc: "Discover the best motorcycle jacket brands worldwide and learn how to choose the right gear for safety and comfort.",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
    category: "Motorcycle",
    date: "May 10, 2024",
  },
  {
    title: "Top 10 Global Fish Clothing Company List",
    desc: "Explore the leading fishing clothing manufacturers providing durable, breathable, and waterproof fishing gear.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    category: "Fishing",
    date: "May 08, 2024",
  },
  {
    title: "Top 10 Best Dirt Bike Clothing Brands Worldwide",
    desc: "A complete guide to the best dirt bike clothing brands offering protection, durability, and performance.",
    image: "https://images.unsplash.com/photo-1518655048521-f130df041f66",
    category: "Motorcycle",
    date: "May 05, 2024",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700">
            Latest Blog Posts
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Explore our latest insights, trends and expert guides in the
            functional clothing industry to help grow your apparel business.
          </p>

        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-gray-400 text-sm mb-2">
                  {blog.date}
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-indigo-600 cursor-pointer">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {blog.desc}
                </p>

                <button className="text-indigo-600 font-medium hover:underline">
                  Read More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default BlogSection;