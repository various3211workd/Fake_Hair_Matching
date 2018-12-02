import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'

import { 
  Container, 
  Header, 
  Content, 
  Button, 
  Text,
  List,
  ListItem,
  Left,
  Right,
  Body,
  Icon,
  Separator,
} from 'native-base';

export default class Drawer extends Component {
  onPressLearnMore() {
  Alert.alert('ボタンを押しました！')
  }
  render() {
    return (
      <Container>
        <List>
          <Separator bordered>
            <Text>アプリ一覧</Text>
          </Separator>
          <ListItem button={true} onPress={() => {Actions.PageA()}}>
            <Left>
              <Text>PageA</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          
          <ListItem button={true} onPress={() => {Actions.MapScreen()}}>
            <Left>
              <Text>MapScreen</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          
          <ListItem button={true} onPress={() => {Actions.PageC()}}>
            <Left>
              <Text>PageC</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <Separator bordered>
            <Text>プロフィール変更</Text>
          </Separator>
          <ListItem button={true} onPress={() => {Actions.Profile()}}>
            <Left>
              <Text>プロフィール</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Container>
    )
  }
}
