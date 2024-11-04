import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsAnimating(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in hover-lift">
            Join Our Newsletter
          </h2>
          <p className="text-white/90 mb-8 animate-slide-up floating-animation">
            Get weekly tips, motivation, and exclusive content delivered straight to your inbox.
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex gap-4 animate-slide-up">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300 hover:ring-2 hover:ring-purple-200"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-md hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover-lift"
                disabled={isAnimating}
              >
                Subscribe
                <Send className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                  isAnimating ? 'translate-x-1' : ''
                } group-hover:translate-x-1`} />
              </button>
            </form>
          ) : (
            <div className="text-white text-xl animate-fade-in pulse-animation">
              Thanks for subscribing! 🎉
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;