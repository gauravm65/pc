import React from 'react';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';

const Infrastructure: React.FC = () => {
  const features = [
    'Advanced workflows & full internal system built for scale',
    'Complex trigger logic, scraping, enrichment and dynamic flows',
    'Custom AI agents to handle repetitive tasks smartly.',
    'Custom dashboards, SOPs, and live training. Fully tailored.',
    'Ideal for ops-heavy teams and internal tool replacements'
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Your AI Infrastructure Partner:</h2>
        <div className="mt-8 sm:mt-12 bg-brand-gray-dark border border-brand-gray-border rounded-2xl p-6 sm:p-8 lg:p-12 text-center bg-card-glow">
          <div className="inline-flex items-center bg-brand-purple/20 text-brand-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Star className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Bespoke Solutions
          </div>
          <p className="text-base sm:text-lg text-brand-gray-light mb-6 sm:mb-8 leading-relaxed">
            Skip the fluff. We build and deploy high-performance AI agents and automation workflows that replace manual tasks, accelerate operations, and drive real ROI.
          </p>
          <button className="inline-block bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base mb-6 sm:mb-8">
            Schedule A Quick Call <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 inline" />
          </button>
          <ul className="space-y-3 sm:space-y-4 text-left max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-brand-gray-light text-sm sm:text-base">
                <CheckCircle className="text-brand-purple mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;