import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// defining custom type to validate props passed into screens
type RootStackParamList = {
    Home: undefined; // undefined means no props are passed in
    Login: undefined;
    Signup: undefined;
};

// can't find a way to define a generic type
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type LoginStackParamList = {
    SignUp: undefined;
    SignIn: undefined;
    Welcome: undefined;
    Recovery: undefined;
};

type SignUpProps = NativeStackScreenProps<LoginStackParamList, 'SignUp'>;
type SignInProps = NativeStackScreenProps<LoginStackParamList, 'SignIn'>;
type WelcomeProps = NativeStackScreenProps<LoginStackParamList, 'Welcome'>;
type RecoveryProps = NativeStackScreenProps<LoginStackParamList, 'Recovery'>;

export { RootStackParamList, HomeProps, LoginProps, LoginStackParamList, SignUpProps, SignInProps, WelcomeProps, RecoveryProps };
