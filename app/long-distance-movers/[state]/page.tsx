import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, MapPin, ArrowRight, Box, Shield, Clock, CheckCircle, Star, Phone } from 'lucide-react';
import statesData from '@/lib/data/states.json';
import citiesData from '@/lib/data/cities.json';
import { State, States, Cities, City } from '@/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

type PageProps = {
  params: Promise<{
    state: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateId } = await params;
  const state = (statesData as States).states.find(s => s.id === stateId);
  
  if (!state) {
    return {
      title: 'State Not Found',
    };
  }

  return {
    title: `Long Distance Moving Services in ${state.name} | Moving Star Mover`,
    description: `Professional long distance moving services in ${state.name}. Get reliable and affordable moving solutions for your relocation needs.`,
  };
}

export default function StatePage({ params, searchParams }: PageProps) {
  const { state: stateId } = use(params);
  const state = (statesData as States).states.find(s => s.id === stateId);
  const cities = (citiesData as Cities).cities[stateId] || [];

  if (!state) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-16 lg:pt-20">
        {/* Hero Section with Gradient Background */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/85 to-indigo-600/90"></div>
          <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center opacity-20"></div>
          
          <div className="relative container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white/90 text-sm">Rated #1 Moving Company in {state.name}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Long Distance Moving Services in{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                  {state.name}
                </span>
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Professional and reliable moving solutions tailored to your needs. 
                Trust our experienced team for a seamless relocation experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/cost-calculator" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-white to-blue-50 text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="tel:8006667777"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  (800) 666-7777
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Successful Moves</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* About State Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-900">
                  Moving to {state.name}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {state.description}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our experienced team understands the unique challenges of relocating to {state.name}. 
                  Whether you're moving for work, family, or a fresh start, we're here to make your 
                  transition smooth and stress-free.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Free Estimates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Expert Packers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/moving-truck.jpg"
                  alt="Professional moving services"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white text-xs">
                          {i}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">Trusted Team</div>
                      <div className="text-gray-500">Professional Movers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Images */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
              Comprehensive Moving Services in {state.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/packing-service.jpg"
                    alt="Professional packing services"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Packing Services</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Professional packing materials
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Fragile item protection
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Systematic labeling
                  </li>
                </ul>
              </div>

              <div className="group">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/furniture-moving.jpg"
                    alt="Furniture moving services"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Furniture Moving</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Disassembly & reassembly
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Protective wrapping
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Special equipment handling
                  </li>
                </ul>
              </div>

              <div className="group">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/warehouse-storage.jpg"
                    alt="Storage solutions"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Storage Solutions</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Climate-controlled units
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    24/7 security
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Flexible duration options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other States Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
              Moving From {state.name} to Other States
            </h2>
            <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              Planning a move from {state.name} to another state? Explore our specialized moving services 
              for different state-to-state routes. We ensure a smooth transition to your new home.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {(statesData as States).states
                .filter(s => s.id !== state.id)
                .map(otherState => (
                  <Link
                    key={otherState.id}
                    href={`/long-distance-movers/${state.id}/moving-to/${otherState.id}`}
                    className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-gray-900">{otherState.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {otherState.description}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm group-hover:translate-x-1 transition-transform">
                      <span>View Moving Route</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Popular Cities Section with Map */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
              Popular Moving Destinations in {state.name}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {cities.map((city) => (
                    <Link 
                      key={city.id}
                      href={`/long-distance-movers/${stateId}/${city.id}`}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-600 transition-colors">
                            {city.name}
                          </h3>
                          <p className="text-sm text-gray-600">{city.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/moving-truck.jpg"
                  alt={`Moving services coverage map in ${state.name}`}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-sm text-gray-600">We serve all cities in {state.name}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
              What Our Customers Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">
                    "Excellent service! The team was professional, careful, and efficient. 
                    Made our move to {state.name} completely stress-free."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">JD</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">Verified Customer</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Move?</h2>
                <p className="text-white/90 mb-8 text-lg">
                  Get a free quote for your move in {state.name}. Our team of experts 
                  will ensure a smooth and stress-free moving experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/cost-calculator" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a 
                    href="tel:8006667777"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call (800) 666-7777
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
