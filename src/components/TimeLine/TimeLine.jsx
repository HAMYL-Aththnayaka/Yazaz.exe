import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';

const timelineData = [
  {
    year: "2026",
    title: "AI Integration & Full-Stack Architecture",
    location: "University of Vavuniya & Self-Directed Engineering",
    icon: <FaBrain className="text-blue-400" />,
    desc: "Developed flagship systems including 'Resume Roster' (MERN + Google Gemini API for ATS scoring) and 'Task Management System' (PERN stack). Focused on scalable API engineering and cloud deployment."
  },
  {
    year: "2025",
    title: "Project Leadership & Academic Coursework",
    location: "Faculty of Applied Science",
    icon: <FaLaptopCode className="text-blue-400" />,
    desc: "Spearheaded the 'UniBites' university canteen ordering application with a resilient simulation architecture. Mastered logic programming with Prolog and built the Faculty Performance Evaluation platform."
  },
  {
    year: "2024",
    title: "Mobile App Exploration with Flutter",
    location: "Cross-Platform Engineering",
    icon: <FaMobileAlt className="text-blue-400" />,
    desc: "Engineered 'Yazz Player', a high-performance audio player with Flutter and Dart, integrating device storage querying, notification media controls, and background audio services."
  },
  {
    year: "2023 - 2022",
    title: "Core Programming & Systems Foundations",
    location: "Academic Coursework",
    icon: <FaLaptopCode className="text-blue-400" />,
    desc: "Implemented foundational data structures, relational database schemas in MySQL, and visual desktop applications using C# and .NET Framework for the 'Travel Together' project."
  },
  {
    year: "2021",
    title: "Commenced BSc (Hons) in Information Technology",
    location: "University of Vavuniya, Sri Lanka",
    icon: <FaGraduationCap className="text-blue-400" />,
    desc: "Enrolled in the BSc (Hons) in Information Technology degree program at the University of Vavuniya (Registration: 2021/ICT/14), beginning a deep journey in computer science."
  }
];

const TimeLine = () => {
  return (
    <section className="py-24 bg-gray-900 text-white border-t border-gray-800/80 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Milestones
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Academic & <span className="text-blue-500">Dev Journey</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-5 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Key steps in my development journey as an Information Technology undergraduate and software developer.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-3xl mx-auto relative border-l-2 border-blue-500/30 ml-4 md:ml-auto pl-6 md:pl-10 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year + index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Node indicator */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1 w-5 h-5 rounded-full bg-gray-950 border-4 border-blue-500 group-hover:scale-125 group-hover:border-blue-400 transition-all shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>

              {/* Content Card */}
              <div className="p-6 md:p-7 bg-gray-950/70 hover:bg-gray-950 border border-gray-800 hover:border-blue-500/40 rounded-2xl transition-all shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {item.year}
                  </span>
                  <div className="p-2 rounded-lg bg-gray-900 text-gray-400">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-blue-300/80 font-medium text-xs md:text-sm mb-3">
                  {item.location}
                </p>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TimeLine;