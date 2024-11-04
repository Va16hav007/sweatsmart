import React from 'react';
import { ArrowRight, Heart, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

const FeatureHighlight = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-purple-50 rounded-xl group hover-lift hover:bg-purple-100">
    <Icon className="h-12 w-12 text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
  </div>
);
