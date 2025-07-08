import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'International Moving Services | Moving Star Mover',
  description: 'Professional international moving services for seamless overseas relocation. Expert handling of customs, documentation, and international shipping.',
};

export default function InternationalMovingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              International Moving Services
            </h1>
            <p className="text-xl text-gray-600">
              Your Trusted Partner for Overseas Relocation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px]">
              <Image
                src="/images/international-shipping.jpg"
                alt="International Moving Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Global Moving Expertise
              </h2>
              <p className="text-gray-600">
                With years of experience in international relocations, we provide comprehensive
                moving services to make your overseas move seamless and stress-free. Our team
                handles all aspects of international shipping and logistics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Door-to-door international moving services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Custom crating and specialized packing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>International shipping and freight services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Customs clearance assistance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our International Moving Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">1. Consultation</h3>
                <p className="text-gray-600">Initial assessment and planning of your international move</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">2. Documentation</h3>
                <p className="text-gray-600">Handling customs and shipping documentation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">3. Packing</h3>
                <p className="text-gray-600">Professional international packing services</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">4. Shipping</h3>
                <p className="text-gray-600">Secure transportation to your destination</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              International Moving Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
                <p className="text-gray-600">Fast shipping options for time-sensitive moves</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ocean Freight</h3>
                <p className="text-gray-600">Cost-effective shipping for larger moves</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Storage Solutions</h3>
                <p className="text-gray-600">Temporary and long-term storage options</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vehicle Shipping</h3>
                <p className="text-gray-600">International auto transport services</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Choose Us for International Moving?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                <p className="text-gray-600">Established partnerships worldwide for seamless moves</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced in international shipping regulations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Full Insurance</h3>
                <p className="text-gray-600">Comprehensive coverage for international moves</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Plan Your International Move
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your international moving needs and receive a detailed quote.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get International Moving Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 