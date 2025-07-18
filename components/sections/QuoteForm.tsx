'use client';

import React from 'react';

export default function QuoteForm() {
  return (
    <section className="w-full bg-[#0a75b8] py-6 px-4" id="quote">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-bold text-white text-lg md:text-xl">north<span className="text-red-600">American</span>.</span>
            <span className="text-white text-base md:text-lg tracking-wide font-light">QUOTE <span className="font-thin">ON DEMAND</span></span>
          </div>
          <form className="flex flex-col md:flex-row items-center justify-center gap-2 w-full max-w-2xl mx-auto mb-1">
            <div className="flex flex-col items-start">
              <label htmlFor="from" className="text-xs text-white mb-1 ml-1">Moving From</label>
              <input
                id="from"
                type="text"
                placeholder="Full Street Address"
                className="px-2 py-1 rounded-sm border border-gray-200 text-sm w-44 md:w-56 focus:outline-none"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="to" className="text-xs text-white mb-1 ml-1">Moving To</label>
              <input
                id="to"
                type="text"
                placeholder="Address/Zip code"
                className="px-2 py-1 rounded-sm border border-gray-200 text-sm w-44 md:w-56 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-5 md:mt-6 md:ml-2 bg-red-600 text-white font-bold px-6 py-1.5 rounded-sm text-sm shadow hover:bg-red-700 transition-colors duration-150"
            >
              NEXT
            </button>
          </form>
          <div className="text-white text-xs mt-1">
            Or call <span className="font-bold">800-228-3092</span> to start your free quote!
          </div>
        </div>
      </div>
    </section>
  );
} 