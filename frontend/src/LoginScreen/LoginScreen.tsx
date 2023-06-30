import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { LoginStackParamList } from '../';
import SignIn from './SignIn';
import Welcome from './Welcome';
import SignUp from './SignUp';
import Recovery from './Recovery';

const LoginStack = createNativeStackNavigator<LoginStackParamList>();

export default function LoginScreen() {
    return (
        <LoginStack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }}
            id="Login"
        >
            <LoginStack.Screen name="Welcome" component={Welcome} />
            <LoginStack.Screen name="SignIn" component={SignIn} />
            <LoginStack.Screen name="SignUp" component={SignUp} />
            <LoginStack.Screen name="Recovery" component={Recovery} />
        </LoginStack.Navigator>
    );
}
