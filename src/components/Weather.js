import React, { Component } from 'react'
import {
    Card,
} from 'react-bootstrap';
export class Weather extends Component {
    render() {
        return (

                <div className='row'>
                    <br></br>
                    <h1>Weather :</h1>
                    {this.props.weather.map(item => {
                        return <>
                            <Card style={{ width: '16rem' }}>
                                <Card.Body>
                                    <Card.Title>{item.date}</Card.Title>
                                    <b>⛅ {item.description}</b>
                                </Card.Body>
                            </Card>
                        </>
                    })
                    }
                    <br></br><pre></pre>
                </div>
        )
    }
}
export default Weather
