import React from 'react';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import HowItWorks from './components/HowItWorks';
import PortalMockup from './components/PortalMockup';
import WhatYouGet from './components/WhatYouGet';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-brand-black font-inter antialiased overflow-x-hidden">
      <div className="bg-white mx-auto">
        <main>
          <Hero />
          <LogoBar />
          <HowItWorks />
          <PortalMockup />
          <WhatYouGet />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;