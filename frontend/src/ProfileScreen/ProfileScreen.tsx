import { Button, Text, View } from 'react-native';
import { useEffect, useContext, useState } from 'react';
import { GlobalSession, supabase, useSupabaseDB } from '../GlobalHelpers';
import GlobalStyles from '../GlobalStyles';

export default function ProfileScreen() {
    const session = useContext(GlobalSession);
    // TODO: add in later
    // const [loading, setLoading] = useState(false)
    // const [username, setUsername] = useState('no username');
    const [fullName, setFullName] = useState('no full name');
    const [avatarUrl, setAvatarUrl] = useState('no avatar url');

    useEffect(() => {
        if (session) getProfile();
    }, [session]);

    async function signOut() {
        console.log('Signing out');
        const { error } = await supabase.auth.signOut();
        if (error) console.log(error);
    }

    async function getProfile() {
        let { full_name, avatar_url } = await useSupabaseDB({
            session,
            setLoading: null,
            supabaseFunc: () =>
                supabase
                    .from('profiles')
                    .select('full_name, avatar_url')
                    .eq('uid', session?.user.id)
                    .single()
        });
        // setUsername(username);
        setFullName(full_name);
        setAvatarUrl(avatar_url);
    }

    return (
        <View style={GlobalStyles.container}>
            <Text>profileScreen</Text>
            {session?.user ? <Text>{session?.user.email}</Text> : <Text>No User</Text>}
            <Text>All the following was received from the API</Text>
            <Text>{fullName}</Text>
            <Text>{avatarUrl}</Text>
            <Button onPress={signOut} title={'Sign Out'} />
        </View>
    );
}
