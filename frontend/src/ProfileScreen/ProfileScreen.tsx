import { Text, View } from 'react-native';
import { useEffect, useContext, useState } from 'react';
import { GlobalSession, supabase } from '../GlobalHelpers';
import GlobalStyles from '../GlobalStyles';
import { useSupabase } from '../GlobalHelpers';

export default function ProfileScreen() {
    const session = useContext(GlobalSession);
    // TODO: add in later
    // const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('no username');
    const [fullName, setFullName] = useState('no full name');
    const [avatarUrl, setAvatarUrl] = useState('no avatar url');

    useEffect(() => {
        if (session) getProfile();
    }, [session]);

    async function getProfile() {
        console.log('in get profile');
        let { username, full_name, avatar_url } = await useSupabase({
            setLoading: null,
            supabaseFunc: () =>
                supabase
                    .from('profiles')
                    .select('username, full_name, avatar_url')
                    .eq('id', session?.user)
                    .single()
        });
        console.log(username, full_name, avatar_url);
        console.log('printed received data');
        setUsername(username);
        setFullName(full_name);
        setAvatarUrl(avatar_url);
    }

    return (
        <View style={GlobalStyles.container}>
            <Text>profileScreen</Text>
            {session?.user ? <Text>{session?.user?.email}</Text> : <Text>No User</Text>}
            <Text>All the following was received from the API</Text>
            <Text>{username}</Text>
            <Text>{fullName}</Text>
            <Text>{avatarUrl}</Text>
        </View>
    );
}
