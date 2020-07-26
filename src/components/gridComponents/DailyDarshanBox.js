import React from 'react'
import Logo from './logo192.png'
import { Row,Col } from 'react-bootstrap';

function DailyDarshanBox() {
    return (
        <Col sm={3}>
            <h1>Daily Darshan</h1>
            <img src={Logo} alt="Logo"/>
        </Col>
    )
}

export default DailyDarshanBox;
