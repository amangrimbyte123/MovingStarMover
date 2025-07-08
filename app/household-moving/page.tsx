import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Professional Household Moving Services | Moving Star Mover',
  description: 'Expert household moving services for a stress-free relocation. We handle your belongings with care and provide comprehensive moving solutions.',
};

export default function HouseholdMovingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Household Moving Services
            </h1>
            <p className="text-xl text-gray-600">
              Your Trusted Partner for a Seamless Home Relocation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px]">
              <Image
                src="/images/furniture-moving.jpg"
                alt="Household Moving Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Comprehensive Household Moving Solutions
              </h2>
              <p className="text-gray-600">
                We understand that moving your entire household requires careful planning and execution.
                Our experienced team ensures that your belongings are packed, transported, and delivered
                safely to your new home.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Full-service packing and unpacking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Custom crating for valuable items</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Furniture disassembly and reassembly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Room-by-room organization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Moving Process
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">1. Planning</h3>
                <p className="text-gray-600">Detailed assessment and customized moving plan creation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">2. Packing</h3>
                <p className="text-gray-600">Professional packing with high-quality materials</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">3. Moving</h3>
                <p className="text-gray-600">Safe transport and careful handling of your belongings</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-600">Our movers are trained professionals with years of experience</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
                <p className="text-gray-600">Modern moving trucks and professional-grade moving equipment</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Insurance Coverage</h3>
                <p className="text-gray-600">Full coverage options for your peace of mind</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-gray-600">Dedicated support throughout your moving journey</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready for a Stress-Free Move?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your household moving needs and get a customized quote.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Request a Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 