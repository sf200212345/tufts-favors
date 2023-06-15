import { Button, Text, View, TextInput } from 'react-native';
import { SignInProps } from '../';
import React, { useState } from 'react';
import LoginStyles from './LoginStyles';

export default function SignIn({ navigation, route }: SignInProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={LoginStyles.container}>
            <Text style={LoginStyles.title}>Login</Text>
            <TextInput
                placeholder="Tufts Email"
                onChangeText={setEmail}
                style={LoginStyles.textInput}
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                secureTextEntry={true}
                style={LoginStyles.textInput}
            />
            <Text
                onPress={() => navigation.navigate('Recovery')}
                style={[LoginStyles.forgotButton, LoginStyles.bold]}
            >
                Forgot Password?
            </Text>
            <Text onPress={handleSubmit} style={LoginStyles.submitButton}>
                Submit
            </Text>
            <View>
                <Text>
                    Don't have an account?{' '}
                    <Text
                        onPress={() => navigation.navigate('SignUp')}
                        style={LoginStyles.ultrabold}
                    >
                        Create One
                    </Text>
                </Text>
            </View>
        </View>
    );

    function handleSubmit() {
        // Do something with email and password?
        if (route.params?.signIn) {
            route.params?.signIn();
        }
    }
}
