import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { LoginProps, LoginStackParamList } from '../';
import SignIn from './SignIn';
import Welcome from './Welcome';
import SignUp from './SignUp';
import Recovery from './Recovery';

const LoginStack = createNativeStackNavigator<LoginStackParamList>();

export default function LoginScreen({ navigation, route }: LoginProps) {
    return (
        <LoginStack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }}
            id="Login"
        >
            <LoginStack.Screen name="Welcome" component={Welcome} />
            <LoginStack.Screen
                name="SignIn"
                component={SignIn}
                // will remove eventually when figuring out authentication, currently here to approximate app flow
                initialParams={{ signIn: route.params?.signIn }}
            />
            <LoginStack.Screen
                name="SignUp"
                component={SignUp}
                // will remove eventually when figuring out authentication, currently here to approximate app flow
                initialParams={{ signIn: route.params?.signIn }}
            />
            <LoginStack.Screen name="Recovery" component={Recovery} />
        </LoginStack.Navigator>
    );
}
