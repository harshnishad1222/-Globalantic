
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Artificial Intelligence',
      category: 'CREATIVITY',
      description: 'Cutting-edge AI solutions to transform your business operations and decision-making processes.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'
    },
    {
      title: 'Cyber Security',
      category: 'SECURITY',
      description: 'Comprehensive security solutions to protect your digital assets and maintain business continuity.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    },
    {
      title: 'Web Development',
      category: 'DEVELOPMENT',
      description: 'Modern, responsive web applications built with the latest technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-300 mb-4">
            As a leader in our industry with a history of innovation and a vast, diverse clientele, we provide our people with opportunities to shape the future and impact lives across continents
          </p>
          <h2 className="text-5xl font-bold">
            Shape Tomorrow's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Technology
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <button 
                    onClick={() => navigate('/services')}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Explore More
                    <svg className="inline ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
