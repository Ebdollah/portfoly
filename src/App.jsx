// App.js

import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Projects />
      <Skills />
      <Footer />
      {/* Other content of your application */}
    </div>
  );
};

export default App;
