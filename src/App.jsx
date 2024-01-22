// App.js

import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer'
import Contact from './Contact';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from './MainPage';


const App = () => {
  return (
    <div>
      <Navbar />  
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <MainPage />
      <Footer />
      {/* Other content of your application */}
    </div>
  );
};

export default App;
