import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const Api_Key = process.env.API_KEY;

export async function getGPTResponse(userInput: string) {
  try {


    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Api_Key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "openai/gpt-4o-mini-2024-07-18",
        "messages": [
          { "role": "system", "content": "You are an AI assistant named stugillent." },
          { "role": "user", "content": userInput },
        ],
        max_tokens: 10050  // Set Token to a large sum of number to avoid truncation [ TESTING PURPOSES ]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check if data.choices exists and has at least one element
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    } else {
      throw new Error("Invalid response from API: No choices found.");
    }
  } catch (error) {
    console.error("Error fetching response from GPT:", error);
    throw error;  // Re-throw the error after logging it
  }
}