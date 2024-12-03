"use client";

import { useState } from "react";

interface UserInputBoxProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => Promise<void>;
}

export default function UserInputBox({
  userInput,
  setUserInput,
  onSubmit,
}: UserInputBoxProps) {
  const [showInput, setShowInput] = useState(false);

  const handleStart = () => {
    setShowInput(true);
    onSubmit();
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="flex flex-col items-center mt-4">
      {!showInput && (
        <button
          onClick={handleStart}
          className="bg-[#0f9ed5] text-white py-2 px-4 rounded-md hover:bg-[#0d8ec0] focus:outline-none focus:ring-2 focus:ring-[#0f9ed5] transition duration-300">
          Let's Get Started
        </button>
      )}

      {showInput && (
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={userInput}
            className="border-[#0f9ed5] border-solid border-2 rounded-md w-[500px] h-10 p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-[#0f9ed5] transition duration-300"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-[#0f9ed5] text-white py-2 px-4 rounded-md hover:bg-[#0d8ec0] focus:outline-none focus:ring-2 focus:ring-[#0f9ed5] transition duration-300">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
