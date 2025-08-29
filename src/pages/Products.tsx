import React from 'react';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our AI Solutions</h1>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI solutions designed to address the unique challenges of modern businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Predictive Analytics"
              description="Harness the power of machine learning to predict future trends and outcomes with our advanced predictive analytics solution."
              icon="ChartBar"
              link="/products/predictive-analytics"
            />
            <ProductCard
              title="Natural Language Processing"
              description="Our NLP platform enables businesses to understand and generate human language, powering applications like chatbots and sentiment analysis."
              icon="MessageSquare"
              link="/products/nlp"
            />
            <ProductCard
              title="Computer Vision"
              description="Transform your business with our computer vision solutions, enabling advanced image and video analysis for various applications."
              icon="Image"
              link="/products/computer-vision"
            />
            <ProductCard
              title="Automated Customer Support"
              description="Enhance customer satisfaction with our AI-powered customer support system, providing 24/7 assistance and resolving issues efficiently."
              icon="Headphones"
              link="/products/customer-support"
            />
            <ProductCard
              title="Fraud Detection"
              description="Protect your business from financial losses with our advanced fraud detection system, identifying suspicious activities in real-time."
              icon="Shield"
              link="/products/fraud-detection"
            />
            <ProductCard
              title="Recommendation Engine"
              description="Boost sales and customer engagement with our recommendation engine, providing personalized product suggestions based on user behavior."
              icon="Star"
              link="/products/recommendation-engine"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;