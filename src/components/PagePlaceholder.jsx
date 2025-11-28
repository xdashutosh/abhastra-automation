import React from 'react';

const PagePlaceholder = ({ title }) => (
  <div className="pt-24 pb-12 px-6 min-h-screen flex flex-col items-center justify-center bg-slate-50">
    <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
    <p className="text-slate-600">Content coming soon...</p>
  </div>
);

export default PagePlaceholder;
