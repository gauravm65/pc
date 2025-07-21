import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
            Ready to Build Your Unfair Advantage?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Stop guessing. Start converting. Let's build a copy system that prints money for your business.
          </p>
          <button className="bg-brand-black text-white px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 transform transition-transform duration-300">
            Build My Copy System
          </button>
          <p className="mt-8 text-sm text-gray-500">
            Pricing starts at $15K setup + $5K/month for unlimited copy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;