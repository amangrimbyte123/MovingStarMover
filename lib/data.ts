import { Service, Testimonial, FAQ } from '@/types';

export const services: Service[] = [
  {
    id: 'household',
    title: 'Household Moving',
    description: 'Full-service residential moves with professional packing, loading, and unloading.',
    icon: '🏠',
    features: [
      'Professional packing services',
      'Furniture disassembly & assembly',
      'Loading and unloading',
      'Transportation with GPS tracking',
      'Unpacking and setup assistance'
    ],
    price: 'Starting from $1,200',
    slug: 'household-moving'
  },
  {
    id: 'long-distance',
    title: 'Long Distance Moving',
    description: 'Cross-country and interstate relocations with nationwide coverage.',
    icon: '🚛',
    features: [
      'Nationwide coverage',
      'Multiple delivery options',
      'Storage solutions',
      'Real-time tracking',
      'Insurance coverage'
    ],
    price: 'Starting from $2,500',
    slug: 'long-distance-movers'
  },
  {
    id: 'international',
    title: 'International Moving',
    description: 'Overseas relocation services with customs clearance and documentation.',
    icon: '✈️',
    features: [
      'Customs clearance',
      'Documentation assistance',
      'Container shipping',
      'Door-to-door service',
      'Insurance coverage'
    ],
    price: 'Starting from $5,000',
    slug: 'international-moving'
  },
  {
    id: 'corporate',
    title: 'Corporate Moving',
    description: 'Employee and office relocation services for businesses.',
    icon: '🏢',
    features: [
      'Employee relocation',
      'Office equipment moving',
      'IT equipment handling',
      'Furniture moving',
      'Project management'
    ],
    price: 'Starting from $3,000',
    slug: 'corporate-moving'
  },
  {
    id: 'military',
    title: 'Military Moving',
    description: 'Specialized military relocation services with government contracts.',
    icon: '🎖️',
    features: [
      'Government contract compliance',
      'Specialized handling',
      'Storage solutions',
      'Documentation assistance',
      'Priority scheduling'
    ],
    price: 'Starting from $2,000',
    slug: 'military-moving'
  },
  {
    id: 'auto-transport',
    title: 'Auto Transport',
    description: 'Vehicle shipping and transport services nationwide.',
    icon: '🚗',
    features: [
      'Enclosed transport',
      'Open transport',
      'Door-to-door delivery',
      'Insurance coverage',
      'Real-time tracking'
    ],
    price: 'Starting from $800',
    slug: 'auto-transport'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'New York to California',
    rating: 5,
    comment: 'MovingStarMover made our cross-country move stress-free. The team was professional, punctual, and took great care of our belongings.',
    service: 'Long Distance Moving'
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    location: 'Florida to Texas',
    rating: 5,
    comment: 'Excellent service from start to finish. The quote was accurate, and the movers were friendly and efficient.',
    service: 'Household Moving'
  },
  {
    id: '3',
    name: 'Emily Chen',
    location: 'USA to Germany',
    rating: 5,
    comment: 'International moving can be complicated, but MovingStarMover handled everything perfectly. Highly recommended!',
    service: 'International Moving'
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Virginia to Colorado',
    rating: 5,
    comment: 'As a military family, we needed reliable movers. MovingStarMover exceeded our expectations with their professionalism.',
    service: 'Military Moving'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How far in advance should I book my move?',
    answer: 'We recommend booking at least 2-4 weeks in advance for local moves and 6-8 weeks for long-distance moves to ensure availability.',
    category: 'general'
  },
  {
    id: '2',
    question: 'Do you provide packing materials?',
    answer: 'Yes, we provide all necessary packing materials including boxes, tape, bubble wrap, and furniture blankets.',
    category: 'services'
  },
  {
    id: '3',
    question: 'What is included in your moving services?',
    answer: 'Our services include loading, transportation, unloading, and basic furniture assembly. Packing and unpacking are available as additional services.',
    category: 'services'
  },
  {
    id: '4',
    question: 'Do you offer storage solutions?',
    answer: 'Yes, we offer both short-term and long-term storage solutions at our secure facilities.',
    category: 'services'
  },
  {
    id: '5',
    question: 'How do you calculate moving costs?',
    answer: 'Costs are based on distance, weight, services required, and timing. We provide detailed quotes with no hidden fees.',
    category: 'pricing'
  },
  {
    id: '6',
    question: 'Is my belongings insured during the move?',
    answer: 'Yes, all moves include basic insurance coverage. Additional coverage options are available for valuable items.',
    category: 'insurance'
  }
];

export const companyInfo = {
  name: 'MovingStarMover',
  phone: '(800) MOVING-1',
  email: 'info@movingstarmover.com',
  address: '123 Moving Street, Suite 100, New York, NY 10001',
  hours: 'Monday - Friday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 4:00 PM',
  emergency: '24/7 Emergency Service Available'
}; 