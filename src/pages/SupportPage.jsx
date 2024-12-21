
import { ArrowRight } from 'lucide-react';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in touch with us.
              <br />
              Were here to assist you.
            </h1>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Search for your business listing"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <select className="px-3 py-2 border border-gray-300 rounded-l-md focus:ring-red-500 focus:border-red-500">
                      <option>+91</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g xyz@gmail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Write here your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors flex items-center"
                >
                  Leave us a Message <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                We are always
                <br />
                happy to assist you
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Email Address</h3>
                <p className="text-gray-600">Support@RMax.com</p>
                <p className="text-sm text-gray-500 mt-2">
                  Assistance hours:
                  <br />
                  Monday - Friday 6 am to 8 pm
                  <br />
                  EST
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact Number</h3>
                <p className="text-gray-600">+91-8657491236</p>
                <p className="text-sm text-gray-500 mt-2">
                  Assistance hours:
                  <br />
                  Monday - Friday 6 am to 8 pm
                  <br />
                  EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;