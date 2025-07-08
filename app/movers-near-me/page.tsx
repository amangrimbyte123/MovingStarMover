import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Local Movers Near Me | Moving Star Mover',
  description: 'Find reliable local movers in your area with Moving Star Mover. Get professional moving services with our experienced team of movers near you.',
};

export default function MoversNearMePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Professional Movers Near You
            </h1>
            <p className="text-xl text-gray-600">
              Trusted Local Moving Services in Your Area
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Why Choose Our Local Movers?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Experienced and professional moving crews</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Fully licensed and insured services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Competitive and transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Professional packing and unpacking services</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/moving-truck.jpg"
                alt="Local Moving Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Local Moving Services Include:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Residential Moving</h3>
                <p className="text-gray-600">Complete home moving solutions tailored to your needs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Apartment Moving</h3>
                <p className="text-gray-600">Specialized services for apartment and condo relocations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Same-Day Moving</h3>
                <p className="text-gray-600">Quick and efficient moving services when you need them most</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today for a free quote and let us help you with your local move!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get a Free Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 