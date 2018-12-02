import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { 
    Container, 
    Header, 
    Left, 
    Body, 
    Right, 
    Button, 
    Icon, 
    Title, 
    Text, 
    Footer, 
    Content,
    View,
} from 'native-base';

import {
  Actions,
} from 'react-native-router-flux';

import GeoLocation from '../component/GetGeolocation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const MapScreen = () => (
  <Container>
    <Content style={{backgroundColor: '#F5FCFF'}}>
      <View>
        <Text style={styles.welcome}>Title</Text>
        <Text style={styles.instructions}>baseText</Text>
        <GeoLocation />
      </View>
    </Content>
  </Container>
);
export default MapScreen;