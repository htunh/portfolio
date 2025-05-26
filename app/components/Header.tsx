"use client";

import { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add/remove body class for scroll locking
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#131316] flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2d2d34] px-4 md:px-10 py-3">
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_319)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect width="48" height="48" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <Link href="/" className="hover:text-[#b7b7e0] transition-colors">
            <h2 className="text-white text-base md:text-lg font-bold leading-tight tracking-[-0.015em]">
              Htun&apos;s Portfolio
            </h2>
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="hidden md:flex items-center gap-9">
            <a
              className="text-white text-sm font-medium leading-normal hover:text-[#b7b7e0] transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="text-white text-sm font-medium leading-normal hover:text-[#b7b7e0] transition-colors"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-white text-sm font-medium leading-normal hover:text-[#b7b7e0] transition-colors"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-white text-sm font-medium leading-normal hover:text-[#b7b7e0] transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-[#131316] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col gap-6">
            <a
              className="text-white text-xl font-medium leading-normal hover:text-[#b7b7e0] transition-colors"
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              className="text-white text-xl font-medium leading-normal hover:text-[#b7b7e0] transition-colors"
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              className="text-white text-xl font-medium leading-normal hover:text-[#b7b7e0] transition-colors"
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              className="text-white text-xl font-medium leading-normal hover:text-[#b7b7e0] transition-colors"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
          <div className="mt-auto pb-8">
            <div className="flex gap-6">
              <a
                href="https://github.com/htunh"
                className="text-[#a4a4b2] hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://mm.linkedin.com/in/htun-htun-611307134"
                className="text-[#a4a4b2] hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-[#a4a4b2] hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 