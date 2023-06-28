import React from 'react'
import imageSrc from './images/srmLogo.png'

const Navbar = () => {
    return (
        <nav>
            <div class="navbar-container">
                <img class="navbar-srmLogo" src={imageSrc} alt="SRM Logo here"></img>
                <p>SRM GPA Calculator</p>
            </div>  
        </nav>
    );
}

export default Navbar;