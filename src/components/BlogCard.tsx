import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, author, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <span>{date}</span>
          <span>By {author}</span>
        </div>
        <Link to={link} className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;