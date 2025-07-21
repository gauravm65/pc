import React from 'react';

const LogoBar: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-gray-500 mb-6">
          Trusted by marketers from high-growth brands
        </p>
        <div className="flex justify-around items-center gap-8 flex-wrap">
          <span className="text-2xl font-bold text-gray-400">Vectra</span>
          <span className="text-2xl font-bold text-gray-400">Optimal</span>
          <span className="text-2xl font-bold text-gray-400">Grapho</span>
          <span className="text-2xl font-bold text-gray-400">Dexign</span>
          <span className="text-2xl font-bold text-gray-400">Signet</span>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;