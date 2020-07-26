import React, { Component } from 'react'
import DailyDarshan from './gridComponents/DailyDarshanBox'
import OpeningTimes from './gridComponents/OpeningTimes'
import "./MyStyles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SubscribeForm from './gridComponents/SubscribeForm';


class TopGrid extends Component {
    render() {
        return (
            <div className='row top-grid'>
                <DailyDarshan />
                <OpeningTimes />
                <SubscribeForm />
                <OpeningTimes />
            </div>
        )
    }
}

export default TopGrid
