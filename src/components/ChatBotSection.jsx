import React, { useState, useRef, useEffect } from "react";
import { texts } from "../config/texts.js";
import { ENV_VARIABLES } from "../config/env.js";

const ChatBotSection = ({ locale, env }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: texts[locale].chatbotSection.starter,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const API_URL = `${ENV_VARIABLES[env].BASE_API_URL}/api/v1/chat`;

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: texts[locale].chatbotSection.starter,
      },
    ]);
  }, [locale]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      setIsSending(true);
      setNewMessage(""); // Clear input field
      const userMessage = { role: "user", content: newMessage };
      const updatedMessages = messages.concat(userMessage);
      setMessages(updatedMessages); // Display user's message immediately

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: updatedMessages }),
        });
        if (response.ok) {
          const { response: serverResponse } = await response.json();
          setMessages((currentMessages) => [
            ...currentMessages,
            { role: "assistant", content: serverResponse },
          ]);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        setNewMessage("");
        console.error("Error in fetching data: ", error);
        setMessages((currentMessages) => [
          ...currentMessages,
          {
            role: "assistant",
            content:
              locale === "english"
                ? "Marvin is away at the moment, please try again later."
                : "Marvin est absent pour le moment, veuillez réessayer plus tard.",
          },
        ]);
      } finally {
        setMessages((currentMessages) => currentMessages.slice(-10));
        setIsSending(false);
      }
    } else {
      setNewMessage("");
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-gray-300 to-white p-10"
      id="chatBotSection"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center px-8">
            <h2 className="text-2xl font-bold mb-4">
              {texts[locale].chatbotSection.title}
            </h2>
            <p>{texts[locale].chatbotSection.description}</p>
          </div>
          <div className="space-y-4">
            <div
              ref={messagesContainerRef}
              className="border bg-gray-300 border-gray-300 rounded-lg p-4 h-96 overflow-y-auto"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 my-2 rounded-lg shadow ${
                    message.role === "user"
                      ? "bg-blue-100 text-right"
                      : "bg-gray-100 text-left"
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder={texts[locale].chatbotSection.input}
                className="flex-1 p-2 border border-gray-300 rounded-lg"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && !isSending && handleSendMessage()
                }
                disabled={isSending}
              />
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleSendMessage}
                disabled={isSending}
              >
                {texts[locale].chatbotSection.send}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBotSection;
