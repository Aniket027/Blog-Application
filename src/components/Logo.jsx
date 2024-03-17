/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src="/blog-high-resolution-logo-transparent.png" alt="logo" style={{ width: width }}/>
    </div>
  )
}    
export default Logo;
