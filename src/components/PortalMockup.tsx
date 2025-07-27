import React from 'react';

const PortalMockup: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Solution Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p className="text-lg font-semibold text-gray-900">
              What if you could capture elite copywriter skills for unlimited copy production?
            </p>
            
            <p className="text-lg font-semibold text-gray-900">
              Generate dozens of high-converting variations in hours, not weeks?
            </p>
            
            <p className="text-lg font-semibold text-gray-900">
              Never choose between speed and quality again?
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
              That's PerformanceCopy.ai
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-3 text-gray-700 text-sm">
              <p>
                Custom Copy Agents built for your business using our Core Conversion Story framework - same methodology driving 8-9 figure operations.
              </p>
              
              <p>
                Agents trained specifically for your business, customers, and market.
              </p>
              
              <p>
                Partnered with world-class human copywriters for unlimited, high-converting copy.
              </p>
              
              <p className="text-base font-semibold text-purple-700">
                Not replacing creativity. Amplifying it.
              </p>
              
              <p className="text-base font-medium text-gray-900 italic">
                Like giving a copywriter an Iron Man suit - instant strategic intelligence for brilliant copy in a fraction of the time.
              </p>
            </div>
          </div>
        </div>
        
        {/* Core Conversion Story Framework Visual */}
        <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 rounded-2xl p-6 mb-10 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Core Conversion Story Framework</h3>
            <p className="text-gray-300 text-sm">Methodology driving 8-9 figure results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 text-center">
              <div className="text-xl text-red-400 mb-1">😣</div>
              <h4 className="text-white font-semibold text-xs mb-1">Present Pain</h4>
              <p className="text-gray-300 text-xs">Current problems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 text-center">
              <div className="text-xl text-yellow-400 mb-1">🏝️</div>
              <h4 className="text-white font-semibold text-xs mb-1">Paradise</h4>
              <p className="text-gray-300 text-xs">Desired state</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 text-center">
              <div className="text-xl text-orange-400 mb-1">⚔️</div>
              <h4 className="text-white font-semibold text-xs mb-1">Struggle</h4>
              <p className="text-gray-300 text-xs">Failed attempts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 text-center">
              <div className="text-xl text-green-400 mb-1">✨</div>
              <h4 className="text-white font-semibold text-xs mb-1">Solution</h4>
              <p className="text-gray-300 text-xs">Your approach</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 text-xs">Trained for your business, customers, and market</p>
          </div>
        </div>
        
        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100 text-center">
            <i className="fa-solid fa-brain text-2xl text-purple-600 mb-3"></i>
            <h4 className="text-lg font-bold mb-2">Strategic Intelligence</h4>
            <p className="text-gray-600 text-xs">Deep research systematized into custom agents</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100 text-center">
            <i className="fa-solid fa-users text-2xl text-blue-600 mb-3"></i>
            <h4 className="text-lg font-bold mb-2">Human + AI</h4>
            <p className="text-gray-600 text-xs">World-class copywriters using your custom agents</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100 text-center">
            <i className="fa-solid fa-rocket text-2xl text-green-600 mb-3"></i>
            <h4 className="text-lg font-bold mb-2">Iron Man Suit</h4>
            <p className="text-gray-600 text-xs">Instant strategic intelligence for brilliant copy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalMockup;