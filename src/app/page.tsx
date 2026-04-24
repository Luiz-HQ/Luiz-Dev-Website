"use client";

import Image from "next/image";
import "../../public/profile.png";
import "../../public/flowist-preview.gif";
import "../../public/landingpro-preview.gif";
import "../../public/api-preview.png";

import { formatWhatsApp } from "../components/formatWhatsApp";
import { SkillsSection } from "../components/SkillsSection";

import { useState, useEffect } from "react";
import {
  SiCypress,
  SiDocker,
  SiHtml5,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  FiMail,
  FiLinkedin,
  FiCheck,
  FiX,
  FiExternalLink,
  FiGithub as FiGithubIcon,
  FiGithub,
} from "react-icons/fi";
import BinaryRainAnimation from "../components/FallingAsciiAnimation";
import { FaLinkedin } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

export default function Home() {
  const textToType = "FULL STACK DEVELOPER";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
    contactMethod: "email",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

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

  const projects = [
    {
      title: "Flowist",
      description:
        "Kanban-style task manager for optimizing workflow and increasing daily productivity.",
      image: "/flowist-preview.gif",
      deploy: "https://flowist-seven.vercel.app/",
      github: "https://github.com/Luiz-HQ/Flowist",
      techs: [
        SiNextdotjs,
        SiTypescript,
        SiTailwindcss,
        SiNodedotjs,
        SiMongodb,
        SiPrisma,
        SiCypress,
      ],
    },
    {
      title: "LandingPro",
      description:
        "A modern landing page used for conversions, integrated directly with WhatsApp.",
      image: "/landingpro-preview.gif",
      deploy: "https://landingpro-zeta.vercel.app/",
      github: "https://github.com/Luiz-HQ/LandingPro",
      techs: [SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5],
    },
    {
      title: "PayCore API",
      description:
        "Robust API for processing financial transactions with a focus on security and scalability.",
      image: "/api-preview.png",
      deploy: "https://github.com/Luiz-HQ/paycore-service",
      github: "https://github.com/Luiz-HQ/paycore-service",
      techs: [SiNestjs, SiTypescript, SiDocker, SiJest, SiPrisma, SiPostgresql],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    const finalValue = name === "phone" ? formatWhatsApp(value) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");

        setFormData({
          fullName: "",
          email: "",
          company: "",
          message: "",
          contactMethod: "email",
          phone: "",
        });

        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000f8] text-white">
      <header className="w-full border-b border-gray-800 sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md">
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
                href="#projects"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li className="transition-transform hover:scale-110 duration-200">
              <a
                href="#about"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li className="transition-transform hover:scale-110 duration-200">
              <a
                href="#contact"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div
        id="home"
        className="relative w-full bg-linear-to-b from-[#050505f6] via-[#2a2a2a] to-[#000000] px-2 sm:px-12"
      >
        <main className="min-h-[calc(80vh-80px)] flex flex-col md:flex-row items-center justify-center p-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight uppercase tracking-tighter">
              LUIZ HENRIQUE
            </h1>
            <p className="text-[#00FF00] text-2xl md:text-3xl font-semibold mt-2 h-12">
              {displayedText}
              <span className="animate-blink text-white">|</span>
            </p>
            <p className="text-gray-300 text-lg mt-4 max-w-md mx-auto md:mx-0">
              Transforming ideas into robust and scalable digital solutions.
            </p>
            <div className="flex gap-x-4 sm:gap-x-6 justify-center md:justify-start mt-6">
              <button
                onClick={() => (window.location.href = "#projects")}
                className="cursor-pointer mt-8 px-8 py-3 bg-[#00FF00] text-[#2a2a2a] font-bold rounded-lg hover:bg-[#00FF00]/90 transition-transform hover:scale-105 duration-200"
              >
                See Projects
              </button>
              <button
                onClick={() => (window.location.href = "#skills")}
                className="cursor-pointer mt-8 px-8 py-3 bg-trasnparent border text-[#00FF00] font-bold rounded-lg transition-transform hover:scale-105 duration-200"
              >
                See Skills
              </button>
            </div>
          </div>

          <div className="mt-8 md:mt-0 shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/profile.png"
                alt="Luiz Henrique"
                fill
                className="rounded-full border-4 border-[#00FF00] shadow-[0_0_20px_rgba(0,255,0,0.3)] object-cover"
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
      </div>

      <section id="projects" className="py-24 px-4 sm:px-12 bg-[#000000]">
        <div className="max-w-5xl mx-auto mt-20">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">
              Projects
            </h2>
            <div className="h-1 w-20 bg-[#00FF00]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-[#0a0a0a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#00FF00]/50 transition-all duration-500 flex flex-col"
              >
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-48 w-full overflow-hidden block"
                >
                  <div className="absolute inset-0 group-hover:bg-transparent transition-colors z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </a>

                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#00FF00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex gap-3 mb-8">
                    {project.techs.map((TechIcon, i) => (
                      <TechIcon key={i} size={18} className="text-gray-500" />
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-800 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithubIcon size={16} /> GitHub
                    </a>
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-[#00FF00] hover:underline uppercase tracking-widest"
                    >
                      Live Demo <FiExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-12 bg-[#000000]">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">
              About Me
            </h2>
            <div className="h-1 w-20 bg-[#00FF00]"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
            <div className="flex justify-center items-center lg:justify-start w-full">
              <BinaryRainAnimation />
            </div>

            <div className="text-gray-300 text-base leading-relaxed space-y-4">
              <div className="text-gray-300 text-base leading-relaxed space-y-4">
                <p>
                  I am a Full Stack Developer with professional experience in
                  building comprehensive software solutions, from user
                  interfaces to server-side architecture.
                </p>
                <p>
                  My time at Xgrow solidified my foundation, where I maintained
                  and evolved a complex web system, enhancing my skills in
                  React, componentization, and team collaboration. Driven by a
                  passion for deep knowledge, I&apos;ve developed projects that
                  showcase my end-to-end development cycle mastery:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <span className="font-bold text-white">
                      Front-End & UX:
                    </span>{" "}
                    In projects like &apos;Landing Pro,&apos; I focused on
                    creating intuitive and responsive interfaces, ensuring a
                    fluid user experience (UX) across all devices.
                  </li>
                  <li>
                    <span className="font-bold text-white">
                      Back-End & Architecture:
                    </span>{" "}
                    For a Kanban-style task management application called
                    &apos;Flowist,&apos; I built the entire backend
                    infrastructure with Next.js, implementing secure
                    authentication flows with JWT, custom error handling, and
                    database integration via ORM (Prisma).
                  </li>
                </ul>
                <p>
                  My core technologies include React, Next.js, Node.js,
                  TypeScript, JavaScript, Tailwind CSS, Prisma, and Git. I am
                  constantly seeking challenges that allow me to combine
                  technical creativity with product vision to deliver
                  high-impact solutions.
                </p>
                <div className="text-[#00FF00] flex items-center justify-between mt-6 font-semibold">
                  <a
                    href="https://www.linkedin.com/in/luizhenriquecomunicador/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-x-2"
                  >
                    <FaLinkedin size={24} className="text-[#0077B5]" />
                    Let&apos;s connect!
                  </a>
                  <a
                    href="#skills"
                    className="hover:text-[#00FF00] flex gap-x-2 transition-colors duration-200"
                  >
                    <FaLaptopCode size={24} className="text-white" />
                    Skills
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="skills" className="flex flex-col items-center pt-24">
            <SkillsSection />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 px-4 sm:px-12 bg-linear-to-t from-[#050505f6] via-[#2a2a2a] to-[#000000]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">
              Contact Me
            </h2>
            <div className="h-1 w-20 bg-[#00FF00]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-start">
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Let&apos;s <span className="text-[#00FF00]">build</span>{" "}
                  something great together!
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-2">
                  Whether you have a project in mind, want to discuss
                  opportunities, or just want to say hi, I&apos;m always open to
                  connecting with fellow developers, recruiters, and innovators.
                </p>
                <p className="text-gray-500 text-sm">
                  Feel free to reach out through any of the channels below.
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://github.com/Luiz-HQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-transparent border border-[#00FF00]/30 hover:border-[#00FF00] transition-transform hover:scale-101 duration-200 rounded-lg hover:bg-[#00FF00]/5 group"
                >
                  <FiGithub
                    size={24}
                    className="text-white group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <p className="text-sm text-gray-400">
                      View my repositories
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:luizdeveloper17@gmail.com"
                  className="flex items-center gap-4 p-4 bg-transparent border border-[#00FF00]/30 hover:border-[#00FF00] transition-transform hover:scale-101 duration-200 rounded-lg hover:bg-[#00FF00]/5 group"
                >
                  <FiMail
                    size={24}
                    className="text-[#00FF00] group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-sm text-gray-400">Direct message</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/luizhenriquecomunicador/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-transparent border border-[#00FF00]/30 hover:border-[#00FF00] transition-transform hover:scale-101 duration-200 rounded-lg hover:bg-[#00FF00]/5 group"
                >
                  <FiLinkedin
                    size={24}
                    className="text-[#0A66C2] group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-sm text-gray-400">
                      Professional profile
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-12 p-4 bg-[#00FF00]/5 border border-[#00FF00]/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="text-[#00FF00] font-semibold">💡 Tip:</span>{" "}
                  For a faster response, enter your WhatsApp number in the form
                </p>
              </div>
            </div>

            <div className="bg-transparent border border-[#00FF00]/30 transition-transform rounded-lg p-8 hover:transition-all">
              <h3 className="text-xl font-bold mb-6 text-white">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Luiz Henrique..."
                    className="w-full px-4 py-3 bg-tranparent border border-[#00FF00]/30 focus:outline-none focus:border-[#00FF00] rounded-lg text-white placeholder-gray-  transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="luiz@company.com"
                    className="w-full px-4 py-3 bg-tranparent border border-[#00FF00]/30 focus:outline-none focus:border-[#00FF00]  rounded-lg text-white placeholder-gray-  transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company (optional)"
                    className="w-full px-4 py-3 bg-tranparent border border-[#00FF00]/30 focus:outline-none focus:border-[#00FF00]  rounded-lg text-white placeholder-gray-  transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-300">
                    How do you prefer I contact you? *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-white">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === "email"}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-[#00FF00]"
                      />
                      <span>E-mail</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-white">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="whatsapp"
                        checked={formData.contactMethod === "whatsapp"}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-[#00FF00]"
                      />
                      <span>WhatsApp</span>
                    </label>
                  </div>
                </div>

                {formData.contactMethod === "whatsapp" && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      maxLength={15}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 bg-transparent border border-[#00FF00]/30 focus:outline-none focus:border-[#00FF00] rounded-lg text-white placeholder-gray-500 transition-all"
                    />
                  </div>
                )}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="w-full px-4 py-3 bg-tranparent border border-[#00FF00]/30 focus:outline-none focus:border-[#00FF00]  rounded-lg text-white placeholder-gray-  transition-all resize-none"
                  ></textarea>
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <FiCheck className="text-green-500" size={20} />
                    <p className="text-green-400 text-sm">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <FiX className="text-red-500" size={20} />
                    <p className="text-red-400 text-sm">
                      Error sending message. Please try again or contact me via
                      WhatsApp.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full cursor-pointer px-6 py-3 bg-[#00FF00] text-[#000000] font-bold rounded-lg hover:bg-[#00FF00]/80 transition-transform hover:scale-101 duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed uppercase tracking-widest"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  I respect your privacy. Your information will only be used to
                  respond to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full text-center py-10 border-t bg-[#050505f9] border-gray-900 text-gray-500">
        <p className="text-sm tracking-widest uppercase text-[#00ff00a8]">
          &copy; {new Date().getFullYear()} Luiz Dev. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
