const { GoogleGenerativeAI } = require("@google/generative-ai");

const googleGenerativeAI = new GoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});