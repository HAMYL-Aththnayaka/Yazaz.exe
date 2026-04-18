import React from "react";
import me from "../../assets/Me.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex items-center py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 order-2 md:order-1"
          >
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Yasas Aththanayaka
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[4px] bg-blue-600"
              ></motion.div>
            </div>

            <p className="text-blue-400 text-xl font-medium uppercase tracking-widest">
              Full Stack Developer | Mobile Developer | Software Developer            </p>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              I am a deeply curious developer with a passion for building seamless
              digital experiences. Whether mastering the <strong>MERN stack</strong> or
              crafting fluid UIs with <strong>Flutter</strong>, I thrive on turning complex
              problems into elegant code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#works">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  View My Work
                  <FaArrowRight className="text-sm group-hover:translate-x-2 transition-transform duration-200" />
                </motion.button>
              </a>

              <Link to="/contact">
                <motion.button
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all backdrop-blur-sm"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute inset-0 bg-blue-600 blur-3xl rounded-full"
              ></motion.div>

              <img
                src={me}
                alt="Yasas Aththanayaka"
                className="relative z-10 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] object-contain drop-shadow-2xl hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default Hero;