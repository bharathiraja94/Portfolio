import { Code2, Lightbulb, Rocket, User } from "lucide-react";
import React from "react";

const highLights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: User,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <>
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left column */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="text-cyan-400 font-medium text-sm tracking-wider uppercase">
                  About
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight animate-fade-in animation-delay-100">
                Building the feture,
                <span className="font-serif italic font-normal text-white">
                  one component at a time.
                </span>
              </h2>
              <div className="space-y-4 text-gray-400 animate-fade-in animation-delay-200">
                <p>
                  I'm a passionate software engineer with over 5 years of
                  experience crafting digital products that make a difference.
                  My journey started with a curiosity for how things work on the
                  web, and it has evolved into a deep expertise in modern
                  frontend technologies.
                </p>
                <p>
                  I specialize in React, Next.js, and TypeScript, building
                  everything from sleek landing pages to complex enterprise
                  applications. My approach combines technical excellence with a
                  keen eye for design and user experience.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-gray-300">
                  "My mission is to create digital experiences that are not just
                  functional, but truly delightful — products that users love to
                  use and developers love to maintain."
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {highLights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="h-12 w-12 bg-cyan-400/10 flex items-center justify-center rounded-xl hover:bg-cyan-400/20 mb-4">
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title} </h3>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
