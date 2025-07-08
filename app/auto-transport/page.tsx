import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Auto Transport Services | Moving Star Mover',
  description: 'Professional vehicle shipping and auto transport services. Safe and reliable car shipping across the country with door-to-door delivery options.',
};

export default function AutoTransportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Auto Transport Services
            </h1>
            <p className="text-xl text-gray-600">
              Safe and Reliable Vehicle Shipping Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px]">
              <Image
                src="/images/auto-transport.jpg"
                alt="Auto Transport Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Professional Vehicle Transport
              </h2>
              <p className="text-gray-600">
                Trust your vehicle to our experienced auto transport team. We provide
                comprehensive vehicle shipping services with the highest standards of
                safety and reliability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Door-to-door vehicle delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Enclosed and open carrier options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Full insurance coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Real-time shipment tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Transport Options
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Open Transport</h3>
                <p className="text-gray-600 mb-4">Cost-effective solution for standard vehicles</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Most economical option</li>
                  <li>• Ideal for standard vehicles</li>
                  <li>• Multiple vehicle transport</li>
                  <li>• Faster availability</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Enclosed Transport</h3>
                <p className="text-gray-600 mb-4">Premium protection for luxury and classic cars</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Complete vehicle protection</li>
                  <li>• Perfect for luxury vehicles</li>
                  <li>• Weather and road debris protection</li>
                  <li>• Extra security measures</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Vehicles We Transport
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Cars</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Sedans</li>
                  <li>• SUVs</li>
                  <li>• Luxury Cars</li>
                  <li>• Sports Cars</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Trucks</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Pickup Trucks</li>
                  <li>• Commercial Trucks</li>
                  <li>• Box Trucks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Specialty</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Classic Cars</li>
                  <li>• Motorcycles</li>
                  <li>• RVs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fleet</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Corporate Fleets</li>
                  <li>• Dealer Inventory</li>
                  <li>• Multiple Vehicles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Auto Transport Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">1. Quote</h3>
                <p className="text-gray-600">Get an instant quote for your vehicle transport</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">2. Book</h3>
                <p className="text-gray-600">Schedule your vehicle pickup and delivery</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">3. Pickup</h3>
                <p className="text-gray-600">Professional vehicle inspection and loading</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">4. Delivery</h3>
                <p className="text-gray-600">Safe and timely delivery to your destination</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Ship Your Vehicle?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today for a free quote and to discuss your auto transport needs.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Auto Transport Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 