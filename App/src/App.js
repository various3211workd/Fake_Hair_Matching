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

import FetchScreen from './component/FetchScreen';
import Geolocation from './component/GetGeolocatio';
import MapView from './component/MapView';

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
          <Geolocation />
        </View>
        <View>
          <Button
            title="Press me"
            onPress={this._handleButtonPress} />
          <FetchScreen />
        </View>
      </Swiper>
    );
  }
}
