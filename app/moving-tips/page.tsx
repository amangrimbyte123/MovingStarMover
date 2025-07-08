import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const MovingTipsPage = () => {
  const tips = [
    {
      category: 'Planning & Organization',
      items: [
        'Start planning at least 8 weeks before your move date',
        'Create a detailed moving inventory list',
        'Research and book movers early',
        'Set up a moving calendar with important dates',
        'Start collecting packing supplies early'
      ]
    },
    {
      category: 'Packing Tips',
      items: [
        'Pack room by room to stay organized',
        'Label boxes clearly with contents and destination room',
        'Use proper packing materials for fragile items',
        'Pack an essentials box for your first night',
        'Take photos of electronic setups before disconnecting'
      ]
    },
    {
      category: 'Money Saving Tips',
      items: [
        'Compare multiple moving quotes',
        'Move during off-peak season if possible',
        'Declutter and sell unwanted items',
        'Collect free boxes from local stores',
        'Consider a hybrid move (partial DIY)'
      ]
    },
    {
      category: 'Moving Day Tips',
      items: [
        'Keep important documents with you',
        'Have cash on hand for unexpected expenses',
        'Take photos of your empty old home',
        'Do a final walkthrough of both properties',
        'Keep valuable items with you during the move'
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
              Expert Moving Tips & Advice
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Make your move smoother with our comprehensive collection of moving tips and best practices.
            </p>
          </div>
        </div>

        {/* Tips Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((section, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {section.category}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="inline-block w-4 h-4 mt-1 mr-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Need professional help with your move? Get a free quote from our expert movers!
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Your Free Moving Quote
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MovingTipsPage; 