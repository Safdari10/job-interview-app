import axios from "axios";

interface UserName {
  name: string;
  setName: (name: string) => void;
}

interface Conversation {
  sender: "Interviewer" | UserName;
  text: string;
}

export const getAIResponse = async (
  jobTitle: string,
  conversation: Conversation[]
) => {
  // Count how many questions the Interviewer has asked
  const questionCount = conversation.filter(
    (convo) => convo.sender === "Interviewer"
  ).length;

  // Check if the limit of 6 questions is reached
  if (questionCount >= 7) {
    const feedbackPrompt = `
      The interview has concluded with six questions. Now, provide **structured feedback** on the applicant's performance:
      ***Important:*** Give each feedback point in a separate line.
      - **Strengths:** Highlight areas where the applicant excelled.
      - **Areas for Improvement:** Offer clear, actionable suggestions to enhance their responses.
      - **Overall Impression:** Summarize the applicant's performance concisely.

      Below is the interview progress for your reference:
      ${conversation
        .map((convo) => `${convo.sender}: ${convo.text}`)
        .join("\n")}
    `;

    try {
      const response = await axios.post("/api/generate", {
        prompt: feedbackPrompt,
      });
      return response.data.reply;
    } catch (error) {
      console.error("Error during AI feedback generation:", error);
      return "Error during AI feedback generation.";
    }
  }

  // Generate the next interview question
  const interview = conversation
    .map((convo) => `${convo.sender}: ${convo.text}`)
    .join("\n");

  const prompt = `You are conducting a professional job interview for the role of "${jobTitle}" within an AI-powered application.     
  ### **Your Responsibilities:**    
  1. ***Ask one question at a time*** and wait for the applicant's response before proceeding.     
  2. Tailor follow-up questions based on the applicant's answers to ensure a realistic and engaging interview experience.     
  3. ***Do NOT assume or provide answers*** on behalf of the applicant. Focus solely on asking questions.     
  4. ***Avoid using question numbers*** and do not repeat previous questions in your follow-ups.     
  5. Begin the interview with: **"Tell me about yourself."**     
  6. ***Do NOT refer to yourself as "Interviewer"*** in your questions.    
  
  ### **Interview Progress:**     
  Below is the progress of the interview so far. Use it as a reference to decide your next question: 

  ${interview} 

  ***Important:*** Ask only one relevant question based on the applicant's previous response. Do NOT simulate or assume responses.`;

  try {
    const response = await axios.post("/api/generate", { prompt });
    return response.data.reply;
  } catch (error) {
    console.error("Error during AI generation:", error);
    return "Error during AI generation.";
  }
};

// const prompt = `You are an interviewer conducting a professional job interview for the role of "${jobTitle}" within an AI-powered application.

//     Your task is to:
//     0. ***Don't hallucinate and do not be overconfident.***
//     1. ***Conduct the interview step by step, asking one question at a time and waiting for the applicant's response before asking the next question.***
//     2. Tailor your follow-up questions based on the applicant's answers to create a realistic and engaging interview experience.
//     3. ***Do not assume or provide answers on behalf of the applicant. Your role is to only ask questions and provide feedback after the interview concludes.***
//     4. ***Do not include question numbers*** or repeat previous questions in your follow-up questions.
//     5. Start the interview by asking: **"Tell me about yourself."**
//     6. ***Do not include your role in the question. Your question should never contain "Interviewer".***
//     7. 7. ***STOP asking questions after the 6th question*** and provide feedback.
//     Below is the progress of the interview so far. Use it as a reference to continue:

//     ${interview}

//     Now, proceed to ask the next relevant question. After the sixth question, provide structured feedback that includes:
//     - **Strengths:** What the applicant did well.
//     - **Areas for improvement:** Specific suggestions to enhance their responses.
//     - **Overall impression:** A brief summary of their performance.

//     ***Important:*** At no stage should you provide assumed answers or simulate responses for the applicant. Focus solely on asking questions and providing feedback.`;
