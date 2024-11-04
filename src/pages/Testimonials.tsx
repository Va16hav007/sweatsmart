import React from 'react';
import { Star } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const TestimonialCard = ({
  content,
  author,
  role,
  image,
  rating
}: {
  content: string;
  author: string;
  role: string;
  image: string;
  rating: number;
}) => (
  <div className="testimonial-card group hover:bg-purple-50">
    <div className="flex mb-4 group-hover:scale-110 transition-transform duration-300">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{content}</p>
    <div className="flex items-center">
      <img
        src={image}
        alt={author}
        className="h-12 w-12 rounded-full object-cover mr-4 transition-transform duration-300 group-hover:scale-110"
      />
      <div>
        <p className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{author}</p>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  </div>
);

// Rest of the Testimonials component remains the same