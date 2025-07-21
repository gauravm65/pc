import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-black">PerformanceCopy.AI</div>
        <div className="flex items-center space-x-6">
          <button className="hidden md:block bg-brand-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
            Schedule a Demo
          </button>
          <button className="text-brand-black">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;