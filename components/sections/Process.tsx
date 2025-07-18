import React from 'react';

const resources = [
  {
    icon: (
      <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    title: 'PACKING TIPS',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 2v4M16 2v4M4 10h16" /></svg>
    ),
    title: 'MOVER CHECKLIST',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    title: 'MOVING COST CALCULATOR',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /><rect x="7" y="2" width="10" height="12" rx="2" /></svg>
    ),
    title: 'FREQUENTLY ASKED QUESTIONS',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    title: 'VIRTUAL MOVE SURVEY',
    link: '#',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M8 17v2a2 2 0 002 2h4a2 2 0 002-2v-2" /></svg>
    ),
    title: 'MOVING TIPS',
    link: '#',
  },
];

export default function Process() {
  return (
    <section className="w-full bg-white py-16 px-4" id="resources">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">The Best Moving Company Resources and Tips</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          With over nine decades in the business, it’s safe to say North American Van Lines knows a thing or two about moving! If you’re planning a move and not sure where to begin, you’ll love our free online resources to help streamline your upcoming relocation. From packaging estimates to thorough checklists that cover every stage of the moving process, we have you covered.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 mb-8">
        {resources.map((resource, idx) => (
          <div key={idx} className="flex items-center gap-4">
            {resource.icon}
            <div className="text-left">
              <h4 className="font-bold text-lg text-blue-900 uppercase tracking-tight mb-1">{resource.title}</h4>
              <a href={resource.link} className="text-xs text-red-600 font-semibold hover:underline">VIEW ALL</a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <a href="#" className="bg-red-600 text-white font-bold px-6 py-2 rounded hover:bg-red-700 transition-colors text-sm shadow">SEE ALL MOVING RESOURCES</a>
      </div>
    </section>
  );
} 