import React from 'react';
import {
  View,
  //Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Actions,
  ActionConst,
} from 'react-native-router-flux';
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
  Form, 
  Item,
  Label, 
  Input
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 32,
    color: 'rgb(95, 177, 237)',
  },
});

const Signup = () => (
  <Container>
    <Content>
      <Form>
        <Item>
          <Input placeholder="Username" />
        </Item>
        <Item last>
          <Input placeholder="Password" />
        </Item>
      </Form>
      <Body>
        <Button block onPress={() => {Actions.LoginHome({ type: ActionConst.RESET });}} >
          <Text>登録する</Text>
        </Button>
      </Body>
    </Content>
  </Container>
);
export default Signup;