import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon: Icon, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="inline-block text-blue-600 hover:text-blue-800 font-medium">
        Learn More
      </Link>
    </div>
  );
};

export default ProductCard;