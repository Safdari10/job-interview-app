"use client";
import { getAIResponse } from "@/utils/client";
import ConversationBox from "@/components/ConversationBox";
import JobTitleInput from "@/components/JobTitleInput";
import UserInputBox from "@/components/UserInputBox";
import { useState } from "react";

interface Conversation {
  sender: "Interviewer" | "Me";
  text: string;
}

export default function HomePage() {
  const [jobTitle, setJobTitle] = useState("");
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const [userInput, setUserInput] = useState("");
  const [started, setStarted] = useState(false);

  const startInterview = async () => {
    if (!started) {
      const response = await getAIResponse(jobTitle, []);
      setConversation([{ sender: "Interviewer", text: response }]);
      setStarted(true);
    }
  };

  const handleInterview = async () => {
    if (userInput.trim() === "") return;

    const userMessage: Conversation = { sender: "Me", text: userInput };
    const response = await getAIResponse(jobTitle, [
      ...conversation,
      userMessage,
    ]);
    setUserInput("");
    setTimeout(() => {
      setConversation((prev) => [
        ...prev,
        userMessage,
        { sender: "Interviewer", text: response },
      ]);
    }, 500);
  };

  return (
    <main className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <h1 className="text-4xl text-[#0f9ed5] font-medium mb-5">
        AI MOCK INTERVIEWER
      </h1>
      <p className="text-md font-semibold mb-4">
        To Get Started Please Enter Your Name and the Role You're Applying for
        Below and Click the "Lets Get Started Button" to Begin.
      </p>
      <JobTitleInput jobTitle={jobTitle} setJobTitle={setJobTitle} />
      <ConversationBox conversation={conversation} />
      <UserInputBox
        userInput={userInput}
        setUserInput={setUserInput}
        onSubmit={handleInterview}
        onStart={startInterview}
      />
    </main>
  );
}
