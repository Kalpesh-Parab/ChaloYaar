import React from 'react';
import { Check, X } from 'lucide-react';

export default function InclusionsExclusions({ inclusions, exclusions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
      {/* What's Included */}
      <div className="p-6 rounded-card yellow-card space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-coal-950/10">
          <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-700 flex items-center justify-center font-bold">
            ✓
          </span>
          <h4 className="font-sans font-extrabold text-lg text-coal-950">
            Hum Sambhal lenge
          </h4>
        </div>
        <ul className="space-y-3 font-sans text-xs sm:text-sm text-coal-800">
          {inclusions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What's Excluded */}
      <div className="p-6 rounded-card bg-coal-900 text-white border border-coal-800 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-coal-800">
          <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
            ✕
          </span>
          <h4 className="font-sans font-extrabold text-lg text-white">
            Aapko Khud Sambhalna Hoga
          </h4>
        </div>
        <ul className="space-y-3 font-sans text-xs sm:text-sm text-sand-400">
          {exclusions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}