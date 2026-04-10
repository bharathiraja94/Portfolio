import React from "react";
import Button from "../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedButton";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

const Skills = ["Shopify", "React", "Tailwind CSS", "Bootstrap", "Git"];

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-gray-950/80 to-gray-950" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      {/* content */}
      <div className="container mx-auto pt-36 pb-20 px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm text-cyan-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />{" "}
                Web devolper .Shopify .React specialist
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in animation-delay-100 loading-tight">
                Crafting{" "}
                <span className="text-cyan-400 glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="italic font-serif font-normal text-white">
                  {" "}
                  prescision.
                </span>
              </h1>
              <p className="text-lg text-gray-400 max-w-lg animate-fade-in animation-delay-200">
                {" "}
                Hi, I'm Bk — a software engineer specializing in React, Shopify.
                I build scalable, performant web applications that users love.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            <div className="flex gap-4 items-center animate-fade-in animation-delay-400">
              <span className="text-sm text-gray-400">Follow Me:</span>
              {[
                { icon: FaGithub, href: "#" },
                { icon: SlSocialLinkedin, href: "#" },
              ].map((social, idx) => (
                <a
                  href={social.href}
                  key={idx}
                  className="p-2 rounded-full glass transition-all duration-300 hover:text-cyan-400"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradiant-br from-cyan-400/30 to-cyan-400/10 blur-2xl animate-pulse" />
              <div className="relative p-2 rounded-3xl glass glow-border">
                <img
                  src="./vite.svg"
                  alt="kb"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 rounded-xl glass px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      {" "}
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 rounded-xl px-4 py-3 glass animation-delay-500 animate-float">
                  <div className="text-cyan-400 font-bold text-2xl ">3+</div>
                  <div className="text-xs text-gray-400">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-gray-400 text-center mb-6">
            Technologies i work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-grandient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...Skills, ...Skills].map((skill, idx) => (
                <div className="flex-shrink-0 px-8 py-4" key={idx}>
                  <span className="text-xl font-semi-bold text-gray-400/50 hover:text-gray-400 transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a href="#About" className="flex items-center flex-col gap-2 text-gray-400">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
