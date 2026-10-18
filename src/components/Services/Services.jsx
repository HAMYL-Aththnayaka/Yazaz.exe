import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    desc: "Architecting responsive, performant web applications using React.js, Tailwind CSS, Node.js, and Express with clean component architectures.",
    icon: <FaLaptopCode className="text-blue-400" />,
    badge: "MERN & PERN"
  },
  {
    id: 2,
    title: "Cross-Platform Mobile Apps",
    desc: "Crafting fluid, high-performance mobile experiences for Android and iOS using Flutter & Dart with robust Provider/BLoC state management.",
    icon: <FaMobileAlt className="text-blue-400" />,
    badge: "Flutter & Dart"
  },
  {
    id: 3,
    title: "Backend & API Engineering",
    desc: "Developing secure RESTful APIs, JWT authentication layers, and asynchronous micro-services using Node.js, Express, and Python FastAPI.",
    icon: <FaServer className="text-blue-400" />,
    badge: "Node & FastAPI"
  },
  {
    id: 4,
    title: "AI & Real-Time Integration",
    desc: "Implementing generative AI capabilities with Google Gemini API and real-time audio/video communication via Agora RTC/RTM SDKs.",
    icon: <FaBrain className="text-blue-400" />,
    badge: "Gemini AI & WebRTC"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-950 text-white relative border-t border-gray-800/80">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-blue-500">Services & Capabilities</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-5 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering high-performance software engineering solutions across the full stack, from frontend user interfaces to backend logic and mobile apps.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-7 bg-gray-900/70 hover:bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-blue-500/5"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-3xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-gray-800 text-blue-300 border border-gray-700">
                    {service.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-800/80">
                <span className="text-xs font-semibold text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more in Projects &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;