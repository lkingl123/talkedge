"use client";

import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

// Define the Message type
type Message = {
  text: string;
  type: "ai" | "user";
};

const Hero = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Displayed messages
  const [currentTypingMessage, setCurrentTypingMessage] = useState<string>(""); // Message being typed
  const [isThinking, setIsThinking] = useState(false); // Typing indicator
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current message being processed

  const chatMessages: Message[] = [
    { text: "Hi! How can I help you?", type: "ai" },
    { text: "What can you do?", type: "user" },
    {
      text: "I was trained with the content available on this website so I can answer any questions or provide you information about TalkEdge.",
      type: "ai",
    },
  ];

  useEffect(() => {
    if (currentIndex < chatMessages.length) {
      const message = chatMessages[currentIndex];
      setIsThinking(true); // Show the `...` indicator
      setCurrentTypingMessage("..."); // Show dots initially

      const dotsTimeout = setTimeout(() => {
        setIsThinking(false); // Hide the `...` indicator
        setCurrentTypingMessage(""); // Clear dots before typing begins

        // Start typing simulation
        const typeCharacter = (charIndex: number) => {
          if (charIndex < message.text.length) {
            setCurrentTypingMessage((prev) => prev + message.text[charIndex]);
            setTimeout(() => typeCharacter(charIndex + 1), 50); // Recursive typing
          } else {
            // Typing is complete
            setMessages((prev) => [...prev, message]); // Add the completed message
            setCurrentTypingMessage(""); // Clear the typing message
            setCurrentIndex((prev) => prev + 1); // Move to the next message
          }
        };

        typeCharacter(0); // Start typing from the first character
      }, 1000); // Delay to show `...` for 1 second

      return () => clearTimeout(dotsTimeout);
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
          <hr className="border-gray-300 my-2" /> {/* Add separator */}
          
          <div className="h-[400px] overflow-y-auto space-y-4">
  {/* Render all completed messages */}
  {messages.map((message, index) => (
    <div
      key={index}
      className={`flex ${
        message.type === "ai" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-lg ${
          message.type === "ai"
            ? "bg-gray-100 text-black"
            : "bg-customOrange text-white"
        }`}
        style={{
          display: "inline-block", // Allow box scaling
          maxWidth: "80%", // Limit max width
          wordWrap: "break-word", // Prevent text overflow
          margin: "0.5rem 0", // Add vertical spacing
        }}
      >
        {message.text}
      </div>
    </div>
  ))}

  {/* Render the currently typing message */}
  {currentTypingMessage && (
    <div
      className={`flex ${
        chatMessages[currentIndex]?.type === "ai"
          ? "justify-start"
          : "justify-end"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-lg ${
          chatMessages[currentIndex]?.type === "ai"
            ? "bg-gray-100 text-black"
            : "bg-customOrange text-white"
        }`}
        style={{
          display: "inline-block", // Allow box scaling
          maxWidth: "80%", // Limit max width
          wordWrap: "break-word", // Prevent text overflow
          margin: "0.5rem 0", // Add vertical spacing
        }}
      >
        {/* Show bouncing dots if still typing */}
        {isThinking ? (
          <div className="flex items-center space-x-1">
            <span
              className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "0s" }}
            ></span>
            <span
              className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        ) : (
          /* Display the typing message progressively */
          currentTypingMessage
        )}
      </div>
    </div>
  )}
</div>




<hr className="border-gray-300 my-2" /> {/* Add separator */}
          {/* Input */}
          <div className="flex items-center mt-4 border rounded-md px-4 py-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-grow focus:outline-none"
            />
            <button>
            <FaPaperPlane className="h-6 w-6 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
