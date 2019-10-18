import React from 'react';

// React Bootstrap Components
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// React Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const MainNavbar = (props) => {

    let style = {
        color: "inherit" // Removes link coloring, uses bootstrap style.
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Rainy Dawg Radio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                        <Nav.Link><Link to="/" style={style}>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/members" style={style}>Members</Link></Nav.Link>
                        <Nav.Link><Link to="/schedule" style={style}>Schedule</Link></Nav.Link>
                        <Nav.Link><Link to="/events" style={style}>Events</Link></Nav.Link>
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item><Link to="/about" style={style}>About</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/volunteer" style={style}>Join Our Community</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/contact" style={style}>Contact</Link></NavDropdown.Item>
                        </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MainNavbar;