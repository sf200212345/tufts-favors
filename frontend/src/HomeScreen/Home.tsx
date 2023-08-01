import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { supabase } from '../GlobalHelpers';
import HomeStyles from './HomeStyles';
import Favor from './Favor';
import TypeSelector from './TypeSelector';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// eventually move these to types.ts
enum FavorType {
    ALL,
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

    // Example data (will get from API later presumably)
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
        },
        {
            id: 5,
            title: 'Looking for a tennis partner 🎾',
            karma: 70,
            comments: ['Comment 1', 'Comment 2'],
            likes: 2,
            time: new Date('2021-09-07T14:00:00Z'),
            type: FavorType.ACADEMIC
        },
        {
            id: 6,
            title: 'Need help with a physics problem set 📝',
            karma: 120,
            comments: ['Comment 1', 'Comment 2', 'Comment 3', 'Comment 4'],
            likes: 4,
            time: new Date('2021-09-06T19:30:00Z'),
            type: FavorType.ACADEMIC
        },
        {
            id: 7,
            title: 'Looking for a running buddy 🏃‍♂️',
            karma: 40,
            comments: ['Comment 1'],
            likes: 1,
            time: new Date('2021-09-05T08:00:00Z'),
            type: FavorType.RIDE
        },
        {
            id: 8,
            title: 'Need a ride to the grocery store 🛒',
            karma: 10,
            comments: ['Comment 1', 'Comment 2'],
            likes: 0,
            time: new Date('2021-09-04T13:15:00Z'),
            type: FavorType.RIDE
        },
        {
            id: 9,
            title: 'Looking for a language exchange partner 🗣️',
            karma: 90,
            comments: ['Comment 1', 'Comment 2', 'Comment 3'],
            likes: 3,
            time: new Date('2021-09-03T11:00:00Z'),
            type: FavorType.ACADEMIC
        },
        {
            id: 10,
            title: 'Need help moving boxes to storage 📦',
            karma: 60,
            comments: ['Comment 1', 'Comment 2', 'Comment 3'],
            likes: 2,
            time: new Date('2021-09-02T16:30:00Z'),
            type: FavorType.FOOD
        }
    ];
    const exampleUserdata = {
        id: 1,
        name: 'Test User',
        karma: 100,
        completedFavors: [
            {}, {}, {}
        ]
    };

    const [favorType, setFavorType] = useState(FavorType.RIDE);

    return (
        <View style={HomeStyles.container}>

            {/* Header */}
            <View style={HomeStyles.headerContainer}>
                <Text style={HomeStyles.headerTitle}>Welcome, {exampleUserdata.name}!</Text>

                <View style={HomeStyles.headerInfoContainer}>
                    <View style={HomeStyles.headerInfoComponent}>
                        <Icon name="arrow-up" size={30} color="#000" />
                        <View style={HomeStyles.headerInfoComponentContentContainer}>
                            <Text style={HomeStyles.headerInfoComponentContentText1}>Karma</Text>
                            <Text style={HomeStyles.headerInfoComponentContentText2}>{exampleUserdata.karma}</Text>
                        </View>
                    </View>
                    <View style={HomeStyles.headerInfoComponent}>
                        <Icon name="heart" size={30} color="#000" />
                        <View style={HomeStyles.headerInfoComponentContentContainer}>
                            <Text style={HomeStyles.headerInfoComponentContentText1}>Helped</Text>
                            <Text style={HomeStyles.headerInfoComponentContentText2}>{exampleUserdata.completedFavors.length} people</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Type selector */}
            <TypeSelector favorType={favorType} setFavorType={setFavorType} />

            {/* Favor list */}
            <ScrollView>
            {
                (
                    favorType == FavorType.ALL ? exampleFavors : exampleFavors.filter((favor) => (favor.type == favorType))
                ).map((favor) => (
                    <Favor {...favor} key={favor.id} />
                )
            )}
            </ScrollView>
        </View>
    );
}
