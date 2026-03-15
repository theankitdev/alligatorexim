import React from "react";
import { useParams } from "react-router-dom";

const blogs = [
{
id: 1,
title: "Latest Trends in Outdoor Clothing",
image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800",
content: `
Outdoor clothing has evolved significantly in recent years. Modern garments
are designed not only for protection but also for comfort and performance.
Manufacturers now use advanced fabrics that are waterproof, breathable,
and lightweight.

Technologies such as moisture-wicking fabrics help keep the body dry during
intense outdoor activities. Insulated jackets and thermal layers also help
maintain body warmth in extreme weather conditions.

Many companies are also focusing on sustainable materials and eco-friendly
production methods. These innovations ensure that outdoor enthusiasts
can enjoy their adventures while staying comfortable and protected.
`
},

{
id: 2,
title: "How Quality Manufacturing Impacts Garment Durability",
image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
content: `
High-quality garment manufacturing plays a crucial role in the durability
of clothing. Strong stitching techniques, reinforced seams, and premium
materials help garments last longer even under harsh conditions.

Manufacturers often perform strict quality checks during every stage of
production. From fabric inspection to final packaging, every step ensures
that the product meets international standards.

Durable garments are especially important for outdoor clothing because
they are exposed to extreme weather, rough terrain, and frequent use.
Investing in quality manufacturing ensures reliability and customer trust.
`
},

{
id: 3,
title: "Choosing the Right Clothing for Outdoor Adventures",
image: "https://images.unsplash.com/photo-1483721310020-03333e577078",
content: `
Selecting the right outdoor clothing can make a huge difference in comfort
and safety during adventures. Layering is one of the most effective
strategies for regulating body temperature.

The base layer helps manage moisture, the middle layer provides insulation,
and the outer layer protects against wind and rain. Choosing breathable
and lightweight materials also improves mobility and comfort.

Outdoor enthusiasts should always consider weather conditions,
activity level, and durability when selecting clothing for their trips.
`
},

{
id: 4,
title: "Sustainable Fabrics in Modern Garments",
image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
content: `
Sustainability is becoming an important factor in the garment industry.
Many manufacturers are now using organic cotton, recycled polyester,
and eco-friendly dyes to reduce environmental impact.

Sustainable fabrics not only protect the environment but also provide
excellent comfort and durability. These materials require less water
and energy during production.

As consumer awareness grows, sustainable fashion is expected to become
a standard in the global apparel market.
`
},

{
id: 5,
title: "Essential Features of High-Performance Ski Clothing",
image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
content: `
Ski clothing must provide warmth, flexibility, and protection against
extreme weather. Waterproof and windproof materials are essential
for maintaining comfort on snowy slopes.

Thermal insulation keeps the body warm while breathable fabrics allow
moisture to escape. Adjustable hoods, ventilation zippers, and reinforced
knees are also common features in high-performance ski jackets and pants.

These features ensure that athletes and outdoor enthusiasts can perform
their best while staying protected in cold environments.
`
},

{
id: 6,
title: "Why Outdoor Clothing Requires Specialized Manufacturing",
image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
content: `
Outdoor clothing requires specialized manufacturing processes to meet
the demands of extreme environments. Fabrics must be durable,
weather-resistant, and comfortable for long periods of wear.

Advanced stitching methods and seam-sealing techniques are used to
prevent water leakage and improve garment strength.

Manufacturers also conduct rigorous testing to ensure the clothing
performs well in challenging outdoor conditions such as rain,
snow, and strong winds.
`
}
];


const BlogDetails = () => {

  const { id } = useParams();

  const blog = blogs.find((b) => b.id === parseInt(id));

  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6">

        <img
          src={blog.image}
          className="w-full h-96 object-cover rounded-lg mb-6"
          alt={blog.title}
        />

        <h1 className="text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
  {blog.content}
</p>

      </div>

    </section>
  );
};

export default BlogDetails;