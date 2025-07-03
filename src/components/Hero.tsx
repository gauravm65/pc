import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 text-center min-h-[600px] sm:min-h-[650px] lg:h-[700px] flex flex-col items-center justify-center bg-hero-gradient">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img 
          className="absolute w-full h-full object-cover opacity-20" 
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b906700010-a1a1b0226e116a2a6c52.png" 
          alt="a dark purple and blue nebula in deep space, abstract background, digital art" 
        />
      </div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="inline-flex items-center bg-brand-gray-dark border border-brand-gray-border px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
          <Sparkles className="text-brand-purple mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-brand-gray-light">1 Click Alchemy - AI Automations That Scale</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight max-w-5xl mx-auto">
          Scale Faster And Reliably With AI Automations And Agents.
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-brand-gray-medium max-w-2xl mx-auto leading-relaxed">
          Experience the future of business with intelligent, scalable automation solutions tailored to your needs.
        </p>
        <button className="mt-8 sm:mt-10 inline-block bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base">
          Schedule A Quick Call <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 inline" />
        </button>
      </div>
    </section>
  );
};

export default Hero;