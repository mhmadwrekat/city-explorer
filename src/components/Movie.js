import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export class Movie extends Component {
    render() {
        return (
            <div className='row'>
                <h3 className="text-center" id='font'><b>Suggested Movies</b></h3><hr></hr>
                {this.props.movie.map(item => {
                    return <><br></br>
                        <Card className="text-center"
                            bg='light'
                            text={'dark' === 'light' ? 'dark' : 'black'}
                            style={{ width: '17rem' }}
                        >
                            <Card.Header>📅 {item.release}</Card.Header>
                            <Card.Body>
                                <Card.Title id='font'>{item.title} </Card.Title>
                                <Card.Text>⭐ {item.vote}</Card.Text>
                            </Card.Body>
                        </Card>
                    </>
                })}
                <br></br>
            </div>
        )
    }
}
export default Movie