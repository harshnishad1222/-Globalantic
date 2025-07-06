import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Robot illustration */}
            <div className="relative w-96 h-96 mx-auto">
              {/* Background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full"></div>
              
              {/* Robot */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                {/* Robot head */}
                <div className="w-24 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mb-4 relative">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-300 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute -left-2 top-6 w-4 h-8 bg-blue-500 rounded-full"></div>
                  <div className="absolute -right-2 top-6 w-4 h-8 bg-blue-500 rounded-full"></div>
                </div>
                
                {/* Robot body */}
                <div className="w-32 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl relative -ml-4">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-300 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-4 w-6 h-2 bg-blue-300 rounded"></div>
                  <div className="absolute bottom-3 left-4 w-4 h-2 bg-blue-300 rounded"></div>
                </div>
              </div>

              {/* Stats positioning */}
              <div className="absolute top-16 left-4 bg-white rounded-lg shadow-lg p-4 animate-bounce">
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className="text-sm text-gray-600">Young brains involved</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                Young Team
              </span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Team that can lead the world revolutions
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              As a leader in our industry with a history of innovation and a vast, diverse clientele, we provide our people with opportunities to shape the future and impact lives across continents
            </p>

            <Button 
              onClick={() => navigate('/about')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Read About Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">30+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">300+</div>
                <div className="text-gray-600">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
