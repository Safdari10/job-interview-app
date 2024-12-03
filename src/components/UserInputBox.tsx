"use client";
import React, { useState } from "react";

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
          className="bg-[#0f9ed5] text-white py-2 px-4 rounded">
          Let's Get Started
        </button>
      )}

      {showInput && (
        <div className="mt-4">
          <input
            type="text"
            value={userInput}
            className="border-[#0f9ed5] border-solid border-2 rounded-md w-[500px]  h-10 p-1 mr-2"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-[#0f9ed5] border-solid border-2 rounded-md w-32 h-10 text-white py-1 px-3">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
