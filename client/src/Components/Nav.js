import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useStytchSession } from '@stytch/stytch-react';


function Navigation( { handleLogout } ) {
    const session = useStytchSession();
    
    return(
        <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' className='navbar'>
            <Container className="navbar-container" >
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav' >
                    <Nav>
                        {session && <Navbar.Brand as={Link} to='/dashboard'>Performance Journal</Navbar.Brand>}
                        {session && <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>}
                        {session && <Nav.Link as={Link} to='/journals'>Journal</Nav.Link>}
                        {session && <Nav.Link as={Link} to='/accountsettings'>Account Settings</Nav.Link>}
                        {session && <button id='logout' onClick={handleLogout} >Logout</button>}

                        {!session && <Navbar.Brand as={Link} to='/login'>Performance Journal</Navbar.Brand>}
                        {!session && <Nav.Link as={Link} to='/login'>Login</Nav.Link>} 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;