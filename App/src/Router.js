import React from 'react';
import {
    Scene,
    Router,
    Drawer,
} from 'react-native-router-flux';

import DrawerConponent from './component/Drawer';

import PageA from './screens/PageA';
import PageB from './screens/PageB';
import PageC from './screens/PageC';
import Login from './screens/Login';
import Signup from './screens/Signup';
import LoginHome from './screens/LoginHome';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="LoginHome" initial component={LoginHome} title="LoginHome" />
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
                        key="PageB" 
                        component={PageB} 
                        title="PageB" 
                    />
                    <Scene 
                        key="PageC" 
                        component={PageC} 
                        title="PageC" 
                    />
                </Drawer>
                </Scene>
            </Scene>
        </Router>
    )
}
   
export default RouterComponent;