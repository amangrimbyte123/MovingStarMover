'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What is considered a long-distance move?",
    answer: "A long-distance move is typically defined as any move that crosses state lines or is more than 400 miles within the same state. These moves require special planning, coordination, and often different pricing structures than local moves."
  },
  {
    question: "How far in advance should I schedule my long-distance move?",
    answer: "It's recommended to schedule your long-distance move at least 6-8 weeks in advance. During peak moving season (May through September), you may want to book even earlier to ensure availability and potentially better rates."
  },
  {
    question: "How are long-distance moving costs calculated?",
    answer: "Long-distance moving costs are typically calculated based on several factors: the weight of your belongings, the distance of your move, additional services required (such as packing and unpacking), insurance coverage, and the time of year. We provide detailed quotes that break down all costs involved."
  },
  {
    question: "What items can't be moved in a long-distance move?",
    answer: "Certain items cannot be transported in a moving truck for safety and legal reasons, including: hazardous materials (paint, aerosols, chemicals), perishable items (food, plants), valuable items (jewelry, important documents), and flammable items (propane tanks, gasoline). We'll provide a complete list during consultation."
  },
  {
    question: "How long will my long-distance move take?",
    answer: "The duration of a long-distance move depends on several factors, including distance, weather conditions, and the size of your shipment. Generally, long-distance moves can take anywhere from 2-14 days. We provide estimated delivery windows and keep you updated throughout the process."
  },
  {
    question: "Do you provide insurance for long-distance moves?",
    answer: "Yes, we offer different levels of protection for your belongings. Basic coverage is included in your move, and additional full-value protection can be purchased. We'll explain all coverage options during your consultation to help you make the best choice for your needs."
  },
  {
    question: "Can you pack my belongings for me?",
    answer: "Yes, we offer full-service packing and unpacking services. Our professional packers are trained to properly pack items for long-distance transport, using high-quality materials and techniques to ensure your belongings arrive safely. You can choose full packing services or partial packing for specific items."
  },
  {
    question: "How can I track my shipment during the move?",
    answer: "We provide shipment tracking capabilities through our modern tracking system. You'll receive regular updates about your shipment's location and estimated arrival time. Our customer service team is also available to provide detailed information about your move's progress."
  }
];

export default function FAQ({ title = "Frequently Asked Questions", subtitle = "Find answers to common questions about long-distance moving", faqs = defaultFAQs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
          <p className="text-lg text-gray-600 text-center mb-12">{subtitle}</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 