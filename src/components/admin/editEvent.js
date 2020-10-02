import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormLabel, FormControl, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Link } from 'react-router-dom'

const PrintEvent = props => (
    <tr>
        <td>{props.events._id}</td>
        <td>{props.events.eventName}</td>
        <td>{props.events.eventDate.substring(0, 10)}</td>
        <td>{props.events.eventDescription}</td>
        <td><Link to={"/edit/" + props.events._id}>edit</Link> | <a href="#" onClick={() => { props.deleteEvent(props.events._id) }}>delete</a> </td>
    </tr>

);

class EditEvent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allPosts: [],
        }

        this.deleteEvent = this.deleteEvent.bind(this);
    }

    editEvent(id) {

    }

    componentDidMount() {
        axios.get(`http://localhost:5000/events/`)
            .then(response => {
                console.log(response)
                this.setState({ allPosts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteEvent(id) {
        axios.delete(`http://localhost:5000/events/${id}`)
            .then(response => console.log("deelted: " + response.data))
            .catch(error => console.log(error))

        this.setState({
            allPosts: this.state.allPosts.filter(el => el._id !== id)
        })
    }

    render() {
        const allPosts = this.state.allPosts;
        return (
            <div>
                <h2>view and edit and delete event</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>Id:</th>
                            <th>Name:</th>
                            <th>Date:</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPosts.length ? allPosts.map(event => <PrintEvent key={event._id} events={event} deleteEvent={this.deleteEvent} />) : null}
                    </tbody>
                </Table>
            </div>

        )
    }

}

export default EditEvent
