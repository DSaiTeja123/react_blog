import React from 'react';

function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 bg-white dark:bg-soft rounded-2xl shadow-md border border-gray-300 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.01] hover:border-accent overflow-hidden backdrop-blur-sm">
      {children}
    </div>
  );
}

export default Container;
