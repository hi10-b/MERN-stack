import React from 'react'
import '../MyStyles.css'
import 'react-bootstrap';
import { Col } from 'react-bootstrap';

function OpeningTimes() {
    return (
        <Col lg={3} className='grid-box'>
            <h1>OpeningTimes</h1>
            <table size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Open</th>
                        <th>Close</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Mon-Fri</th>
                        <td>06:00 <br/>16:00</td>
                        <td>10:00 <br/>20:30</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th>Sat-Sun</th>
                        <td>08:00 <br/>16:00</td>
                        <td>10:00 <br/>19:00</td>
                    </tr>
                </tbody>
            </table>
            <table size="sm">
                <thead >
                    <tr>
                        <th colSpan="3">Aarti Times</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Mon-Fri</th>
                        <td>06:30</td>
                        <td>19:00</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th>Sat-Sun</th>
                        <td>08:00</td>
                        <td>17:30</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th>Public Holidays</th>
                        <td>08:00</td>
                        <td>19:00</td>
                    </tr>
                </tbody>
            </table>
        </Col>
    )
}

export default OpeningTimes;