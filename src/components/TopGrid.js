import React, { Component } from 'react'
import DailyDarshan from './gridComponents/DailyDarshanBox'
import OpeningTimes from './gridComponents/OpeningTimes'
import "./MyStyles.css";
import "react-bootstrap";
import SubscribeForm from './gridComponents/SubscribeForm';
import {Row} from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class TopGrid extends Component {
    render() {
        return (
            <Row className='top-grid'>
                <DailyDarshan />
                <OpeningTimes />
                <SubscribeForm />
                <OpeningTimes />
            </Row>
        )
    }
}

export default TopGrid
