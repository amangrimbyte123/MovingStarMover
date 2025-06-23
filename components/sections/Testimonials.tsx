import React from 'react';
import { testimonials } from '@/lib/data';
import { Star, Quote, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Customers
            <span className="gradient-text"> Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about their moving experience.
          </p>
        </div>

        {/* Team image section */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/team-working.jpg"
              alt="Our professional moving team at work"
              width={800}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Professional Team</h3>
              <p className="text-white/90">Dedicated experts ensuring your move is smooth and stress-free</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <Quote className="w-6 h-6 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Comment */}
              <blockquote className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                "{testimonial.comment}"
              </blockquote>
              
              {/* Customer info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Image
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=4F46E5&color=fff&size=48`}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.service}
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-tl-2xl"></div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
} 