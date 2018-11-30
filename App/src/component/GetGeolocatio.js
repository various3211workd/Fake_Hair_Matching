import React, { Component } from 'react';
import {
  Platform,
  Text,
  PermissionsAndroid,
} from 'react-native';

class GeolocationExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coords: null
    }
  }

  async componentDidMount() {
    try {
      const position = await getCurrentPosition(5000);
      const { latitude, longitude } = position.coords;
      this.setState({
        coords: {
          latitude,
          longitude
        }
      })
    } catch(e) {
      alert(e.message)
    }
  }

  render() {
    return (
        this.state.coords ? <Text>here: {this.state.coords.latitude}, {this.state.coords.longitude}</Text> : null
    );
  }
}

async function getCurrentPosition(timeoutMillis = 10000) {
  if (Platform.OS === "android") {
      const ok = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      if (!ok) {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          }
      }
  }

  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: timeoutMillis });
  });
}


export default GeolocationExample;