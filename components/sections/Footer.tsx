'use client';

import React from 'react';
import { companyInfo } from '@/lib/data';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MovingStar
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Your trusted partner for stress-free moving experiences. From local moves to international relocations, 
              we make your transition smooth and worry-free with professional care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>{companyInfo.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Household Moving
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Long Distance Moving
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  International Moving
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Corporate Moving
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Military Moving
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Auto Transport
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Services
                </a>
              </li>
              <li>
                <a href="#quote" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Get Quote
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 MovingStar. All rights reserved.
            </p>
            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Cookie Policy
                </a>
              </div>
              
              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 