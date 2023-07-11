import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStyles from './HomeStyles';
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

const Favor: React.FC<FavorProps> = (favor: FavorProps) =>{
    


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
 
export default Favor;