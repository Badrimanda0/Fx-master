"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      <button
        onClick={() => setCount(count - 1)}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        -4
      </button>

      <p className="text-2xl font-bold">{count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        +

      </button>
    </div>
  );
}
