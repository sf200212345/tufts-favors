import { View, Text, TextInput } from 'react-native';
import { RecoveryProps } from '../';
import React, { useState } from 'react';
import LoginStyles from './LoginStyles';

export default function Welcome({ navigation }: RecoveryProps) {
    const [email, setEmail] = useState('');

    return (
        <View style={LoginStyles.container}>
            <Text style={LoginStyles.title}>Recover Password</Text>
            <TextInput placeholder="Tufts Email" onChangeText={setEmail} style={LoginStyles.textInput} />
            <Text onPress={() => console.log('lol')} style={LoginStyles.submitButton}>
                Send Confirmation Email
            </Text>
        </View>
    );
}
