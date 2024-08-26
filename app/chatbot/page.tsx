// TO DO: Add account that allows history to be saved and accessed by the user
// Clean up the code and add more understanble comments

"use client";

import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import Header from "@/app/Header";
import { getGPTResponse } from  "@/app/api/openrouter";

export default function Component() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: string, content: string }[]>([
    { role: 'assistant', content: 'Hello, how may I help you with your academic success?' }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Add user input to chat history
    setChatHistory([...chatHistory, { role: 'user', content: userInput }]);
  
    try {
      // Get GPT's response from the API
      const gptResponse = await getGPTResponse(userInput);
  
      // Add GPT's response to chat history
      setChatHistory(prevChatHistory => [...prevChatHistory, { role: 'assistant', content: gptResponse }]);
    } catch (error) {
      console.error("Error fetching GPT response:", error);
      // Add an error message to the chat history
      setChatHistory(prevChatHistory => [...prevChatHistory, { role: 'assistant', content: "Error fetching response from GPT" }]);
    }
  
    // Clear user input
    setUserInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex-grow overflow-auto p-4 space-y-4">
        {chatHistory.map((message, index) => (
          <div key={index} className={`flex items-start gap-4 ${message.role === 'user' ? 'justify-end' : ''} ${index === chatHistory.length - 1 && message.role === 'assistant' ? 'fade-in-slide-down' : ''}`}>
            {message.role === 'assistant' && (
              <div className="rounded-[15px] w-8 h-8 bg-[#55efc4] text-xl flex items-center justify-center ">😊</div>
            )}
            <div className="grid gap-1 items-start text-sm">
              <div className="font-bold">{message.role === 'user' ? 'You' : 'Stulligent'}</div>
              <div className="prose text-muted-foreground">
                <p>{message.content}</p>
              </div>
            </div>
            {message.role === 'user' && (
              <div className="rounded-[15px] w-8 h-8 bg-[#55efc4] text-xl flex items-center justify-center">😀</div>
            )}
          </div>
        ))}
      </div>
      <div className="bg-background px-4 py-3 border-t border-muted">
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            placeholder="Type your message..."
            name="message"
            id="message"
            rows={1}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
          />
          <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3">
            <ArrowUpIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
      <style jsx>{`
        .fade-in-slide-down {
          animation: fadeInSlideDown 1s ease-in-out;
        }

        @keyframes fadeInSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function ArrowUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}