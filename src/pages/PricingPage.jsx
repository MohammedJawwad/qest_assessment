
import { ArrowRight } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: 17,
      period: '/month',
      features: {
        Users: '1',
        Branches: '1',
        Courses: '3',
        'Max. Students Allowed': '25',
        Communication: '25',
        'Bulk Updates': '25',
        'User Roles': '25'
      }
    },
    {
      name: 'Premium',
      price: 88,
      period: '/month',
      features: {
        Users: '15',
        Branches: '10',
        Courses: '15/branch',
        'Max. Students Allowed': '500',
        Communication: 'Yes',
        'Bulk Updates': 'Yes',
        'User Roles': 'Yes'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible Plans,
            <br />
            Transparent Pricing
          </h1>
          <p className="text-gray-600 mb-2">Find the Perfect Fit for You</p>
          <p className="text-red-500">30-day free trial with money-back guarantee.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold mb-8">Compare our plans</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 w-1/3">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="p-4 text-left w-1/3">
                      <div className="font-semibold text-xl mb-2">{plan.name}</div>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">${plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(plans[0].features).map(([feature, ]) => (
                  <tr key={feature} className="border-b">
                    <td className="p-4 text-gray-600">{feature}</td>
                    {plans.map((plan) => (
                      <td key={`${plan.name}-${feature}`} className="p-4">
                        {plan.features[feature]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4"></td>
                  {plans.map((plan) => (
                    <td key={`${plan.name}-action`} className="p-4">
                      <button className="w-full bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                      <p className="text-sm text-gray-500 mt-2 text-center">No credit card required</p>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;