import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../custom.scss';
// import 'bootstrap/dist/css/bootstrap.min.css'; //Implements default styling

function Navigation() {
    const navStyle = {
        // color: 'white'
    };
    
    return(
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark' id='navbarBT'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav' >
                    <Nav>
                        <Nav.Link href='/Dashboard'>Performance Journal</Nav.Link>
                        <Nav.Link href='/Dashboard'>Dashboard</Nav.Link>
                        <Nav.Link href='/Dashboard'>Journal</Nav.Link>
                        <Nav.Link href='/Dashboard'>Account Settings</Nav.Link>
                        {/* <h3>Performance Journal</h3>
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
                        </ul> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;