import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "The Fruit Store",
    desc: "A modern React e-commerce application featuring a clean UI built with Tailwind CSS and a Mongoose-powered backend.",
    tech: ["React", "Tailwind CSS", "MongoDB", "Node.js"],
    github: "https://github.com/HAMYL-Aththnayaka/The-Fruit-Store",
    demo: "#",
  },
  {
    id: 2,
    title: "Yazz Player",
    desc: "A cross-platform music player application developed using Flutter, focusing on smooth state management with Hive.",
    tech: ["Flutter", "Dart", "Hive"],
    github: "https://github.com/HAMYL-Aththnayaka/Yazz-Player-",
    demo: "#",
  },
  {
    id: 3,
    title: "CheckM8",
    desc: "A specialized Chrome extension designed for interactive chess learning and real-time game analysis.",
    tech: ["JavaScript", "Chrome API", "CSS"],
    github: "https://github.com/HAMYL-Aththnayaka/CheckM8",
    demo: "#",
  },
  {
    id: 4,
    title: "Yazz Video Chat",
    desc: "A real-time video conferencing platform built using React and the Agora SDK for seamless communication.",
    tech: ["React", "Agora SDK", "Tailwind"],
    github: "https://github.com/HAMYL-Aththnayaka/Yazz_Video_Chat",
    demo: "#",
  },
];

const MyWork = () => {
  return (
    <section id="works" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Recent <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 text-center max-w-2xl">
            A selection of my latest work in web and mobile development, ranging from MERN stack applications to Flutter mobile tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <div className="group relative bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-600 transition-all duration-300 shadow-xl">

                {/* Top Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-600/10 rounded-lg">
                    <FaCode className="text-blue-500 text-2xl" />
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      title="View Source"
                    >
                      <FaGithub size={24} />
                    </a>

                    <a
                      href={project.demo}
                      className="text-gray-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/HAMYL-Aththnayaka?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all"
          >
            See More on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default MyWork;