import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center bg-brand-gray-dark border border-brand-gray-border px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
          <Sparkles className="text-brand-purple mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-brand-gray-light">1 Click Alchemy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Let's talk about your next big move
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-brand-gray-medium leading-relaxed">
          Hop on a call with us to see how our services can accelerate your growth.
        </p>
        <button className="mt-8 sm:mt-10 inline-block bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base">
          Schedule A Quick Call <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 inline" />
        </button>
      </div>
    </section>
  );
};

export default CTA;