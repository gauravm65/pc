import React from 'react';

const WhatYouGet: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-left max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            Unlimited Copy. At Scale.
          </h2>
          <p className="text-lg text-gray-600">
            From top-of-funnel ads to bottom-of-funnel emails, your copy system delivers what you need, when you need it.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl text-center border border-gray-200/80">
            <i className="fa-solid fa-envelope-open-text text-4xl text-green-500 mb-4"></i>
            <h3 className="text-lg font-bold">Emails</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center border border-gray-200/80">
            <i className="fa-brands fa-meta text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-lg font-bold">Meta Ads</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center border border-gray-200/80">
            <i className="fa-solid fa-file-alt text-4xl text-purple-500 mb-4"></i>
            <h3 className="text-lg font-bold">Landing Pages</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center border border-gray-200/80">
            <i className="fa-solid fa-users-line text-4xl text-orange-500 mb-4"></i>
            <h3 className="text-lg font-bold">Customer Segments</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;