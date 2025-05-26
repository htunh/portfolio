"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  const [animatedText, setAnimatedText] = useState<string[]>([]);

  useEffect(() => {
    const text = "Hi, I'm Htun Htun 👋";
    const characters = Array.from(text);
    setAnimatedText(characters);
  }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#131316] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#131316] flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2d2d34] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Htun&apos;s Portfolio</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal hover:text-[#b7b7e0] transition-colors" href="#about">About</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#b7b7e0] transition-colors" href="#projects">Projects</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#b7b7e0] transition-colors" href="#skills">Skills</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#b7b7e0] transition-colors" href="#contact">Contact</a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 relative overflow-hidden"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(19, 19, 22, 0.95) 0%, rgba(45, 45, 52, 0.95) 100%)'
                  }}
                >
                  {/* Animated Tech Pattern Overlay */}
                  <div className="absolute inset-0 opacity-30">
                    {/* Animated Code Elements Pattern */}
                    {/* <div className="absolute inset-0 animate-float-slow" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'150\' height=\'150\' viewBox=\'0 0 150 150\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.3\'%3E%3Ctext x=\'10\' y=\'30\' font-family=\'monospace\' font-size=\'12\'%3E&lt;div&gt;%3C/text%3E%3Ctext x=\'40\' y=\'60\' font-family=\'monospace\' font-size=\'12\'%3E&lt;/div&gt;%3C/text%3E%3Ctext x=\'70\' y=\'90\' font-family=\'monospace\' font-size=\'12\'%3E&lt;code&gt;%3C/text%3E%3Ctext x=\'100\' y=\'120\' font-family=\'monospace\' font-size=\'12\'%3E&lt;/code&gt;%3C/text%3E%3C/g%3E%3C/svg%3E")',
                      backgroundSize: '150px 150px'
                    }}></div> */}

                    {/* Animated React/JSX Pattern */}
                    <div className="absolute inset-0 animate-float-medium" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' viewBox=\'0 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.3\'%3E%3Ctext x=\'10\' y=\'20\' font-family=\'monospace\' font-size=\'10\'%3E&lt;Component /&gt;%3C/text%3E%3Ctext x=\'30\' y=\'40\' font-family=\'monospace\' font-size=\'10\'%3E{props}%3C/text%3E%3Ctext x=\'50\' y=\'60\' font-family=\'monospace\' font-size=\'10\'%3EuseState%3C/text%3E%3Ctext x=\'70\' y=\'80\' font-family=\'monospace\' font-size=\'10\'%3EuseEffect%3C/text%3E%3C/g%3E%3C/svg%3E")',
                      backgroundSize: '120px 120px'
                    }}></div>

                    {/* Animated TypeScript Elements */}
                    {/* <div className="absolute inset-0 animate-float-fast" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.3\'%3E%3Ctext x=\'5\' y=\'20\' font-family=\'monospace\' font-size=\'8\'%3Einterface%3C/text%3E%3Ctext x=\'5\' y=\'40\' font-family=\'monospace\' font-size=\'8\'%3Etype Props%3C/text%3E%3Ctext x=\'5\' y=\'60\' font-family=\'monospace\' font-size=\'8\'%3Econst enum%3C/text%3E%3Ctext x=\'5\' y=\'80\' font-family=\'monospace\' font-size=\'8\'%3E: string%3C/text%3E%3C/g%3E%3C/svg%3E")',
                      backgroundSize: '100px 100px'
                    }}></div> */}

                    {/* Animated Code Syntax Highlighting */}
                    {/* <div className="absolute inset-0 animate-pulse-slow" style={{
                      backgroundImage: `
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '15px 15px'
                    }}></div> */}

                    {/* Animated Terminal Commands */}
                    {/* <div className="absolute inset-0 animate-float-medium-reverse" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.3\'%3E%3Ctext x=\'5\' y=\'15\' font-family=\'monospace\' font-size=\'8\'%3E$ npm run dev%3C/text%3E%3Ctext x=\'5\' y=\'35\' font-family=\'monospace\' font-size=\'8\'%3E$ git commit%3C/text%3E%3Ctext x=\'5\' y=\'55\' font-family=\'monospace\' font-size=\'8\'%3E$ yarn build%3C/text%3E%3Ctext x=\'5\' y=\'75\' font-family=\'monospace\' font-size=\'8\'%3E$ npm test%3C/text%3E%3C/g%3E%3C/svg%3E")',
                      backgroundSize: '80px 80px'
                    }}></div> */}                    

                    {/* Animated Tech Glow Effects */}
                    <div className="absolute inset-0 animate-pulse-slow" style={{
                      backgroundImage: `
                        radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.15) 0%, transparent 20%),
                        radial-gradient(circle at 85% 85%, rgba(255, 255, 255, 0.15) 0%, transparent 20%),
                        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)
                      `,
                      backgroundSize: '100% 100%'
                    }}></div>

                    {/* Animated Particles */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-particle-1 opacity-60"></div>
                      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-particle-2 opacity-60"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-particle-3 opacity-60"></div>
                      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-particle-4 opacity-60"></div>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
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
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">Software Engineer</h2>
                  </div>
                  <a
                    href="#projects"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#b7b7e0] text-[#131316] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:bg-[#a4a4d0] transition-colors"
                  >
                    <span className="truncate">View Projects</span>
                  </a>
                </div>
              </div>
            </div>

            {/* About Section */}
            <section id="about" className="mt-10 scroll-mt-20">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">About Me</h2>
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                I am a Software Engineer with a passion for creating beautiful and functional web applications. 
                With extensive experience in React, Next.js, and Node.js, I specialize in building modern, 
                responsive, and performant web applications. I am dedicated to delivering high-quality solutions 
                that meet user needs and exceed expectations. I am a quick learner and I am always looking for new challenges and opportunities to grow.
              </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mt-10 scroll-mt-20">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Projects</h2>
              <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                  {/* Project Card 1 */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 hover:scale-105 transition-transform">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                      style={{ backgroundImage: 'url("/project1.jpg")' }}
                    ></div>
                    <div>
                      <p className="text-white text-base font-medium leading-normal">E-Commerce Platform</p>
                      <p className="text-[#a4a4b2] text-sm font-normal leading-normal">
                        A full-stack e-commerce platform built with Next.js and Node.js, featuring real-time inventory management and modern UI/UX design with Three.js.
                      </p>
                    </div>
                  </div>

                  {/* Project Card 2 */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 hover:scale-105 transition-transform">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                      style={{ backgroundImage: 'url("/project2.jpg")' }}
                    ></div>
                    <div>
                      <p className="text-white text-base font-medium leading-normal">Content Management App</p>
                      <p className="text-[#a4a4b2] text-sm font-normal leading-normal">
                        A content management app built with Next.js and Node.js, featuring a modern UI/UX design with Tailwind CSS.
                      </p>
                    </div>
                  </div>

                  {/* Project Card 3 */}
                  <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 hover:scale-105 transition-transform">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                      style={{ backgroundImage: 'url("/project3.jpg")' }}
                    ></div>
                    <div>
                      <p className="text-white text-base font-medium leading-normal">Portfolio Website</p>
                      <p className="text-[#a4a4b2] text-sm font-normal leading-normal">
                        A modern portfolio website showcasing projects and skills with modern UI/UX and responsive design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mt-10 scroll-mt-20">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Skills</h2>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                {[
                  "React", "Next.js", "Node.js", "TypeScript", "JavaScript",
                  "HTML", "CSS", "Tailwind CSS", "Responsive Design", 
                  "PostgresSQL", "MongoDB", "Git", "Docker", "CI/CD"
                ].map((skill) => (
                  <div key={skill} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2d2d34] pl-4 pr-4 hover:bg-[#3d3d44] transition-colors">
                    <p className="text-white text-sm font-medium leading-normal">{skill}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mt-10 scroll-mt-20">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Contact</h2>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">Email</p>
                  <input
                    placeholder="your.email@example.com"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#42424d] bg-[#1e1e24] focus:border-[#42424d] h-14 placeholder:text-[#a4a4b2] p-[15px] text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">Message</p>
                  <textarea
                    placeholder="Your message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#42424d] bg-[#1e1e24] focus:border-[#42424d] min-h-36 placeholder:text-[#a4a4b2] p-[15px] text-base font-normal leading-normal"
                  ></textarea>
                </label>
              </div>
              <div className="flex px-4 py-3">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#b7b7e0] text-[#131316] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#a4a4d0] transition-colors">
                  <span className="truncate">Send</span>
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://github.com/htunh" className="text-[#a4a4b2] hover:text-white transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://mm.linkedin.com/in/htun-htun-611307134" className="text-[#a4a4b2] hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-[#a4a4b2] hover:text-white transition-colors">
                  <FaTwitter size={24} />
                </a>
              </div>
              <p className="text-[#a4a4b2] text-base font-normal leading-normal">© 2025 Htun Htun. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
