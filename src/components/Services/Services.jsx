import React from "react";
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development , Software Development  ",
    desc: "Building responsive and scalable  applications.",
    icon: <FaLaptopCode className="text-blue-500" />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Crafting fluid, cross-platform mobile experiences for iOS and Android using Flutter and Dart.",
    icon: <FaMobileAlt className="text-blue-500" />,
  },
  {
    id: 3,
    title: "Backend & API Design",
    desc: "Designing robust server-side logic and RESTful APIs to power your digital products seamlessly.",
    icon: <FaServer className="text-blue-500" />,
  },
  {
    id: 4,
    title: "Database Management",
    desc: "Implementing efficient data storage solutions with MongoDB and local state management using Hive.",
    icon: <FaDatabase className="text-blue-500" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-blue-600">Services</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Leveraging modern technologies to build high-quality digital solutions as a 3rd-year IT student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-600 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;