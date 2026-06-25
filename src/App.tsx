import React, { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  link?: string;
  github?: string;
}

interface Skill {
  category: string;
  items: string[];
  color: string;
}

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Please fill out all fields.");
      setFormStatus("error");
      return;
    }

    setFormError("");
    setFormStatus("sending");

    // Replace this with your backend endpoint or form service URL later.
    await new Promise((resolve) => setTimeout(resolve, 500));

    setFormStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Knowledge Base App",
      description:
        "A web application for storing text information that is easy to navigate regardless of scale.",
      tech: ["TypeScript", "React", "Tailwind CSS", "Zustand", "Vite", "PostgreSQL", "Redis", "Express"],
      gradient: "from-slate-800 via-zinc-900 to-black",
      link: "https://github.com/VladProgrammerBot/knowledge-base-app",
      github: "https://github.com/VladProgrammerBot/knowledge-base-app",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A modern React weather dashboard built with SCSS and WeatherAPI for real-time weather monitoring and hourly forecasts.",
      tech: ["React", "JavaScript", "SCSS"],
      gradient: "from-sky-500 via-blue-500 to-indigo-600",
      link: "https://github.com/VladProgrammerBot/weather-app",
      github: "https://github.com/VladProgrammerBot/weather-app",
    },
    {
      id: 3,
      title: "Multiplayer Physics Ball",
      description:
        "A minimalist high-speed real-time multiplayer maze game",
      tech: ["HTML5 Canvas", "Node.js", "Express", "Socket.io"],
      gradient: "from-cyan-500 via-slate-500 to-blue-700",
      link: "https://github.com/VladProgrammerBot/multiplayer-physics-ball",
      github: "https://github.com/VladProgrammerBot/multiplayer-physics-ball",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description:
        "A modern content-rich administration dashboard built with Astro, React, and Tailwind CSS for managing multi-level product catalogs.",
      tech: ["Astro", "React", "Tailwind CSS", "TypeScript"],
      gradient: "from-amber-500 via-orange-500 to-rose-500",
      // link: "https://github.com/VladProgrammerBot/e-commerce-platform",
      github: "https://github.com/VladProgrammerBot/e-commerce-platform",
    },
     {
      id: 5,
      title: "Top-Maker",
      description:
        "A lightweight, elegant, and highly efficient web application designed to help users rank and sort any list of items through intuitive, head-to-head binary choices.",
      tech: ["HTML5", "СSS3", "JavaScript"],
      gradient: "from-cyan-500 via-slate-500 to-blue-700",
      link: "https://vladprogrammerbot.github.io/top-list-creator",
      github: "https://github.com/VladProgrammerBot/top-list-creator",
    },
    {
      id: 6,
      title: "Developer Portfolio",
      description:
        "A modern personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      link: "https://github.com/VladProgrammerBot/developer-site-portfolio",
      github: "https://github.com/VladProgrammerBot/developer-site-portfolio",
    },
    {
      id: 7,
      title: "Instagram Clone",
      description:
        "A modern social media application built with React, TypeScript, Redux Toolkit, and Tailwind CSS, featuring full CRUD operations.",
      tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      gradient: "from-pink-500 via-fuchsia-500 to-violet-600",
      // link: "https://github.com/VladProgrammerBot/instagram-clone",
      github: "https://github.com/VladProgrammerBot/instagram-clone",
    },
    {
      id: 8,
      title: "Knowledge Management Desktop App",
      description:
        "Minimalist network-structured knowledge management and note organization application with a keyboard-driven interface.",
      tech: ["TypeScript"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      // link: "https://github.com/VladProgrammerBot/knowledge-management-desktop-app",
      github: "https://github.com/VladProgrammerBot/knowledge-management-desktop-app",
    },
    {
      id: 9,
      title: "Fast Linux Translator",
      description:
        "A lightweight native desktop translation utility for Linux that leverages translate-shell and zenity for instant system-wide translations.",
      tech: ["Shell"],
      gradient: "from-orange-500 via-red-500 to-pink-600",
      // link: "https://github.com/VladProgrammerBot/fast-linux-translator",
      github: "https://github.com/VladProgrammerBot/fast-linux-translator",
    },
    {
      id: 10,
      title: "Aliases Creator Script",
      description:
        "Linux tool to create aliases fast by command like this: ca dev \"npm run dev\".",
      tech: ["Shell"],
      gradient: "from-emerald-500 via-lime-500 to-cyan-500",
      // link: "https://github.com/VladProgrammerBot/aliases-creator-script",
      github: "https://github.com/VladProgrammerBot/aliases-creator-script",
    },
    {
      id: 11,
      title: "Pi Calculation Script",
      description:
        "A JavaScript algorithm that computes π from zero.",
      tech: ["HTML", "JavaScript"],
      gradient: "from-slate-500 via-stone-500 to-zinc-700",
      // link: "https://github.com/VladProgrammerBot/pi-calculation-script",
      github: "https://github.com/VladProgrammerBot/pi-calculation-script",
    },
  ];

  const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React.js", "Tailwind CSS", "TypeScript", "Zustand"],
      color: "cyan",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"],
      color: "orange",
    },
    {
      category: "Infrastructure",
      items: ["PostgreSQL", "Redis", "Render", "Neon", "Redis Cloud"],
      color: "emerald",
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Linux"],
      color: "violet",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated gradient background */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 50%)`,
        }}
      />

      {/* Grid overlay */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl w-full">
          <div
            className="transform transition-all duration-1000"
            style={{
              opacity: Math.max(0, 1 - scrollY / 500),
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            {/* Accent line */}
            <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-blue-500 mb-8 animate-pulse" />

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
              <div className="relative inline-block">
                <span className="block bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient drop-shadow-2xl pb-2">
                  Vlad Harbuzynskyi
                </span>
                <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
              </div>
            </h1>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-wide">
              Fullstack Developer
            </h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 font-light leading-relaxed">
              Who is driven by results and problem-solving. I build end-to-end
              web applications, covering UI, backend, and deployment. I focus on
              finding the shortest path to an effective solution.
            </p>

            {/* Scroll indicator */}
            <div className="absolute bottom- left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
              Selected <span className="text-cyan-500">Work</span>
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative flex flex-col bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative flex flex-col h-full p-8">
                  <div className="text-6xl font-black text-zinc-800 mb-4 group-hover:text-cyan-500/20 transition-colors">
                    0{project.id}
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-zinc-800 border border-zinc-700 text-cyan-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    {/* Primary Live Project Button */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold px-5 py-2.5 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 transform hover:-translate-y-0.5"
                    >
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </a>
)}
                    {/* Secondary GitHub Button */}
                    <a
                      href={project.github || "#"} // Make sure to add a 'github' property to your projects data array
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-500/50 text-zinc-300 hover:text-cyan-400 px-5 py-2.5 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
              Technical <span className="text-cyan-500">Arsenal</span>
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-cyan-500 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="group relative p-8 bg-black border-2 border-zinc-800 hover:border-cyan-500 transition-all duration-500"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-${skill.color}-500`}
                />

                <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                  {skill.category}
                </h3>

                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-400 font-mono text-sm hover:text-cyan-400 transition-colors cursor-default flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Let's Build <span className="text-cyan-500">Something</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Looking for my first full-time role or internship to bring value to
            a development team.
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start mb-16">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 text-left">
              <h3 className="text-3xl font-bold mb-4 text-white">Contact me</h3>
              <p className="text-gray-400 leading-relaxed">
                Want to build something together? Send a short message using the form, or copy my email if you prefer direct contact.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:garbuz.vlada4@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 px-5 py-3 text-gray-300 transition-all hover:border-cyan-500 hover:text-cyan-400"
                >
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8z" />
                  </svg>
                  <span className="font-mono text-cyan-400">Email</span>
                </a>
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText("garbuz.vlada4@gmail.com")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 px-5 py-3 text-gray-300 transition-all hover:border-cyan-500 hover:text-cyan-400"
                >
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3h8v4m-2 4H6a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zm-2-4h4" />
                  </svg>
                  Copy Email
                </button>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <a
                  href="https://github.com/VladProgrammerBot"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 px-5 py-3 text-gray-300 transition-all hover:border-cyan-500 hover:text-cyan-400"
                >
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://linkedin.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 px-5 py-3 text-gray-300 transition-all hover:border-cyan-500 hover:text-cyan-400"
                >
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>

                <a
                  href="https://t.me/minmax34"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 px-5 py-3 text-gray-300 transition-all hover:border-cyan-500 hover:text-cyan-400"
                >
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 7-8 7-2-2-6 2 2-6-2-2 8-7z" />
                  </svg>
                  Telegram
                </a>
              </div>
            </div>

            <form
              onSubmit={handleFormSubmit}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8"
            >
              <div className="space-y-6">
                <label className="block text-left">
                  <span className="text-sm text-gray-400">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </label>

                <label className="block text-left">
                  <span className="text-sm text-gray-400">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </label>

                <label className="block text-left">
                  <span className="text-sm text-gray-400">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell me about your project"
                    rows={5}
                    className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {formStatus === "success" && (
                  <p className="text-emerald-400">Thanks! Your message is ready to send.</p>
                )}
                {formStatus === "error" && formError && (
                  <p className="text-rose-400">{formError}</p>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-6 py-3 font-bold text-zinc-950 transition-all hover:bg-cyan-400"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          

          {/* Footer */}
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-gray-600 font-mono text-sm">
              © 2026 — Designed & Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
