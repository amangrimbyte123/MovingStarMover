'use client';

import React from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Long Distance Movers', href: '/long-distance-movers' },
  { name: 'Moving Resources', href: '/moving-resources' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-40 h-10 flex items-center">
            {/* Placeholder logo */}
            <span className="font-bold text-xl text-blue-900">north<span className="text-red-600">American</span></span>
          </div>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-base font-medium text-gray-700">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-900 transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Phone/CTA */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline text-sm text-gray-600">Call Us:</span>
          <a
            href="tel:800-228-3092"
            className="text-blue-900 font-bold text-lg tracking-wide hover:underline"
          >
            800-228-3092
          </a>
          <a
            href="#quote"
            className="ml-2 bg-red-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-red-700 transition-colors duration-150"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
} 