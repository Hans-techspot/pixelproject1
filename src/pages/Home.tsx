import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Revolutionizing AI Solutions"
        subtitle="Optima AI delivers cutting-edge artificial intelligence solutions tailored to your business needs."
        ctaText="Get Started"
        ctaLink="/contact"
        imageUrl="/images/hero-image.jpg"
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Predictive Analytics"
              description="Harness the power of machine learning to predict future trends and outcomes."
              icon="ChartBar"
            />
            <FeatureCard
              title="Natural Language Processing"
              description="Advanced NLP capabilities for understanding and generating human language."
              icon="MessageSquare"
            />
            <FeatureCard
              title="Computer Vision"
              description="Cutting-edge image and video analysis for various applications."
              icon="Image"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Optima AI's solutions have transformed our business operations and given us a competitive edge."
              author="Sarah Johnson"
              position="CEO, TechCorp"
              imageUrl="/images/client1.jpg"
            />
            <TestimonialCard
              quote="The AI models we implemented have significantly improved our customer service response times."
              author="Michael Chen"
              position="CTO, DataSolutions"
              imageUrl="/images/client2.jpg"
            />
          </div>
        </div>
      </section>
      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Join thousands of satisfied clients who have already experienced the power of Optima AI."
        ctaText="Contact Us"
        ctaLink="/contact"
      />
    </div>
  );
};

export default Home;