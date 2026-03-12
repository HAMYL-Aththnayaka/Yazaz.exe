import React from "react";
import me from "../../assets/Me.png";
import { FaArrowRight ,FaDribble } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text content section */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Yasas Aththanayaka
              </h1>
              <div className="h-[4px] w-[60px] bg-blue-600"></div>
            </div>

            <p className="items-center text-blue-400 text-xl font-medium uppercase tracking-widest">
              Full Stack Developer | Mobile Developer
            </p>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              I am a deeply curious developer with a passion for building seamless
              digital experiences across web and mobile platforms. My journey is
              fueled by a love for logic and an obsession with learning; whether
              it’s mastering the <strong>MERN stack</strong> or crafting fluid UIs with
              <strong> Flutter</strong>, I thrive on turning complex problems into elegant code.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
                View My Work
                <FaArrowRight className="text-sm group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="border border-gray-600 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Contact Me
              </button>
            </div>
          </div>

          {/* Image content section */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative">
              {/* Optional: Subtle glow effect behind the image */}
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>
              <img
                src={me}
                alt="Yasas Aththanayaka"
                className="relative z-10 w-full max-w-[350px] md:max-w-[450px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          {/*Social media */}
            <div className='space-y-7'>

            </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

//26.34