import React, { Component } from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Col} from "react-bootstrap"
import '../MyStyles.css'

class SubscribeForm extends Component {
    render() {
        return (
            <Col lg={3} className='grid-box'>
                <h1>Subscribe</h1>
                <p>Subscribe below to receive emails of future events at the temple:</p>
                <Form>
                    <FormGroup controlId="subscribeForm">
                        <Form.Label>Your Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                            Subscribe
                        </Button>
                </Form>
            </Col>
        )
    }
}

export default SubscribeForm
