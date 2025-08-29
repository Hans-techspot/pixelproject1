import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About Optima AI</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Optima AI is at the forefront of artificial intelligence innovation, dedicated to delivering cutting-edge solutions that transform businesses and industries.
            </p>
            <p className="text-lg mb-6">
              Founded in 2010, we have grown from a small startup to a global leader in AI technology, with a team of over 500 passionate experts.
            </p>
            <p className="text-lg">
              Our mission is to make advanced AI accessible to all businesses, regardless of size or industry, empowering them to achieve their full potential.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Dr. Emily Chen"
              position="CEO & Founder"
              bio="Dr. Chen leads Optima AI with a vision to revolutionize the AI landscape. With a PhD in Computer Science, she brings over 20 years of experience in AI research and development."
              imageUrl="/images/team1.jpg"
            />
            <TeamMemberCard
              name="James Wilson"
              position="CTO"
              bio="James oversees our technical strategy and ensures our AI solutions are at the cutting edge of technology. With a background in software engineering, he has led numerous successful AI projects."
              imageUrl="/images/team2.jpg"
            />
            <TeamMemberCard
              name="Priya Patel"
              position="Head of Product"
              bio="Priya leads our product development team, ensuring our solutions meet the needs of our clients. With a background in product management, she has a proven track record of delivering successful AI products."
              imageUrl="/images/team3.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;