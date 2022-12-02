import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PageNotFound from './pages/PageNotFound';


export default function NavbarHeader () {
    return (
    <BrowserRouter>
      <div>

        <Navbar  className='navbar-custom' bg="" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/home">Brian Davis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
      </div>
        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />                    
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
    );
    }