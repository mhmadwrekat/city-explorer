import React, { Component } from 'react';
import {
    Card, Image
} from 'react-bootstrap';

export class Display extends Component {
    render() {
        return (
            <>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{this.props.cityL}</Card.Title>
                        <Image src={this.props.mapUrl} alt="map1" />
                        <Card.Text>
                            <p>{this.props.cityL}</p>
                            <p>{this.props.type}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Longitude : {this.props.longitude} | Latitude : {this.props.latitude}</Card.Footer>
                </Card>

            </>

        )
    }
}

export default Display
