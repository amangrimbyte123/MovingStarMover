import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const CommercialMovingPage = () => {
  const services = [
    {
      title: 'Large-Scale Relocation',
      description: 'Complete moving solutions for businesses of any size.',
      features: [
        'Multi-site coordination',
        'Phased moving plans',
        'Weekend/after-hours moves',
        'Project management'
      ]
    },
    {
      title: 'Specialized Equipment',
      description: 'Safe handling of industrial and specialized equipment.',
      features: [
        'Heavy machinery moving',
        'Equipment dismantling',
        'Precision reassembly',
        'Safety compliance'
      ]
    },
    {
      title: 'Warehouse & Inventory',
      description: 'Comprehensive warehouse and inventory relocation services.',
      features: [
        'Inventory management',
        'Warehouse organization',
        'Storage solutions',
        'Distribution setup'
      ]
    },
    {
      title: 'Industrial Solutions',
      description: 'Specialized services for industrial facilities.',
      features: [
        'Factory relocations',
        'Production line moving',
        'Equipment calibration',
        'Minimal downtime'
      ]
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Specialized in moving heavy machinery and production lines with minimal disruption.'
    },
    {
      name: 'Retail',
      description: 'Expert handling of inventory, fixtures, and point-of-sale systems.'
    },
    {
      name: 'Healthcare',
      description: 'Careful moving of sensitive medical equipment and compliance with regulations.'
    },
    {
      name: 'Warehousing',
      description: 'Efficient relocation of large inventory and storage systems.'
    },
    {
      name: 'Technology',
      description: 'Secure moving of servers, IT infrastructure, and sensitive equipment.'
    },
    {
      name: 'Education',
      description: 'Campus-wide moves including laboratories and classroom equipment.'
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
              Commercial Moving Solutions
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Expert relocation services for businesses, warehouses, and industrial facilities.
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

          {/* Industries Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Commercial Moving Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">Detailed evaluation of your moving needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Planning</h3>
                <p className="text-gray-600">Comprehensive moving strategy development</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Execution</h3>
                <p className="text-gray-600">Efficient and careful moving process</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Setup</h3>
                <p className="text-gray-600">Complete setup at new location</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Plan Your Commercial Move?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us for a customized moving solution tailored to your business needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CommercialMovingPage; 