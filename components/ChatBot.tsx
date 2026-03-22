"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { faqData, faqCategories } from "@/lib/faqData";

interface Message {
  type: "bot" | "user";
  text: string;
}

const MAX_AI_MESSAGES = 10;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hey! I'm Kartikeya's AI assistant. Ask me anything about his experience, or pick a question below to get started.",
    },
  ]);
  const [showQuestions, setShowQuestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [aiMessageCount, setAiMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, showQuestions]);

  // Handle predefined FAQ questions
  const handleQuestion = (question: string, answer: string) => {
    setShowQuestions(false);
    setMessages((prev) => [...prev, { type: "user", text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { type: "bot", text: answer }]);
      setTimeout(() => setShowQuestions(true), 300);
    }, 800);
  };

  // Handle free-form AI questions
  const handleAIQuestion = async (question: string) => {
    if (!question.trim()) return;
    if (aiMessageCount >= MAX_AI_MESSAGES) {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: question },
        {
          type: "bot",
          text: "I've reached the message limit for this session. Feel free to reach out directly via the contact form or email for more questions!",
        },
      ]);
      return;
    }

    setShowQuestions(false);
    setMessages((prev) => [...prev, { type: "user", text: question }]);
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setIsTyping(false);

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: data.error || "Sorry, something went wrong. Please try again.",
          },
        ]);
      } else {
        setMessages((prev) => [...prev, { type: "bot", text: data.answer }]);
        setAiMessageCount((prev) => prev + 1);
      }
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Sorry, I couldn't connect. Please try again.",
        },
      ]);
    }

    setTimeout(() => setShowQuestions(true), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleAIQuestion(inputValue.trim());
    }
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-110 hover:shadow-accent/30 group chatbot-cta"
          aria-label="Open chat"
        >
          <MessageCircle size={24} className="text-white relative z-10" />
          <span className="text-base font-semibold hidden sm:inline text-white relative z-10">
            Ask me anything
          </span>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 sm:bottom-6 sm:left-6 z-50 w-full sm:w-[420px] h-full sm:h-[600px] bg-bg-primary border border-border sm:rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-bg-secondary border-b border-border shrink-0">
            <div>
              <h3 className="text-sm font-semibold text-text-primary">
                Ask Me Anything
              </h3>
              <p className="text-xs text-text-tertiary">
                Powered by AI &middot; {MAX_AI_MESSAGES - aiMessageCount} AI messages left
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                    msg.type === "user"
                      ? "bg-accent text-white rounded-br-sm"
                      : "bg-bg-secondary text-text-primary border border-border rounded-bl-sm"
                  }`}
                >
                  {msg.text.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < msg.text.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-bg-secondary border border-border rounded-xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 rounded-full bg-text-tertiary animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-text-tertiary animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-text-tertiary animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Predefined question chips */}
            {showQuestions && !isTyping && (
              <div className="pt-2 space-y-3">
                {faqCategories.map((category) => {
                  const categoryFaqs = faqData.filter(
                    (f) => f.category === category
                  );
                  if (categoryFaqs.length === 0) return null;

                  return (
                    <div key={category}>
                      <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider mb-1.5">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {categoryFaqs.map((faq, j) => (
                          <button
                            key={j}
                            onClick={() =>
                              handleQuestion(faq.question, faq.answer)
                            }
                            className={`text-left px-3 py-1.5 text-xs rounded-lg transition-colors ${
                              faq.category === "Other"
                                ? "border border-border text-text-secondary hover:bg-bg-tertiary"
                                : "bg-accent-subtle text-accent hover:bg-accent/20"
                            }`}
                          >
                            {faq.question}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 border-t border-border shrink-0"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2.5 bg-bg-secondary border border-border rounded-lg text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="p-2.5 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTyping ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </div>
            <p className="text-xs text-text-tertiary text-center mt-2">
              Ask anything about Kartikeya&apos;s experience
            </p>
          </form>
        </div>
      )}
    </>
  );
}
