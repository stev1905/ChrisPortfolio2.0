import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Portfolio.css';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
    <section id="portfolio">
        <h1 className="portfolio-header"><span>Check Out Some of My Personal Projects</span></h1>
        <div className="portfolio-container">
            <div id="portfolio-wrapper" className="project-container">
                {resumeData.portfolio && resumeData.portfolio.map((item, i) => {

                if(i >=2 ) return null;
                
                return(
                    <div className="columns portfolio-item">
                        <a href={item.projectUrl}>
                            <div className="item-wrap">
                                <LazyLoadImage src={`${item.imgurl}`} className="item-img" alt="projectImage"/>
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>{item.name}</h5>
                                        <p>{item.description}</p>
                                        </div>
                                </div>      
                            </div>
                        </a>
                    </div>
                )})}
            </div>
        </div>
        <h1 className="portfolio-header"><span>Check Out some Contributions I Make in my current role</span></h1>
        <div className="portfolio-container">
            <div className="columns portfolio-item">
                <a href={resumeData.portfolio[2].projectUrl}>
                    <div className="item-wrap">
                        <LazyLoadImage src={`${resumeData.portfolio[2].imgurl}`} className="item-img" alt="projectImage"/>
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>{resumeData.portfolio[2].name}</h5>
                                <p>{resumeData.portfolio[2].description}</p>
                            </div>
                        </div>      
                    </div>
                </a>
            </div>
        </div>  
    </section>
    );
  }
}