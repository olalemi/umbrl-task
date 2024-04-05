"use client";

import React from "react";

export default function Toggle() {
  return (
    <div>
      {/* <input 
                type="checkbox" 
                id="toggle" 
                className="hidden peer" 
                aria-labelledby="toggle-label"
            /> */}
      <label
        htmlFor="toggle"
        className="bg-gray-300 w-14 h-8 rounded-full flex items-center p-1 peer-checked:*:bg-blue-500 peer-checked:*:translate-x-full cursor-pointer"
        id="toggle-label"
      >
        <div className="w-6 h-6 bg-white rounded-full shadow-md transition-transform"></div>
      </label>
    </div>
  );
}
