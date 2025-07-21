import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-bold mb-4 md:mb-0">PerformanceCopy.AI</div>
          <div className="text-sm text-gray-400">© 2025 PerformanceCopy.AI. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <i className="fa-brands fa-linkedin-in"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;