"use client";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative w-[360px]">
        <input
          id="email"
          type="text"
          placeholder=" "
          className="peer w-full h-[60px] rounded-2xl bg-[#141534] text-white px-5 pt-4 pb-1 border-2 border-[#141534] focus:border-[#7876B1] focus:shadow-2xs outline-none"
        />
        <label
          htmlFor="email"
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7876B1] text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-[-50%] peer-focus:top-4 peer-focus:text-xs peer-focus:text-[#7876B1]"
        >
          Correo electrónico
        </label>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white w-6 h-6 flex items-center justify-center bg-[#2B2A56] rounded-full text-sm opacity-0 peer-focus:opacity-100 transition-opacity duration-200 hover:cursor-pointer"
          onClick={() => {
            const input = document.getElementById("email") as HTMLInputElement;
            if (input) input.value = "";
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
