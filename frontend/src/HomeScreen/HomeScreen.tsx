import { Text, View, Image } from 'react-native';
import React from 'react';
import { supabase } from '../GlobalHelpers';
import HomeStyles from './HomeStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import moment from 'moment';

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

// Formats time properly
moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '%ds',
    m: '%dm',
    mm: '%dm',
    h: '%dh',
    hh: '%dh',
    d: '%dd',
    dd: '%dd',
    M: '%dM',
    MM: '%dM',
    y: '%dy',
    yy: '%dy',
  },
});

export default function HomeScreen() {
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

    // For cleanliness, function for a single favor
    function Favor(favor: FavorProps) {
        return (
            <View key={favor.id}>
                <View style={HomeStyles.favorContainer}>
                    {/* Karma information */}
                    <View style={HomeStyles.favorKarmaContainer}>
                        {/* Not final icon but good for now */}
                        <Icon name="arrow-up" size={30} color="#000" />
                        <Text>{favor.karma}</Text>
                    </View>

                    {/* Favor information */}
                    <View style={HomeStyles.favorInformationContainer}>

                        {/* Favor title */}
                        <Text style={HomeStyles.favorText}>{favor.title}</Text>
                        
                        <View style={HomeStyles.favorDetailsContainer}>
                            {/* Timestapmp */}
                            <View style={HomeStyles.favorTimestampContainer}>
                                <Text style={HomeStyles.favorTimestampText}>
                                    {moment(favor.time).fromNow()}
                                </Text>
                            </View>

                            {/* Favor likes and comments */}
                            <View style={HomeStyles.favorResponsesContainer}>
                                {/* Again icons are easy enough to change later */}
                                <View style={HomeStyles.favorResponseTypeContainer}>
                                    <Icon name="comments" size={24} color="#000"  />
                                    <Text style={HomeStyles.favorResponsesText}>{favor.comments.length}</Text>
                                </View>
                                <View style={HomeStyles.favorResponseTypeContainer}>
                                    <Icon name="heart" size={24} color="#000"  />
                                    <Text style={HomeStyles.favorResponsesText}>{favor.likes}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    //console.log(exampleFavors[0]);

    return (
        <View style={HomeStyles.container}>
            <Text>homeScreen</Text>
            {exampleFavors.map((favor) => Favor(favor))}
            {/* {Favor(exampleFavors[0])} */}
            {/* Just here to allow you to go back to sign in, need to put this under profile later */}
            <Button onPress={signOut} title={'Sign Out'} />
        </View>
    );
}
