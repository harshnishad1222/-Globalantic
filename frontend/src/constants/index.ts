/**
 * Application constants and configuration
 * @fileoverview Centralized constants for the Globalantic application
 */

import type { NavigationItem, ServiceItem, CompanyStats } from '@/types';

export const APP_CONFIG = {
  NAME: 'Globalantic',
  TAGLINE: 'Empower Your Tomorrow, Today',
  DESCRIPTION: 'Leading technology company providing AI, Web Development, and Cyber Security solutions',
  URL: 'https://globalantic.com',
  EMAIL: 'contact@globalantic.com',
  PHONE: '+91-98765-43210',
  ADDRESS: 'Office No. 582, Near Market, Bhopal, India',
} as const;

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Career', href: '/career' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'ai-development',
    title: 'AI Development',
    description: 'Custom AI solutions powered by machine learning and deep learning technologies',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies',
    icon: '🌐',
    features: ['React/Next.js', 'Node.js', 'Cloud Deployment', 'Progressive Web Apps'],
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets',
    icon: '🔒',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
  },
] as const;

export const COMPANY_STATS: CompanyStats = {
  projectsCompleted: 150,
  clientsSatisfied: 98,
  yearsExperience: 5,
  teamMembers: 25,
} as const;

export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/globalantic',
  LINKEDIN: 'https://linkedin.com/company/globalantic',
  GITHUB: 'https://github.com/globalantic',
} as const;

export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;