import { Button, Text, View } from 'react-native';
import { useEffect, useContext, useState } from 'react';
import { GlobalSession, supabase, useSupabaseDB } from '../GlobalHelpers';
import GlobalStyles from '../GlobalStyles';
import Profile from './Profile';

export default function ProfileScreen() {
    const session = useContext(GlobalSession);
    // TODO: add in later
    // const [loading, setLoading] = useState(false)
    // const [username, setUsername] = useState('no username');
    const [fullName, setFullName] = useState('no full name');
    const [avatarUrl, setAvatarUrl] = useState('no avatar url');
    //const [karma, setKarma] = useState(0);

    useEffect(() => {
        if (session) {
            getProfile();
        }
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

    async function createFavor() {
        let data = await useSupabaseDB({
            session,
            setLoading: null,
            supabaseFunc: () =>
                supabase.rpc('create_favor', {
                    num_karma: 300,
                    f_type: 'food',
                    title: 'test',
                    description: 'testing',
                    f_img_url: ''
                })
        });
        console.log(data);
    }

    // example of how to join tables and query by id
    async function change_helped_karma() {
        let data = await useSupabaseDB({
            session,
            setLoading: null,
            supabaseFunc: () =>
                supabase
                    .from('stats')
                    .select('karma, helped, profiles!inner(uid)')
                    .eq('profiles.uid', '375f9651-6312-464f-8765-6d1793efdc3e')
                    .single()
        });
        console.log(data);
    }

    return (
        <View style={GlobalStyles.container}>
            <Text>profileScreen</Text>
            {session?.user ? <Text>{session?.user.email}</Text> : <Text>No User</Text>}
            <Text>All the following was received from the API</Text>
            <Text>{fullName}</Text>
            <Text>{avatarUrl}</Text>
            <Button onPress={signOut} title={'Sign Out'} />
            <Button onPress={createFavor} title={'Create Favor'} />
            <Button onPress={change_helped_karma} title={'change helped karma'} />
        </View>
    );
}
