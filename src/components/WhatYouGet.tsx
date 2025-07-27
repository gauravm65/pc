import React from 'react';

const WhatYouGet: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Why Our 4-Agent System Destroys Single-Prompt AI Tools */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
            Why Our 4-Agent System Works
          </h2>
          
          <div className="text-left space-y-4 text-gray-700 leading-relaxed mb-8">
            <p className="font-semibold text-lg text-gray-900 text-center">
              Most AI tools ask one "brain" to do four different functions simultaneously
            </p>
            
            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
              <p className="text-sm mb-2">Single-prompt AI tries to:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Research market and customers</li>
                <li>Generate strategic ideas</li>
                <li>Write compelling copy</li>
                <li>Edit and refine quality</li>
              </ul>
              <p className="text-red-700 font-semibold text-sm mt-2">All with one prompt = inconsistent results</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <p className="font-semibold text-gray-900 mb-1 text-sm">The Problem:</p>
              <p className="text-sm">Even advanced AI gets confused trying to accomplish too many tasks at once. Result: inconsistent copy, strong in some areas, weak in others.</p>
            </div>
          </div>
        </div>

        {/* How Elite Copywriting Organizations Actually Work */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-3">
              How Elite Organizations Actually Work
            </h3>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p className="text-sm text-center">
              8-9 figure businesses structure copy creation in stages:
            </p>
            
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 text-center">
              <h4 className="text-lg font-bold text-purple-900 mb-3">Copy Written in STAGES</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-2xl mb-1">🔬</div>
                  <p className="font-semibold text-sm">Research</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-2xl mb-1">💡</div>
                  <p className="font-semibold text-sm">Ideas</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-2xl mb-1">✍️</div>
                  <p className="font-semibold text-sm">Copy</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-2xl mb-1">✨</div>
                  <p className="font-semibold text-sm">Editing</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm font-semibold text-purple-700 text-center">
              World-class copywriters use different mental phases - never trying to do everything at once
            </p>
          </div>
        </div>

        {/* Our 4-Agent System */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
            Our 4-Agent System
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            We replicate elite copy workflow using four specialized agents working in sequence
          </p>
        </div>

        {/* The 4 Agents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Agent 1: Research Specialist */}
          <div className="bg-white p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-700">🔬 Research Agent</h3>
                <p className="text-blue-600 font-medium text-sm">Research Specialist</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 text-sm">
              Conducts deep analysis of customer emotional journey, market sophistication, competitive landscape, and psychological triggers.
            </p>
            <p className="text-blue-700 font-semibold text-sm">
              Trained specifically on your business context and customer data.
            </p>
          </div>

          {/* Agent 2: Ideation Specialist */}
          <div className="bg-white p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-orange-700">💡 Ideation Agent</h3>
                <p className="text-orange-600 font-medium text-sm">Ideation Specialist</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 text-sm">
              Generates strategic ideas, hooks, and angles aligned with customer emotional states and market sophistication.
            </p>
            <div className="space-y-2 text-xs text-gray-600">
              <p>• <strong>20 email subject lines:</strong> Based on customer psychology, not generic formulas</p>
              <p>• <strong>Fresh ad angles:</strong> Connect with audience mindset and awareness level</p>
            </div>
          </div>

          {/* Agent 3: Writing Specialist */}
          <div className="bg-white p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-700">✍️ Writing Agent</h3>
                <p className="text-purple-600 font-medium text-sm">Writing Specialist</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 text-sm">
              Receives research foundation and strategic concepts, focuses purely on crafting compelling copy.
            </p>
            <p className="text-purple-700 font-semibold text-sm">
              Complete context about customers, strategy, and proven angles before writing.
            </p>
          </div>

          {/* Agent 4: Editing & Refinement Specialist */}
          <div className="bg-white p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-700">✨ Editing Agent</h3>
                <p className="text-green-600 font-medium text-sm">Editing & Refinement</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 text-sm">
              Applies conversion frameworks, ensures human-quality language, removes AI markers, optimizes for brand voice.
            </p>
            <p className="text-green-700 font-semibold text-sm">
              Natural-sounding copy following psychological principles that drive results.
            </p>
          </div>
        </div>

        {/* Visual Flow */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-2xl text-center mb-12">
          <h3 className="text-lg font-bold text-white mb-6">Four Specialized Agents Working in Sequence</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-400">
              <div className="text-2xl mb-1">🔬</div>
              <h4 className="text-blue-300 font-semibold text-xs mb-1">Research</h4>
              <p className="text-gray-300 text-xs">Customer journey & market analysis</p>
            </div>
            <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-400">
              <div className="text-2xl mb-1">💡</div>
              <h4 className="text-orange-300 font-semibold text-xs mb-1">Ideation</h4>
              <p className="text-gray-300 text-xs">Strategic hooks & angles</p>
            </div>
            <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-400">
              <div className="text-2xl mb-1">✍️</div>
              <h4 className="text-purple-300 font-semibold text-xs mb-1">Writing</h4>
              <p className="text-gray-300 text-xs">Compelling copy creation</p>
            </div>
            <div className="bg-green-500/20 p-3 rounded-lg border border-green-400">
              <div className="text-2xl mb-1">✨</div>
              <h4 className="text-green-300 font-semibold text-xs mb-1">Editing</h4>
              <p className="text-gray-300 text-xs">Human-quality refinement</p>
            </div>
          </div>
          
          <p className="text-base text-white font-semibold">vs. One confused AI trying to do everything</p>
        </div>

        {/* What This Means for Your Business */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-3">
              Your Competitive Advantage
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">Copy that rivals best human-written messaging vs. mediocre single-prompt results</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">Deep psychological triggers vs. generic surface-level insights</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">Laser-focused concepts for your market vs. generic business ideas</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">Human-quality messaging vs. robotic AI copy</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-purple-700 bg-purple-50 p-4 rounded-xl">
              AI as a strategic weapon, not a crutch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;