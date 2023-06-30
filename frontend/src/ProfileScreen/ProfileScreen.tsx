import { Text, View } from 'react-native';
import { useContext } from 'react';
import { GlobalSession } from '../GlobalHelpers';
import GlobalStyles from '../GlobalStyles';

export default function ProfileScreen() {
    const session = useContext(GlobalSession);
    return (
        <View style={GlobalStyles.container}>
            <Text>profileScreen</Text>
            {session?.user ? <Text>{session?.user?.email}</Text> : <Text>No User</Text>}
        </View>
    );
}
