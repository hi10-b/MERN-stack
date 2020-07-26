import React, { Component } from 'react'
import DailyDarshan from './gridComponents/DailyDarshanBox'
import OpeningTimes from './gridComponents/OpeningTimes'
import "./MyStyles.css";
import "react-bootstrap";
import SubscribeForm from './gridComponents/SubscribeForm';
import {Row} from 'react-bootstrap'


class TopGrid extends Component {
    render() {
        return (
            <Row>
                <DailyDarshan />
                <OpeningTimes />
                <SubscribeForm />
                <OpeningTimes />
            </Row>
        )
    }
}

export default TopGrid
