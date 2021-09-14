import React, { Component } from 'react'
import {
    Card,
} from 'react-bootstrap';
export class Movie extends Component {
    render() {
        return (
                <div className='row'>
                                        <h1>Movies :</h1>

                    {this.props.movie.map(item => {
                        return <>
                            <Card style={{ width: '12rem' }}>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <b>VOTES : {item.vote}</b>
                                    <p>Date : {item.release}</p>
                                </Card.Body>
                            </Card>
                        </>
                    })
                    }
            <br></br>
                </div>
        )
    }
}
export default Movie
















