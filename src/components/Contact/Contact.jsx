import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-950 text-white relative overflow-hidden border-t border-gray-800/80">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Open to Software Engineering & Full-Stack Internships
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Let&apos;s <span className="text-blue-500">Connect</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          I am a Final-year IT undergraduate at the <strong>University of Vavuniya</strong>, passionate about building reliable full-stack web applications, AI-integrated software, and Flutter mobile experiences. Feel free to reach out for opportunities, collaborations, or tech discussions!
        </p>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          
          {/* Email card */}
          <a
            href="mailto:aththanayakayasas@gmail.com"
            className="p-6 bg-gray-900/80 hover:bg-gray-800/90 border border-gray-800 hover:border-blue-500/50 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Direct Email</span>
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaEnvelope size={18} />
              </div>
            </div>
            <div>
              <p className="text-white font-medium break-all group-hover:text-blue-400 transition-colors">
                aththanayakayasas@gmail.com
              </p>
              <p className="text-gray-500 text-xs mt-1">Tap to write an email</p>
            </div>
          </a>

          {/* Location card */}
          <div className="p-6 bg-gray-900/80 border border-gray-800 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Location</span>
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                <FaMapMarkerAlt size={18} />
              </div>
            </div>
            <div>
              <p className="text-white font-medium">Gampaha / Vavuniya</p>
              <p className="text-gray-500 text-xs mt-1">Sri Lanka (Western / Northern)</p>
            </div>
          </div>

          {/* University card */}
          <div className="p-6 bg-gray-900/80 border border-gray-800 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Education</span>
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                <FaGraduationCap size={18} />
              </div>
            </div>
            <div>
              <p className="text-white font-medium">University of Vavuniya</p>
              <p className="text-gray-500 text-xs mt-1">BSc (Hons) in IT (Expected 2027)</p>
            </div>
          </div>

        </div>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://github.com/HAMYL-Aththnayaka"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-blue-500 rounded-xl text-white font-medium transition-all group shadow-md"
            title="Visit GitHub Profile"
          >
            <FaGithub className="text-xl group-hover:scale-110 transition-transform text-gray-300 group-hover:text-white" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="https://www.linkedin.com/in/yasas-aththanayaka-a9b9b2333"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 border border-blue-500 rounded-xl text-white font-medium transition-all group shadow-lg shadow-blue-600/20"
            title="Connect on LinkedIn"
          >
            <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;