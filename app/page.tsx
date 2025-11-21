"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const items = [
    { label: "Vegetables", emoji: "🥦", score: 20 },
    { label: "Protein", emoji: "🍗", score: 15 },
    { label: "Carbs", emoji: "🍚", score: 5 },
    { label: "Junk Food", emoji: "🍟", score: -10 },
    { label: "Sweets", emoji: "🍰", score: -5 },
    { label: "Drinks (Water)", emoji: "🥤", score: 5 },
  ];

  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (score: number) => {
    setSelected((prev) =>
      prev.includes(score) ? prev.filter((s) => s !== score) : [...prev, score]
    );
  };

  const handleNext = () => {
    const total = selected.reduce((acc, cur) => acc + cur, 0);
    router.push(`/result?score=${total}`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 flex flex-col justify-center items-center"
      style={{ backgroundColor: "#b0d889ff" }}
    >
      <div className="bg-white/80 rounded-2xl p-6 w-full max-w-xs shadow-lg">
        <h1 className="text-xl font-bold text-center mb-4">
          Select What You Ate Today
        </h1>

        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => toggleSelect(item.score)}
              className={`p-5 rounded-2xl hover:bg-[#d5ddcf] border text-lg flex flex-col items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200
transition ${selected.includes(item.score) ? "bg-[#f9d9e2]" : "bg-white"}`}
            >
              <span className="text-2xl">{item.emoji}</span>
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full mt-6 bg-pink-500 text-white py-2 rounded-xl text-lg shadow-md hover:opacity-90 hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          See Score
        </button>
      </div>
    </div>
  );
}
