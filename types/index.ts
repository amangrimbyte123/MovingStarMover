export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface QuoteForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  fromAddress: string;
  toAddress: string;
  moveDate: string;
  bedrooms: number;
  additionalServices: string[];
  message: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
} 