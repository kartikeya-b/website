"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { faqData, faqCategories } from "@/lib/faqData";

interface Message {
  type: "bot" | "user";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hey! I'm glad you're here. Pick a question below to learn more about my experience, or scroll through to find what you're looking for.",
    },
  ]);
  const [showQuestions, setShowQuestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, showQuestions]);

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
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-full sm:h-[550px] bg-bg-primary border border-border sm:rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-bg-secondary border-b border-border shrink-0">
            <h3 className="text-sm font-semibold text-text-primary">
              Ask Me Anything
            </h3>
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
                    <div className="w-2 h-2 rounded-full bg-text-tertiary animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 rounded-full bg-text-tertiary animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 rounded-full bg-text-tertiary animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Question chips */}
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

          {/* Footer */}
          <div className="px-4 py-2 border-t border-border shrink-0">
            <p className="text-xs text-text-tertiary text-center">
              Answers based on my professional experience
            </p>
          </div>
        </div>
      )}
    </>
  );
}
