
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7' },
    { name: 'Jane Smith', role: 'CTO', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
    { name: 'Mike Johnson', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b' },
    { name: 'Sarah Wilson', role: 'Design Director', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Globalantic</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We are a team of passionate innovators dedicated to shaping the future through technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Globalantic, we believe in empowering businesses through innovative technology solutions. 
                Our mission is to bridge the gap between traditional business processes and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600">
                We strive to deliver exceptional value to our clients by combining creativity, technical expertise, 
                and a deep understanding of business needs.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Talented individuals working together to create amazing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
