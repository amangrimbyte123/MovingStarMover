'use client';

import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const MovingChecklistPage = () => {
  const timelineItems = [
    {
      period: '8 Weeks Before',
      tasks: [
        'Create a moving budget and timeline',
        'Research and get quotes from moving companies',
        'Start decluttering your home',
        'Begin collecting packing supplies',
        'Create a home inventory'
      ]
    },
    {
      period: '6 Weeks Before',
      tasks: [
        'Book your moving company',
        'Start packing non-essential items',
        'Plan your new home layout',
        'Schedule utility disconnection/connection',
        'Begin using up frozen foods and pantry items'
      ]
    },
    {
      period: '4 Weeks Before',
      tasks: [
        'File change of address with USPS',
        'Notify important parties of your move',
        'Schedule transfer of medical records',
        'Plan for pet transportation if needed',
        'Start packing room by room'
      ]
    },
    {
      period: '2 Weeks Before',
      tasks: [
        'Confirm moving date with the moving company',
        'Pack most of your belongings',
        'Clean rooms as you pack',
        'Make travel arrangements if needed',
        'Schedule time off work for moving day'
      ]
    },
    {
      period: '1 Week Before',
      tasks: [
        'Pack essential items box',
        'Confirm utility disconnection/connection dates',
        'Clean outdoor areas',
        'Dispose of hazardous materials',
        'Prepare payment for movers'
      ]
    },
    {
      period: 'Moving Day',
      tasks: [
        'Do final walkthrough',
        'Keep important documents with you',
        'Take photos of empty house/apartment',
        'Supervise movers',
        'Get keys to new home'
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
              Ultimate Moving Checklist
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Stay organized and on track with our comprehensive moving timeline and checklist.
            </p>
          </div>
        </div>

        {/* Checklist Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {item.period}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start">
                      <div className="flex items-center h-6 mt-1">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <span className="ml-3 text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Print Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Print Checklist
            </button>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Want to make your move even easier? Let our professional movers help!
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

export default MovingChecklistPage; 