import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useStytchSession } from '@stytch/stytch-react';


function Navigation() {    
    return(
        <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' className='navbar'>
            <Container className="navbar-container" >
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav' >
                    <Nav>
                        <Navbar.Brand as={Link} to='/Dashboard'>Performance Journal</Navbar.Brand>
                        <Nav.Link as={Link} to='/Dashboard'>Dashboard</Nav.Link>
                        <Nav.Link as={Link} to='/Journals'>Journal</Nav.Link>
                        <Nav.Link as={Link} to='/AccountSettings'>Account Settings</Nav.Link>
                        <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
                        <button>Logout</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;