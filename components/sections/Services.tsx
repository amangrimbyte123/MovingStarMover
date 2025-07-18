import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 13.5V7a2 2 0 012-2h2.5M21 13.5V7a2 2 0 00-2-2h-2.5M3 13.5l9 6 9-6M3 13.5V17a2 2 0 002 2h2.5m13.5-5.5V17a2 2 0 01-2 2h-2.5" /></svg>
    ),
    title: 'HOUSEHOLD MOVING',
    desc: 'We offer personal, professional service for all residential moves, including full-service packing, loading, and more.',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20" /></svg>
    ),
    title: 'INTERNATIONAL',
    desc: 'North American moves all over the world with the same care as moving to a new country.',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    title: 'CORPORATE',
    desc: 'We’ll handle the logistics and complexity of corporate moves for employees and their families.',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2" /><path d="M6 3v4M18 3v4" /></svg>
    ),
    title: 'OFFICE MOVING',
    desc: 'Our office moving services ensure minimal disruption with efficient planning and day-to-day operations.',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
    ),
    title: 'MOVING SERVICES',
    desc: 'Every move is unique and we provide a range of services including packing, storage, and more.',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 mx-auto text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M8 17v2a2 2 0 002 2h4a2 2 0 002-2v-2" /></svg>
    ),
    title: 'LONG DISTANCE',
    desc: 'Our team will help you safely relocate anywhere in the country with expert care for your items.',
    link: '#',
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white py-16 px-4" id="services">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Why Choose North American Moving Company</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          North American Van Lines is a top-rated moving company in the U.S. and Canada—and has been for over 90 years! Since 1933, we’ve helped families, individuals and corporations achieve hassle-free relocations, whether across town or across the country. North American movers are courteous, reliable, and trusted throughout North America and beyond. Contact us today for a free quote or estimate.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mt-8 mb-4">Moving Services from North American Van Lines</h3>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow border-t-4 border-blue-900">
            {service.icon}
            <h4 className="mt-4 text-lg font-bold text-blue-900 uppercase tracking-wide mb-1">{service.title}</h4>
            <p className="mt-2 text-gray-700 text-sm mb-4">{service.desc}</p>
            <a href={service.link} className="text-red-600 font-semibold text-sm hover:underline">LEARN MORE</a>
          </div>
        ))}
      </div>
    </section>
  );
} 