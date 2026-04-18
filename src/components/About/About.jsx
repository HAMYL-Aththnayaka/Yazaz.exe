import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About <span className="text-blue-500">Me</span></h2>
          <p className="text-gray-400 text-lg mb-4">
            I am a 3rd-year Information Technology undergraduate at the <strong>University of Vavuniya</strong>. 
            My passion lies in building scalable web and mobile solutions.
          </p>
          <p className="text-gray-400 text-lg mb-6">
            Currently, I specialize in the <strong>MERN Stack</strong> and <strong>Flutter</strong> development. 
            I also have experience with logic programming like <strong>Prolog</strong> and parallel computing using <strong>C (MPI)</strong>.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'Flutter', 'Tailwind CSS', 'MongoDB', 'Dart'].map((skill) => (
              <span key={skill} className="bg-blue-600/10 text-blue-400 border border-blue-600/20 px-4 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
             <h3 className="text-xl font-bold mb-4 text-blue-400">Education</h3>
             <p className="font-semibold text-white">University of Vavuniya, Sri Lanka</p>
             <p className="text-gray-400">BSc (Hons) in Information Technology</p>
             <p className="text-gray-500 text-sm mt-2">2021 - Present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;