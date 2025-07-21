import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            Your Custom AI Copy Engine
          </h2>
          <p className="text-lg text-gray-600">
            We build, train, and manage a proprietary system that learns your business inside and out.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 text-3xl text-purple-500">
              <i className="fa-solid fa-microchip"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">1. Research GPT</h3>
            <p className="text-gray-600">
              Digests your customer data, market research, and brand guidelines to build a deep contextual understanding.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 text-3xl text-orange-500">
              <i className="fa-solid fa-pen-nib"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">2. Hook & Angle GPT</h3>
            <p className="text-gray-600">
              Generates hundreds of creative hooks, headlines, and angles based on proven conversion frameworks.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 text-3xl text-blue-500">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">3. Editor & Refiner GPT</h3>
            <p className="text-gray-600">
              Writes long-form copy, refines it for emotional resonance, and ensures it's 100% on-brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;