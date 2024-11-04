import React from 'react';
import { Check } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false 
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <div className={`p-8 rounded-xl ${highlighted ? 'bg-purple-600 text-white' : 'bg-white'}`}>
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">{price}</span>
      <span className={`${highlighted ? 'text-white/90' : 'text-gray-600'}`}>/month</span>
    </div>
    <p className={`mb-6 ${highlighted ? 'text-white/90' : 'text-gray-600'}`}>{description}</p>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className={`h-5 w-5 mr-2 ${highlighted ? 'text-white' : 'text-purple-600'}`} />
          <span className={highlighted ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 px-4 rounded-md transition ${
        highlighted
          ? 'bg-white text-purple-600 hover:bg-gray-100'
          : 'bg-purple-600 text-white hover:bg-purple-700'
      }`}
    >
      Get Started
    </button>
  </div>
);

const Pricing = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your fitness journey
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <PricingTier
              name="Basic"
              price="Free"
              description="Perfect for getting started with fitness"
              features={[
                'Basic workout plans',
                'Community access',
                'Progress tracking',
                'Limited meditation content'
              ]}
            />
            <PricingTier
              name="Premium"
              price="$12.99"
              description="Most popular for fitness enthusiasts"
              features={[
                'Personalized workout plans',
                'Full community features',
                'Advanced progress analytics',
                'Complete meditation library',
                'Live trainer support'
              ]}
              highlighted={true}
            />
            <PricingTier
              name="Elite"
              price="$24.99"
              description="For those seeking maximum support"
              features={[
                'Everything in Premium',
                '1-on-1 coaching sessions',
                'Nutrition planning',
                'Priority support',
                'Exclusive workshops'
              ]}
            />
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Pricing;