import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-indigo-700 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-600">
            Have questions or business inquiries? Send us a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
              alt="Contact"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-xl shadow-lg">

            {success && (
              <div className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white py-3 rounded-md hover:bg-indigo-800 transition font-medium"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;