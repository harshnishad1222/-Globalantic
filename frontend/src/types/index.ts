/**
 * Global type definitions for the Globalantic application
 * @fileoverview Contains all shared TypeScript interfaces and types
 */

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly features: readonly string[];
}

export interface TechnologyItem {
  readonly name: string;
  readonly category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai';
  readonly proficiency: number;
  readonly icon: string;
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly position: string;
  readonly bio: string;
  readonly avatar: string;
  readonly socialLinks: {
    readonly linkedin?: string;
    readonly twitter?: string;
    readonly github?: string;
  };
}

export interface CompanyStats {
  readonly projectsCompleted: number;
  readonly clientsSatisfied: number;
  readonly yearsExperience: number;
  readonly teamMembers: number;
}

export type Theme = 'light' | 'dark' | 'system';

export interface ApiResponse<T = unknown> {
  readonly success: boolean;
  readonly data?: T;
  readonly message?: string;
  readonly error?: string;
}

export interface SEOMetadata {
  readonly title: string;
  readonly description: string;
  readonly keywords?: readonly string[];
  readonly ogImage?: string;
  readonly canonical?: string;
}