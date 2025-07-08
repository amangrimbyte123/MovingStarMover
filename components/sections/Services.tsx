import React from 'react';
import { services } from '@/lib/data';
import { Truck, Home, Building, Car, Plane, Shield, Clock, Star } from 'lucide-react';
import Button from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const serviceIcons = {
  'Household Moving': Truck,
  'Long Distance Moving': Home,
  'Corporate Moving': Building,
  'Auto Transport': Car,
  'International Moving': Plane,
  'Military Moving': Shield
};

const serviceImages = {
  'Household Moving': '/images/furniture-moving.jpg',
  'Long Distance Moving': '/images/moving-truck.jpg',
  'Corporate Moving': '/images/office-moving.jpg',
  'Auto Transport': '/images/auto-transport.jpg',
  'International Moving': '/images/international-shipping.jpg',
  'Military Moving': '/images/military-moving.jpg'
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete Moving
            <span className="gradient-text"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From local moves to international relocations, we provide comprehensive 
            moving solutions tailored to your specific needs with expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons] || Truck;
            const serviceImage = serviceImages[service.title as keyof typeof serviceImages];
            
            return (
              <div 
                key={service.id} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={serviceImage || '/images/moving-truck.jpg'}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </div>
                    <Link href={service.slug === 'long-distance-movers' ? `/long-distance-movers` : '#'}>
                      <Button 
                        size="md" 
                        variant="primary"
                        className="hover:scale-105 transition-transform duration-200 shadow-lg font-medium"
                      >
                        {service.slug === 'long-distance-movers' ? 'Learn More' : 'Get Quote'}
                      </Button>
                    </Link>
                  </div>

                  {/* Additional features indicator */}
                  {service.features.length > 3 && (
                    <div className="mt-4 text-sm text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-bl-2xl z-0"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Need immediate assistance?</span>
            </div>
            <Button variant="primary">
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 