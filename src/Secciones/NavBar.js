/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy'

class NavBarComponent extends React.Component {
    render() {
        return (
            <header>
                <Navbar bg="light" expand="lg md" fixed="top" collapseOnSelect>
                    <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto navbar-nav">
                        <Scrollspy items={ ['teachers', 'subscriptions', 'about','gallery', 'contacts'] } currentClassName="active"  
                            style={{ display: 'contents', msFlexDirection: 'column', flexDirection: 'column',paddingLeft: 0,marginBottom: 0,listStyle: 'none'}}>
                            <Nav.Link href="#teachers">The Teachers</Nav.Link>
                            <Nav.Link href="#subscriptions">Suscriptions</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#gallery">Gallery</Nav.Link>
                            <Nav.Link href="#contacts">Contact</Nav.Link>
                        </Scrollspy>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
};

export default NavBarComponent;