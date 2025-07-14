import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';
import states from '@/lib/data/states.json';
import cities from '@/lib/data/cities.json';
import { State, City, States, Cities } from '@/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Shield, Clock, CheckCircle2, Building2, Truck, PackageOpen, Users, ArrowRight, ArrowLeft } from 'lucide-react';

type PageProps = {
  params: Promise<{
    state: string;
    city: string;
    toCity: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateId, city: fromCityId, toCity: toCityId } = await params;
  const state = (states as States).states.find((s) => s.id === stateId);
  const fromCity = (cities as Cities).cities[stateId]?.find((c) => c.id === fromCityId);
  const toCity = (cities as Cities).cities[stateId]?.find((c) => c.id === toCityId);
  
  if (!state || !fromCity || !toCity) return {};

  return {
    title: `Moving from ${fromCity.name} to ${toCity.name}, ${state.name} | Moving Star Mover`,
    description: `Professional moving services from ${fromCity.name} to ${toCity.name}, ${state.name}. Get a quote for your long distance move today.`,
  };
}

export default function CityToCity({ params }: PageProps) {
  const { state: stateId, city: fromCityId, toCity: toCityId } = use(params);
  const state = (states as States).states.find((s) => s.id === stateId);
  const fromCity = (cities as Cities).cities[stateId]?.find((c) => c.id === fromCityId);
  const toCity = (cities as Cities).cities[stateId]?.find((c) => c.id === toCityId);

  if (!state || !fromCity || !toCity) {
    notFound();
  }

  const features = [
    { icon: PackageOpen, title: 'Professional Packing', description: 'Expert packing and unpacking services with premium materials' },
    { icon: Truck, title: 'Secure Transport', description: 'State-of-the-art trucks with advanced tracking systems' },
    { icon: Users, title: 'Dedicated Team', description: 'Experienced movers trained in best practices' },
    { icon: Building2, title: 'Storage Solutions', description: 'Climate-controlled storage facilities available' },
    { icon: Shield, title: 'Full Protection', description: 'Comprehensive insurance coverage for your belongings' },
    { icon: Phone, title: '24/7 Support', description: 'Round-the-clock customer service support' }
  ];

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/hero-background.jpg"
              alt="Moving background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Moving from {fromCity.name} to {toCity.name}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Expert Moving Services for Your {fromCity.name} to {toCity.name} Relocation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" variant="primary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free Quote
                </Button>
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Route Information */}
          <Card className="mb-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Route Details</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">From: {fromCity.name}</h3>
                      <p className="text-gray-600">{fromCity.description}</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">To: {toCity.name}</h3>
                      <p className="text-gray-600">{toCity.description}</p>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src="/images/moving-truck.jpg"
                  alt={`Moving from ${fromCity.name} to ${toCity.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </Card>

          {/* Services Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Premium Moving Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive moving solutions for your {fromCity.name} to {toCity.name} relocation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent>
                    <div className="flex flex-col items-center text-center p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Move from {fromCity.name} to {toCity.name}?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get your free, no-obligation moving quote today and experience the difference of professional moving services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" variant="primary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Your Free Quote
                </Button>
                <Link href={`/long-distance-movers/${stateId}/${fromCityId}`}>
                  <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to {fromCity.name}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
} 