"use client";

import React, { useState } from 'react';
import { Truck, Shield, Clock, Star, ArrowRight, MapPin, Phone, CheckCircle, Play } from 'lucide-react';
import Button from '../ui/Button';
import Image from 'next/image';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with dynamic gradient */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Professional moving truck and team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/75 to-indigo-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 animate-scale-in">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-white/90 text-sm font-medium">Trusted by 10,000+ Happy Customers</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Moving Made</span>
                <br />
                <span className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Effortless</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                Professional moving services that transform your relocation into a seamless experience. 
                From local moves to international relocations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="primary"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Video
                </span>
              </Button>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Free Estimates</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Same Day Service</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 hover-lift group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">10,000+</div>
                <div className="text-white/80 text-sm">Successful Moves</div>
              </div>
              
              <div className="glass rounded-2xl p-6 hover-lift group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">50 States</div>
                <div className="text-white/80 text-sm">Nationwide Coverage</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 hover-lift group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">100%</div>
                <div className="text-white/80 text-sm">Fully Insured</div>
              </div>
              
              <div className="glass rounded-2xl p-6 hover-lift group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">24/7</div>
                <div className="text-white/80 text-sm">Support Available</div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass rounded-2xl p-6 border-l-4 border-blue-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Need Immediate Help?</div>
                  <div className="text-white/80 text-sm">Call us now for instant support</div>
                </div>
              </div>
              <Button 
                size="sm" 
                variant="primary"
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 