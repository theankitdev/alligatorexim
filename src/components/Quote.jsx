import React from "react";

const QuoteSection = () => {
  return (
    <section className="pb-22 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-700">
            Request A Quote
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Partner with Alligator Exim, a trusted garment manufacturer and
            exporter supplying high-quality apparel and textile products to
            global markets.
          </p>

        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="garment manufacturing"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Text Content */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Alligator Exim provides professional garment manufacturing and
              export services for international brands, wholesalers and
              retailers. We specialize in producing workwear, sportswear,
              kidswear, accessories and home textile products.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 17 years of industry experience and a strong logistics
              network, we deliver reliable production, competitive pricing and
              efficient global shipping to markets including the Gulf, USA,
              Europe, Asia and West Africa.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-8">

              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-indigo-600">
                  100+
                </h3>
                <p className="text-sm text-gray-500">
                  Global Markets
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

          </div>

        </div>

      </div>

    </section>
  );
};

export default QuoteSection;