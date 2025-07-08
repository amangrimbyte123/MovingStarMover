import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const EmployeeRelocationPage = () => {
  const services = [
    {
      title: 'Pre-Move Consultation',
      description: 'Comprehensive planning and support before the move.',
      features: [
        'Needs assessment',
        'Budget planning',
        'Timeline development',
        'Location orientation'
      ]
    },
    {
      title: 'Housing Assistance',
      description: 'Help finding and securing new accommodation.',
      features: [
        'Home search assistance',
        'Rental/purchase guidance',
        'Area orientation tours',
        'School information'
      ]
    },
    {
      title: 'Moving Services',
      description: 'Full-service packing and transportation.',
      features: [
        'Professional packing',
        'Furniture moving',
        'Vehicle transportation',
        'Storage solutions'
      ]
    },
    {
      title: 'Settling-In Services',
      description: 'Support for smooth transition to new location.',
      features: [
        'Utility setup',
        'Local registration',
        'Banking assistance',
        'Community integration'
      ]
    }
  ];

  const benefits = [
    {
      title: 'For Employers',
      items: [
        'Increased employee retention',
        'Improved recruitment success',
        'Streamlined relocation process',
        'Cost-effective solutions',
        'Minimal productivity loss'
      ]
    },
    {
      title: 'For Employees',
      items: [
        'Reduced stress during transition',
        'Professional support throughout',
        'Family assistance services',
        'Cultural adaptation help',
        'Work-life balance support'
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
              Employee Relocation Services
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Comprehensive relocation solutions for your valued employees and their families.
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

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Relocation Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-4">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="inline-block w-4 h-4 mt-1 mr-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Support Your Employees' Transition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us help you create a seamless relocation experience for your employees.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EmployeeRelocationPage; 