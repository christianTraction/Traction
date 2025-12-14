"use client";

import { useState } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

export default function FeatureCard({ icon, title, shortDescription, fullDescription }: FeatureCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 relative">
      <div className="text-6xl mb-4 text-center">{icon}</div>
      <h3 className="text-xl font-bold text-slate-50 mb-3 text-center">{title}</h3>
      <p className="text-sm text-slate-300 text-center mb-3">{shortDescription}</p>
      <div className="flex items-center justify-center gap-2">
        <button
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
        >
          Learn more ⓘ
        </button>
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-800 border border-slate-700 rounded-lg p-3 text-xs text-slate-300 z-10 shadow-xl">
            {fullDescription}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-700"></div>
          </div>
        )}
      </div>
    </div>
  );
}

