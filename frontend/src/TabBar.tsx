// template tabbar taken from https://reactnavigation.org/docs/bottom-tab-navigator
import { View, Text, TouchableOpacity } from 'react-native';
import type { TabProps } from './';

export default function TabBar({ state, descriptors, navigation }: TabProps) {
    return (
        <View style={{ flexDirection: 'row', height: '10%', backgroundColor: '#cfcfcf' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        // params key is needed for the overloaded function to be called, we might not even need merge
                        navigation.navigate({ name: route.name, params: {}, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key
                    });
                };
                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            borderStyle: 'solid',
                            borderColor: '#0a0a0a',
                            borderWidth: 2
                        }}
                        key={String(label)}
                    >
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {String(label)}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
