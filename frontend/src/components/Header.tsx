
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900">Globalantic</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</Link>
            <Link to="/industries" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Industries</Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Services</Link>
            <Link to="/technologies" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Technologies</Link>
            <Link to="/career" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Career</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
              <div className="w-full h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
              <Link to="/industries" className="text-gray-700 hover:text-purple-600 transition-colors">Industries</Link>
              <Link to="/services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</Link>
              <Link to="/technologies" className="text-gray-700 hover:text-purple-600 transition-colors">Technologies</Link>
              <Link to="/career" className="text-gray-700 hover:text-purple-600 transition-colors">Career</Link>
              <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
