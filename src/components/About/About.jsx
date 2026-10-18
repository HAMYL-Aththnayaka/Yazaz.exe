import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaMobileAlt, FaDatabase, FaBrain, FaCode } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <FaLaptopCode className="text-blue-400" />,
    skills: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "Framer Motion", "HTML5 & CSS3"]
  },
  {
    title: "Backend & Cloud APIs",
    icon: <FaDatabase className="text-blue-400" />,
    skills: ["Node.js", "Express.js", "FastAPI (Python)", "RESTful APIs", "JWT Auth", "GraphQL"]
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt className="text-blue-400" />,
    skills: ["Flutter", "Dart", "Provider", "BLoC", "Hive", "Audio & Storage APIs"]
  },
  {
    title: "Databases & Storage",
    icon: <FaDatabase className="text-blue-400" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose ODM"]
  },
  {
    title: "AI & Real-Time Integrations",
    icon: <FaBrain className="text-blue-400" />,
    skills: ["Google Gemini API", "Agora RTC/RTM", "Real-Time Sockets", "Prompt Engineering"]
  },
  {
    title: "Systems & Academic Logic",
    icon: <FaCode className="text-blue-400" />,
    skills: ["C / MPI (Parallel)", "C++", "C# (.NET)", "Prolog (Logic)", "Java", "MATLAB"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950 text-white relative border-t border-gray-800/80">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Profile & Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Top Split: Bio & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Bio (7 cols) */}
          <div className="lg:col-span-7 p-8 md:p-10 bg-gray-900/70 border border-gray-800 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Curious Developer, Builder & Problem Solver
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                I am <b>Yasas Aththanayaka</b>, a final-year Information Technology undergraduate at the <b>University of Vavuniya</b>, Sri Lanka. I enjoy building meaningful digital products that bridge sleek user interfaces with robust backend architectures.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Over the course of 80+ repositories and projects, I have deepened my skills across the <b>MERN & PERN stacks</b>, cross-platform mobile apps with <b>Flutter & Dart</b>, asynchronous services with <b>FastAPI</b>, and AI-enhanced applications powered by <b>Google Gemini</b>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800/80 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-400">BSC (Hons) IT</p>
                <p className="text-xs text-gray-500 font-medium uppercase mt-1">Course</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-400">Final</p>
                <p className="text-xs text-gray-500 font-medium uppercase mt-1">Academic Year</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-400">2027</p>
                <p className="text-xs text-gray-500 font-medium uppercase mt-1">Expected Grad</p>
              </div>
            </div>
          </div>

          {/* Education Card (5 cols) */}
          <div className="lg:col-span-5 p-8 md:p-10 bg-gradient-to-b from-gray-900/90 to-gray-900/60 border border-gray-800 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <div>
              <div className="flex items-center gap-3 text-blue-400 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                  <FaGraduationCap size={28} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Academic Background</span>
                  <h4 className="text-xl font-bold text-white">Higher Education</h4>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="text-lg font-bold text-white">
                  University of Vavuniya, Sri Lanka
                </h5>
                <p className="text-blue-300 font-medium text-sm">
                  Faculty of Applied Science
                </p>
                <p className="text-gray-300 text-sm">
                  BSc (Hons) in Information Technology
                </p>
                <div className="pt-2 text-xs font-mono text-gray-400 space-y-1">
                  <p>• Student Reg: 2021/ICT/14</p>
                  <p>• Duration: 2023 – Present (Expected: Apr 2027)</p>
                  <p>• Focus: Software Engineering, Data Systems, Mobile & Web</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800/80">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                Active Undergraduate
              </span>
            </div>
          </div>

        </div>

        {/* Technical Skills Matrix */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Technical Skills & Tooling
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 bg-gray-900/60 border border-gray-800 hover:border-gray-700 rounded-2xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{cat.icon}</span>
                  <h4 className="text-base font-bold text-white">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 bg-gray-950 border border-gray-800 rounded-md text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;