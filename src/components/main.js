import React from 'react'
import { Switch, Route } from "react-router-dom";

import AddEvent from './admin/addEvent';
import HomePage from './home';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/addEvent" component={AddEvent} />
        </Switch>
    )
}

export default Main
