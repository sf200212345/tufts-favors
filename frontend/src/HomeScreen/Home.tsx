import { Text, View } from 'react-native';
import React from 'react';
import { supabase } from '../GlobalHelpers';
import HomeStyles from './HomeStyles';
import Favor from './Favor';

// eventually move these to types.ts
enum FavorType {
    RIDE,
    ACADEMIC,
    FOOD
}

type FavorProps = {
    id: number;
    title: string;
    karma: number;
    comments: Array<string>;
    likes: number;
    time: Date;
    type: FavorType;
};

export default function Home() {
    async function signOut() {
        console.log('Signing out');
        const { error } = await supabase.auth.signOut();
        if (error) console.log(error);
    }

    // Example favors (will get from API later presumably)
    const exampleFavors = [
        {
            id: 1,
            title: 'Upperclassman needs a meal swipe! 🥺🥺',
            karma: 330,
            comments: ['Comment 1', 'Comment 2', 'Comment 3'],
            likes: 2,
            time: new Date('2023-07-3T12:00:00Z'),
            type: FavorType.FOOD
        },
        {
            id: 2,
            title: 'Need help moving a couch this weekend 🛋️',
            karma: 50,
            comments: ['Comment 1', 'Comment 2'],
            likes: 1,
            time: new Date('2021-09-10T12:00:00Z'),
            type: FavorType.RIDE
        },
        {
            id: 3,
            title: 'Looking for a study buddy for CS50 📚',
            karma: 100,
            comments: ['Comment 1'],
            likes: 3,
            time: new Date('2021-09-09T09:30:00Z'),
            type: FavorType.ACADEMIC
        },
        {
            id: 4,
            title: 'Need a ride to the airport 🚗',
            karma: 20,
            comments: [],
            likes: 0,
            time: new Date('2021-09-08T16:45:00Z'),
            type: FavorType.RIDE
        }
    ];

    return (
        <View style={HomeStyles.container}>
            <Text>homeScreen</Text>
            {exampleFavors.map((favor) => (
                <Favor {...favor} key={favor.id} />
            ))}
        </View>
    );
}
