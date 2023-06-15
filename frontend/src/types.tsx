import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// defining custom type to validate props passed into screens
type TabsParamList = {
    Home: undefined; // undefined means no props are passed in
    // this needs to be removed eventually when authentication is set up
    Login: undefined | { signIn: () => void };
};

// <TabsParamList, "something", "something" in the form of Tab params type, specific parameter, id of navigator
type HomeProps = BottomTabScreenProps<TabsParamList, 'Home', 'Tabs'>;
type LoginProps = BottomTabScreenProps<TabsParamList, 'Login', 'Tabs'>;

type LoginStackParamList = {
    SignUp: undefined | { signIn: () => void };
    SignIn: undefined | { signIn: () => void };
    Welcome: undefined;
    Recovery: undefined;
};

type SignUpProps = NativeStackScreenProps<LoginStackParamList, 'SignUp', 'Login'>;
type SignInProps = NativeStackScreenProps<LoginStackParamList, 'SignIn', 'Login'>;
type WelcomeProps = NativeStackScreenProps<LoginStackParamList, 'Welcome', 'Login'>;
type RecoveryProps = NativeStackScreenProps<LoginStackParamList, 'Recovery', 'Login'>;

export type {
    TabsParamList,
    HomeProps,
    LoginProps,
    LoginStackParamList,
    SignUpProps,
    SignInProps,
    WelcomeProps,
    RecoveryProps
};
