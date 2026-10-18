import React from "react";
import me from "../../assets/Me.png";
import { FaArrowRight, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-950 text-white min-h-[92vh] flex items-center py-16 md:py-24 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 lg:col-span-7 order-2 lg:order-1"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open for Internships & Software Engineering Roles
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-gray-400 text-base md:text-lg font-medium">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Yasas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Aththanayaka</span>
              </h1>
              <div className="h-1 w-20 bg-blue-600 rounded-full mt-2"></div>
            </div>

            {/* Sub-headline */}
            <p className="text-blue-400 text-base md:text-xl font-medium tracking-wide">
              Full-Stack Developer • Flutter Mobile Engineer • IT Undergraduate
            </p>

            {/* Bio */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
              I am a final year IT student at the <strong>University of Vavuniya</strong>, passionate about building reliable full-stack applications and fluid mobile experiences. From architecting <strong>MERN/PERN</strong> web apps and <strong>FastAPI</strong> services to crafting native mobile UIs with <strong>Flutter</strong> and integrating <strong>Gemini AI</strong>, I turn complex problems into elegant code.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#works">
                <button
                  type="button"
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 cursor-pointer"
                >
                  <span>Explore My Work</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-200" />
                </button>
              </a>

              <a
                href="https://github.com/HAMYL-Aththnayaka"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white border border-gray-700 hover:border-gray-500 font-semibold transition-all shadow-md"
              >
                <FaGithub size={18} />
                <span>GitHub (80+)</span>
              </a>

              <Link to="/contact">
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 hover:border-blue-500/60 bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-white font-semibold transition-all backdrop-blur-sm cursor-pointer"
                >
                  <FaEnvelope size={15} />
                  <span>Contact Me</span>
                </button>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-gray-800/80 flex flex-wrap gap-6 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>University of Vavuniya (BSc Hons IT)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Many Personal Projects and  & Real Builds</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image with glow (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Pulsing ambient glow */}
              <div className="absolute inset-0 bg-blue-600/30 blur-3xl rounded-full scale-95 animate-pulse"></div>

              {/* Photo Frame */}
              <div className="relative z-10 p-2 rounded-3xl bg-gradient-to-b from-blue-500/20 via-gray-800/40 to-transparent border border-gray-800">
                <img
                  src={me}
                  alt="Yasas Aththanayaka"
                  className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;