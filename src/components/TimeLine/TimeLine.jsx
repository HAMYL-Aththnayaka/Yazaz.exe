import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "2026",
    title: "Third-Year Development",
    location: "University of Vavuniya",
    desc: "Currently building real-world applications like 'The Fruit Store' using the MERN stack and 'Yazz Video Chat' using React and Agora SDK."
  },
  {
    year: "2025",
    title: "Core Programming & AI",
    location: "Academic Coursework",
    desc: "Mastered logic programming with Prolog and explored AI concepts like Semantic Networks and Expert Systems."
  },
  {
    year: "2025",
    title: "University Group Project Lead",
    location: "Unibites Project",
    desc: "Led a student team to develop a digital canteen management system, handling both frontend and backend logic."
  },
  {
    year: "2024",
    title: "Mobile App Exploration",
    location: "Self-Directed Learning",
    desc: "Built 'Yazz Player', a music application, to master the Flutter framework and Dart programming language."
  },
  {
    year: "2021",
    title: "Started IT Degree",
    location: "University of Vavuniya",
    desc: "Began my journey as an Information Technology undergraduate in Sri Lanka."
  }
];

const TimeLine = () => {
  return (
    <section className="py-20 bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Academic & <span className="text-blue-500">Dev Journey</span></h2>
          <p className="text-gray-400 mt-4 italic">My progress as an IT undergraduate.</p>
        </div>

        <div className="max-w-4xl mx-auto relative border-l-2 border-blue-600/30 ml-4 md:ml-auto">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1.5 bg-blue-600 w-4 h-4 rounded-full border-4 border-gray-900 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              
              <span className="text-blue-500 font-bold text-sm uppercase tracking-widest">{item.year}</span>
              <h3 className="text-2xl font-bold mt-1 text-white">{item.title}</h3>
              <p className="text-gray-400 font-medium italic mb-3">{item.location}</p>
              <p className="text-gray-500 leading-relaxed max-w-2xl">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;