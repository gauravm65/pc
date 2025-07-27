import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-auto bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-40" 
          src="https://res.cloudinary.com/ds47qe0qt/video/upload/v1753076125/u8174362837_futuristic_humanoid_AI_figure_with_a_calm_and_int_a62dc9c4-2de8-41b4-a992-afc166c1f37f_1_we4im9.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-12 gap-8 items-center min-h-screen py-16">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 px-5 py-2.5 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-white tracking-wide">7 & 8-FIGURE BUSINESSES</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[0.95] tracking-tight">
                How 7-Figure Businesses Are Breaking Free From{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                  Copywriter Bottlenecks{' '}
                </span>
                to Generate Unlimited High-Converting Copy in Hours (Not Weeks)
              </h1>
              
              <div className="text-base md:text-lg text-white/85 leading-relaxed max-w-2xl font-light space-y-6">
                <div className="space-y-3">
                  <p><strong className="text-white">Your marketing has exploded in complexity.</strong></p>
                  <p>Five years ago: Facebook ads and email.</p>
                  <p><strong className="text-white">Today:</strong> Facebook, Instagram, Google, YouTube, TikTok, LinkedIn, email sequences for 6 segments, landing pages for every traffic source...</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <p className="text-white font-semibold text-lg">You went from needing 10 pieces of copy per month to 100+</p>
                  <p className="text-pink-300 font-semibold">But your copywriter capacity didn't scale</p>
                </div>
                
                <div className="space-y-2">
                  <p>• Ads burn through creative faster than writers can produce</p>
                  <p>• Email campaigns delayed for weeks</p>
                  <p>• Testing bottlenecked by copy availability</p>
                  <p className="text-pink-300 font-bold">Competitors are launching while you're waiting</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="group bg-gradient-to-r from-white to-gray-50 text-slate-900 px-8 py-4 rounded-xl font-bold text-base hover:from-gray-50 hover:to-white transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:shadow-white/30">
                <span className="flex items-center justify-center gap-2">
                  🔥 Book Your Strategy Call
                  <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </button>
              <button className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-medium text-base hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More Below
              </button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            {/* Why It Works Card */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900">Why It Works</h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 ml-3 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                Our system is built on proven direct response first principles.
              </p>
              <div className="space-y-3">
                <div className="flex items-center group/item">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                  <span className="text-slate-700 font-medium text-sm">Emotional Intelligence</span>
                </div>
                <div className="flex items-center group/item">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                  <span className="text-slate-700 font-medium text-sm">Conversion Frameworks</span>
                </div>
                <div className="flex items-center group/item">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                  <span className="text-slate-700 font-medium text-sm">Anti-AI Filter</span>
                </div>
              </div>
            </div>

            {/* Elite Expertise Card */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Elite Human Expertise</h3>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                Your agents are paired with world-class copywriters.
              </p>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <img className="w-12 h-12 rounded-full border-3 border-white shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Expert 1" />
                  <img className="w-12 h-12 rounded-full border-3 border-white shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Expert 2" />
                  <img className="w-12 h-12 rounded-full border-3 border-white shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Expert 3" />
                </div>
                <div className="ml-4">
                  <span className="text-slate-500 font-medium">+12 Experts</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 p-5 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <i className="fa-solid fa-quote text-white text-xs"></i>
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-1">"Increased our conversion rate by 340%"</p>
                  <p className="text-white/80 text-sm">Sarah Chen, Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;