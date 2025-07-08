"use client";

import React from 'react';
import { ArrowRight, Truck, MapPin, Shield, Star, CheckCircle, Clock, Phone, Calendar, Package, Home, Globe, Building2, Warehouse, DollarSign, Users, Scale, Box, CalendarClock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Button from '@/components/ui/Button';
import statesData from '@/lib/data/states.json';

export default function LongDistanceMovers() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section - Updated with parallax effect and floating elements */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 transform transition-transform duration-1000 hover:scale-105">
          <Image
            src="/images/moving-truck.jpg"
            alt="Long distance moving truck"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 hover:bg-white/20 transition-all">
                <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-white/90 text-sm">95+ Years of Excellence in Moving</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-white animate-fade-in-left">Expert Long Distance</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">Moving Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Professional interstate moving services across all 50 states and 130+ countries.
                <br />96% customer satisfaction rate with guaranteed pricing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 animate-bounce" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Phone className="mr-2 w-5 h-5 animate-pulse" />
                  24/7 Support
                </Button>
              </div>
            </div>

            {/* Quick Quote Form - Updated with modern glassmorphism */}
            <div className="glass rounded-2xl p-8 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <h3 className="text-2xl font-semibold text-white mb-6">Get Your Free Moving Quote</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">Moving From</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Enter ZIP code or City"
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">Moving To</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Enter ZIP code or City"
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">Moving Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                    <input 
                      type="date" 
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">Home Size</label>
                  <select 
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                  >
                    <option value="">Select home size</option>
                    <option value="studio">Studio</option>
                    <option value="1bed">1 Bedroom</option>
                    <option value="2bed">2 Bedrooms</option>
                    <option value="3bed">3 Bedrooms</option>
                    <option value="4bed">4+ Bedrooms</option>
                  </select>
                </div>
                <Button 
                  size="lg"
                  variant="primary"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-102 transition-all"
                >
                  Calculate My Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Updated with alternating layout */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-blue-600 bg-blue-50 border border-blue-100">
              <Star className="w-4 h-4 mr-2" />
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Comprehensive Moving Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that every move is unique. That's why we offer a complete range of moving services 
              tailored to your specific needs.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                icon: <Package className="w-8 h-8 text-white" />,
                title: "Full-Service Packing",
                description: "Our professional packers use premium materials and techniques to ensure your belongings are protected.",
                features: ["Professional packing team", "Premium packing materials", "Custom crating available", "Systematic labeling"],
                image: "/images/packing-service.jpg"
              },
              {
                icon: <Truck className="w-8 h-8 text-white" />,
                title: "Long Distance Transport",
                description: "Experience worry-free transportation across all 50 states with our modern fleet of trucks.",
                features: ["GPS tracking system", "Climate-controlled trucks", "Experienced drivers", "Regular status updates"],
                image: "/images/moving-truck.jpg"
              },
              {
                icon: <Warehouse className="w-8 h-8 text-white" />,
                title: "Storage Solutions",
                description: "Our secure, climate-controlled storage facilities provide the perfect solution for both short and long-term storage needs.",
                features: ["24/7 surveillance", "Climate control", "Easy access", "Flexible terms"],
                image: "/images/warehouse-storage.jpg"
              }
            ].map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60 mix-blend-multiply"></div>
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-white font-semibold">{service.title}</span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Process Section - Updated with interactive timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-purple-600 bg-purple-50 border border-purple-100">
              <Clock className="w-4 h-4 mr-2" />
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Our Simple Moving Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've streamlined our moving process to make your transition as smooth as possible.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

            {[
              {
                step: "1",
                icon: <Phone className="w-6 h-6 text-white" />,
                title: "Initial Consultation",
                description: "Begin with a free consultation where we understand your needs.",
                details: ["Free detailed estimate", "Virtual/in-home options", "Dedicated coordinator", "Initial planning"],
                image: "/images/customer-service.jpg"
              },
              {
                step: "2",
                icon: <Calendar className="w-6 h-6 text-white" />,
                title: "Custom Planning",
                description: "Receive a comprehensive moving plan tailored to your needs.",
                details: ["Customized timeline", "Transparent pricing", "Resource allocation", "Special requirements"],
                image: "/images/team-working.jpg"
              },
              {
                step: "3",
                icon: <Truck className="w-6 h-6 text-white" />,
                title: "Professional Moving",
                description: "Our trained team arrives on schedule to carefully pack and transport.",
                details: ["Expert packing", "Careful loading", "Real-time tracking", "Regular updates"],
                image: "/images/furniture-moving.jpg"
              },
              {
                step: "4",
                icon: <Home className="w-6 h-6 text-white" />,
                title: "Safe Delivery",
                description: "We ensure on-time delivery at your new location.",
                details: ["Timely delivery", "Professional setup", "Final inspection", "Complete satisfaction"],
                image: "/images/moving-truck.jpg"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex flex-col lg:flex-row gap-8 items-center mb-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative h-[300px] rounded-2xl overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 mix-blend-multiply"></div>
                    </div>
                    <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                    <ul className="grid grid-cols-2 gap-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors Section - Updated with interactive tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-green-600 bg-green-50 border border-green-100">
              <DollarSign className="w-4 h-4 mr-2" />
              Moving Costs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Understanding Moving Costs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency when it comes to moving costs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Base Moving Cost</span>
                    <span className="font-semibold text-gray-900">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Distance Factor</span>
                    <span className="font-semibold text-gray-900">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Additional Services</span>
                    <span className="font-semibold text-gray-900">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Insurance</span>
                    <span className="font-semibold text-gray-900">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Scale className="w-8 h-8 text-blue-600" />,
                    title: "Shipment Weight",
                    description: "The total weight of your belongings is a primary factor in determining costs.",
                    points: ["Precise calculation", "Volume consideration"]
                  },
                  {
                    icon: <MapPin className="w-8 h-8 text-purple-600" />,
                    title: "Moving Distance",
                    description: "Distance between locations affects fuel costs and transit time.",
                    points: ["Mile-based rates", "Route optimization"]
                  },
                  {
                    icon: <CalendarClock className="w-8 h-8 text-pink-600" />,
                    title: "Time of Year",
                    description: "Moving costs vary based on seasonal demand and availability.",
                    points: ["Peak season rates", "Off-peak discounts"]
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-yellow-600" />,
                    title: "Insurance Coverage",
                    description: "Choose from different levels of protection for your belongings.",
                    points: ["Basic coverage", "Full protection"]
                  }
                ].map((factor, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50">
                        {factor.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{factor.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{factor.description}</p>
                    <ul className="space-y-2">
                      {factor.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Updated with modern card design */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 mb-6 shadow-md">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 text-sm font-medium">96% Customer Satisfaction Rate</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Cross-Country Move",
                rating: 5,
                comment: "The team made our coast-to-coast move seamless. Professional, punctual, and careful with our belongings."
              },
              {
                name: "Michael Chen",
                location: "Interstate Relocation",
                rating: 5,
                comment: "Outstanding service! Real-time tracking gave us peace of mind throughout the entire moving process."
              },
              {
                name: "Emily Rodriguez",
                location: "Corporate Move",
                rating: 5,
                comment: "Excellent corporate relocation service. The team handled everything from packing to setup in our new office."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="rounded-xl p-8 bg-white border border-gray-200 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 group"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500 group-hover:animate-pulse" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transform group-hover:scale-110 transition-all duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold group-hover:text-yellow-600 transition-colors">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection & Insurance Section - Updated with modern card design */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-blue-600 bg-blue-50 border border-blue-100">
              <Shield className="w-4 h-4 mr-2" />
              Protection Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Moving Protection Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your peace of mind is our priority. Choose the coverage that best suits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-8 bg-white border border-gray-200 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full transform translate-x-20 -translate-y-20"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Basic Liability Coverage</h3>
                    <p className="text-gray-600">Included with every move at no extra cost</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$0.60 <span className="text-lg font-normal text-gray-600">per pound per item</span></div>
                  <p className="text-gray-600">Minimum protection required by federal law</p>
                </div>
                <ul className="space-y-4 relative">
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <span className="font-semibold block text-gray-900">Standard Industry Protection</span>
                      Provides basic coverage for all items
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <span className="font-semibold block text-gray-900">Weight-Based Coverage</span>
                      Compensation based on item weight
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <span className="font-semibold block text-gray-900">No Additional Cost</span>
                      Included in your moving package
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl p-8 bg-white border-2 border-purple-200 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full transform translate-x-20 -translate-y-20"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
                  Recommended
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-purple-600" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Extra Care Protection</h3>
                  <p className="text-gray-600">Full-value coverage for complete peace of mind</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">100% <span className="text-lg font-normal text-gray-600">of declared value</span></div>
                <p className="text-gray-600">Premium protection for your valuable items</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Comprehensive Coverage</span>
                    Full protection based on item value
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Repair or Replacement</span>
                    Choice between repair or full replacement
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Quick Claims Process</span>
                    Streamlined claims with dedicated support
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">High-Value Item Coverage</span>
                    Special protection for valuable items
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* States Section - Updated with modern grid design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-indigo-600 bg-indigo-50 border border-indigo-100">
              <MapPin className="w-4 h-4 mr-2" />
              Popular Routes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Popular Moving Routes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most requested long-distance moving destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statesData.states.map((state) => (
              <Link 
                key={state.id} 
                href={`/long-distance-movers/${state.id}`}
                className="group relative"
              >
                <div className="rounded-xl p-6 bg-white border border-gray-200 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-20 group-hover:-translate-y-20 transition-transform"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        Moving to {state.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{state.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{state.abbreviation} Moving Services</span>
                      <ArrowRight className="w-5 h-5 text-indigo-600 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Updated with modern gradient design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid animate-grid-fade"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Get your free quote today and experience our award-winning moving services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="primary"
                className="bg-white text-blue-900 hover:bg-white/90 transform hover:scale-105 transition-all"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 animate-bounce" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Phone className="mr-2 w-5 h-5 animate-pulse" />
                Speak to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes grid-fade {
          0% { opacity: 0.1; }
          50% { opacity: 0.2; }
          100% { opacity: 0.1; }
        }
        
        .animate-grid-fade {
          animation: grid-fade 3s infinite;
        }
        
        .bg-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
      `}</style>

      <Footer />
    </main>
  );
} 