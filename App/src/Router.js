import React from 'react';
import {
    Scene,
    Router,
    Drawer,
    DrawerContent,
} from 'react-native-router-flux';

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
                
                <Drawer
                    drawerWidth={ 300 }
                    contentComponent={DrawerContent}
                >
                    <Scene key="pageA" component={PageA} title="PageA" />
                    <Scene key="pageB" component={PageB} title="PageB" />
                    <Scene key="pageC" component={PageC} title="PageC" />
                </Drawer>
            </Scene>
        </Router>
    )
}
   
export default RouterComponent;