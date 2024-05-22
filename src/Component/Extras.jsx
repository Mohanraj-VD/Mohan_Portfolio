import '../Styles/Education.css';

const Extras = () => {
    return (<div>
        <div className='cd' id="exp">
            <span className='cd1'>
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
        <div id="skills" className='cd'>
            <span className='cd1'>
                Skills</span>

        </div>

        <div id="cd1" >
            <table align="center" style={{ width: "100%", }} border='0px'>
                <tbody >
                    <tr id="tb1" style={{textAlign:"center"}}>
                        <th >Programming Languages</th>

                        <th>Frameworks/Libraries</th>
                        <th>Databases</th></tr>
                    <tr id="tb1"  style={{textAlign:"center"}}>
                        <td >Java</td>
                        <td>Spring</td>
                        <td>Oracle SQL</td>
                    </tr>
                    <tr id="tb1"  style={{textAlign:"center"}}>
                        <td >HTML5</td>
                        <td>Spring Boot</td>
                        <td>PostgreSQL</td>
                    </tr>
                    <tr id="tb1"  style={{textAlign:"center"}}>
                        <td >CSS 3</td>
                        <td>React JS</td>
                        <td></td>
                    </tr>
                    <tr id="tb1"  style={{textAlign:"center"}}>
                        <td >Javascript</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>



        </div>
    </div>);
}

export default Extras;