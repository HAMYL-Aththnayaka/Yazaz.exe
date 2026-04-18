import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const projectData = {
  "1": {
    title: "The Fruit Store",
    fullDesc: "A comprehensive e-commerce solution focused on organic products. This project was a deep dive into MERN stack integration, specifically focusing on complex Mongoose schemas and responsive design using Tailwind CSS.",
    features: ["Secure User Authentication", "Cart & Wishlist management", "Admin Dashboard", "Payment Gateway Integration"],
    challenges: "Managing state across multiple components and optimizing image loading for high-resolution product shots.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/HAMYL-Aththnayaka/The-Fruit-Store"
  },
  "2": {
    title: "Yazz Player",
    fullDesc: "A high-performance mobile music player. Built during my exploration of the Flutter framework, it utilizes Hive for local database management to ensure lightning-fast access to playlists.",
    features: ["Local MP3 Scanning", "Custom Playlist Creation", "Offline Storage with Hive", "Modern Glassmorphic UI"],
    challenges: "Handling background audio services and syncing UI state with the audio player stream.",
    tech: ["Flutter", "Dart", "Hive"],
    github: "https://github.com/HAMYL-Aththnayaka/Yazz-Player-"
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <Link to="/" className="text-blue-500 flex items-center gap-2">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20 bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="text-blue-500 flex items-center gap-2 mb-8 hover:underline">
          <FaArrowLeft /> Back to Portfolio
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="bg-blue-600/10 text-blue-400 border border-blue-600/20 px-3 py-1 rounded text-sm font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noreferrer" className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <FaGithub size={24} />
            </a>
            <a href="#" className="bg-blue-600 p-4 rounded-xl hover:bg-blue-700 transition">
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">Overview</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{project.fullDesc}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">Challenges</h3>
              <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 h-fit">
            <h3 className="text-xl font-bold mb-6">Key Features</h3>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;