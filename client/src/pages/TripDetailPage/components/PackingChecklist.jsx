import React from 'react';
import { Backpack, CheckCircle2 } from 'lucide-react';

export default function PackingChecklist({ packingItems }) {
  return (
    <div className="p-6 rounded-card yellow-card space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-coal-950/10">
        <Backpack className="w-5 h-5 text-coal-950" />
        <h4 className="font-sans font-extrabold text-lg text-coal-950">
          Khaas Packing List (Bag Mein Kya Daalein?)
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {packingItems.map((item, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-coal-50 border border-coal-200/60 flex items-center gap-2.5"
          >
            <CheckCircle2 className="w-4 h-4 text-brand-yellow-deep shrink-0" />
            <span className="font-sans text-xs sm:text-sm font-semibold text-coal-900">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}