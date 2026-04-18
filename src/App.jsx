import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Blog from './pages/Blog/Blog';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

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
      </Routes>
    </main>
  );
};

export default App;