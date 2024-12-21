
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const features = [
    { title: 'Scheduling', icon: '📅', description: 'Manage and track appointments' },
    { title: 'Client Management & CRM', icon: '👥', description: 'Build lasting relationships' },
    { title: 'AI Powered Insights', icon: '🤖', description: 'Data-driven decisions' },
    { title: 'Marketing & Engagement Tools', icon: '📢', description: 'Grow your business' },
    { title: 'Billing & Payments', icon: '💳', description: 'Secure transactions' },
    { title: 'Multi Location Management', icon: '🏢', description: 'Manage multiple branches' }
  ];

  const industries = [
    { name: 'Sports', image: '/api/placeholder/400/300', description: 'Sports and fitness management' },
    { name: 'Healthcare & Wellness', image: '/api/placeholder/400/300', description: 'Medical and wellness services' },
    { name: 'Learning Activities', image: '/api/placeholder/400/300', description: 'Educational programs' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/*ye Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Maximize Your Impact<br />
            <span className="text-red-500">Business with RMax</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Enhance your business with RMaxs all-in-one platform compelling offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md hover:border-red-500 text-gray-700">
              Book A Demo
            </button>
          </div>
        </div>
      </section>

      {/* ye Steps Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Onboard business in 3 simple steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Claim your preset profile', icon: '👤' },
              { step: 2, title: 'Add services', icon: '✏️' },
              { step: 3, title: 'Build Website', icon: '🌐' }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.icon}
                </div>
                <h3 className="font-semibold mb-2">Step {step.step}</h3>
                <p className="text-gray-600">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ye raha Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why RMax?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <Link to="#" className="text-red-500 mt-4 inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ye raha Industries Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Empowering Service Providers Across Industries
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="relative group">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
                  <h3 className="text-white font-semibold text-xl">{industry.name}</h3>
                  <p className="text-white text-sm">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*ye raha FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {[
                { question: "What is RMax?", answer: "RMax is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily" },
                { question: "How does it work?", answer: "..." },
                { question: "How much does it cost?", answer: "..." }
              ].map((faq, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="font-semibold">{faq.question}</span>
                    <ArrowRight className="transform rotate-90 h-5 w-5" />
                  </button>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;