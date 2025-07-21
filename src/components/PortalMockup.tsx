import React from 'react';

const PortalMockup: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
          Meet Your Copy Intelligence Engine
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Every piece of copy is powered by deep contextual understanding. Your agents know your brand, customers, and market better than any human copywriter.
        </p>
        
        {/* Context Engine Visual */}
        <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <i className="fa-solid fa-user-group text-2xl text-blue-400 mb-2"></i>
              <h4 className="text-white font-semibold text-sm">Customer Insights</h4>
              <p className="text-gray-300 text-xs">Demographics, psychographics, pain points</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <i className="fa-solid fa-bullhorn text-2xl text-purple-400 mb-2"></i>
              <h4 className="text-white font-semibold text-sm">Brand Voice</h4>
              <p className="text-gray-300 text-xs">Tone, personality, messaging pillars</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <i className="fa-solid fa-chart-line text-2xl text-green-400 mb-2"></i>
              <h4 className="text-white font-semibold text-sm">Performance Data</h4>
              <p className="text-gray-300 text-xs">What converts, what doesn't</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <i className="fa-solid fa-crosshairs text-2xl text-orange-400 mb-2"></i>
              <h4 className="text-white font-semibold text-sm">Competitive Intel</h4>
              <p className="text-gray-300 text-xs">Market positioning, offer analysis</p>
            </div>
          </div>
          
          {/* Central AI Brain */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full opacity-40"></div>
            <div className="absolute inset-8 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-full opacity-60"></div>
            <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center">
              <i className="fa-solid fa-brain text-4xl text-purple-600"></i>
            </div>
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-purple-400 to-transparent transform -translate-y-1/2 -translate-x-full"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-l from-purple-400 to-transparent transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-gradient-to-t from-purple-400 to-transparent transform -translate-x-1/2 -translate-y-full"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-gradient-to-b from-purple-400 to-transparent transform -translate-x-1/2"></div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Context-Driven Copy Intelligence</h3>
            <p className="text-gray-300">Every word is informed by your complete business context</p>
          </div>
        </div>
        
        {/* Service Elevation */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
            <i className="fa-solid fa-rocket text-3xl text-purple-600 mb-4"></i>
            <h4 className="text-xl font-bold mb-2">Launch Ready</h4>
            <p className="text-gray-600 text-sm">From brief to launch in 48 hours. No revisions needed.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
            <i className="fa-solid fa-infinity text-3xl text-blue-600 mb-4"></i>
            <h4 className="text-xl font-bold mb-2">Infinite Scale</h4>
            <p className="text-gray-600 text-sm">Unlimited copy across all channels. No bottlenecks.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
            <i className="fa-solid fa-trophy text-3xl text-green-600 mb-4"></i>
            <h4 className="text-xl font-bold mb-2">Performance Guaranteed</h4>
            <p className="text-gray-600 text-sm">Every piece optimized for conversion from day one.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalMockup;