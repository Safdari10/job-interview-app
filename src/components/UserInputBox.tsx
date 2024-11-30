interface UserInputBoxProps {
  userInput: string;
  setUserInput: (userInput: string) => void;
}

export default function UserInputBox({
  userInput,
  setUserInput,
}: UserInputBoxProps) {
  const handleSubmit = () => {
    setUserInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        className="border-[#0f9ed5] border-solid border-2 p-1 mr-2"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-[#0f9ed5] border-solid border-2 text-white py-1 px-3"
      >
        Submit
      </button>
    </div>
  );
}
