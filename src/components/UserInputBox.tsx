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
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
