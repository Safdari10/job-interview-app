import axios from "axios";

interface Conversation {
  sender: "Interviewer" | "Me";
  text: string;
}

export const getAIResponse = async (
  jobTitle: string,
  conversation: Conversation[]
) => {
  const interview = conversation
    .map((convo) => `${convo.sender} ${convo.text}`)
    .join("\n");

  const prompt = `You are an interviewer conducting a professional job interview for the role of "${jobTitle}" within an AI-powered application.

    Your task is to:
    1. ***Conduct the interview step by step, asking one question at a time and waiting for the applicant's response before asking the next question.***
    2. Tailor your follow-up questions based on the applicant's answers to create a realistic and engaging interview experience.
    3. ***Do not assume or provide answers on behalf of the applicant. Your role is to only ask questions and provide feedback after the interview concludes.***
    4. ***Do not include question numbers*** or repeat previous questions in your follow-up questions.
    5. Start the interview by asking: **"Tell me about yourself."**
    6. *** Do not include your role in the question.***
    Below is the progress of the interview so far. Use it as a reference to continue:
    
    ${interview}
    
    Now, proceed to ask the next relevant question. After the sixth question, provide structured feedback that includes:
    - **Strengths:** What the applicant did well.
    - **Areas for improvement:** Specific suggestions to enhance their responses.
    - **Overall impression:** A brief summary of their performance.
    
    ***Important:*** At no stage should you provide assumed answers or simulate responses for the applicant. Focus solely on asking questions and providing feedback.`;

  console.log(interview);

  try {
    const response = await axios.post("/api/generate", { prompt });
    return response.data.reply;
  } catch (error) {
    console.error("Error during AI generation:", error);
    return "Error during AI generation";
  }
};

