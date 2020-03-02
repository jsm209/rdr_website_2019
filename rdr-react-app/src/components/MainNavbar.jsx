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
        color: "inherit", // Removes link coloring, uses bootstrap style.
        fontFamily: "Gaegu",
        fontSize: "20px"
    };

    let bannerStyle = {
        backgroundImage:"url('./images/rdr-banner-dark.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    let iconStyle = {
        width: "30px",
        height: "auto",
        padding: "5px"
    }

    return (
        <div className="fixed-top">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" style={bannerStyle}>
            <Navbar.Brand><Link to="/" style={style}>Rainy Dawg Radio</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                        <Nav.Link><Link to="/" style={style}>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/stream" style={style}>Stream</Link></Nav.Link>
                        <Nav.Link><Link to="/recordings" style={style}>Recordings</Link><img style={iconStyle} src='./images/icon-squirrel.png'/></Nav.Link>
                        <Nav.Link><Link to="/about" style={style}>About</Link></Nav.Link>
                        <Nav.Link><Link to="/schedule" style={style}>Schedule</Link></Nav.Link>
                        <Nav.Link><Link to="/members" style={style}>Members</Link></Nav.Link>
                        <Nav.Link><Link to="/volunteer" style={style}>Volunteer</Link></Nav.Link>
                        <Nav.Link><Link to="/contact" style={style}>Staff and Contact</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MainNavbar;