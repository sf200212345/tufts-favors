import react from 'react';
import { Text, View, Button } from 'react-native';
import HomeStyles from './HomeStyles';

enum FavorType {
    ALL,
    RIDE,
    ACADEMIC,
    FOOD
}

// Display names for each favor type
const favorTypeNames = {
    [FavorType.ALL]: 'All',
    [FavorType.RIDE]: 'Ride',
    [FavorType.ACADEMIC]: 'Academic',
    [FavorType.FOOD]: 'Food'
};

interface TypeSelectorProps {
    favorType: FavorType;
    setFavorType: React.Dispatch<React.SetStateAction<FavorType>>;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ favorType, setFavorType }) => {

    // Not sure how exactly this works, should fix later
    const keyToInt = (key: string) => {
        return key as unknown as FavorType;
    }

    return (
        <View style={HomeStyles.typeContainer}>
            {Object.keys(favorTypeNames).map((key) => (
                <Text
                    key={key}
                    onPress={() => setFavorType(keyToInt(key))}
                    style={[HomeStyles.typeOption, keyToInt(key) == favorType ? HomeStyles.typeOptionSelected : HomeStyles.typeOption]}
                >
                    {favorTypeNames[keyToInt(key)]}
                </Text>
            ))}
        </View>
    );
};

export default TypeSelector;