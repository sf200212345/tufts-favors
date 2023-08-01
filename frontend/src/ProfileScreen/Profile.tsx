import { View, Text, Image } from 'react-native';
import ProfileStyles from './ProfileStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

// Really don't feel like dealing with backend so yeahhhh
const exampleUserdata = {
    name: 'Username',
    karma: 100,
    completedFavors: [
        {}, {}, {}
    ],
    avatarUrl: 'https://emojicdn.elk.sh/%F0%9F%A5%B3',
    pronouns: 'pronoun/pronouns',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    badges: ['👻', '🍙', '🚗', '🐝'], // Obviously we'll have real badges later
    categories: ['Rides', 'Food', 'Academic'],
    reviews: [
        {user: 'User 1', text: 'Lorem ipsum dolor sit amet'},
        {user: 'User 2', text: 'Lorem ipsum dolor sit amet'}
    ]
}

const Profile = () => {
    return (
        <View style={ProfileStyles.container}>

            {/* Header */}
            <View style={ProfileStyles.header.container}>
                <View style={ProfileStyles.header.info.container}>

                    {/* Profile info */}
                    <Text style={ProfileStyles.title}>
                        Profile
                    </Text>
                    
                    <View style={ProfileStyles.header.info.me.container}>
                        {/* Avatar */}
                        <View style={ProfileStyles.header.info.me.avatar.container}>
                            <Image
                                style={ProfileStyles.header.info.me.avatar.image}
                                source={{
                                    uri: exampleUserdata.avatarUrl
                                }}
                            />
                        </View>

                        {/* Name */}
                        <View style={ProfileStyles.header.info.me.name}>
                            <Text style={ProfileStyles.subtitle}>
                                {exampleUserdata.name}
                            </Text>
                            <Text style={ProfileStyles.text}>
                                ({exampleUserdata.pronouns})
                            </Text>
                        </View>

                    </View>
                </View>

                {/* Buttons */}
                <View style={ProfileStyles.header.buttons.container}>
                    {/* Settings button */}
                    <View style={ProfileStyles.header.buttons.button}>
                        <Icon name="cog" size={20} color="#556" />
                    </View>
                    {/* Edit button */}
                    <View style={ProfileStyles.header.buttons.button}>
                        <Icon name="pencil" size={20} color="#556" />
                    </View>
                </View>
            </View>

            {/* Karma info */}
            <View style={ProfileStyles.karma.container}>
                <View style={ProfileStyles.karma.component.container}>
                    <Icon name="arrow-up" size={30} color="#000" />
                    <View style={ProfileStyles.karma.component.content}>
                        <Text style={ProfileStyles.text}>
                            Karma
                        </Text>
                        <Text style={ProfileStyles.bold}>
                            {exampleUserdata.karma}
                        </Text>
                    </View>
                </View>
                <View style={ProfileStyles.karma.component.container}>
                    <Icon name="heart" size={30} color="#000" />
                    <View style={ProfileStyles.karma.component.content}>
                        <Text style={ProfileStyles.text}>
                            Helped
                        </Text>
                        <Text style={ProfileStyles.bold}>
                            {exampleUserdata.completedFavors.length} people
                        </Text>
                    </View>
                </View>
            </View>

            {/* About */}
            <View style={ProfileStyles.about}>
                <Text style={ProfileStyles.subtitle}>
                    About me
                </Text>
                <Text style={ProfileStyles.text}>
                    {exampleUserdata.about}
                </Text>
            </View>

            {/* Badges */}
            <View style={ProfileStyles.badges.container}>
                {exampleUserdata.badges.map((badge, index) => (
                    <View key={index} style={[
                        ProfileStyles.badges.badge.container,
                        {backgroundColor: index % 2 == 0 ? '#eee' : '#ddd'}
                    ]}>
                        <Image
                            style={ProfileStyles.badges.badge.image}
                            source={{
                                uri: `https://emojicdn.elk.sh/${badge}`
                            }}
                        />
                    </View>
                ))}
            </View>

            {/* Categories */}
            <View style={ProfileStyles.categories.container}>
                <Text style={ProfileStyles.subtitle}>
                    Categories
                </Text>
                <View style={ProfileStyles.categories.items.container}>
                    {exampleUserdata.categories.map((category, index) => (
                        <Text key={index} style={[ProfileStyles.categories.items.item, ProfileStyles.text]}>
                            {category}
                        </Text>
                    ))}
                </View>
            </View>

            {/* Reviews */}
            <View style={ProfileStyles.reviews.container}>
                <View style={ProfileStyles.reviews.header.container}>
                    <Text style={ProfileStyles.subtitle}>
                        Reviews
                    </Text>
                    <Text style={ProfileStyles.text}>
                        see more
                    </Text>
                </View>
                <View style={ProfileStyles.reviews.items.container}>
                    {exampleUserdata.reviews.map((review, index) => (
                        <Text key={index} style={[ProfileStyles.reviews.items.review, ProfileStyles.text]}>
                            {review.text} - {review.user}
                        </Text>
                    ))}
                </View>
            </View>

        </View>
    );
}
 
export default Profile;