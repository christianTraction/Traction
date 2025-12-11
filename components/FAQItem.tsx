"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center gap-4"
      >
        <h3 className="text-lg font-semibold text-slate-50 pr-8">{question}</h3>
        <span className="text-2xl text-slate-400 flex-shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="text-slate-300 mt-3 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

