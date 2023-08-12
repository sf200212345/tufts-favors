import { Text, View } from 'react-native';
import Messages from './Messages';


// use supabase realtime for this
export default function MessagesScreen() {
    return (
        <View>
            <Messages />
        </View>
    );
}
