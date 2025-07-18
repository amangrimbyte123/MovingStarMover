'use client'
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'THE HIGHCOURT’S',
    review:
      'We compared moving companies and found North American to be the full service solution we needed!',
    avatar:
      'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5,
  },
  {
    name: 'JIMMY SOLOMON',
    review:
      'The long distance move was great. Our movers were professional and took care of our belongings.',
    avatar:
      'https://randomuser.me/api/portraits/men/44.jpg',
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full bg-white py-16 px-4" id="testimonials">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          North American for your next Moving Company
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          With over 500 agent locations throughout the U.S. and Canada, North American movers are always nearby and ready to help. We prioritize your needs through personal relocation specialists, custom moving plans, and an unbeatable commitment to quality service. When you choose northAmerican, you’ll get more than another moving company. You’ll have a partner you can trust and rely on throughout every step of the process. But don’t just take it from us! See what our customers are saying.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-3xl">
          {testimonials.map((t, idx) =>
            idx === current ? (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow p-6 w-full md:w-1/2 transition-all duration-300"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-white shadow"
                />
                <h3 className="font-bold text-gray-800 uppercase tracking-wide text-sm mb-1">{t.name}</h3>
                <div className="text-gray-700 text-sm mb-2">{t.review}</div>
                <div className="flex justify-center mb-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
        <div className="flex gap-4 mt-6">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
} 