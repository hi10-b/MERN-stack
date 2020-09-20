import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardGroup, Button, Col
} from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function ReactCard(prop) {
    return (
        <Col xl={3} className={'mt-4'}>
            <Card style={{ height: '100%', width: '100%' }}>
                <Card.Body>
                    <Card.Title>{prop.name}</Card.Title>
                    <Card.Text>
                        {prop.description}
                    </Card.Text>
                    <Card.Text>
                        {prop.body}
                    </Card.Text>
                </Card.Body>
                <Card.Footer><small className="text-muted">This is footer</small></Card.Footer>
            </Card>
        </Col >
    )
}

export default ReactCard
