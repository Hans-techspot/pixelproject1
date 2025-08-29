import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, position, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={imageUrl} alt={author} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <p className="font-bold text-gray-800">{author}</p>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;