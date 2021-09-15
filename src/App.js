import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Display from './components/Display';
import Weather from './components/Weather';
import Movie from './components/Movie';
import Axios from 'axios';
import { Alert } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
/////////////////////////////////////
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityL: '',
      type: "",
      latitude: '',
      longitude: '',
      weather: [],
      movie: [],
      rendering: false
    }
  }
  ///////// FUNCTIONS /////////////
  handleLocation = (event) => {
    let city = event.target.value;
    let intered = event.target.value;
    this.setState({
      cityName: city,
      inter: intered
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}`
    }
    Axios(config).then(item => {
      let resData = item.data[0]
      this.setState({
        cityName: resData.display_name,
        cityL: resData.display_name,
        longitude: resData.lon,
        latitude: resData.lat,
        type: resData.type,
        mapUrl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${resData.lat},${resData.lon}&zoom=7&size=400x600&format=png.`,
        rendering: true
      })
    }).then(() => {
      Axios.get(`https://${process.env.REACT_APP_BACKEND_URL_WEATHER}?lat=${this.state.latitude}&lon=${this.state.longitude}`)
        .then(res => {
          console.log(res.data);
          console.log(this.state.inter);
          this.setState({
            weather: res.data
          })
        });
    }).then(() => {
      Axios.get(`https://${process.env.REACT_APP_BACKEND_URL_MOVIES}?query=${this.state.inter}`)
        .then(res => {
          console.log(res.data);
          this.setState({
            movie: res.data
          })
        });
    }).catch(item => {
      this.setState({
        error: item.message
      });
    })
  }
  ///////////// RENDER ////////////////
  render() {
    return (
      <>
        <Header />
        <Form handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        <br></br>
        {this.state.error &&
          <Alert className="error" variant="danger">
            <Alert.Heading>Oh snap ! You got an error !</Alert.Heading>
            <p><b>You Enter a Wrong city name!</b></p>
          </Alert>
        }
        <Container>
          <Row>
            <Col xs={8} md={5}>
              {this.state.rendering &&
                <Display cityName={this.state.cityName}
                  cityL={this.state.cityL}
                  type={this.state.type}
                  latitude={this.state.latitude}
                  longitude={this.state.longitude}
                  mapUrl={this.state.mapUrl}
                />
              }
            </Col>
            <Col xs={8} md={7}>
              {this.state.rendering && <Weather weather={this.state.weather} />}
            </Col>
          </Row>
        </Container>
        <br></br> <br></br>
        {this.state.rendering && <Movie movie={this.state.movie} />}
        {this.state.rendering && <Footer />}
      </>
    )
  }
}
export default App