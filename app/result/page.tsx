"use client";

import { useSearchParams } from "next/navigation";

export default function Result() {
  const params = useSearchParams();
  const score = Number(params.get("score") || 0);

  let message = "";
  if (score >= 30) message = "Amazing! Your balance is perfect! 🔥";
  else if (score >= 10) message = "Nice! You're doing well! ✨";
  else if (score >= 0) message = "Not bad! Add some veggies tomorrow. 🌱";
  else message = "A bit unbalanced today... but tomorrow is a new start! 💪";

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center p-6"
      style={{ backgroundImage: "url('/bg-gradient.png')" }}
    >
      <div className="bg-white/70 p-6 rounded-2xl max-w-xs w-full shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Today's Health Score</h1>
        <p className="text-5xl font-bold text-pink-600 mb-4">{score}</p>

        <p className="text-lg mb-6">{message}</p>

        <a
          href="/"
          className="mt-4 inline-block bg-pink-500 text-white py-2 px-6 rounded-xl text-lg shadow-md hover:opacity-90"
        >
          Try Again
        </a>
      </div>
    </div>
  );
}
