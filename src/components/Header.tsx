import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-3 sm:py-4 bg-brand-bg/80 backdrop-blur-sm">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <button className="bg-brand-purple hover:bg-brand-purple/90 text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors ml-auto block">
          Schedule A Quick Call <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 inline" />
        </button>
      </div>
    </header>
  );
};

export default Header;