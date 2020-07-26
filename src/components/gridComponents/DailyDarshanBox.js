import React from 'react'
import Logo from './logo192.png'
import { Row,Col } from 'react-bootstrap';
import '../MyStyles.css'

function DailyDarshanBox() {
    return (
        <Col lg={3} className='grid-box'>
            <h1>Daily Darshan</h1>
            <img src={Logo} alt="Logo"/>
        </Col>
    )
}

export default DailyDarshanBox;
