import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Express Small Shipments | Moving Star Mover',
  description: 'Fast and reliable express shipping services for small moves and urgent deliveries. Quick, secure, and professional small shipment solutions.',
};

export default function ExpressShipmentsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Express Small Shipments
            </h1>
            <p className="text-xl text-gray-600">
              Fast and Reliable Shipping for Urgent Deliveries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Quick and Efficient Small Shipments
              </h2>
              <p className="text-gray-600">
                When you need to ship items quickly and securely, our express small shipment
                service provides the perfect solution. We specialize in fast, reliable
                delivery for urgent moves and time-sensitive items.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Same-day and next-day delivery options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Real-time shipment tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Professional handling of delicate items</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Nationwide coverage</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/moving-truck.jpg"
                alt="Express Shipping Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Express Shipping Options
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Same-Day Express</h3>
                <p className="text-gray-600">Fastest delivery option for urgent shipments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Next-Day Service</h3>
                <p className="text-gray-600">Guaranteed delivery by next business day</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Priority Express</h3>
                <p className="text-gray-600">2-3 day delivery with priority handling</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What We Ship
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Small Furniture</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Chairs</li>
                  <li>• Small Tables</li>
                  <li>• Cabinets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Electronics</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Computers</li>
                  <li>• TVs</li>
                  <li>• Audio Equipment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Artwork</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Paintings</li>
                  <li>• Sculptures</li>
                  <li>• Framed Art</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Items</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Documents</li>
                  <li>• Clothing</li>
                  <li>• Valuables</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Express Shipping Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Secure Handling</h3>
                <p className="text-gray-600">Professional packaging and secure transport</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Live Tracking</h3>
                <p className="text-gray-600">Real-time updates on your shipment's location</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Insurance Coverage</h3>
                <p className="text-gray-600">Full coverage for peace of mind</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Express Shipping?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us now to schedule your express shipment and get a quick quote.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Express Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 