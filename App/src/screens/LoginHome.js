import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';


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

const LoginHome = () => (
    <View style={styles.container}>
        <TouchableOpacity onPress={Actions.Signup}>
            <Text style={styles.linkText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.Login}>
            <Text style={styles.linkText}>Login</Text>
        </TouchableOpacity>
    </View>
);
export default LoginHome;