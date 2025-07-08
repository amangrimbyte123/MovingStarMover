import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Moving Supplies | Moving Star Mover',
  description: 'High-quality moving supplies and packing materials. Get all the boxes, tape, bubble wrap, and other supplies you need for a successful move.',
};

export default function MovingSuppliesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Moving Supplies
            </h1>
            <p className="text-xl text-gray-600">
              Quality Packing Materials for a Successful Move
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px]">
              <Image
                src="/images/packing-service.jpg"
                alt="Moving Supplies"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Professional Moving Supplies
              </h2>
              <p className="text-gray-600">
                Get all the supplies you need for a successful move. We offer a comprehensive
                selection of high-quality packing materials to ensure your belongings are
                protected during transit.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Professional-grade packing materials</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Bulk discounts available</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Expert packing advice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Eco-friendly options</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Essential Moving Supplies
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Moving Boxes</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Small Boxes</li>
                  <li>• Medium Boxes</li>
                  <li>• Large Boxes</li>
                  <li>• Wardrobe Boxes</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Packing Materials</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Bubble Wrap</li>
                  <li>• Packing Paper</li>
                  <li>• Foam Peanuts</li>
                  <li>• Moving Blankets</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Tapes & Labels</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Packing Tape</li>
                  <li>• Box Labels</li>
                  <li>• Markers</li>
                  <li>• Color Coding Labels</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Special Items</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• TV Boxes</li>
                  <li>• Dish Pack Boxes</li>
                  <li>• Mirror Boxes</li>
                  <li>• Mattress Covers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Supply Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Studio/1-Bedroom</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 15-20 Small Boxes</li>
                  <li>• 10-15 Medium Boxes</li>
                  <li>• 5 Large Boxes</li>
                  <li>• Basic Packing Kit</li>
                </ul>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">2-3 Bedrooms</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 25-30 Small Boxes</li>
                  <li>• 15-20 Medium Boxes</li>
                  <li>• 10 Large Boxes</li>
                  <li>• Complete Packing Kit</li>
                </ul>
              </div>
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">4+ Bedrooms</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 35-40 Small Boxes</li>
                  <li>• 25-30 Medium Boxes</li>
                  <li>• 15 Large Boxes</li>
                  <li>• Premium Packing Kit</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Order Supplies?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us to order your moving supplies or get expert advice on what you'll need.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Order Supplies
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 