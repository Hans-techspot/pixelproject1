import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link to={ctaLink} className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg transition duration-300">
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;