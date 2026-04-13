import { ArrowUpRight } from "lucide-react";
import React from "react";

const myProjects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "./projects/project1.png",
    tags: ["html,react,"],
    link: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "./projects/project2.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "./projects/project3.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 blur-3xl bg-cyan-400 rounded-full"></div>
      <div className="absolute bottom-1 left-0 w-64 h-64 blur-3xl bg-orange-400 rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center max-w-3xl mb-16 mx-auto">
          <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:5xl mb-6 mt-4 text-bold text-cyan-400 animate-fade-in animation-delay-100">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-gray-400 animate-fade-in animation-delay-200">
            {" "}
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {myProjects.map((project, idx) => (
            <div
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              key={idx}
            >
              <div className="relative overflow-hidden aspect-vedio">
                <img
                  className="w-full h-full group-hover:scale-110 object-cover transition-transform duration-700"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <a href="#" className="">
                      <ArrowUpRight/>
                    </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
