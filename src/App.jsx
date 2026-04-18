import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Blog from "./Pages/Blog/Blog";
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './components/Contact/Contact'; 

const App = () => {
  return (
    <main className="bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/blog" element={<Blog />} />
         <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </main>
  );
};

export default App;