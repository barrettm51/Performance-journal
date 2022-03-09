import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };
    
    return(
        <nav>
            <h3>Performance Journal</h3>
            <ul className='nav-links' >
                <Link style={navStyle} to='/Dashboard'>
                    <li>Dashboard</li>
                </Link>
                <Link style={navStyle} to='/Journals'>
                    <li>Journal</li>
                </Link>
                <Link style={navStyle} to='/AccountSettings'>
                    <li>Account Settings</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;