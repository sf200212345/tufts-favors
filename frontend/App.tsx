import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { HomeScreen, LoginScreen } from './src';
// enforcing types with type keyword
import type { TabsParamList } from './src';

const Tabs = createBottomTabNavigator<TabsParamList>();

export default function App() {
    // need to change this to use the authentication workflow instead when we figure out auth tokens
    const [signedIn, setSignedIn] = useState(false);

    return (
        <NavigationContainer>
            {/* <Tabs.Navigator tabBar={props => <CustomTabBar>}> after we create a custom tab bar component, make it conditional on whether user is signed in as well*/}
            <Tabs.Navigator id="Tabs" screenOptions={{ headerShown: false }}>
                {signedIn ? (
                    <Tabs.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Tabs.Screen
                        name="Login"
                        component={LoginScreen}
                        // will remove eventually when figuring out authentication, currently here to approximate app flow
                        initialParams={{ signIn: () => setSignedIn(true) }}
                    />
                )}
            </Tabs.Navigator>
        </NavigationContainer>
    );
}
