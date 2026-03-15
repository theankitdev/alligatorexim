import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Latest Trends in Outdoor Clothing",
    description:
      "Discover the newest innovations and technologies used in modern outdoor clothing for better comfort and durability.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800",
  },
  {
    id: 2,
    title: "How Quality Manufacturing Impacts Garment Durability",
    description:
      "Learn how high-quality materials and advanced manufacturing processes ensure long-lasting apparel.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  },
  {
    id: 3,
    title: "Choosing the Right Clothing for Outdoor Adventures",
    description:
      "A guide to selecting the best clothing for hunting, skiing, fishing, and other outdoor activities.",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078",
  },
  {
  id: 4,
  title: "Sustainable Fabrics in Modern Garments",
  description:
    "Explore how eco-friendly and sustainable fabrics are shaping the future of the garment industry and reducing environmental impact.",
  image:
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
},
{
  id: 5,
  title: "Essential Features of High-Performance Ski Clothing",
  description:
    "From waterproof materials to thermal insulation, learn the important features that make ski clothing suitable for extreme weather.",
  image:
    "https://images.unsplash.com/photo-1517649763962-0c623066013b",
},
{
  id: 6,
  title: "Why Outdoor Clothing Requires Specialized Manufacturing",
  description:
    "Outdoor garments demand advanced stitching, durable fabrics, and strict quality checks to ensure comfort and reliability.",
  image:
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
}
];

const Blog = () => {
  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">
            Our Blog
          </h1>
          <p className="text-gray-600">
            Insights, industry trends, and updates from Alligator Exim
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>

              <div className="bg-white rounded-lg shadow hover:shadow-lg transition">

                <img
                  src={blog.image}
                  className="w-full h-52 object-cover rounded-t-lg"
                  alt={blog.title}
                />

                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600">
                    {blog.description}
                  </p>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Blog;