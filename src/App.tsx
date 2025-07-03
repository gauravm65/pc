import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Process from './components/Process';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Infrastructure from './components/Infrastructure';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-bg text-white font-inter antialiased">
      <div className="w-full mx-auto">
        <Header />
        <main>
          <Hero />
          <WhoWeAre />
          <Process />
          <Services />
          <Benefits />
          <Infrastructure />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;