
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and Address */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
              </div>
              <span className="text-2xl font-bold">Globalantic</span>
            </Link>
            <p className="text-gray-400">
              Office No. 582, Near Market, Bhopal
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/career" className="text-gray-400 hover:text-white transition-colors">Career</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><span className="text-gray-400">Website Development</span></li>
              <li><span className="text-gray-400">CRM</span></li>
              <li><span className="text-gray-400">AI Automation</span></li>
              <li><span className="text-gray-400">Social Media Management</span></li>
              <li><span className="text-gray-400">SEO</span></li>
              <li><span className="text-gray-400">Designing</span></li>
            </ul>
          </div>

          {/* Robot Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-32 h-32">
              {/* Robot head */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl">
                <div className="absolute top-3 left-3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
                <div className="absolute inset-1 border border-gray-400 rounded-xl opacity-50"></div>
              </div>
              
              {/* Robot body */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © Copyright 2025, Globalantic - Services & Products
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
