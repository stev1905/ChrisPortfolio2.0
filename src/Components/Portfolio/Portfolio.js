import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Portfolio.css';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
    <section id="portfolio">
        <h1><span>Check Out Some of My Works.</span></h1>
        <div className="portfolio-container">
            <div id="portfolio-wrapper" className="project-container">
                {resumeData.portfolio && resumeData.portfolio.map((item) => {
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
    </section>
    );
  }
}