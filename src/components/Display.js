import React, { Component } from 'react';
import {
    Card,
    Button,
    Row,
    Container,
    Col
} from 'react-bootstrap';

export class Display extends Component {
    render() {
        return (
            <div className="h-100 w-100" id='card'>
                <br></br>
                <Card style={{ width: '25.2rem' }}>
                    <iframe variant="top" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433868.0837104735!2d36.22782761208644!3d31.836036761205897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1631468623563!5m2!1sar!2sjo" width="400" height="300"></iframe>
                    <Card.Body>
                        <Card.Title>{this.props.cityName}</Card.Title>
                        <Card.Title>{this.props.type}</Card.Title>
                        <Card.Text>
                            <p>Latitude : {this.props.latitude}</p>
                            <p>Longitude : {this.props.longitude}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Display
/*
31.9515694/35.9239625

https://www.google.com/maps/place/
https://www.google.com/maps/place/

*/