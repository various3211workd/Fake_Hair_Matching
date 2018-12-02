import React from 'react';
import {
  Scene,
  Router,
  Drawer,
} from 'react-native-router-flux';

import DrawerConponent from './component/Drawer';

import PageA from './screens/PageA';
import MapScreen from './screens/MapScreen';
import PageC from './screens/PageC';
import Login from './screens/Login';
import Signup from './screens/Signup';
import LoginHome from './screens/LoginHome';
import Profile from './screens/ProfileScreen';

const RouterComponent = () => {
  return (
  <Router>
    <Scene key="root">
      <Scene key="LoginHome" hideNavBar initial component={LoginHome} />
      <Scene key="Login" component={Login} title="Login" />
      <Scene key="Signup" component={Signup} title="Signup" />
      <Scene key="drawer" hideNavBar panHandlers={null}>
        <Drawer
          drawerWidth={ 300 }
          contentComponent={DrawerConponent}
        >
          <Scene 
            key="PageA"
            initial component={PageA} 
            title="PageA"
          />
          <Scene 
            key="MapScreen" 
            component={MapScreen} 
            title="MapScreen" 
          />
          <Scene 
            key="PageC" 
            component={PageC} 
            title="PageC" 
          />
          <Scene 
            key="Profile" 
            component={Profile} 
            title="Profile" 
          />
        </Drawer>
      </Scene>
    </Scene>
  </Router>
  )
}
   
export default RouterComponent;