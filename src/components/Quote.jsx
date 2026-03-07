import React from "react";

const QuoteSection = () => {
  return (
    <section className="pb-22 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700">
            Get An Online Quote Now
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Partner with a trusted functional clothing manufacturer serving
            global brands with high-quality OEM / ODM solutions.
          </p>

        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="factory"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Text Content */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Alligatorexim Garment is a leading functional clothing manufacturer
              trusted by 200+ apparel brands worldwide. With over 17 years of
              experience, we specialize in producing high-quality hunting,
              heated, ski, outdoor and motorcycle clothing.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our professional team and advanced production lines ensure the
              best quality, competitive pricing and reliable delivery for your
              brand.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-8">

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-indigo-600">
                  200+
                </h3>
                <p className="text-sm text-gray-500">
                  Global Clients
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-indigo-600">
                  24h
                </h3>
                <p className="text-sm text-gray-500">
                  Fast Response
                </p>
              </div>

            </div>

            {/* CTA */}
            <button className="bg-indigo-600 hover:bg-indigo-900 text-white px-6 py-3 rounded-md transition">
              Get Instant Quote →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default QuoteSection;