import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
export class Display extends Component {
    render() {
        return (
            <>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title id='font'>{this.props.cityL}</Card.Title>
                        <Card.Text>
                            <p>{this.props.type}</p>
                        </Card.Text>
                        <Image src={this.props.mapUrl} alt="map1" width='100%' />
                    </Card.Body>
                    <Card.Footer className="text-muted">Longitude : {this.props.longitude}</Card.Footer>
                    <Card.Footer className="text-muted">Latitude : {this.props.latitude}</Card.Footer>
                </Card>
            </>)
    }
}
export default Display