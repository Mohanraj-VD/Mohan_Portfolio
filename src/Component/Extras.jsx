import '../Styles/Education.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const arrow = <span style={{ fontSize: "20px", fontWeight: "bolder" }}>&#8680;</span>;
const Extras = () => {
    return (<div>
        <div className='cd'>
            <span className='cd1'  id="exp">
                Experience</span>
        </div>
        <dl id="cd1">

            <div id="p">
                <span style={{ fontWeight: "bold", color: "#005585" }}>Infosys Limited |
                    Senior Systems Engineer |
                    Oct’22– Present<br />
                    Coimbatore, Tamilnadu</span>
                <ul style={{ listStyleType: 'square' }}><li>As a Senior Systems Engineer in the backend team for an insurance client, I focus on configuring the product, validating its features, debugging any issues that arise. <br />I collaborate with other team members to deliver the software solutions. I leverage my expertise in Java programming to contribute the maintainance of the insurance product.
                    Tech Stack and Tools: Java, Junit, Oracle SQL, Github, Postman, Splunk</li></ul>

                <span style={{ fontWeight: "bold", color: "#005585" }}> Infosys Limited |
                    Systems Engineer |
                    July’21– Sep’22 <br /> Mangaluru, Karnataka </span>
                <ul style={{ listStyleType: 'square' }}><li>As a Systems Engineer, my responsibilities will be migrating the existing product's junit classes from Junit 4 to Junit 5 with no backlog, debugging any issues that conflicting any product's build and resolving that by collaborating with other teams.
                    Tech Stack and Tools: Java, Junit, Spring, Github , Postman</li></ul>

                <span style={{ fontWeight: "bold", color: "#005585" }}>Infosys Limited |
                    Systems Engineer Trainee |
                    March’21– June’21 <br />
                    Mysuru, Karnataka </span>
                <ul style={{ listStyleType: 'square' }}><li>As a Systems Engineer Trainee for 4 months, I have completed the intense
                    training course by doing a Capstone Project of Flight Booking Application and have zero backlogs at INFOSYS LIMITED, Mysore.
                    Tech Stack and Tools: Java, React, Junit, Spring, Github, Postman</li></ul>
            </div>

        </dl>
        <div className='cd'>
            <span className='cd1' id="skill">
                Skills</span>

        </div>


        <div id="cd1" >
            <table align="center" style={{ width: "100%", }} border='0px'>
                <tbody >
                    <tr id="tb1" style={{ textAlign: "center" }}>
                        <th >Programming Languages</th>

                        <th>Frameworks/Libraries</th>
                        <th>Databases</th></tr>
                    <tr id="td1" style={{ textAlign: "center" }}>
                        <td >Java</td>
                        <td>Spring</td>
                        <td>Oracle SQL</td>
                    </tr>
                    <tr id="td1" style={{ textAlign: "center" }}>
                        <td >HTML 5</td>
                        <td>Spring Boot</td>
                        <td>PostgreSQL</td>
                    </tr>
                    <tr id="td1" style={{ textAlign: "center" }}>
                        <td >CSS 3</td>
                        <td>React JS</td>
                        <td></td>
                    </tr>
                    <tr id="td1" style={{ textAlign: "center" }}>
                        <td >Javascript</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>


        <div className='cd'>
            <span className='cd1' id="prj">
                Projects</span>

        </div>
        <div id="cd1">
            <div id="p"><span style={{ fontWeight: "bold", color: "#005585" }}>Flight Booking System | Infosys Limited</span> <br /> Technology {arrow} Java, Spring Boot, React.js, MySQL, Rest API, jQuery, Bootstrap
                <ul><li style={{ listStyleType: 'square' }}>

                    Designed and developed a Flight booking system for Agent and Customer interface to book/cancel the tickets using
                    React.js, which allows the Agents/ users to book/cancel flight tickets with Spring boot as backend framework.</li>
                    <li style={{ listStyleType: 'square' }}> Built a CI/CD pipeline using Jenkins, reducing deployment time by 40% and ensuring consistent and reliable
                        releases.
                    </li></ul></div>
            <div id="p"><span style={{ fontWeight: "bold", color: "#005585" }}>API for BusBooking | Personal </span><br /> Technology {arrow} Java, Spring Boot, PostgreSQL, Rest API
                <ul><li style={{ listStyleType: 'square' }}>

                    Users can book a seat in Bus, cancel and update the seatPreference {arrow} In progress</li>
                </ul>
            </div>

            <div id="p"><span style={{ fontWeight: "bold", color: "#005585" }}>Personal Portfolio</span>
                <ul><li style={{ listStyleType: 'square' }}>

                A personalized portfolio website showcasing my skills , experience and projects .A visually appealing platform to highlight my accomplishments and expertise.
Tech Stack and Tools: React, HTML 5 , CSS 3, Vercel</li>
                </ul>
            </div>
        </div>

        <div className='cd'>
            <span className='cd1' id="cert">
                Certifications</span>

        </div>
        <div id="cd1">
            <div id="p" ><a href="https://www.credly.com/badges/f48bb848-7075-4943-8389-70c75b61c059/linked_in_profile" target='blank' >
                Getting Started with SAP Cloud Application Programming Model - Record of Achievement<>&nbsp;</><i className='fa fa-external-link' id="ext" style={{ 'fontSize': '15px', 'color': '#005585' }} ></i></a>
            </div>
            <div id="p"><a href="https://www.udemy.com/certificate/UC-d84c76cc-cbc8-4187-82d4-710772667080/" target='blank'>
                Master Spring Boot 3 & Spring Framework 6 with Java | Udemy | Java, Spring Boot, Spring Framework, Rest API
                <>&nbsp;</><i className='fa fa-external-link' id="ext" style={{ 'fontSize': '15px', 'color': '#005585' }} ></i>
            </a></div>
        </div>

    </div>);
}

export default Extras;