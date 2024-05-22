import * as React from 'react';
import '../Styles/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navb() {

  return (
    <>  
      <Navbar id="main"  expand="lg" >
      
        <Navbar.Brand id="pp" href="#">Personal Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#ovw" id="nv1">Home</Nav.Link>
            <Nav.Link href="#abt" id="nv2">About</Nav.Link>
            <Nav.Link href="#edu" id="nv2">Education</Nav.Link>
            <Nav.Link href="#exp" id="nv2">Experience</Nav.Link>
            <Nav.Link href="#abt" id="nv2">Skills</Nav.Link>
            <Nav.Link href="#abt" id="nv2">Projects</Nav.Link>
            <Nav.Link href="#abt" id="nv2">Courses/Certifications</Nav.Link>
            <NavDropdown id="nv2" title="Profile">
              <NavDropdown.Item href="https://linkedin.com/in/mohanraj-v-java-developer" target='blank' id="dropdown">Linked In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="dropdown">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="dropdown">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    
    </>

  );
}
export default Navb;