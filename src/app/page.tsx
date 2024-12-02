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
  const [conversation, setConversation] = useState<Conversation[]>([
    { sender: "Interviewer", text: "Thank you for coming, Introduce yourself." },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = async () => {
    const response = await getAIResponse(jobTitle, conversation);
    setConversation((prev) => [
      ...prev,
      { sender: "Me", text: userInput },
      { sender: "Interviewer", text: response },
    ]);
  };
  // console.log(jobTitle);
  // console.log(userInput);
  return (
    <main className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Ai Mock Interviewer</h1>
      <JobTitleInput jobTitle={jobTitle} setJobTitle={setJobTitle} />
      <ConversationBox conversation={conversation} />
      <UserInputBox
        userInput={userInput}
        setUserInput={setUserInput}
        onSubmit={handleUserInput}
      />
    </main>
  );
}
