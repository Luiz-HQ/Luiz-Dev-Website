"use client";

import Image from "next/image";
import "../../public/profile.jpg";
import { useState, useEffect } from "react";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  const textToType = "FULL STACK DEVELOPER";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < textToType.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + textToType[index]);
        setIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [index, textToType]);

  const mainTechs = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ];

  return (
    <div className="bg-linear-to-b from-[#050505f6] via-[#2a2a2a] to-[#000000] text-white flex min-h-screen flex-col items-center px-2 sm:px-12">
      <header className="w-full border-b border-gray-700 sticky top-0 z-50">
        <nav className="flex items-center justify-center w-full h-20 px-8">
          <ul className="flex w-full max-w-5xl mx-auto items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <li className="transition-transform hover:scale-110 duration-200">
              <a
                href="#"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li className="transition-transform hover:scale-110 duration-200">
              <a
                href="#"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li className="transition-transform hover:scale-110 duration-200">
              <a
                href="#"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li className="transition-transform hover:scale-110 duration-200">
              <a
                href="#"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="grow flex flex-col md:flex-row items-center justify-center p-4 gap-8 max-w-5xl mx-auto">
        <div className="text-center md:text-left">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            LUIZ HENRIQUE
          </h1>
          <p className="text-[#00FF00] text-2xl md:text-3xl font-semibold mt-2">
            {displayedText}
            <span className="animate-blink text-white">|</span>
          </p>
          <p className="text-gray-300 text-lg mt-4 max-w-md mx-auto md:mx-0">
            Transforming ideas into robust and scalable digital solutions.
          </p>
          <button className="cursor-pointer mt-8 px-8 py-3 bg-[#00FF00] text-[#050505] font-bold rounded-lg hover:bg-green-400 transition-transform hover:scale-105 duration-200">
            See Projects
          </button>
        </div>

        <div className="mt-8 md:mt-0 shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/profile.jpg"
              alt="Luiz Henrique - Full Stack Developer"
              fill
              className="rounded-full border-4 border-[#00FF00] shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </main>

      <section className="w-full p-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">
            main technologies
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {mainTechs.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-110"
                  title={tech.name}
                >
                  <IconComponent
                    size={48}
                    className="text-gray-400 group-hover:text-[#00FF00] transition-all duration-300 group-hover:drop-shadow-lg"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="w-full text-center py-4 mt-auto text-gray-500">
        <p>&copy; {new Date().getFullYear()} Luiz Dev. All rights reserved.</p>
      </footer>
    </div>
  );
}
