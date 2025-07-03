import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 sm:py-16 bg-footer-gradient border-t border-brand-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
        <div className="col-span-1">
          {/* Footer brand content can be added here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;