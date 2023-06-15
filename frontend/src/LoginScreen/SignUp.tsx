import { Button, Text, View, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { SignUpProps } from '../';
import React, { useState } from 'react';
import LoginStyles from './LoginStyles';

export default function SignUp({ navigation, route }: SignUpProps) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [conditions, setConditions] = useState(false);

    return (
        <View style={LoginStyles.container}>
            <Text style={LoginStyles.title}>Sign Up</Text>
            <TextInput
                placeholder="Tufts Email"
                onChangeText={setEmail}
                style={LoginStyles.textInput}
            />
            <TextInput
                placeholder="Full Name"
                onChangeText={setName}
                style={LoginStyles.textInput}
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                style={LoginStyles.textInput}
            />
            {password !== password2 ? (
                <Text style={LoginStyles.redSmall}>Passwords do not match</Text>
            ) : (
                <></>
            )}
            <TextInput
                placeholder="Confirm Password"
                onChangeText={setPassword2}
                style={LoginStyles.textInput}
            />
            <View>
                <CheckBox
                    title="By checking this box, you agree to the Terms and Conditions"
                    checked={conditions}
                    onPress={() => setConditions(!conditions)}
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                    // These styles are still not quite right but decent enough for now
                    checkedColor="gray"
                    checkedIcon="check-square-o"
                />
            </View>
            <Text onPress={handleSubmit} style={LoginStyles.submitButton}>
                Submit
            </Text>
            <View>
                <Text>
                    Already have an account?{' '}
                    <Text
                        onPress={() => navigation.navigate('SignIn')}
                        style={LoginStyles.ultrabold}
                    >
                        Sign In
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
