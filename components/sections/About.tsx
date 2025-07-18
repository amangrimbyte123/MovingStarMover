import React from 'react';

export default function About() {
  return (
    <section className="w-full bg-white py-12 px-4" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Moving Company for All Your Needs</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          As a top-rated moving company, we go above and beyond the basics. Our premier moving services include temperature-controlled storage solutions, 24-hour customer service, auto shipping, fragile-only packing options and more. We understand that no two moves are alike—that’s why all of our services can be personalized. With northAmerican, you only pay for what you need.
        </p>
        <a
          href="#"
          className="block text-red-600 text-sm md:text-base font-medium mt-4 hover:underline"
        >
          Access to the Rights and Responsibilities Pamphlet and the "Ready to Move?" Brochure can be found here.
        </a>
      </div>
    </section>
  );
} 