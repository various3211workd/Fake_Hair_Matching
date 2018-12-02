import React from 'react';
import {
  View,
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
  Input,
} from 'native-base';

const Login = () => (
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
        <Button block onPress={() => { Actions.drawer({ type: ActionConst.RESET }); }} >
          <Text>Login</Text>
        </Button>
      </Body>
    </Content>
  </Container>
);

export default Login;