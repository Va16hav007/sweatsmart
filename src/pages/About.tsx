import React from 'react';
import { Users, Award, Heart } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="text-center group hover-lift hover:bg-purple-50 p-6 rounded-xl">
    <Icon className="h-12 w-12 text-purple-600 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
    <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
  </div>
);

const TeamMember = ({ image, name, role, description }: { image: string, name: string, role: string, description: string }) => (
  <div className="text-center group hover-lift">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">{name}</h3>
    <p className="text-purple-600 mb-4">{role}</p>
    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
  </div>
);

// Rest of the About component remains the same, but use ValueCard and TeamMember components