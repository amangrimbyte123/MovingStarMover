import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import states from '@/lib/data/states.json';
import { State, States } from '@/types';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Shield, Clock, CheckCircle2, Building2, Truck, PackageOpen, Users, ArrowRight, ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{
    state: string;
    toState: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const fromState = (states as States).states.find((s) => s.id === resolvedParams.state);
  const toState = (states as States).states.find((s) => s.id === resolvedParams.toState);

  if (!fromState || !toState) {
    return {
      title: 'State Not Found',
      description: 'The requested state could not be found.',
    };
  }

  return {
    title: `Moving from ${fromState.name} to ${toState.name} | Moving Star Mover`,
    description: `Professional moving services from ${fromState.name} to ${toState.name}. Get expert assistance for your interstate move with Moving Star Mover.`,
  };
}

export default async function StateToStatePage({ params, searchParams }: Props) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const { state: fromStateId, toState: toStateId } = resolvedParams;
  const fromState = (states as States).states.find((s) => s.id === fromStateId);
  const toState = (states as States).states.find((s) => s.id === toStateId);

  if (!fromState || !toState) {
    notFound();
  }

  const features = [
    { icon: PackageOpen, title: 'Professional Packing', description: 'Expert packing services with premium materials' },
    { icon: Truck, title: 'Direct Transport', description: `Direct route from ${fromState.name} to ${toState.name}` },
    { icon: Users, title: 'Dedicated Team', description: 'Experienced interstate moving specialists' },
    { icon: Building2, title: 'Storage Solutions', description: 'Temporary storage available if needed' },
    { icon: Shield, title: 'Full Protection', description: 'Comprehensive interstate moving insurance' },
    { icon: Phone, title: '24/7 Support', description: 'Round-the-clock customer service' }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/moving-truck.jpg"
            alt={`Moving from ${fromState.name} to ${toState.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Moving from {fromState.name} to {toState.name}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Expert interstate moving services with dedicated support every step of the way
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Route Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Interstate Moving Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in long-distance moves from {fromState.name} to {toState.name}, 
              ensuring a smooth transition to your new home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">From: {fromState.name}</h3>
                  <p className="text-gray-600">{fromState.description}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">To: {toState.name}</h3>
                  <p className="text-gray-600">{toState.description}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Moving Distance Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Estimated Transit Time: 3-7 Business Days</span>
                </li>
                <li className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span>Direct Route Available</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>Full Value Protection Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Interstate Moving Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-white">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Move from {fromState.name} to {toState.name}?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get your free quote today and let us handle your interstate move with care
          </p>
          <div className="flex justify-center gap-4">
                         <Button variant="primary" size="lg">
               Get Free Quote
             </Button>
             <Button variant="outline" size="lg">
               Contact Us
             </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 