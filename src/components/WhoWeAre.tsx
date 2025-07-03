import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block bg-brand-gray-dark border border-brand-gray-border px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm text-brand-gray-medium mb-4">
          Who We Are
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
          We help business owners like you to automate their day-to-day business operations reliably with AI
        </h2>
      </div>
    </section>
  );
};

export default WhoWeAre;