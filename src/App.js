import React from 'react';
import './App.css';
import Header from './components/header'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'

function App() {
  return (
    <div className="Resume">
      <Header />
      <About />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
