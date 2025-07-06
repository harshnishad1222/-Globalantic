
import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      description: 'As a leader in our industry with a history of innovation and a vast, diverse clientele.'
    },
    {
      number: '02',
      description: 'As a leader in our industry with a history of innovation and a vast, diverse clientele.'
    },
    {
      number: '03',
      description: 'As a leader in our industry with a history of innovation and a vast, diverse clientele.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                Simple process
              </span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Our process help you to grow faster
            </h2>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group hover:bg-white hover:shadow-lg rounded-lg p-4 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center font-bold text-purple-700 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <p className="text-gray-600 leading-relaxed pt-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            {/* Business person illustration */}
            <div className="relative w-96 h-96">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full"></div>
              
              {/* Person figure */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                {/* Head */}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mb-2 mx-auto"></div>
                
                {/* Body */}
                <div className="w-20 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl mx-auto relative">
                  {/* Tie */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-blue-600"></div>
                </div>
                
                {/* Arms */}
                <div className="absolute top-20 -left-6 w-8 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full transform rotate-12"></div>
                <div className="absolute top-20 -right-6 w-8 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full transform -rotate-12"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-16 left-16 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl animate-bounce">
                💰
              </div>
              <div className="absolute top-24 right-12 w-10 h-10 bg-blue-500 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-24 right-20 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white animate-bounce delay-1000">
                🎯
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
