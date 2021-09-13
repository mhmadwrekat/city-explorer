import React, { Component } from 'react'
import {
    Card,
} from 'react-bootstrap';
export class Weather extends Component {
    render() {
        return (
            <section class='section'>
                <br></br>
                <div className='row'>
                    {this.props.weather.map(item => {
                        return <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{item.date}</Card.Title>
                                    <b>⛅ {item.description}</b>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    {item.name}    </Card.Footer>
                            </Card>
                        </>
                    })
                    }
                    <pre></pre>
                </div>
            </section>
        )
    }
}
export default Weather
