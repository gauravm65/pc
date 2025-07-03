import React from 'react';

const Process: React.FC = () => {
  const processSteps = [
    {
      id: 'process-card-1',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/257ef5b721-2ce130a6eefc14d5473d.png',
      title: 'Discovery & Analysis',
      description: 'We dive deep into your needs, exploring ideas and defining strategies for long-term success.',
      alt: 'a sleek dark mode UI of a data analysis dashboard with charts and graphs, minimalist, professional'
    },
    {
      id: 'process-card-2',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d89cc81b2e-8172593d1739b27ed6bf.png',
      title: 'Development & Test',
      description: 'We craft tailored solutions for your goals and rigorously test them for top-notch reliability.',
      alt: 'a dark mode UI of a code editor with highlighted syntax, showing javascript code, clean and modern'
    },
    {
      id: 'process-card-3',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/24668ee0c1-42600f1bbfda77d031ae.png',
      title: 'Launch & Maintain',
      description: 'We deploy your solution seamlessly and ensure its continued performance with ongoing care.',
      alt: 'a dark mode UI of a system settings page with toggles and status indicators, sleek and futuristic'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-brand-gray-dark border border-brand-gray-border px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm text-brand-gray-medium mb-4">
          Process
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Here's How We Do It</h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-brand-gray-medium">Our simple, effective approach</p>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step) => (
            <div key={step.id} className="bg-brand-gray-dark border border-brand-gray-border rounded-xl p-6 sm:p-8 text-left hover:border-brand-purple/30 transition-colors">
              <img 
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6" 
                src={step.image} 
                alt={step.alt} 
              />
              <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-brand-gray-medium leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;