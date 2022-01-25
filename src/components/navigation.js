import React from 'react';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
const Navigation = () => {
    return (
    <Navbar collapseOnSelect expand="lg" className='color-nav' variant="light">
        <Container>
            <Navbar.Brand href="#home">Jadoo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link>Destination</Nav.Link>
                    <Nav.Link>Hotels</Nav.Link>
                    <Nav.Link>Flights</Nav.Link>
                    <Nav.Link>Bookings</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>Login</Nav.Link>
                    <Nav.Link>Sign up</Nav.Link>
                    <NavDropdown title="En" id="collasible-nav-dropdown">
                        <NavDropdown.Item>En</NavDropdown.Item>
                        <NavDropdown.Item>Hi</NavDropdown.Item>
                        <NavDropdown.Item>ES</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
};

export default Navigation;