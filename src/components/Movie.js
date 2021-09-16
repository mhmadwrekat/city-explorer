import React, { Component } from 'react'
import { Table, Container, Col, Row } from 'react-bootstrap';
export class Movie extends Component {
    render() {
        return (
            <>
                <h3 className="text-center" id='font'><b>Suggested Movies</b></h3><hr></hr>
                <Container>
                    <Row>
                        <Col xs={8} md={0}>
                        </Col>
                        <Col xs={8} md={12}>
                            <Table striped bordered hover variant='dark' id='fontt' className="text-center">
                                <thead>
                                    <tr>
                                        <th>Name Movie</th>
                                        <th>📅 Release</th>
                                        <th>⭐ Vote</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.movie.map(item => {
                                        return <>
                                            <tr>
                                                <td>{item.title}</td>
                                                <td>{item.release}</td>
                                                <td>{item.vote}</td>
                                            </tr>
                                        </>
                                    })}
                                    <br></br>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Movie