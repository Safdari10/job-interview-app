"use client";
import JobTitleInput from "@/components/JobTitleInput";
import UserInputBox from "@/components/UserInputBox";
import { useState } from "react";

export default function HomePage() {
  const [jobTitle, setJobTitle] = useState("");
  const [conversation, setConversation] = useState([]);

  const [userInput, setUserInput] = useState("");

  console.log(jobTitle);
  console.log(userInput);
  return (
    <main className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Ai Mock Interviwer</h1>
      <JobTitleInput jobTitle={jobTitle} setJobTitle={setJobTitle} />
      <UserInputBox userInput={userInput} setUserInput={setUserInput} />
    </main>
  );
}
