import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'service-card-1',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/bff805c4f3-aa5dcc59e2bbe2f7ac19.png',
      title: 'AI Agents',
      description: 'Enhance your workflows by automating operations and with robust automations and intelligent agents.',
      alt: 'a dark mode UI of a chat interface with an input box'
    },
    {
      id: 'service-card-2',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/7a03aabb64-1db3585a0252d2cd5cd5.png',
      title: 'Content Creation',
      description: 'Effortlessly generate high-quality, engaging content tailored to your audience using AI-powered tools.',
      alt: 'a dark mode UI for content creation with social media icon tabs, minimalist'
    },
    {
      id: 'service-card-3',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0d2105e9fe-e8391700b267576cdb90.png',
      title: 'Lead Generation',
      description: 'Strengthen your sales pipeline by identifying, targeting, and attracting high-quality prospects with precision.',
      alt: 'a dark mode UI for lead generation showing contact cards with user profiles, clean'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-brand-gray-dark border border-brand-gray-border px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm text-brand-gray-medium mb-4">
          Services
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Helping You Scale</h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-brand-gray-medium max-w-2xl mx-auto">
          Tailored solutions to streamline, innovate, and grow.
        </p>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-brand-gray-dark border border-brand-gray-border rounded-xl p-4 sm:p-6 text-left hover:border-brand-purple/30 transition-colors">
              <img 
                className="w-full h-32 sm:h-40 object-contain rounded-lg mb-3 sm:mb-4" 
                src={service.image} 
                alt={service.alt} 
              />
              <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-brand-gray-medium leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;