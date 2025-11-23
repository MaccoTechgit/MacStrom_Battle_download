import { Trophy, Zap, ShieldCheck, Users, Smartphone, DollarSign, Gamepad2 } from 'lucide-react';
import { Feature, Testimonial, FAQItem } from './types';

export const APP_NAME = "Macstrom Battle";
export const APP_SIZE = "65MB"; // Updated for iOS/Universal size context

export const FEATURES: Feature[] = [
  {
    title: "Daily Tournaments",
    description: "Join 500+ matches daily for BGMI, Free Fire, COD, and more.",
    icon: Gamepad2,
  },
  {
    title: "Instant Withdrawals",
    description: "Get your winnings instantly via UPI, Paytm, or Bank Transfer.",
    icon: Zap,
  },
  {
    title: "Secure Gaming",
    description: "Advanced anti-cheat systems ensure a fair play environment for everyone.",
    icon: ShieldCheck,
  },
  {
    title: "Refer & Earn",
    description: "Invite friends and get ₹10 instant bonus per referral.",
    icon: Users,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi",
    quote: "Best app for tournaments! I withdrew ₹5000 instantly after winning the weekend cup.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    winnings: "₹5,000 Won",
  },
  {
    id: 2,
    name: "Priya Singh",
    location: "Mumbai",
    quote: "The interface is smooth on my iPhone. Loving the daily scrims and quick support.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    winnings: "₹2,500 Won",
  },
  {
    id: 3,
    name: "Vikram Das",
    location: "Kolkata",
    quote: "Legit app with quick payments. Anti-cheat actually works here unlike other apps.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    winnings: "₹12,000 Won",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Is my money safe?",
    answer: "Absolutely. We use encrypted payment gateways and your wallet balance is secured with bank-grade security protocols.",
  },
  {
    question: "How do I withdraw winnings?",
    answer: "Go to Wallet > Withdraw > Select UPI/Paytm > Enter Amount. Withdrawals are processed instantly 24/7.",
  },
  {
    question: "Is it available on iOS and Android?",
    answer: "Yes! Macstrom Battle is available for both Android (APK) and iOS. Download the version suitable for your device from the links above.",
  },
  {
    question: "Do I need to pay to join?",
    answer: "We offer both free entry tournaments with cash prizes and paid entry tournaments with bigger prize pools.",
  },
];