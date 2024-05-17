import React from 'react';
import Container from 'react-bootstrap/Container';
import  Card from 'react-bootstrap/Card';
import  Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import '../Styles/Profile.css';
import '../Styles/Navbar.css';
import Navbar from './Navbar';

const Profile = ({ ...props }) => {
   const [active, setActive] = React.useState('home');


    return (

        <>
            <Container>
                <Navbar className="nvb" appearance="tabs" active={active} onSelect={setActive} />
            </Container>
            {/* <Navbar expand="lg" className="bg-body-tertiary"> */}
            {/* <Container>
        <Navbar.Brand href="#home">Personal Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutMe">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#exp">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#additionalInfo">Additional Information</Nav.Link>
            <NavDropdown title="Contributions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
            <Card className='cnt'>
                <Row>
                    <Col className="col1" xs={6} md={4}>

                        {/* <Avatar sx={{ width: "30vw", height: "70vh" }} className='avt'>
                            <img src={require('../Assets/m.jpeg')} style={{ display: 'block', margin: 'auto', width: '100%', height: '100%' }} /></Avatar>
                     */}
                        <Image className='img' roundedCircle thumbnail src={require('../Assets/m.jpeg')} style={{ display: 'block', margin: 'auto', width: '20vw', height: '40vh' }} />
                    </Col>
                    <Col className='col2' xs={6} md={6}>
                        <p>"Hello, I'm <span className='nm'>{props.name}</span>, a software developer with a focus on problem solving and expertise in web development, I bring a unique blend of technical process and analytical thinking to the table. With a keen eye for detail and a passion for crafting elegant solutions, I thrive in tackling complex challenges and turning them into opportunities for innovation.

                            My ability to communicate complex ideas clearly and work collaboratively with colleagues from diverse backgrounds allows me to thrive in dynamic and fast-paced environments."</p>
                    </Col>
                </Row>

            </Card>
        </>
    );

}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
}
export default Profile;

