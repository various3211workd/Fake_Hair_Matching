import React, {Component} from 'react'
import {
    Button, 
    Text, 
    SafeAreaView,
} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class Drawer extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Text>
                    Drawer
                </Text>
                <Button onPress={() => {
                    Actions.PageA()
                }} title={'PageA'}/>
                <Button onPress={() => {
                    Actions.PageB()
                }} title={'PageB'}/>
                <Button onPress={() => {
                    Actions.PageC()
                }} title={'PageC'}/>
                <Button onPress={() => {
                    Actions.drawerClose()
                }} title={'Close me'}/>
            </SafeAreaView>
        )
    }
}