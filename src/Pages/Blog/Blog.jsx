import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Architecting an AI-Powered Resume Analyzer with Google Gemini & MERN",
    projectRef: "Resume Roster",
    projectLink: "https://github.com/HAMYL-Aththnayaka/Resume-Roster",
    date: "2026",
    readTime: "6 min read",
    category: "AI & Full-Stack",
    summary: "How I engineered Resume Roster using Google Gemini API to extract structured entities from resumes, compute weighted ATS scores, and generate role-specific optimization tips while maintaining low API latency.",
    highlights: [
      "Structured JSON schema prompting with Google Gemini API",
      "Secure JWT authentication and MongoDB Mongoose models",
      "Historical version tracking and dashboard analytics"
    ]
  },
  {
    id: 2,
    title: "Offline-Resilient Mobile Systems: Building the UniBites Canteen App",
    projectRef: "UniBites (CanteenApp)",
    projectLink: "https://github.com/HAMYL-Aththnayaka/CanteenApp",
    date: "2025",
    readTime: "5 min read",
    category: "Mobile (Flutter)",
    summary: "Designing a university food ordering app with a fault-tolerant offline simulation mode so that UI demonstrations never break during unstable campus connectivity.",
    highlights: [
      "State synchronization with Flutter Provider and Dio interceptors",
      "Dynamic base URL resolver for Android emulators vs Windows builds",
      "Automated order simulation fallback when remote API endpoints drop"
    ]
  },
  {
    id: 3,
    title: "Full-Stack PERN: Building a Production-Ready Task Management System",
    projectRef: "Task Management System",
    projectLink: "https://github.com/HAMYL-Aththnayaka/Task-Management-System",
    demoLink: "https://task-management-system-six-chi.vercel.app",
    date: "2025",
    readTime: "4 min read",
    category: "Full-Stack Web",
    summary: "Lessons learned while developing a full-stack technical assessment with PostgreSQL, Express, React, and Node.js with strict validation and live Vercel deployment.",
    highlights: [
      "Multi-criteria filtering and dynamic SQL queries with relational keys",
      "Dual-layer validation on both React frontend and Express backend",
      "Vercel live deployment and seamless status dashboard"
    ]
  },
  {
    id: 4,
    title: "State Synchronization in Real-Time WebRTC Video Conferencing",
    projectRef: "Yazz Video Chat",
    projectLink: "https://github.com/HAMYL-Aththnayaka/Yazz_Video_Chat",
    date: "2025",
    readTime: "5 min read",
    category: "Real-Time Systems",
    summary: "Integrating Agora RTC and RTM SDKs in React TypeScript to handle concurrent audio/video channels and real-time live audience polling without state desynchronization.",
    highlights: [
      "Queue-based RTM event handler to avoid duplicate message processing",
      "Low-latency audio/video streaming with screen sharing support",
      "Context API state propagation for distributed live votes"
    ]
  }
];

const Blog = () => {
  return (
    <section className="py-24 bg-gray-950 min-h-screen text-white relative">
      {/* Background glow */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 mb-8 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="mb-14 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Engineering Notes & <span className="text-blue-500">Case Studies</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Reflections, architecture decisions, and lessons learned while designing and deploying real-world software applications.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="p-8 bg-gray-900/70 hover:bg-gray-900 border border-gray-800 hover:border-blue-500/40 rounded-3xl transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    Project: <span className="text-gray-300 font-medium">{article.projectRef}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
                {article.title}
              </h2>

              <p className="text-gray-300 leading-relaxed text-base mb-6">
                {article.summary}
              </p>

              {/* Highlights */}
              <div className="mb-6 p-4 rounded-xl bg-gray-950/80 border border-gray-800/80">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                  Key Takeaways
                </span>
                <ul className="space-y-1.5">
                  {article.highlights.map((item, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-800/80">
                <a
                  href={article.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-all"
                >
                  <FaGithub />
                  <span>View Repository on GitHub</span>
                </a>

                {article.demoLink && (
                  <a
                    href={article.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 transition-all"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Open Verified Live Demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/#works"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20"
          >
            <FaBookOpen />
            <span>Explore All Projects on Home</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blog;