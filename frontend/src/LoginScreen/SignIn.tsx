import { Text, View, TextInput, Alert } from 'react-native';
import { SignInProps } from '../';
import { supabase } from '../GlobalHelpers';
import React, { useState } from 'react';
import LoginStyles from './LoginStyles';

export default function SignIn({ navigation }: SignInProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // to prevent submitting multiple times unnecessarily
    // const [canSubmit, setCanSubmit] = useState(true); not currently working

    async function signInSupabase() {
        // setCanSubmit(false);
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        // TODO: should use this error if user credentials are wrong, prompt user as well
        if (error) Alert.alert(error.message);
        // setCanSubmit(true);
    }

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
            <Text onPress={signInSupabase} style={LoginStyles.submitButton}>
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
}
