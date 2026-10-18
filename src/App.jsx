import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './Pages/Home/Home';
import Contact from './components/Contact/Contact'; 
import Blog from './Pages/Blog/Blog';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

const App = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;