import React from 'react';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Optima AI Blog</h1>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Stay up-to-date with the latest trends, insights, and innovations in artificial intelligence from Optima AI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              title="The Future of AI in Healthcare"
              excerpt="Explore how artificial intelligence is revolutionizing healthcare, from diagnostics to personalized treatment plans."
              date="June 15, 2023"
              author="Dr. Emily Chen"
              imageUrl="/images/blog1.jpg"
              link="/blog/future-of-ai-in-healthcare"
            />
            <BlogCard
              title="Ethical Considerations in AI Development"
              excerpt="A comprehensive look at the ethical challenges and considerations in developing and deploying AI systems."
              date="May 28, 2023"
              author="James Wilson"
              imageUrl="/images/blog2.jpg"
              link="/blog/ethical-considerations-in-ai"
            />
            <BlogCard
              title="Machine Learning for Business Growth"
              excerpt="Discover how businesses can leverage machine learning to drive growth, improve operations, and gain competitive advantages."
              date="April 12, 2023"
              author="Priya Patel"
              imageUrl="/images/blog3.jpg"
              link="/blog/machine-learning-for-business-growth"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;