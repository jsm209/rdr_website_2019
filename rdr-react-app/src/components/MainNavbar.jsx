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
                        <Nav.Link><Link to="/recordings" style={style}>Recordings</Link></Nav.Link>
                        <Nav.Link><Link to="/about" style={style}>About</Link></Nav.Link>
                        <Nav.Link><Link to="/schedule" style={style}>Schedule</Link></Nav.Link>
                        <Nav.Link><Link to="/members" style={style}>Current DJs</Link></Nav.Link>
                        <Nav.Link><Link to="/volunteer" style={style}>Get Involved!</Link></Nav.Link>
                        <Nav.Link><Link to="/contact" style={style}>Staff and Contact</Link></Nav.Link>
                        <Nav.Link style={style} href="https://twitter.com/RainyDawgRadio" target="_blank"><img src='./images/icon-twitter.png' style={iconStyle}/></Nav.Link>
                        <Nav.Link style={style} href="https://www.facebook.com/RainyDawgRadio/" target="_blank"><img src='./images/icon-facebook.png' style={iconStyle}/></Nav.Link>
                        <Nav.Link style={style} href="https://www.instagram.com/rainydawgradio/" target="_blank"><img src='./images/icon-instagram.png' style={iconStyle}/></Nav.Link>
                        <Nav.Link style={style} href="https://www.youtube.com/channel/UCosuHlnP4kFNQq6Z-KNS0Ng" target="_blank"><img src='./images/icon-youtube.png' style={iconStyle}/></Nav.Link>
                        <Nav.Link style={style} href="https://open.spotify.com/user/duw2cz3q0rhhodijwwd5r5mc1" target="_blank"><img src='./images/icon-spotify.png' style={iconStyle}/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MainNavbar;