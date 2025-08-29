import React from 'react';

interface TeamMemberCardProps {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, position, bio, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800 text-center mb-1">{name}</h3>
      <p className="text-blue-600 text-center mb-4">{position}</p>
      <p className="text-gray-600 text-center">{bio}</p>
    </div>
  );
};

export default TeamMemberCard;