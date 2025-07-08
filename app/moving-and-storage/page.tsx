import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Moving and Storage Services | Moving Star Mover',
  description: 'Secure storage solutions and moving services. Short-term and long-term storage options with professional moving assistance.',
};

export default function MovingAndStoragePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Moving and Storage Services
            </h1>
            <p className="text-xl text-gray-600">
              Secure Storage Solutions Combined with Professional Moving Services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Comprehensive Storage Solutions
              </h2>
              <p className="text-gray-600">
                Whether you need temporary storage during your move or long-term storage solutions,
                we provide secure, climate-controlled facilities to keep your belongings safe and
                protected.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>24/7 monitored storage facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Climate-controlled units</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Flexible storage duration options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Easy access to your belongings</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/warehouse-storage.jpg"
                alt="Storage Facility"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Storage Options
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Short-Term Storage</h3>
                <p className="text-gray-600">Perfect for temporary storage during moves or renovations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Long-Term Storage</h3>
                <p className="text-gray-600">Secure solution for extended storage needs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Transit Storage</h3>
                <p className="text-gray-600">Temporary storage during long-distance moves</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Storage Facilities Feature
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Climate Control</h3>
                <p className="text-gray-600">Temperature and humidity-controlled environment</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Security Systems</h3>
                <p className="text-gray-600">24/7 surveillance and advanced security measures</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fire Protection</h3>
                <p className="text-gray-600">Advanced fire detection and suppression systems</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
                <p className="text-gray-600">Convenient access to your stored items</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Combined Moving & Storage Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Packing Services</h3>
                <p className="text-gray-600">Professional packing for stored items</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Loading/Unloading</h3>
                <p className="text-gray-600">Safe handling of items to and from storage</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
                <p className="text-gray-600">Detailed tracking of stored items</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Moving and Storage Solutions?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your storage needs and get a customized quote.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Storage Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 