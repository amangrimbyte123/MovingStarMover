import React from 'react';
import { Phone, ClipboardCheck, Truck, Home, Star } from 'lucide-react';
import Image from 'next/image';
import Button from '../ui/Button';

const processSteps = [
  {
    id: 1,
    title: 'Get Your Free Quote',
    description: 'Contact us for a detailed, no-obligation quote tailored to your specific moving needs.',
    icon: Phone,
    image: '/images/customer-service.jpg',
    features: ['Online quote form', 'Phone consultation', 'In-home assessment']
  },
  {
    id: 2,
    title: 'Plan & Prepare',
    description: 'Our team works with you to create a comprehensive moving plan and timeline.',
    icon: ClipboardCheck,
    image: '/images/packing-service.jpg',
    features: ['Custom moving plan', 'Packing timeline', 'Inventory checklist']
  },
  {
    id: 3,
    title: 'Professional Moving Day',
    description: 'Our experienced team handles your move with care, efficiency, and attention to detail.',
    icon: Truck,
    image: '/images/furniture-moving.jpg',
    features: ['Expert loading', 'Secure transport', 'GPS tracking']
  },
  {
    id: 4,
    title: 'Settle In',
    description: 'We help you unpack and settle into your new home, ensuring everything is perfect.',
    icon: Home,
    image: '/images/team-working.jpg',
    features: ['Furniture assembly', 'Unpacking service', 'Final inspection']
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple Moving
            <span className="gradient-text"> Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've streamlined our moving process to make your relocation as smooth and stress-free as possible. 
            Here's how we work together to ensure a successful move.
          </p>
        </div>

        <div className="space-y-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={step.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      {step.id}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {step.id === 1 && (
                    <div className="pt-4">
                      <Button variant="primary" size="lg">
                        Get Started Today
                      </Button>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Step number overlay */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">{step.id}</span>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Move?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have trusted MovingStarMover with their relocation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 