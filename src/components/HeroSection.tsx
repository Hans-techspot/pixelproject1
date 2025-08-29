import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, ctaLink, imageUrl }) => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
            <Link to={ctaLink} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              {ctaText}
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img src={imageUrl} alt="Hero" className="rounded-lg shadow-xl" />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;