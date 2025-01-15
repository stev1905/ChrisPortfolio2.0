import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import {Navbar, Nav} from 'react-bootstrap';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

import './Header.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      homeIsActive: 'activeLink',
      aboutIsActive: '',
      skillsIsActive: '',
      portfolioIsActive: '',
      barIsVisible:'navbar navbar-expand-lg navbar-light',
      hiddenBannerContent:'',
      hiddenNavContent:''
    }
  }
   componentDidMount() {
      window.addEventListener("scroll", this.highlightTargetNavLink);
      window.addEventListener("scroll", this.handleScroll);
    
    }
  
    handleScroll = (e) => {
      if (window.scrollY > 20 && (window.innerWidth > 500)) {
        this.setState({barIsVisible: 'navbar navbar-expand-lg navbar-light scroll'}); 
      } else {
        this.setState({barIsVisible: 'navbar navbar-expand-lg navbar-light'});
      }
    }

    highlightTargetNavLink = () => {
      let fromTop = Math.ceil(window.scrollY) + 1;
      let about = document.querySelectorAll('#about')[0].offsetTop;
      let skills = document.querySelectorAll('#skills')[0].offsetTop;
      let portfolio = document.querySelectorAll('#portfolio')[0].offsetTop;
      if (fromTop < about ) {
          this.setState({homeIsActive: 'activeLink'})
      } else {
          this.setState({homeIsActive: ''})
      }
      if (fromTop >= about && fromTop < skills) {
          this.setState({aboutIsActive: 'activeLink'})
      } else {
        this.setState({aboutIsActive: ''})
      }
      if (fromTop >= skills && fromTop < portfolio) {
        this.setState({skillsIsActive: 'activeLink'})
      } else {
        this.setState({skillsIsActive: ''})
      }
      if (fromTop >= portfolio) {
          this.setState({portfolioIsActive: 'activeLink'})
      } else {
         this.setState({portfolioIsActive: ''})
      }
    }

    unHideHeadingContent = () => {
      this.setState({hiddenBannerContent:'unhide'})
      this.setState({hiddenNavContent:'unhide'})
    }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>   
      <header id="home" class="header-container">
        <RenderSmoothImage
          src={'https://firebasestorage.googleapis.com/v0/b/chris-portfolio-1c817.appspot.com/o/AdobeStock_557304508%20(1).jpeg?alt=media&token=a08e447f-38b4-4999-aa19-18a27703c95f'} 
          alt="alternate-text" 
          object-fit="cover"
          onLoad = {() => this.unHideHeadingContent()}
        />
         <Navbar collapseOnSelect expand="lg" class={`${this.state.barIsVisible} ${this.state.hiddenNavContent}`}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className={this.state.homeIsActive} href="#home">Home</Nav.Link>
              <Nav.Link className={this.state.aboutIsActive} href="#about">About</Nav.Link>
              <Nav.Link className={this.state.skillsIsActive} href="#skills">Skills</Nav.Link>
              <Nav.Link className={this.state.portfolioIsActive} href="#portfolio">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <div className={`row banner ${this.state.hiddenBannerContent}`}>
              <div className="banner-text">
                <h1 className="responsive-headline">Hi, I'm Christian.</h1>
                    <h2 style={{color:'#fff', fontFamily:'sans-serif '}}> 
                      <Typewriter 
                          options={{
                          strings: ['I\'m a Software Engineer.', 'I\'m a Father of Two.', 'I\'m a Problem Solver.', 'I\'m a React Expert.'],
                          autoStart: true,
                          delay: 50,
                          deleteSpeed: 20,
                          loop: true,
                          }}
                      />
                    </h2>
                <hr/>
                <ul className="social">
                    {resumeData.socialLinks && resumeData.socialLinks.map(item => {
                        return(
                          <li key={item.name}>
                            <a href={item.url}><i className={item.className}></i></a>
                          </li>
                      )})}
                </ul>
              </div>
          </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="fa fa-chevron-down" /></a>
         </p>
      </header>
      </React.Fragment>
    );
  }
}