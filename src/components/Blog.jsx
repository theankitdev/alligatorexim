import React from "react";

const blogs = [
  {
    title: "How to Choose the Right Garment Manufacturer for Your Brand",
    desc: "Learn the key factors to consider when selecting a garment manufacturing partner for quality production, scalability and reliable supply.",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070&auto=format&fit=crop",
    category: "Manufacturing",
    date: "May 10, 2024",
  },
  {
    title: "Global Garment Export Trends in 2024",
    desc: "Explore the latest trends in international garment trade including growing demand for workwear, sportswear and sustainable clothing.",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop",
    category: "Export",
    date: "May 08, 2024",
  },
  {
    title: "Benefits of OEM & Private Label Garment Manufacturing",
    desc: "Discover how OEM and private label garment manufacturing can help brands scale production while maintaining quality and cost efficiency.",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop",
    category: "OEM / ODM",
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
            Latest Industry Insights
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends and expert knowledge
            from the global garment manufacturing and export industry.
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
                  alt={blog.title}
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