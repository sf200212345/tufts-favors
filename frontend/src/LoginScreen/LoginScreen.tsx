import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginProps, LoginStackParamList } from '../';
import SignIn from './SignIn';
import Welcome from './Welcome';
import SignUp from './SignUp';
import Recovery from './Recovery';

const LoginStack = createNativeStackNavigator<LoginStackParamList>();

export default function LoginScreen({ navigation }: LoginProps) {
    return (
        <NavigationContainer independent={true}>
            <LoginStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <LoginStack.Screen name="Welcome" component={Welcome} />
                <LoginStack.Screen name="SignIn" component={SignIn} />
                <LoginStack.Screen name="SignUp" component={SignUp} />
                <LoginStack.Screen name="Recovery" component={Recovery} />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
}
