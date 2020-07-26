import React from 'react'

export default function OpeningTimes() {
    return (
        <div className='col-3'>
            <h1>OpeningTimes</h1>
            <table>
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
            <h2>Aarti Times</h2>
            <table>
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
        </div>
    )
}
