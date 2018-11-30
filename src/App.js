
import React, {Component} from 'react';
import Swiper from 'react-native-swiper';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert
} from 'react-native';

//import FetchScreen from './screens/FetchScreen';
import Geolocation from './component/GeolocationExample';

type Props = {};
export default class App extends Component<Props> {

  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  render() {
    return (
      <Swiper
        showsButtons={false}
        loop={false}
        dotColor="#FFFFFF55"
        activeDotColor="#FFFFFFFF"
      >
        <View>
          <Button
            title="Press me"
            onPress={this._handleButtonPress} />
          <Geolocation />
        </View>
        <View>
          
          <TouchableOpacity onPress={() => Alert.alert('hello')}>
            <Image
              //source={require('./assets/images/.jpg')} 
            />
          </TouchableOpacity>
          
        </View>
      </Swiper>
    );
  }
}
