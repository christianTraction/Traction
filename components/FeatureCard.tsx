"use client";

import { useState } from "react";

interface FeatureCardProps {
  icon: "score" | "window" | "compare" | "credit";
  title: string;
  shortDescription: string;
  fullDescription: string;
}

// Professional SVG Icons matching competitor style
const icons = {
  score: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  window: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  compare: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  credit: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

export default function FeatureCard({ icon, title, shortDescription, fullDescription }: FeatureCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition relative group">
      {/* Icon Container */}
      <div className="w-20 h-20 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mx-auto mb-6 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition">
        {icons[icon]}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-slate-50 mb-3 text-center">{title}</h3>
      
      {/* Short Description */}
      <p className="text-sm text-slate-300 text-center mb-4 leading-relaxed">{shortDescription}</p>
      
      {/* Learn More Button */}
      <div className="flex items-center justify-center gap-2">
        <button
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition"
        >
          Learn more →
        </button>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 z-10 shadow-xl">
            {fullDescription}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-slate-700"></div>
          </div>
        )}
      </div>
    </div>
  );
}
