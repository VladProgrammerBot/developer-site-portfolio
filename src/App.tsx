import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  link?: string;
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      link: "#"
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization platform with machine learning insights and predictive models",
      tech: ["Next.js", "Python", "TensorFlow", "MongoDB"],
      gradient: "from-orange-500 via-red-500 to-pink-600",
      link: "#"
    },
    {
      id: 3,
      title: "Cloud Infrastructure Manager",
      description: "Multi-cloud orchestration tool with automated deployment and cost optimization",
      tech: ["TypeScript", "Go", "Kubernetes", "AWS"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      link: "#"
    },
    {
      id: 4,
      title: "Real-Time Collaboration Suite",
      description: "WebSocket-based collaborative workspace with document editing and video conferencing",
      tech: ["Vue.js", "WebRTC", "Socket.io", "Express"],
      gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
      link: "#"
    }
  ];

  const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"],
      color: "cyan"
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"],
      color: "orange"
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux"],
      color: "emerald"
    },
    {
      category: "Tools",
      items: ["Git", "GraphQL", "REST APIs", "Microservices", "WebSockets", "Testing"],
      color: "violet"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated gradient background */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 50%)`
        }}
      />
      
      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl w-full">
          <div 
            className="transform transition-all duration-1000"
            style={{
              opacity: Math.max(0, 1 - scrollY / 500),
              transform: `translateY(${scrollY * 0.3}px)`
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
              I build scalable web applications and modern digital experiences. 
              Passionate about clean code, innovative solutions, and turning complex ideas into elegant products.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-none overflow-hidden transition-all hover:scale-105">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-bold rounded-none hover:bg-cyan-500 hover:text-black transition-all hover:scale-105">
                Get in Touch
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
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
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-8">
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

                  <a
                    href={project.link}
                    className="inline-flex items-center text-cyan-500 font-bold group-hover:gap-3 gap-2 transition-all"
                  >
                    View Project
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="group relative p-8 bg-black border-2 border-zinc-800 hover:border-cyan-500 transition-all duration-500"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-${skill.color}-500`} />
                
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
            Available for freelance projects, collaborations, and full-time opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a href="mailto:hello@example.com" className="group flex items-center gap-3 px-6 py-3 border-2 border-zinc-800 hover:border-cyan-500 transition-all hover:scale-105">
              <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-mono group-hover:text-cyan-400 transition-colors">Email</span>
            </a>

            <a href="https://github.com" className="group flex items-center gap-3 px-6 py-3 border-2 border-zinc-800 hover:border-cyan-500 transition-all hover:scale-105">
              <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="font-mono group-hover:text-cyan-400 transition-colors">GitHub</span>
            </a>

            <a href="https://linkedin.com" className="group flex items-center gap-3 px-6 py-3 border-2 border-zinc-800 hover:border-cyan-500 transition-all hover:scale-105">
              <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-mono group-hover:text-cyan-400 transition-colors">LinkedIn</span>
            </a>
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-gray-600 font-mono text-sm">
              © 2024 — Designed & Built with React, TypeScript & Tailwind CSS
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