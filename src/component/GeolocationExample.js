import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
            <View>
                { this.state.coords ? <Text>here: {this.state.coords.latitude}, {this.state.coords.longitude}</Text> : null}
            </View>
        );
    }
}

export default GeolocationExample;
