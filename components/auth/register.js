import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native;'

export class Register extends Component {
    constructor(props) {
        super(props); this.state = { email: '', username: '', password: '' }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){

    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="Username"
                    onChangeText={(username) => this.setState({ username })}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button
                    onPress={() => this.onSignUp()}
                    title="Join Us"
                />
            </View>
        )
    }
}