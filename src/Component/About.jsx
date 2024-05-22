import '../Styles/Profile.css';
import '../Styles/Education.css';
const About = () => {
    return (
        <div>
            <div id="abt" className='cd'>
              <span className="cd1" >About</span>
            </div>
            <div id="cd1">
                <p id="p" >I was born on August 23,1998, in Erode, India. After finishing school in Tirupur in 2016, I went on to study Computer Science Engineering until 2020, setting the stage for my journey into IT industry.

                    My IT journey started in 2021 when I began as a Systems Engineer Trainee. I've been learning and growing ever since, working on devlopment project.

                    I love the energy of startups, where I enjoy solving problems and coming up with new ideas.I'm really into coding, especially full stack development, and I'm always keen to learn and collaborate. I'm ready to contribute my skills in development and coding including configuration of project that is going live.</p>
                   <p id="p"> I also have interest in DSA.  Apart from the internal courses , Below are the list of certificates I earned.</p>
                    
                    <ul id="p" style={{listStyleType:'square',color:'#005585','opacity':0.8,'fontWeight':'bold'}}><li>
                    Getting Started with SAP Cloud Application Programming Model - Record of Achievement
                        </li></ul>
            </div>
        </div>);
}

export default About;