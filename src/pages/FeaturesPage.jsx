
import { ArrowRight } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      title: 'Scheduling',
      description: 'Book appointments, classes & send reminders',
      icon: '📅',
      link: '#'
    },
    {
      title: 'Client Management & CRM',
      description: 'Manage client details & relationships',
      icon: '👥',
      link: '#'
    },
    {
      title: 'AI Powered Insights',
      description: 'Get business analytics & predictions',
      icon: '🤖',
      link: '#'
    },
    {
      title: 'Marketing & Engagement Tools',
      description: 'Promote services & engage clients',
      icon: '📢',
      link: '#'
    },
    {
      title: 'Billing & Payments',
      description: 'Handle invoices & process payments',
      icon: '💳',
      link: '#'
    },
    {
      title: 'Multi Location Management',
      description: 'Manage multiple business locations',
      icon: '🏢',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features to 
            <br />
            Grow Your Business
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Everything you need to manage and scale your service business
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href={feature.link}
                  className="text-red-500 flex items-center hover:text-red-600"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-gray-600">
              Connect with your favorite tools and services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/*  */}
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={`/api/placeholder/120/60`}
                  alt={`Integration Partner ${index}`}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;