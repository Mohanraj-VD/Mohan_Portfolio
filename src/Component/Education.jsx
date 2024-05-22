import '../Styles/Education.css';
import React from 'react';
import About from './About';

export default function Education() {
    return (

        <>
            <About />
            <div className='cd'>
                <span className='cd1' id="edu">
                    Education</span>
            </div>
            <div id="cd1">
            <table id="table" style={{width:"100%"}}>

                <tbody>
                <tr id="trow">
                        <th id="tcell1" align="center">S.No</th>
                        <th id="tcell2" align="center">Qualification</th>
                        <th id="tcell3" align="center" >Institution</th>
                        <th id="tcell4" align="center">CGPA/%</th>
                        <th id="tcell5" align="center">Year</th>
                </tr></tbody>
                <tbody id="tb1">


                    {/* <img src={require('../Assets/learning.png')}/> */}
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
            </table>
            </div>
        </>
    );
}