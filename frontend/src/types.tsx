import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// defining custom type to validate props passed into screens
type RootStackParamList = {
    Home: undefined; // undefined means no props are passed in
    Login: undefined;
};

// can't find a way to define a generic type
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export { RootStackParamList, HomeProps, LoginProps };
