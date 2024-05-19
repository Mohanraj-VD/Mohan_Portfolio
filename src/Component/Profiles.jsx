import React from 'react';
import Container from 'react-bootstrap/Container';
import  Card from 'react-bootstrap/Card';
import  Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import '../Styles/Profile.css';
import Navbar from './Navbar';

const Profiles = ({ ...props }) => {
    return (

        <>
            
                {/* <Navbar/>
            
          
            <Card className='cnt'>
                <Row>
                    <Col className="col1" xs={6} md={4}>

                        
                        <Image className='img' roundedCircle thumbnail src={require('../Assets/m.jpeg')} style={{ display: 'block', margin: 'auto', width: '20vw', height: '40vh' }} />
                    </Col>
                    <Col className='col2' xs={6} md={6}>
                        <p>"Hello, I'm <span className='nm'>{props.name}</span>, a software developer with a focus on problem solving and expertise in web development, I bring a unique blend of technical process and analytical thinking to the table. With a keen eye for detail and a passion for crafting elegant solutions, I thrive in tackling complex challenges and turning them into opportunities for innovation.

                            My ability to communicate complex ideas clearly and work collaboratively with colleagues from diverse backgrounds allows me to thrive in dynamic and fast-paced environments."</p>
                    </Col>
                </Row>

            </Card> */}
        </>
    );

}

Profiles.propTypes = {
    name: PropTypes.string.isRequired,
}
export default Profiles;

