import React from "react";

function MyButton({ bgColor, text,textColor = "text-white", onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 max-lg:p-1  border border-teal-900 ${bgColor} ${textColor} hover:bg-teal-900 hover:text-white `}
     
      
    >
      {text}
    </button>
  );
}

export default MyButton;
