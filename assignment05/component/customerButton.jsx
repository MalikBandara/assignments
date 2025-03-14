import React from "react";

const CustomerButton = ({ label, onclick, className }) => {
  return (
    
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all ${className}`}
      onClick={onclick} // ✅ Fixed: "onClick" (was "onclick")
    >
      {label}
    </button>
    
  );
};

export default CustomerButton;
