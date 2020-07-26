import React, { Component } from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Col} from "react-bootstrap"

class SubscribeForm extends Component {
    render() {
        return (
            <Col sm={3}>
                <h1>Subscribe</h1>
                <p>Subscribe below to receive emails of future events at the temple:</p>
                <Form>
                    <FormGroup controlId="subscribeForm">
                        <Form.Label>Your Email:</Form.Label>

                    </FormGroup>
                </Form>
            </Col>
        )
    }
}

export default SubscribeForm
