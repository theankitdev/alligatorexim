import React from "react";

const ISOSection = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700">
            Garment Manufacturing & Global Export Expertise
          </h2>

          <p className="max-w-3xl mx-auto text-gray-500 mt-4">
            Alligator Exim is a trusted garment manufacturer and exporter
            providing OEM/ODM production services for global apparel brands.
            We manufacture and export workwear, sportswear, kidswear,
            accessories and home textiles to international markets.
          </p>

        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed">

            <p>
              Alligator Exim works with advanced production facilities and
              experienced teams to manufacture high-quality garments that meet
              international standards. Our production process covers product
              design, fabric sourcing, manufacturing, quality control and
              global export logistics.
            </p>

            <p>
              With strong partnerships with global shipping lines and logistics
              providers, we ensure reliable supply chains and smooth delivery
              for international buyers across multiple regions.
            </p>

            <p>
              Our products are exported worldwide including the Gulf, USA,
              Europe, Asia and West Africa, supporting global brands and
              wholesalers with dependable garment manufacturing solutions.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4">

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-indigo-600">17+</h3>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-indigo-600">100+</h3>
                <p className="text-sm text-gray-500">Global Markets</p>
              </div>

            </div>

          </div>

          {/* Video Section */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">

            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/VcMqPg_Sf7I"
              title="Garment Manufacturing"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ISOSection;