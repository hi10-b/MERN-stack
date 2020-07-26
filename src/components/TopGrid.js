import React, { Component } from 'react'
import DailyDarshan from './gridComponents/DailyDarshanBox'
import OpeningTimes from './gridComponents/OpeningTimes'
import "./MyStyles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


class TopGrid extends Component {
    render() {
        return (
            <div className='row top-grid'>
                <DailyDarshan />
                <OpeningTimes />
                <DailyDarshan />
                <OpeningTimes />
            </div>
        )
    }
}

export default TopGrid
