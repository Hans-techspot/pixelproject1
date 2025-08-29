import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">Optima AI</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition duration-300">Products</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition duration-300">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;