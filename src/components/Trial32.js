import React, { Component } from 'react'
import ReactCard from './Card';
import axios from 'axios'
import { CardGroup, CardDeck, CardColumns, Container, Row } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Trial32 extends Component {
    constructor(props) {
        super(props)

        this.state = { posts: [] }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
                        {posts.length ? posts.map(value => <ReactCard key={value.id} name={value.userId} description={value.title} body={value.body}></ReactCard>) : null}
                    </CardDeck>
                </Row>
            </Container>

        )
    }
}

export default Trial32
