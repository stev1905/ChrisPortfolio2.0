import React from 'react';
import Loading from 'react-loading-components';
import './Loading.css'
 
const LoadingComponent = () => (
  <div className="loading-container">
    <Loading class="loading-container" type='puff' width={100} height={100} fill='#6fb086' />
  </div>
);
 
export default LoadingComponent;