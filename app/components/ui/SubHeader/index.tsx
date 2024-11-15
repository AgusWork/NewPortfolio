import React from 'react';
const SubHeader = () => {
    return (
      <div className="w-full bg-gray-100 absolute top-20 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium">Overview</span>
            <span className="text-sm text-gray-500">Features</span>
            <span className="text-sm text-gray-500">Integration</span>
          </div>
          <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
            Contact Sales
          </button>
        </div>
      </div>
    );
  };
  
  export default SubHeader;