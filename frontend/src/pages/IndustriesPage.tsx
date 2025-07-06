
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, ShoppingCart, Heart, GraduationCap, Car, Home, Plane, Factory } from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Finance & Banking',
      description: 'Secure, scalable fintech solutions for modern banking needs.',
      services: ['Digital Banking', 'Payment Systems', 'Blockchain Solutions', 'Risk Management'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce & Retail',
      description: 'Complete e-commerce platforms and retail management systems.',
      services: ['Online Stores', 'Inventory Management', 'CRM Systems', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Digital health solutions for better patient care and management.',
      services: ['Patient Management', 'Telemedicine', 'Health Analytics', 'Medical Records'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Modern e-learning platforms and educational management systems.',
      services: ['LMS Platforms', 'Virtual Classrooms', 'Student Management', 'Content Creation'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b'
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Smart automotive solutions and connected vehicle technologies.',
      services: ['Fleet Management', 'IoT Integration', 'Predictive Maintenance', 'Smart Systems'],
      image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Property management and real estate technology solutions.',
      services: ['Property Portals', 'CRM Systems', 'Virtual Tours', 'Investment Analytics'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa'
    },
    {
      icon: Plane,
      title: 'Travel & Tourism',
      description: 'Travel booking systems and tourism management platforms.',
      services: ['Booking Systems', 'Travel Apps', 'Tour Management', 'Customer Experience'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial automation and smart manufacturing solutions.',
      services: ['Process Automation', 'Quality Control', 'Supply Chain', 'IoT Integration'],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Industries We Serve</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in">
            Delivering specialized technology solutions across diverse industries with deep domain expertise
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{industry.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {industry.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                            <span className="text-gray-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2 rounded-full transition-all duration-300 hover:scale-105">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default IndustriesPage;
