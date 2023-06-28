import React from 'react';
import './Footer.css';
import imagePuranjay from './images/PB.gif'

const Footer = () => {
  return (
    <footer className="footer">
      <p>Credits@Puranjay Bhargava 2023</p>
      <img src={imagePuranjay} alt="Puranjay Image"></img>
    </footer>
  );
};

export default Footer;
