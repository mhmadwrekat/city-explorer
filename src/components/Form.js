import React, { Component } from 'react';
import {
    InputGroup,
    FormControl,
    Button,
    Container,
    Col
} from 'react-bootstrap';
export class Form extends Component {
    render() {
        return (
            <div>
                <Container>
                        <Col>
                            <form
                                onSubmit={this.props.handleSubmit}
                            >
                                <InputGroup className="mb-3">
                                    <FormControl
                                        aria-label="Example text with button addon"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        placeholder="Please enter a city name..."
                                        onChange={this.props.handleLocation}
                                    />
                                    <Button
                                        type="submit"
                                        variant="secondary"
                                        id="button-addon1">
                                        Explore !
                                    </Button>
                                </InputGroup>
                            </form>
                        </Col>
                </Container>
            </div>
        )
    }
}
export default Form
