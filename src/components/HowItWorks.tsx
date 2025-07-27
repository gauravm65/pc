import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Three Broken Solutions */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
            The Three Broken Solutions
          </h2>
          <p className="text-gray-600">Why current approaches don't work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Option 1: Hire More Copywriters */}
          <div className="bg-white p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300">
            <div className="mb-3 text-3xl text-red-500">
              <i className="fa-solid fa-users"></i>
            </div>
            <h3 className="text-lg font-bold mb-3 text-red-700">Hire More Copywriters</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• $8k-15k/month each</li>
              <li>• 2-week turnarounds</li>
              <li>• Inconsistent voice</li>
              <li>• Can't scale with testing</li>
            </ul>
          </div>
          
          {/* Option 2: Generic AI Tools */}
          <div className="bg-white p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
            <div className="mb-3 text-3xl text-orange-500">
              <i className="fa-solid fa-robot"></i>
            </div>
            <h3 className="text-lg font-bold mb-3 text-orange-700">Generic AI Tools</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Robotic, generic copy</li>
              <li>• No customer understanding</li>
              <li>• Sounds like everyone else</li>
              <li>• Zero strategic thinking</li>
            </ul>
          </div>
          
          {/* Option 3: Agency Route */}
          <div className="bg-white p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="mb-3 text-3xl text-blue-500">
              <i className="fa-solid fa-building"></i>
            </div>
            <h3 className="text-lg font-bold mb-3 text-blue-700">Agency Route</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• $20k+/month minimums</li>
              <li>• Writing for 50+ clients</li>
              <li>• Junior talent assigned</li>
              <li>• Still slow & expensive</li>
            </ul>
          </div>
        </div>
        
        {/* Problem Statement */}
        <div className="text-center bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl mb-16">
          <p className="text-lg text-gray-800 font-medium max-w-3xl mx-auto">
            <strong>The real problem:</strong> You need unlimited, strategic copy personalized to YOUR business and customers
          </p>
        </div>
        
        {/* The Hidden Secret */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-3">
              The Hidden Secret Behind World-Class Copy
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg font-bold text-gray-900 text-center">
              The magic isn't in writing ability. It's in research and strategic thinking.
            </p>
            
            <div className="space-y-3 text-sm">
              <p>Elite copywriters spend weeks on:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Customer psychology analysis</li>
                <li>Market sophistication mapping</li>
                <li>Competitive landscape study</li>
                <li>Emotional journey mapping</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <p className="font-semibold text-gray-900 mb-1 text-sm">The Problem:</p>
              <p className="text-sm">Deep research takes enormous time - your bottleneck when scaling</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="font-semibold mb-1 text-sm">Common Pattern:</p>
              <p className="text-sm">Businesses grow until they hit the copy constraint - need more campaigns but can't access enough A-level copywriting</p>
            </div>
            
            <p className="text-base font-semibold text-purple-700 text-center bg-purple-50 p-3 rounded-xl">
              Solution: Systematize the strategic intelligence that makes copywriters great
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;