import React from 'react';
import { Shield, Clock, Star, Users, Truck, Award } from 'lucide-react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">About MovingStarMover</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Your Trusted
              <span className="gradient-text"> Moving Partner</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              With over a decade of experience in the moving industry, MovingStarMover has been helping 
              families and businesses relocate with confidence. Our commitment to excellence, attention 
              to detail, and customer satisfaction sets us apart.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fully Insured</div>
                  <div className="text-sm text-gray-600">Complete protection</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">24/7 Support</div>
                  <div className="text-sm text-gray-600">Always available</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Expert Team</div>
                  <div className="text-sm text-gray-600">Trained professionals</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Award Winning</div>
                  <div className="text-sm text-gray-600">Industry recognition</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                View Certifications
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/packing-service.jpg"
                    alt="Professional packing service"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-semibold">Expert Packing</div>
                    <div className="text-sm text-white/90">Professional care</div>
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/customer-service.jpg"
                    alt="Customer service team"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-semibold">Customer Care</div>
                    <div className="text-sm text-white/90">Dedicated support</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/warehouse-storage.jpg"
                    alt="Secure storage facility"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-semibold">Secure Storage</div>
                    <div className="text-sm text-white/90">Climate controlled</div>
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/moving-truck.jpg"
                    alt="Modern moving fleet"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-semibold">Modern Fleet</div>
                    <div className="text-sm text-white/90">GPS tracked</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 