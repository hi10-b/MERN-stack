import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormLabel, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom'


class EditEvent2 extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:5000/events/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    eventName: response.data.eventName,
                    eventDate: response.data.eventDate,
                    eventDescription: response.data.eventDescription
                })
            })
            .catch(error => console.log(error))
    }

    handleSubmit = e => {

        const event = {
            eventName: this.state.eventName,
            eventDate: this.state.eventDate,
            eventDescription: this.state.eventDescription
        }
        // console.log(event);

        axios.post('http://localhost:5000/events/update/' + this.props.match.params.id, event)
            .then(res => console.log(res.data));


        e.preventDefault();

    }

    render() {
        return (
            <div>
                <h3>edit form</h3>
                <h1>name: {this.state.eventName}</h1>
                <h3>date: {this.state.eventDate}</h3>
                <h3>desc: {this.state.eventDescription}</h3>
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
                    <Button variant="primary" type="submit">Edit</Button>
                </Form>
            </div>
        )
    }
}

export default EditEvent2
