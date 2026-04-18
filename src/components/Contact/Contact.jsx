import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's <span className="text-blue-500">Connect</span></h2>
        
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Currently a 3rd-year IT student at the University of Vavuniya, open to internship opportunities and collaborative projects in Web and Mobile development.
        </p>

        <div className="flex justify-center gap-8">
          <a 
           href="https://lk.linkedin.com/in/yasas-aththanayaka-a9b9b2333"
            target="_blank" 
            rel="noreferrer" 
            className="text-3xl hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a 
            href="https://lk.linkedin.com/in/yasas-aththanayaka-a9b9b2333"
            target="_blank" 
            rel="noreferrer" 
            className="text-3xl hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a 
            href="mailto:yasaslasitha@gmail.com" 
            className="text-3xl hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;