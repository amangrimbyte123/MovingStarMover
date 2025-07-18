"use client";

import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[520px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://picsum.photos/1500/800?blur=2"
          alt="Placeholder background"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center px-4 py-12 md:py-20">

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center leading-tight mb-2 drop-shadow-lg">
          Long Distance Movers
          <br />
         
        </h1>
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-100 text-center max-w-2xl mb-8 font-medium">
          Many Californians are relocating to Texas for the lower cost of living and lifestyle changes. Learn more about this trend and the top movers who can assist with your California-to-Texas relocation.
        </p>
        {/* Quote Form Card */}
        <div className="w-full max-w-xl bg-gradient-to-br from-white via-blue-50 to-blue-100/80 rounded-3xl shadow-2xl p-8 md:p-4 border border-blue-100 backdrop-blur-lg flex flex-col items-center transition-all duration-300">
         <div className="mb-8 text-[#e7000b] capitalize text-center text-lg font-medium">
          <span className="text-2xl font-semibold">Long Distance moving services </span><br/>
          <span className="tracking-wider">Stress free Moving with Moving star movers</span>
         </div>
         
          <form className="w-full flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-6 w-full items-center">
              <div className="flex-1 flex flex-col relative">
                <input
                  id="movingFrom"
                  type="text"
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-blue-200 rounded-xl bg-white/80 text-gray-900 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all duration-200 shadow-sm placeholder-transparent"
                />
                <label htmlFor="movingFrom" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-semibold bg-white/80 px-1 transition-all duration-200 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-[11px] peer-focus:text-blue-600 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[11px] peer-not-placeholder-shown:text-blue-600">Moving From</label>
              </div>
              <div className="hidden sm:flex items-center justify-center h-12">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 text-blue-600 shadow"><svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' /></svg></span>
              </div>
              <div className="flex-1 flex flex-col relative">
                <input
                  id="movingTo"
                  type="text"
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-blue-200 rounded-xl bg-white/80 text-gray-900 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all duration-200 shadow-sm placeholder-transparent"
                />
                <label htmlFor="movingTo" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-semibold bg-white/80 px-1 transition-all duration-200 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-[11px] peer-focus:text-blue-600 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[11px] peer-not-placeholder-shown:text-blue-600">Moving To</label>
              </div>
            </div>
            <Link
            href="#"
              type="submit"
              className="w-full sm:w-auto mx-auto bg-gradient-to-r from-pink-500 via-blue-500 to-teal-400 hover:from-pink-600 hover:to-teal-500 text-white font-bold text-lg py-3 px-16 rounded-full shadow-2xl transition-all duration-200 tracking-wide focus:ring-4 focus:ring-pink-300 focus:outline-none flex items-center justify-center gap-3 group relative overflow-hidden animate-pulse"
            >
              <span className="absolute inset-0 rounded-full bg-pink-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <span className="flex items-center gap-2 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white group-hover:scale-125 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17l5-5m0 0l-5-5m5 5H6" />
              </svg>
              <span className="uppercase tracking-widest font-extrabold drop-shadow">Get My Free Quote</span>
              </span>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
} 