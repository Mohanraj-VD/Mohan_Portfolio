import Navb from './Navb';
import PropTypes from 'prop-types';
import '../Styles/Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './Education';
import Extras from './Extras';
import { FaArrowAltCircleUp } from "react-icons/fa";
const Profile = ({ ...props }) => {
    return (
        <div>
            <div className='profile-container'>
                <Navb />
                <div className='profilepic'>
                <img src={require('../Assets/Clipped_image_20240522_190704.png')} alt="No image" className='profilephoto' /></div>
                <div className='cd' id="ovw">
                    <span className='cd1'>
                        Overview</span>
                </div>
                <div id="cd1">
                    <p id='p'>"Hello, I'm <span style={{
                        'color': '#F06161',
                        'fontWeight':'bold'
                    }}>{props.name}</span>, a software developer with a focus on problem solving and expertise in web development, I bring a unique blend of technical process and analytical thinking to the table. With a keen eye for detail and a passion for crafting elegant solutions, I thrive in tackling complex challenges and turning them into opportunities for innovation.

                        My ability to communicate complex ideas clearly and work collaboratively with colleagues from diverse backgrounds allows me to thrive in dynamic and fast-paced environments."</p>
                </div>
                <Education />
                <Extras/>
            </div>
            <footer id="foot"><a href="#">
            <FaArrowAltCircleUp id="fa">Back to Top</FaArrowAltCircleUp></a>
            </footer></div>
    );
}
Profile.propTypes = {
    name: PropTypes.string.isRequired,
}
export default Profile;