import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">
            About Alligator Exim
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Alligator Exim is a leading garment manufacturing and export
            company delivering high-quality outdoor and performance clothing
            worldwide.
          </p>
        </div>

        {/* Company Info */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Alligator Exim specializes in manufacturing premium outdoor
              clothing including hunting, fishing, skiing, and motorcycle
              apparel. With years of experience in the textile industry, we
              provide durable and performance-driven garments for global
              markets.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our company focuses on innovation, quality control, and customer
              satisfaction. From sourcing high-grade fabrics to final
              production, we maintain strict quality standards.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475"
              alt="Garment Manufacturing"
              className="rounded-lg shadow-md"
            />
          </div>

        </div>

        {/* Mission Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver high-performance outdoor clothing with exceptional
              craftsmanship while maintaining global quality standards and
              building long-term relationships with our partners.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a globally recognized garment exporter known for
              innovation, sustainability, and premium quality outdoor apparel.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div>

          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-lg font-semibold mb-2">Premium Quality</h4>
              <p className="text-gray-600">
                High-quality fabrics and strict manufacturing standards ensure
                durable and reliable garments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-lg font-semibold mb-2">Global Export</h4>
              <p className="text-gray-600">
                Serving international markets with efficient logistics and
                professional export management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="text-lg font-semibold mb-2">Custom Manufacturing</h4>
              <p className="text-gray-600">
                Flexible production capabilities to meet client requirements
                and private label solutions.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;