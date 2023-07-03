import React, { useEffect, useState } from 'react';
import './Footer.css';
import imagePuranjay from './images/PB.gif';

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Retrieve visit count from localStorage
    let count = localStorage.getItem('page_view');
    if (count) {
      count = Number(count) + 1;
    } else {
      count = 1;
    }
    localStorage.setItem('page_view', count);
    setVisitCount(count);

    // Clean up localStorage and visit count on component unmount
    return () => {
      localStorage.removeItem('page_view');
    };
  }, []);

  const handleReset = () => {
    localStorage.removeItem('page_view');
    setVisitCount(1);
  };

  return (
    <footer className="footer">
      <p>Credits &#169; Puranjay Bhargava 2023 </p>
      <img src={imagePuranjay} alt="Puranjay Image" />
      <div> View Count: {visitCount}</div>
    </footer>
  );
};

export default Footer;
