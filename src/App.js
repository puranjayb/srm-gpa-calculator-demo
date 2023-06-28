import React from 'react';
import './App.css';
import './Navbar.css';
import Navbar from './Navbar';
import CalculateGPA from './CalculateGPA';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <CalculateGPA />
      <Footer />
    </div>
  );
}

export default App;
