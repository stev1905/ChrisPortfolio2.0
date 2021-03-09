import React, { Component } from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import resumeData from './ResumeData';
import './App.css';


class App extends Component {
 // constructor() {
  //  super()
   // this.state = {
  //    isloading: true
   // }
   // console.log('Constructor', this.state.isloading)
  //}

  //componentDidMount() {
    //this.fakeRequest().then(() => {
    //    this.setState({ isloading: false });
    //});
 // }
 // fakeRequest = () => {
   // return new Promise(resolve => setTimeout(() => resolve(), 1000));
  //};

  render() {
    return (
      <div className="app">
         <Header resumeData={resumeData}/>
         <About resumeData={resumeData}/>
         <Skills resumeData={resumeData}/>
         <Portfolio resumeData={resumeData}/>
         <Footer resumeData={resumeData}/>
       </div>
     )
  }
}

export default App;
