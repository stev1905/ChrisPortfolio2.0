import React, { Component } from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import resumeData from './ResumeData';

import './App.css';


class App extends Component {
  render() {
    return (
      <div class="app">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData}  resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
     )
  }
}

export default App;
