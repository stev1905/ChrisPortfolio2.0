import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './About.css'

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div class="about-container">
            <div class="aboutContent-container">
                <div class="leftAbout">
                    <div class="profilepic-container">
                        <LazyLoadImage 
                            className="profile-pic"  
                            src="https://firebasestorage.googleapis.com/v0/b/chris-portfolio-1c817.appspot.com/o/profilepic.jpg?alt=media&token=d00e018f-bd97-43a6-8e0e-d0e14e46491c" 
                            alt="" 
                        />
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
                <div class="rightAbout">
                     <h2>About Me</h2>
                        <p>{resumeData.aboutme}</p>
                        <p>{resumeData.aboutmeTwo}</p>
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                <span>{resumeData.name}</span>
                                <br></br>
                                <span>{resumeData.address}</span>
                                <br></br>
                                <span>Email: {resumeData.email}</span>
                            </p>
                            <div class="resumeButton-container">
                                <Button class="resumeButton" target="_blank" variant="contained" href="https://drive.google.com/file/d/1-LfKZCgpqJskE5FOZ8pJ6hhZ9rZMa2MK/view?usp=sharing">Resume</Button>  
                            </div>
                    </div>
                </div>  
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#skills"><i className="fa fa-chevron-down" /></a>
         </p>
      </section>
    );
  }
}