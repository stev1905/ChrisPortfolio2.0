import React, { Component } from 'react';
import './Skills.css';

export default  class Skills extends Component {
    render() {
        return (
            <section id="skills">
                <div className="skills-container">
                        <div class="skillsTitle">
                            <h1>
                                <span>Web Technologies & Tools</span>
                            </h1>
                        </div>
                        <div class="skillsDescription">
                            <p>Programming languages & web technologies I've used and incorporated into my projects.</p>
                        </div>
                        <div class="flex-grid">
                            <div class="col"><i class="devicon-javascript-plain colored"></i><span>JavaScript/ES6</span></div>
                            <div class="col"><i class="devicon-react-original colored"></i><span>React.js</span></div>
                            <div class="col"><i class="devicon-redux-original colored"></i><span>Redux.js</span></div>
                            <div class="col"><i class="devicon-firebase-plain colored"></i><span>Firebase</span></div>
                            <div class="col"><i class="devicon-html5-plain colored"></i><span>HTML5</span></div>
                            <div class="col"><i class="devicon-css3-plain colored"></i><span>CSS3</span></div>
                            <div class="col"><i class="devicon-sass-original colored"></i><span>SASS</span></div>
                            <div class="col"><i class="devicon-postgresql-plain colored"></i><span>PostgreSQL</span></div>
                            <div class="col"><i class="devicon-nodejs-plain-wordmark colored"></i><span>Node.js</span></div>
                            <div class="col"><i class="devicon-express-original colored"></i><span>Express</span></div>
                            <div class="col"><i class="devicon-bootstrap-plain colored"></i><span>Bootstrap</span></div>
                            <div class="col"><i class="devicon-redis-plain colored"></i><span>Redis</span></div>
                            <div class="col"><i class="devicon-docker-plain colored"></i><span>Docker</span></div>                   
                            <div class="col"><i class="devicon-npm-original-wordmark colored"></i><span>NPM</span></div>
                            <div class="col"><i class="devicon-github-original colored"></i><span>Github</span></div>
                            <div class="col"><i class="devicon-microsoftsqlserver-plain colored"></i><span>MSSQL</span></div>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#portfolio"><i className="fa fa-chevron-down" /></a>
                    </p>   
            </section>
        )
    }
}