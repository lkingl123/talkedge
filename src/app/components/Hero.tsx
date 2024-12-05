"use client";

import { useState, useEffect } from "react";

// Define the Message type
type Message = {
  text: string;
  type: "ai" | "user";
};

const Hero = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Displayed messages
  const [currentTypingMessage, setCurrentTypingMessage] = useState<Message | null>(null); // Message being typed
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current message being processed

  const chatMessages: Message[] = [
    { text: "Hi! How can I help you?", type: "ai" },
    { text: "What can you do?", type: "user" },
    {
      text: "I was trained with the content available on this website so I can answer any questions or provide you information about Chatbolt.",
      type: "ai",
    },
  ];

  useEffect(() => {
    if (currentIndex < chatMessages.length) {
      const currentMessage = chatMessages[currentIndex];
      setCurrentTypingMessage({ text: "...", type: currentMessage.type }); // Show "typing" indicator

      // Simulate a delay for typing effect
      const typingTimeout = setTimeout(() => {
        let charIndex = 0;

        const typingInterval = setInterval(() => {
          setCurrentTypingMessage((prev) =>
            prev
              ? {
                  ...prev,
                  text: currentMessage.text.slice(0, charIndex + 1),
                }
              : null
          );
          charIndex++;

          if (charIndex === currentMessage.text.length) {
            clearInterval(typingInterval); // Stop typing animation
            setMessages((prev) => [...prev, currentMessage]); // Add the completed message
            setCurrentTypingMessage(null); // Clear the typing message
            setCurrentIndex((prev) => prev + 1); // Move to the next message
          }
        }, 50); // Typing speed: 50ms per character
      }, 1000); // Delay before typing begins

      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex]);

  const getMessageStyle = (type: "ai" | "user") => {
    if (type === "ai") {
      return "bg-gray-100 text-black text-left ml-0";
    }
    return "bg-customOrange text-white text-right mr-0";
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center lg:justify-between px-5 md:px-10 lg:px-20 py-16 bg-gray-50">
      {/* Left Content */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-[90px] font-bold leading-tight text-black mb-4">
          Your own <span className="text-customOrange">ChatGPT chatbot</span>
        </h1>
        <p className="text-[22px] text-black mb-6 leading-relaxed">
          Train your chatbots with your data from any file or website. Chat to ask
          questions and find information, or embed it as a widget on your website
          to assist your users.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <a
            href="/create-chatbot"
            className="bg-black text-white text-[15px] font-medium px-[15px] py-[10px] rounded-md hover:bg-gray-800"
          >
            Create a Chatbot
          </a>
          <a
            href="/how-it-works"
            className="border border-gray-800 text-black px-6 py-3 rounded-md hover:bg-gray-100 text-lg font-medium"
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
        {/* Background Animation */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-spin-slow">
          <img
            src="/react-icon.svg" /* Replace with the correct icon path */
            alt="React Icon"
            className="w-full h-full opacity-20"
          />
        </div>

        {/* AI Chat Widget */}
        <div className="bg-white p-6 shadow-lg rounded-lg relative z-10 w-[400px] mx-auto">
          {/* Header */}
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-2">
              <span>AI</span>
            </div>
            <h3 className="text-blue-600 font-bold">AI Assistant</h3>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-md w-[80%] ${getMessageStyle(
                  message.type
                )}`}
              >
                {message.text}
              </div>
            ))}
            {currentTypingMessage && (
              <div
                className={`p-4 rounded-md w-[80%] ${getMessageStyle(
                  currentTypingMessage.type
                )}`}
              >
                {currentTypingMessage.text}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center mt-4 border rounded-md px-4 py-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-grow focus:outline-none"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
