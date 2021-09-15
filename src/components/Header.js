import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap';
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
                    </Container>
                </Navbar>
                <br></br>
                <br></br>
            </div>
        )
    }
}
export default Header