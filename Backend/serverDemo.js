// This file is for a method in which we can use Groq using npm package groq-sdk.
import Groq from "groq-sdk";
import "dotenv/config";

const client = new Groq({ // No need to learn this just visit the docs of groq-sdk and you will find it
  apiKey: process.env.GROQ_API_KEY 
});

const response = await client.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [
    { role: "user", content: "Tell me a joke related to computer" }
  ],
});

// console.log(response); // we get response as an object
// console.log(response.choices); // in response object we have choices array
// console.log(response.choices[0].message); // in choices array at index 0 we have an object having fields as index and a message object we have role and content

console.log(response.choices[0].message.content); // and inside message object we want content only.