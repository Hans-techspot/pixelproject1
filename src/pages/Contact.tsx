import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center mb-12">
              We'd love to hear from you! Whether you have questions about our AI solutions, want to discuss a potential project, or just want to say hello, our team is ready to assist you.
            </p>
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">New York</h3>
              <p className="text-gray-700 mb-2">123 AI Street</p>
              <p className="text-gray-700 mb-2">New York, NY 10001</p>
              <p className="text-gray-700 mb-4">Phone: (212) 555-1234</p>
              <p className="text-gray-700">Email: ny@optimai.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">San Francisco</h3>
              <p className="text-gray-700 mb-2">456 Machine Learning Ave</p>
              <p className="text-gray-700 mb-2">San Francisco, CA 94105</p>
              <p className="text-gray-700 mb-4">Phone: (415) 555-6789</p>
              <p className="text-gray-700">Email: sf@optimai.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">London</h3>
              <p className="text-gray-700 mb-2">789 Neural Network Road</p>
              <p className="text-gray-700 mb-2">London, UK W1T 1JY</p>
              <p className="text-gray-700 mb-4">Phone: +44 20 7946 0958</p>
              <p className="text-gray-700">Email: london@optimai.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;