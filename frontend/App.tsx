import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase, GlobalSession } from './src/GlobalHelpers';
import { HomeScreen, LoginScreen, ProfileScreen, TabBar } from './src';
import type { TabsParamList } from './src';

// global to avoid re-rendering
const Tabs = createBottomTabNavigator<TabsParamList>();

export default function App() {
    // using supabase auth, can either return a Session (user still has valid auth token) or be null (user needs to log in)
    const [session, setSession] = useState<Session | null>(null);

    // triggers after only the first render
    useEffect(() => {
        // checks if session (valid token) exists locally, .then() is not triggered if it doesn't exist
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        // starts listening on auth state changes, like when a user signs in/out
        supabase.auth.onAuthStateChange((_event, session) => {
            //console.log('Current session from App.tsx: ');
            //console.log(session);
            setSession(session);
        });
    }, []);

    return (
        <NavigationContainer>
            {session && session.user ? (
                <GlobalSession.Provider value={session}>
                    <Tabs.Navigator
                        tabBar={(props) => <TabBar {...props} />}
                        id="Tabs"
                        screenOptions={{ headerShown: false }}
                        initialRouteName="Home"
                    >
                        <Tabs.Screen name="Home" component={HomeScreen} />
                        <Tabs.Screen name="Profile" component={ProfileScreen} />
                    </Tabs.Navigator>
                </GlobalSession.Provider>
            ) : (
                <LoginScreen />
            )}
        </NavigationContainer>
    );
}
