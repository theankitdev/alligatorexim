import React from "react";

const ISOSection = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700">
            ISO 9001 Approved Functional Clothing Manufacturer
          </h2>

          <p className="max-w-3xl mx-auto text-gray-500 mt-4">
            Alligatorexim Garment provides OEM/ODM manufacturing services for global
            functional clothing brands including heated clothing, hunting,
            motorcycle, ski, and outdoor apparel.
          </p>

        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed">

            <p>
              As an ISO 9001:2015 certified functional clothing manufacturer,
              Taian Alligatorexim Garment strictly follows international quality
              standards from product design and fabric selection to production
              and after-sales service.
            </p>

            <p>
              Our manufacturing facility in India,
              includes advanced CAD/CAM systems and modern production lines.
              With 600+ skilled employees and cutting-edge equipment, we ensure
              high precision and consistent quality.
            </p>

            <p>
              We specialize in producing hunting clothing, ski clothing,
              outdoor clothing, fishing clothing, heated clothing, and
              motorcycle apparel for global brands.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4">

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-indigo-600">600+</h3>
                <p className="text-sm text-gray-500">Skilled Workers</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-indigo-600">240,000㎡</h3>
                <p className="text-sm text-gray-500">Factory Area</p>
              </div>

            </div>

          </div>

          {/* Video Section */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">

            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/VcMqPg_Sf7I"
              title="Factory Manufacturing"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ISOSection;