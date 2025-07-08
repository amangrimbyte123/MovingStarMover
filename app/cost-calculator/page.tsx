'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

interface FormData {
  moveSize: string;
  moveDistance: string;
  moveDate: string;
  additionalServices: string[];
  fromZip: string;
  toZip: string;
}

const CostCalculatorPage = () => {
  const [formData, setFormData] = useState<FormData>({
    moveSize: '',
    moveDistance: '',
    moveDate: '',
    additionalServices: [],
    fromZip: '',
    toZip: '',
  });

  const [showEstimate, setShowEstimate] = useState(false);

  const moveSizes = [
    { value: 'studio', label: 'Studio Apartment', basePrice: 1000 },
    { value: '1bedroom', label: '1 Bedroom Apartment', basePrice: 2000 },
    { value: '2bedroom', label: '2 Bedroom Apartment', basePrice: 3000 },
    { value: '3bedroom', label: '3 Bedroom House', basePrice: 4000 },
    { value: '4bedroom', label: '4+ Bedroom House', basePrice: 5000 },
  ];

  const moveDistances = [
    { value: 'local', label: 'Local (< 50 miles)', multiplier: 1 },
    { value: 'intrastate', label: 'Intrastate (50-250 miles)', multiplier: 1.5 },
    { value: 'interstate', label: 'Interstate (250+ miles)', multiplier: 2 },
  ];

  const additionalServices = [
    { value: 'packing', label: 'Packing Service', price: 500 },
    { value: 'storage', label: 'Storage Service', price: 300 },
    { value: 'insurance', label: 'Extra Insurance', price: 200 },
    { value: 'assembly', label: 'Furniture Assembly/Disassembly', price: 250 },
    { value: 'stairs', label: 'Stairs/Elevator', price: 150 },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, value]
        : prev.additionalServices.filter(service => service !== value)
    }));
  };

  const calculateEstimate = () => {
    const selectedSize = moveSizes.find(size => size.value === formData.moveSize);
    const selectedDistance = moveDistances.find(distance => distance.value === formData.moveDistance);
    
    if (!selectedSize || !selectedDistance) return 0;

    let basePrice = selectedSize.basePrice * selectedDistance.multiplier;
    
    const additionalCosts = formData.additionalServices.reduce((total, service) => {
      const serviceItem = additionalServices.find(item => item.value === service);
      return total + (serviceItem?.price || 0);
    }, 0);

    return basePrice + additionalCosts;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowEstimate(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">
              Moving Cost Calculator
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Get an instant estimate for your move with our easy-to-use calculator.
            </p>
          </div>
        </div>

        {/* Calculator Form */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Move Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size of Your Move
                </label>
                <select
                  name="moveSize"
                  value={formData.moveSize}
                  onChange={handleInputChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-xl"
                  required
                >
                  <option value="">Select size...</option>
                  {moveSizes.map(size => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Move Distance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Moving Distance
                </label>
                <select
                  name="moveDistance"
                  value={formData.moveDistance}
                  onChange={handleInputChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-xl"
                  required
                >
                  <option value="">Select distance...</option>
                  {moveDistances.map(distance => (
                    <option key={distance.value} value={distance.value}>
                      {distance.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* ZIP Codes */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Moving From (ZIP)
                  </label>
                  <input
                    type="text"
                    name="fromZip"
                    value={formData.fromZip}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    pattern="[0-9]{5}"
                    placeholder="12345"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Moving To (ZIP)
                  </label>
                  <input
                    type="text"
                    name="toZip"
                    value={formData.toZip}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    pattern="[0-9]{5}"
                    placeholder="12345"
                    required
                  />
                </div>
              </div>

              {/* Moving Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Planned Moving Date
                </label>
                <input
                  type="date"
                  name="moveDate"
                  value={formData.moveDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Additional Services */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Additional Services
                </label>
                <div className="space-y-3">
                  {additionalServices.map(service => (
                    <div key={service.value} className="flex items-center">
                      <input
                        type="checkbox"
                        id={service.value}
                        name="additionalServices"
                        value={service.value}
                        checked={formData.additionalServices.includes(service.value)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={service.value} className="ml-3 text-sm text-gray-700">
                        {service.label} (+${service.price})
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Calculate Cost
                </button>
              </div>
            </form>

            {/* Estimate Result */}
            {showEstimate && (
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Estimated Moving Cost
                </h3>
                <p className="text-3xl font-bold text-blue-600">
                  ${calculateEstimate().toLocaleString()}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  This is a rough estimate. Get an accurate quote from our professional movers.
                </p>
                <button className="mt-4 w-full px-6 py-3 bg-white text-blue-600 font-medium rounded-xl border border-blue-200 hover:bg-blue-50 transition-all duration-300">
                  Get Detailed Quote
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CostCalculatorPage; 