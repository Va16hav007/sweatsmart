import React from 'react';
import { Calendar, User } from 'lucide-react';

const BlogPost = ({
  title,
  excerpt,
  image,
  author,
  date,
}: {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
}) => (
  <article className="blog-card group">
    <div className="overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center text-sm text-gray-500">
        <User className="h-4 w-4 mr-1" />
        <span className="mr-4">{author}</span>
        <Calendar className="h-4 w-4 mr-1" />
        <span>{date}</span>
      </div>
    </div>
  </article>
);

// Rest of the Blog component remains the same