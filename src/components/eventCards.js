import React, { Component } from 'react'
import ReactCard from './Card';
import axios from 'axios'
import { CardGroup, CardDeck, CardColumns, Container, Row } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class EventCards extends Component {
    constructor(props) {
        super(props)

        this.state = { posts: [] }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/events/`)
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const posts = this.state.posts;
        return (

            <Container>
                <Row >
                    <CardDeck>
                        {posts.length ? posts.map(value => <ReactCard name={value.eventName} description={value.eventDescription} />) : null}
                    </CardDeck>
                </Row>
            </Container>

        )
    }
}

export default EventCards
