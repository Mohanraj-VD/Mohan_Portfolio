import Navb from './Navb';
import PropTypes from 'prop-types';
import '../Styles/Profile.css';
import Education from './Education';
const Profile = ({ ...props }) => {
    return (

        <div className='profile-container'>
            <Navb />
            {/* <div class='container lg aspect-auto columns-2 mt-6 flex-row bg-scroll' id="cnt"> */}
                <img src={require('../Assets/m.jpeg')} alt="No image" className='profilephoto'  />
                <p id='p'>"Hello, I'm <span style={{ 'color': '#F06161' 

                }}>{props.name}</span>, a software developer with a focus on problem solving and expertise in web development, I bring a unique blend of technical process and analytical thinking to the table. With a keen eye for detail and a passion for crafting elegant solutions, I thrive in tackling complex challenges and turning them into opportunities for innovation.

                    My ability to communicate complex ideas clearly and work collaboratively with colleagues from diverse backgrounds allows me to thrive in dynamic and fast-paced environments."</p>
            {/* </div> */}
            <Education/>
        </div>
    );
}
Profile.propTypes = {
    name: PropTypes.string.isRequired,
}
export default Profile;