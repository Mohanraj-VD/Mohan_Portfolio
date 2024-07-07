import * as React from 'react';
import '../Styles/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navb() {

  const o = <span style={{fontSize:"20px",fontWeight:"bold"}}>&#10689;</span>
  return (
    <>  
      <Navbar id="main"  expand="lg" >
      
        <Navbar.Brand id="pp" href="#">Pers{o}nal Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav btn-close">
          <Nav className="me-auto" >
            <Nav.Link href="#ovw" id="nv2">Home</Nav.Link>
            <Nav.Link href="#abt" id="nv2">About</Nav.Link>
            <Nav.Link href="#edu" id="nv2">Education</Nav.Link>
            <Nav.Link href="#exp" id="nv2">Experience</Nav.Link>
            <Nav.Link href="#skill" id="nv2">Skills</Nav.Link>
            <Nav.Link href="#prj" id="nv2">Projects</Nav.Link>
            <Nav.Link href="#cert" id="nv2">Certifications</Nav.Link>
            <NavDropdown id="nv2" title="Profile">
              <NavDropdown.Item href="https://linkedin.com/in/mohanraj-v-java-developer" target='blank' id="dropdown">Linked In</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/Mohanraj-VD" target='blank' id="dropdown">
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href="https://leetcode.com/u/mohanrajvdmm/" id="dropdown" target='blank'>Leetcode</NavDropdown.Item>
              <NavDropdown.Item href='mailto:mohanrajvdmm@gmail.com' id="dropdown" target='blank'>Mail</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    
    </>

  );
}
export default Navb;