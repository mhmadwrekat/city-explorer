import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Display from './components/Display';
import Form from './components/Form';
import Axios from 'axios';
import {
  Alert,
} from 'react-bootstrap';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityL: '',
      type: "",
      latitude: '',
      longitude: '',
      rendering: false
    }
  }
  handleLocation = (event) => {
    let city = event.target.value;
    this.setState({
      cityName: city
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
    })
      .catch(item => {
        this.setState({
          error: item.message
        });
      })
  }
  render() {
    return (
      <>
        <Header />
        <Form handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        {this.state.error &&
          <Alert className="error" variant="danger">
            <Alert.Heading>Oh snap ! You got an error !</Alert.Heading>
            <p>
              <b>
                You Enter a Wrong city name
              </b>
            </p>
          </Alert>
        }
        {
          this.state.rendering &&
          <Display cityName={this.state.cityName}
            cityL={this.state.cityL}
            type={this.state.type}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            mapUrl={this.state.mapUrl}
          />
        }
        {
          this.state.rendering &&
          <Footer />
        }
      </>
    )
  }
}

export default App
