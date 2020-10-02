import React from 'react'
import { Switch, Route } from "react-router-dom";

import AddEvent from './admin/addEvent';
import HomePage from './home';
import EditEvent from './admin/editEvent';
import EditEvent2 from './admin/editEvent2';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/addEvent" component={AddEvent} />
            <Route path="/editEvent" component={EditEvent} />
            <Route path="/edit/:id" component={EditEvent2} />
        </Switch>
    )
}

export default Main
