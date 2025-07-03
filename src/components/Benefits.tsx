import React from 'react';
import { Tag, CheckCheck, TrendingUp } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      id: 'benefit-card-1',
      icon: Tag,
      title: 'Cost reduction',
      description: 'Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.'
    },
    {
      id: 'benefit-card-2',
      icon: CheckCheck,
      title: 'Improved outcomes',
      description: 'Leverage powerful data-driven insights and innovative strategies to enhance business performance and achieve superior outcomes.'
    },
    {
      id: 'benefit-card-3',
      icon: TrendingUp,
      title: 'Increased productivity',
      description: 'Enhance group performance and output by automating redundant tasks, refining processes, and speeding up business functions.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-brand-gray-dark border border-brand-gray-border px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm text-brand-gray-medium mb-4">
          Benefits
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Maximize efficiency and impact</h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-brand-gray-medium">Discover the key benefits of partnering with us.</p>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-brand-gray-dark border border-brand-gray-border rounded-xl p-6 sm:p-8 text-left bg-card-glow hover:border-brand-purple/30 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <benefit.icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-brand-gray-medium leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;