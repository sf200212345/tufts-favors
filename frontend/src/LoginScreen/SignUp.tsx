import { Text, View, TextInput, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { SignUpProps } from '../';
import supabase from '../supabase';
import React, { useState, useLayoutEffect } from 'react';
import LoginStyles from './LoginStyles';

export default function SignUp({ navigation }: SignUpProps) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    // TODO: should eventually record and send timestamp of conditions acceptance to prove that the user accepted
    // TODO: need to have an extra page for confirming emails when that option is enabled in supabase
    const [conditions, setConditions] = useState(false);
    // not working
    //const [canSubmit, setCanSubmit] = useState(false);

    async function signUpSupabase() {
        // to prevent submitting multiple times unnecessarily
        //setCanSubmit(false);
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: name
                }
            }
        });

        if (error) Alert.alert(error.message);
        //setCanSubmit(true);
    }

    // runs before rendering
    /*useLayoutEffect(() => {
        // check if all fields are valid
        if (
            email.endsWith('@tufts.edu') &&
            !(name.trim().length === 0) &&
            password === password2 &&
            conditions
        ) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }, [email, name, password, password2, conditions]);*/

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
            <Text onPress={signUpSupabase} style={LoginStyles.submitButton}>
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
}
