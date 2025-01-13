import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the model
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

interface GeneratePromptsOptions {
  idea: string;
  niche: string;
}

export async function generatePrompts({ idea, niche }: GeneratePromptsOptions) {
  const prompt = `
    As an expert prompt engineer, create three different versions of a prompt based on the following idea and niche.
    The prompts should be optimized for AI interaction and follow these styles:
    1. Creative: More exploratory and innovative
    2. Formal: Professional and structured
    3. Detailed: Comprehensive and specific

    Idea: ${idea}
    Niche: ${niche}

    Format each prompt version with a clear heading and the prompt text below.
    Focus on creating prompts that will generate the most effective results when used with AI models.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const formattedResponse = response.text();

    // Parse the response into separate prompts
    const prompts = formattedResponse
      .split("\n\n")
      .filter(Boolean)
      .map((section) => {
        const lines = section.split("\n");
        const style = lines[0].replace(":", "").trim();
        const content = lines.slice(1).join("\n").trim();
        return { style, content };
      });

    return prompts;
  } catch (error) {
    console.error("Error generating prompts:", error);
    throw new Error("Failed to generate prompts. Please try again.");
  }
}
