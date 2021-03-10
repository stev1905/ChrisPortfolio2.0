import React from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import {Navbar, Nav} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import 'render-smooth-image-react/build/style.css';

const Image = ({resumeData}) => (
 
  <div>
    <RenderSmoothImage 
        src={'https://firebasestorage.googleapis.com/v0/b/chris-portfolio-1c817.appspot.com/o/test2.jpg?alt=media&token=fe7e4c48-8b35-46ac-8c5b-8d47c00fe9bf'} 
        alt="alternate-text" 
        object-fit="cover"
    />
       
  </div>
);

export default Image;

