import { Table, TableHead,TableRow,TableCell } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Education.css';
import React from 'react';
import Box from '@mui/material/Box';

export default function Education() {
    return (
        <>
            <Box className='cd'>
                <span className='cd1'>
                Education</span>
                </Box>
            <Table striped="columns" bordered hover variant='primary' id="table" sx={{border:2}} >
                <TableHead sx={{bgcolor:"#005585", fontStyle:"italic"}}>
                    <TableRow >
                        <TableCell id="tcell">S.No</TableCell>
                        <TableCell id="tcell" align="center">Qualification</TableCell>
                        <TableCell id="tcell" align="center" >Institution</TableCell>
                        <TableCell id="tcell" align="center">CGPA/%</TableCell>
                        <TableCell id="tcell" align="center">Year</TableCell>
                    </TableRow>
                </TableHead>
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