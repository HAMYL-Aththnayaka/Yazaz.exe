import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowRight, FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projectsData, projectCategories } from "../../data/projectsData";

const MyWork = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-24 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Real GitHub Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-5 text-base md:text-lg max-w-2xl leading-relaxed">
            A curated showcase of applications I have architected and built, spanning AI-driven web systems, cross-platform Flutter mobile apps, real-time conferencing, and interactive browser tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-gray-800/90 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-950/70 hover:bg-gray-950 border border-gray-800 hover:border-blue-500/60 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Header row: Badge + Links */}
                <div className="flex justify-between items-start gap-3 mb-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                      {project.tag}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-600 text-gray-400 hover:text-white transition-all"
                        title="View Source on GitHub"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub size={18} />
                      </a>
                    )}

                    {project.hasLiveDemo && project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                        title="Open Verified Live Demo"
                        aria-label={`Open Live Demo for ${project.title}`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Multi-demo links if applicable (e.g. Classic Web Games) */}
                {project.otherDemos && (
                  <div className="mb-5 p-3 rounded-xl bg-gray-900/90 border border-gray-800/80">
                    <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5 mb-2">
                      <FaGamepad className="text-blue-400" /> Play Live on Vercel:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.otherDemos.map((demo) => (
                        <a
                          key={demo.title}
                          href={demo.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium px-2.5 py-1 rounded bg-blue-500/10 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/20 transition-all flex items-center gap-1"
                        >
                          {demo.title}
                          <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom section: Tech Tags & Details link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-0.5 bg-gray-900 border border-gray-800 rounded text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="text-xs font-mono px-2 py-0.5 bg-gray-900/60 text-gray-500 rounded">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800/80">
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    <span>View Architecture & Details</span>
                    <FaArrowRight className="text-xs group-hover/link:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Repositories Link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/HAMYL-Aththnayaka?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:scale-105"
          >
            <FaGithub size={20} />
            <span>Explore All of my work on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default MyWork;
