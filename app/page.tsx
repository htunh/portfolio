import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold">Hi, I&#39;m Htun Htun 👋</h1>
      <p className="mt-4 text-lg">
        Senior Frontend Engineer | React | Next.js | Node.js
      </p>
      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/htunh" className="text-2xl">
          <FaGithub />
        </a>
        <a
          href="https://mm.linkedin.com/in/htun-htun-611307134"
          className="text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
