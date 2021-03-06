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
    console.log('Constructor')
  }
   componentDidMount() {
      window.addEventListener("scroll", this.highlightTargetNavLink);
      window.addEventListener("scroll", this.handleScroll);
      
      console.log('Component Did Mount')
    }
  
    handleScroll = (e) => {
      if (window.scrollY > 20 && (window.innerWidth > 500)) {
        console.log('true')
        this.setState({barIsVisible: 'navbar navbar-expand-lg navbar-light scroll'}); 
      } else {
        this.setState({barIsVisible: 'navbar navbar-expand-lg navbar-light'});
        console.log('false')
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
      console.log('Location - ', fromTop, 'Skills- ', skills)
    }

    unHideHeadingContent = () => {
      console.log('unhiding')
      this.setState({hiddenBannerContent:'unhide'})
      this.setState({hiddenNavContent:'unhide'})
    }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>   
      <header id="home" class="header-container">
        <RenderSmoothImage
          src={'https://firebasestorage.googleapis.com/v0/b/chris-portfolio-1c817.appspot.com/o/test4.jpg?alt=media&token=6f85466f-8d92-42c5-9531-57669e873a95'} 
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
        {console.log('hiding banner')}
          <div className={`row banner ${this.state.hiddenBannerContent}`}>
              <div className="banner-text">
                <h1 className="responsive-headline">Hi, I'm Christian.</h1>
                    <h2 style={{color:'#fff', fontFamily:'sans-serif '}}> 
                      <Typewriter 
                          options={{
                          strings: ['I\'m a Front-end Developer.', 'I\'m a Full-stack Developer.','I\'m a React Developer.', 'I\'m a Coder.', 'I\'m a Freelance Developer.'],
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