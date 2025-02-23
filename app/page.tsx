"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [animatedText, setAnimatedText] = useState<string[]>([]);

  useEffect(() => {
    const text = "Hi, I'm Htun Htun 👋";
    const characters = Array.from(text);

    console.log(characters);
    setAnimatedText(characters);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">
        {animatedText.map((char, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <p className="mt-4 text-lg">
        Senior Frontend Engineer | React | Next.js | Node.js
      </p>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://github.com/htunh"
          className="text-2xl text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://mm.linkedin.com/in/htun-htun-611307134"
          className="text-2xl text-gray-400 hover:text-white transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
