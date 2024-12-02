import axios from "axios";

export const getAIResponse = async (jobTitle: string, userInput: string) => {
  const prompt = `You are interviewing for a ${jobTitle} position. The job applicant asks you, "${userInput}"`;

  try {
    const response = await axios.post("/api/generate", { prompt });
    return response.data.reply;
  } catch (error) {
    console.error("Error during AI generation:", error);
    return "Error during AI generation";
  }
};
