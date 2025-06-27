"use client";

import { useState } from "react";

export default function Home() {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <input
        id="inputText"
        type="text"
        placeholder="Escribe tu correo electrónico"
        style={{
          width: "360px",
          height: "60px",
          borderRadius: "15px",
          backgroundColor: "#141534",
          fontSize: "18px",
          paddingLeft: "30px",
        }}
        className={`placeholder-[#888] text-white focus:border-[#7871FF] focus:ring-2 focus:ring-[#7871FF]`}
      />
    </div>
  );
}
