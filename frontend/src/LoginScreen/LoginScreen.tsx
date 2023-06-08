import { Button, Text, View } from 'react-native';
import { LoginProps } from '../';

export default function LoginScreen({ navigation }: LoginProps) {
    return (
        <View>
            <Text>loginScreen</Text>
            <Button title="Go to HomeScreen" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}
