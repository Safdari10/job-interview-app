import axios from "axios";

interface Conversation {
  sender: "Interviewer" | "Me";
  text: string;
}

export const getAIResponse = async (
  jobTitle: string,
  conversation: Conversation[]
) => {
  const prompt = `You are now an interviewer for a ${jobTitle} position. I will be the candidate. Don't include the "Thank you for coming in today, Introduce yourself". 
  Ask me questions as a human interviewer would and make them simple but precise questions, ask 1 question at a time. Don't repeat yourself.  
  Please respond accordingly with asking the applicant about what makes them passionate about the ${jobTitle}.
  The interview should only be 6 questions long. After the last questino, say "Thank you for coming in today, that's the end of the interview", and give a brief feedback on how the interview went.  
  Continue the interview.\n\n${conversation
    .map((convo) => `${convo.sender}: ${convo.text}`)
    .join("\n")}`;

  try {
    const response = await axios.post("/api/generate", { prompt });
    return response.data.reply;
  } catch (error) {
    console.error("Error during AI generation:", error);
    return "Error during AI generation";
  }
};
