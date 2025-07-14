'use client';

import React from 'react';
import { Book, CheckSquare, Package, ArrowRight } from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function MovingResources() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Moving Resources &
              <span className="gradient-text"> Guides</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know for a successful move. Expert tips, checklists, and comprehensive guides.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Tips Section */}
      <section id="tips" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Book className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Moving Tips</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your moving tips content here */}
            <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-4">Plan Ahead</h3>
              <p className="text-gray-600">Start planning your move at least 8 weeks in advance to ensure a smooth transition.</p>
            </div>
            {/* Add more tips */}
          </div>
        </div>
      </section>

      {/* Moving Checklist Section */}
      <section id="checklist" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <CheckSquare className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Moving Checklist</h2>
          </div>
          <div className="space-y-6">
            {/* Add your checklist content here */}
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">8 Weeks Before</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                  <span>Create a moving budget and timeline</span>
                </li>
                {/* Add more checklist items */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packing Guides Section */}
      <section id="packing" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Package className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Packing Guides</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your packing guides content here */}
            <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-4">Room-by-Room Guide</h3>
              <p className="text-gray-600">Learn how to efficiently pack each room in your home with our detailed guides.</p>
            </div>
            {/* Add more guides */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 