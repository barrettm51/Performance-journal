import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; //Implements default styling

function Navigation() {    
    return(
        <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' className='navbar'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav' >
                    <Nav>
                        <Navbar.Brand href='/Dashboard'>Performance Journal</Navbar.Brand>
                        <Nav.Link href='/Dashboard'>Dashboard</Nav.Link>
                        <Nav.Link href='/Journals'>Journal</Nav.Link>
                        <Nav.Link href='/AccountSettings'>Account Settings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;