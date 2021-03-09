import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <ul className="social-links">
            {resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })}
          </ul>
        <div className="twelve columns">      
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i class="fa fa-chevron-up" /></a></div>
    </footer>
    );
  }
}