import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export class Weather extends Component {
    render() {
        return (
            <div className='row'>
                <h4 className="text-center" id='font'><b>Weather Forecast</b></h4><hr></hr>
                {this.props.weather.map(item => {
                    return <>
                        <Card className="text-center" style={{ width: '20rem' }}>
                            <Card.Header>{item.date}</Card.Header>
                            <Card.Body id='font'>
                                <p><b>{item.max_temp} °C ⛅ {item.description}</b></p>
                            </Card.Body>
                        </Card>
                    </>
                })}
            </div>
        )
    }
}
export default Weather