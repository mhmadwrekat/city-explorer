import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Display from './components/Display';
import Form from './components/Form';
import Axios from 'axios';
/*
display_name
latitude
longitude
place_id
*/
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
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
        longitude: resData.lon,
        latitude: resData.lat,
        type: resData.type,
        rendering: true
      })
    })
  }
  render() {
    return (
      <>
        <Header />
        <Form handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        {
          this.state.rendering &&
          <Display cityName={this.state.cityName}
            type={this.state.type}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
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