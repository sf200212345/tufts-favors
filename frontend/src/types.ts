import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import type { Session } from '@supabase/supabase-js';

// defining custom type to validate props passed into screens
type TabsParamList = {
    Home: undefined; // undefined means no props are passed in
    Profile: undefined;
};

// <TabsParamList, "something", "something" in the form of Tab params type, specific parameter, id of navigator
type HomeProps = BottomTabScreenProps<TabsParamList, 'Home', 'Tabs'>;
type TabProps = BottomTabBarProps;

type LoginStackParamList = {
    SignUp: undefined;
    SignIn: undefined;
    Welcome: undefined;
    Recovery: undefined;
};

type SignUpProps = NativeStackScreenProps<LoginStackParamList, 'SignUp', 'Login'>;
type SignInProps = NativeStackScreenProps<LoginStackParamList, 'SignIn', 'Login'>;
type WelcomeProps = NativeStackScreenProps<LoginStackParamList, 'Welcome', 'Login'>;
type RecoveryProps = NativeStackScreenProps<LoginStackParamList, 'Recovery', 'Login'>;

type useSupabaseDBProps = {
    setLoading: ((status: boolean) => void) | null;
    session: Session | null;
    supabaseFunc: () => any;
};

export type {
    TabsParamList,
    HomeProps,
    TabProps,
    LoginStackParamList,
    SignUpProps,
    SignInProps,
    WelcomeProps,
    RecoveryProps,
    useSupabaseDBProps
};
