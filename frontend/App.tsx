import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, RootStackParamList } from './src';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="Home" component={HomeScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
