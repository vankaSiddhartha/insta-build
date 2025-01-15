"use client"
import React, { useState } from "react";
import { SendHorizontal } from "lucide-react";

const Page = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      // Handle your submission logic here
      console.log("Submitted:", inputValue);
      setInputValue(""); // Clear the input
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent default to avoid new line
      handleSubmit();
    }
  };

  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] 
                    bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="flex flex-col items-center mt-56 text-center text-white gap-4 w-full px-4">
        <h1 className="text-4xl font-bold">What Do You Want to Build Today?</h1>
        <p className="text-gray-300 font-medium">
          AI-powered development—describe, refine, and launch.
        </p>
        
        <div className="w-full max-w-2xl relative">
          <textarea
            placeholder="Describe your idea..."
            className="w-full h-32 p-5 pr-14 rounded-2xl bg-gray-800 text-white border border-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg resize-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          ></textarea>

          {/* Icon button positioned absolutely inside textarea */}
          {inputValue.trim() && (
            <button
              onClick={handleSubmit}
              className="absolute right-4 bottom-4 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 
                         transition-colors duration-200 flex items-center justify-center"
            >
              <SendHorizontal className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
