import React, { useState } from 'react';
import { ChevronDown, MapPin, Coffee, Moon, Sun } from 'lucide-react';

export default function DayWiseTimeline({ itinerary }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleDay = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2">
        <h3 className="font-sans font-extrabold text-2xl text-coal-950">
          Day-Wise Itinerary Plan 
        </h3>
        <span className="text-xs font-sans text-coal-700 font-semibold">
          Tap on each day to expand
        </span>
      </div>

      <div className="space-y-3">
        {itinerary.map((day, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl yellow-card border border-coal-950/10 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleDay(idx)}
                className="w-full p-5 flex items-center justify-between text-left cursor-pointer bg-white hover:bg-coal-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-9 h-9 rounded-xl bg-coal-950 text-brand-yellow font-sans font-black text-sm flex items-center justify-center shrink-0">
                    D{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-sans font-bold text-base sm:text-lg text-coal-950">
                      {day.title}
                    </h4>
                    <p className="font-sans text-xs text-coal-600 mt-0.5">
                      {day.headline}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-1.5 rounded-full bg-coal-100 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-yellow' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-coal-950" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-2 font-sans text-sm text-coal-800 leading-relaxed border-t border-coal-100 bg-white">
                  <p>{day.details}</p>
                  
                  {day.highlights && (
                    <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-dashed border-coal-200">
                      {day.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-coal-100 text-[11px] font-semibold text-coal-900"
                        >
                          • {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}