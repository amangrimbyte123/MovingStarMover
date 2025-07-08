import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Military Moving Services | Moving Star Mover',
  description: 'Specialized moving services for military personnel and their families. Expert PCS move assistance with military moving requirements.',
};

export default function MilitaryMovingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Military Moving Services
            </h1>
            <p className="text-xl text-gray-600">
              Specialized Moving Solutions for Service Members and Their Families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Expert Military PCS Move Assistance
              </h2>
              <p className="text-gray-600">
                We understand the unique challenges of military relocations and provide specialized
                services to make your PCS move as smooth as possible. Our team is well-versed in
                military moving requirements and regulations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Familiar with military documentation requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Experienced with CONUS and OCONUS moves</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Strict adherence to military moving regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Flexible scheduling for short-notice moves</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/military-moving.jpg"
                alt="Military Moving Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Military Moving Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">PCS Moves</h3>
                <p className="text-gray-600">Complete relocation services for permanent change of station</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Storage Solutions</h3>
                <p className="text-gray-600">Secure storage options during deployment or transition</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Vehicle Transport</h3>
                <p className="text-gray-600">Safe and reliable auto shipping services</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Military Moving Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Military Discounts</h3>
                <p className="text-gray-600">Special rates for active duty and veteran service members</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Documentation Support</h3>
                <p className="text-gray-600">Assistance with military moving paperwork and requirements</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Weight Allowance</h3>
                <p className="text-gray-600">Expert handling of military weight allowance requirements</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance for military personnel</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Plan Your Military Move?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your PCS move requirements and receive a detailed quote.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Military Moving Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 