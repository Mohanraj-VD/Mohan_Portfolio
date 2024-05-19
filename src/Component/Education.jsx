import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Education.css';
import React from 'react';
import { Card } from 'react-bootstrap';

export default function Education() {
    return (
        <>
            <Card className='cd'>
                <span className='cd1'>
                Education</span>
                </Card>
            <Table striped="columns" bordered hover variant='dark' id="table" style={{border:"2px"}}>
                <thead id="thead">
                    <tr>
                        <th>S.No</th>
                        <th>Qualification</th>
                        <th>Institution</th>
                        <th>CGPA/%</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bachelor of Engineering (Computer Science Engineering)</td>
                        <td>Angel College of Engineering & Technology</td>
                        <td>7.83</td>
                        <td>2016 - 2020</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Grade XII</td>
                        <td>K.S.C Government Higher Secondary School</td>
                        <td>82.83</td>
                        <td>2015 - 2016</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Grade X</td>
                        <td>K.S.C Government Higher Secondary School</td>
                        <td>92.4</td>
                        <td>2013 - 2014</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}