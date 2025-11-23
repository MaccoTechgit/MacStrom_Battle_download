import { LucideIcon } from 'lucide-react';

export type PageType = 'home' | 'privacy' | 'terms' | 'refund' | 'fairplay';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  image: string;
  winnings: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}