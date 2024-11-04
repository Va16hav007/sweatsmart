import React from 'react';
import { Smartphone, Users, Brain, Heart, BarChart, Calendar } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="feature-card group">
    <Icon className="h-12 w-12 text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
    <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Personalized App",
      description: "Custom workout plans tailored to your goals, schedule, and fitness level."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with like-minded women, share experiences, and motivate each other."
    },
    {
      icon: Brain,
      title: "Mindfulness Sessions",
      description: "Access guided meditation and yoga sessions for mental wellness."
    },
    {
      icon: Heart,
      title: "Health Tracking",
      description: "Monitor your progress, health metrics, and wellness journey."
    },
    {
      icon: BarChart,
      title: "Progress Analytics",
      description: "Detailed insights and analytics to track your fitness improvements."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Flexible workout planning that adapts to your lifestyle."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 hover-lift">
              Features That Empower Your Journey
            </h1>
            <p className="text-xl text-gray-600 floating-animation">
              Discover all the tools and support you need to achieve your fitness goals
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};