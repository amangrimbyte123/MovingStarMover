import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const OfficeMovingPage = () => {
  const services = [
    {
      title: 'Project Management',
      description: 'Dedicated move coordinators to plan and oversee your entire office relocation.',
      features: [
        'Detailed moving timeline',
        'Staff communication plans',
        'Vendor coordination',
        'Progress tracking'
      ]
    },
    {
      title: 'IT Equipment Relocation',
      description: 'Specialized handling of computers, servers, and sensitive technology.',
      features: [
        'Secure equipment packing',
        'Cable management',
        'System labeling',
        'Setup at new location'
      ]
    },
    {
      title: 'Furniture Disassembly & Assembly',
      description: 'Professional handling of office furniture and workstations.',
      features: [
        'Cubicle breakdown',
        'Furniture inventory',
        'Reassembly services',
        'Space planning'
      ]
    },
    {
      title: 'Document Management',
      description: 'Secure handling of sensitive files and records.',
      features: [
        'File organization',
        'Secure transport',
        'Archive solutions',
        'Shredding services'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">
              Professional Office Moving Services
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Minimize downtime and ensure a smooth transition to your new office space with our comprehensive moving solutions.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="inline-block w-4 h-4 mt-1 mr-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Our Office Moving Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Experienced Team</h3>
                <p className="text-gray-600">Skilled professionals with years of experience in corporate relocations.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Minimal Disruption</h3>
                <p className="text-gray-600">Strategic planning to minimize business downtime during the move.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Full Insurance</h3>
                <p className="text-gray-600">Comprehensive coverage for your office equipment and assets.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Plan Your Office Move?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us for a customized moving plan and free quote.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default OfficeMovingPage; 