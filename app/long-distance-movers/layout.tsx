import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Long Distance Movers | Moving Star Mover',
  description: 'Professional long distance moving services across all states. Choose your state to get started with your move.',
};

export default function LongDistanceMoversLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 