import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <Link className="navbar-logo">
                    SPACE <i class="fas fa-meteor" />
                </Link> 
                <div className="menu-icon">
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className='nav-links'>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className='nav-links'>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' className='nav-links'>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
