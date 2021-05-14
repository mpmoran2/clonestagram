import React from 'react';
import {Text, View, Button} from 'react-native'

export default function Landing({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>We're at the Landing</Text>
            <Button
                title="Register"
                onPress={() => navigation.navigate("Register")}/>
            <Button
                title="LogIn"
                onPress={() => navigation.navigate("LogIn")}/>
        </View>
    )
}