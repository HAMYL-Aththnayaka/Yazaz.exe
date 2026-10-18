import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaTools, FaLightbulb, FaGamepad } from 'react-icons/fa';
import { projectsData } from '../../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();

  // Match by slug id (e.g. "resume-roster") or numeric id (e.g. "1")
  const projectIndex = projectsData.findIndex(
    (p) => p.id === id || String(p.numId) === id
  );
  const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
        <div className="text-center p-8 bg-gray-900 border border-gray-800 rounded-2xl max-w-md w-full shadow-2xl">
          <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            !
          </div>
          <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
          <p className="text-gray-400 text-sm mb-6">
            The project identifier &quot;{id}&quot; does not match any current portfolio records.
          </p>
          <Link
            to="/#works"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all"
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <section className="pt-28 pb-24 bg-gray-950 min-h-screen text-white relative">
      {/* Background glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">

        {/* Back navigation */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 mb-8 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header Block */}
        <div className="p-8 md:p-10 bg-gray-900/80 border border-gray-800 rounded-3xl mb-10 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {project.tag}
                </span>
                {project.badge && (
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                    {project.badge}
                  </span>
                )}
                <span className="text-xs text-gray-500 font-mono">
                  Category: {project.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                {project.title}
              </h1>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium transition-all shadow-md"
                  title="View Source on GitHub"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </a>
              )}

              {project.hasLiveDemo && project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-600/20 hover:scale-105"
                  title="Open Verified Live Demo"
                >
                  <FaExternalLinkAlt size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* If the project has multiple live demos (Classic Web Games) */}
          {project.otherDemos && (
            <div className="mt-8 pt-6 border-t border-gray-800/80">
              <p className="text-xs font-semibold text-gray-400 flex items-center gap-2 mb-3">
                <FaGamepad className="text-blue-400" /> Play Any of the Deployed Games Live on Vercel:
              </p>
              <div className="flex flex-wrap gap-3">
                {project.otherDemos.map((demo) => (
                  <a
                    key={demo.title}
                    href={demo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all"
                  >
                    <span>{demo.title}</span>
                    <FaExternalLinkAlt size={11} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="p-8 bg-gray-900/60 border border-gray-800/90 rounded-2xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2.5 text-blue-400 border-b border-gray-800 pb-3">
                <FaLightbulb /> Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {project.fullDesc}
              </p>
            </div>

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div className="p-8 bg-gray-900/60 border border-gray-800/90 rounded-2xl">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2.5 text-blue-400 border-b border-gray-800 pb-3">
                  <FaTools /> Engineering Challenges & Architectural Solutions
                </h2>
                <p className="text-gray-300 leading-relaxed text-base">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Navigation to other projects */}
            <div className="flex justify-between items-center pt-4">
              {prevProject ? (
                <Link
                  to={`/project/${prevProject.id}`}
                  className="px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500/40 text-sm text-gray-300 hover:text-white transition-all flex items-center gap-2"
                >
                  <FaArrowLeft className="text-xs" />
                  <span>{prevProject.title}</span>
                </Link>
              ) : <div />}

              {nextProject && (
                <Link
                  to={`/project/${nextProject.id}`}
                  className="px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500/40 text-sm text-gray-300 hover:text-white transition-all flex items-center gap-2"
                >
                  <span>{nextProject.title}</span>
                  <FaArrowLeft className="text-xs rotate-180" />
                </Link>
              )}
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="p-6 bg-gray-900/60 border border-gray-800/90 rounded-2xl">
                <h3 className="text-lg font-bold mb-5 text-white flex items-center gap-2">
                  <FaCheckCircle className="text-blue-500" /> Key Features
                </h3>
                <ul className="space-y-3.5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            <div className="p-6 bg-gray-900/60 border border-gray-800/90 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 text-white">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-gray-950 border border-gray-800 text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;