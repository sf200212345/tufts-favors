import { View, Text } from 'react-native';
import { WelcomeProps } from '../';
import React from 'react';
import LoginStyles from './LoginStyles';

export default function Welcome({ navigation }: WelcomeProps) {
    return (
        <View style={LoginStyles.container}>
            <Text style={LoginStyles.title}>Logo</Text>
            <Text style={[LoginStyles.title, LoginStyles.blurb]}>A place to help others and get help</Text>
            <Text onPress={() => navigation.navigate('SignIn')} style={LoginStyles.submitButton}>
                Get Started
            </Text>
        </View>
    );
}
