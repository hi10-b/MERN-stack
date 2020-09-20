import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormLabel, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class AddEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eventName: '',
            eventDate: "",
            eventDescription: ''
        }

        this.eventNameChange = this.eventNameChange.bind(this);
        this.eventDateChange = this.eventDateChange.bind(this);
        this.eventDescriptionChange = this.eventDescriptionChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    eventNameChange(e) {
        this.setState({ eventName: e.target.value });
    }
    eventDateChange(e) {
        this.setState({ eventDate: e.target.value });
    }
    eventDescriptionChange(e) {
        this.setState({ eventDescription: e.target.value });
    }

    handleSubmit = e => {

        const event = {
            eventName: this.state.eventName,
            eventDate: this.state.eventDate,
            eventDescription: this.state.eventDescription
        }
        // console.log(event);

        axios.post('http://localhost:5000/events/add', event)
            .then(res => console.log(res.data));

        e.preventDefault();
    }

    render() {
        return (

            <Form onSubmit={this.handleSubmit}>
                <FormLabel>
                    Event Name:
                </FormLabel>
                <Form.Control type="text" value={this.state.eventName} onChange={this.eventNameChange} />
                <FormLabel>
                    Event Date:
                </FormLabel>
                <Form.Control type="date" value={this.state.eventDate} onChange={this.eventDateChange} />
                <FormLabel>
                    Event Description:
                </FormLabel>
                <FormControl type="text" value={this.state.eventDescription} onChange={this.eventDescriptionChange} />
                <Button variant="primary" type="submit">Add</Button>
            </Form>
        )
    }
}

export default AddEvent
