import { ScrollView, Text, View, Image } from 'react-native';
import React from 'react';
import MessagesStyles from './MessagesStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

// Again just giving all the fake data I think I'll need
// Probably the exact data will be different later
const exampleMessages = [
    {
        id: 1,
        sender: 'John Doe',
        message: 'Hey, how are you?',
        timestamp: new Date('2023-08-5T8:30:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👩‍💼'
    },
    {
        id: 2,
        sender: 'Jane Smith',
        message: 'I\'m good, thanks for asking!',
        timestamp: new Date('2023-08-4T12:05:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👩‍🔬'
    },
    {
        id: 3,
        sender: 'Bob Johnson',
        message: 'What are you up to today?',
        timestamp: new Date('2023-08-3T12:10:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👨‍🔬'
    },
    {
        id: 4,
        sender: 'Alice Lee',
        message: 'Just hanging out at home, you?',
        timestamp: new Date('2022-07-3T12:15:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👩‍🎨'
    },
    {
        id: 5,
        sender: 'David Kim',
        message: 'I have a meeting in an hour, but other than that just working from home',
        timestamp: new Date('2023-07-3T12:20:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👨‍💼'
    },
    {
        id: 6,
        sender: 'Emily Chen',
        message: 'How was your weekend?',
        timestamp: new Date('2023-07-3T12:25:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👩‍💻'
    },
    {
        id: 7,
        sender: 'Michael Davis',
        message: 'It was pretty good, went hiking with some friends. How about yours?',
        timestamp: new Date('2023-07-3T12:30:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👨‍🌾'
    },
    {
        id: 8,
        sender: 'Olivia Rodriguez',
        message: 'I went to a concert, it was amazing!',
        timestamp: new Date('2023-07-3T12:35:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👩‍🎤'
    },
    {
        id: 9,
        sender: 'William Brown',
        message: 'What kind of music do you like?',
        timestamp: new Date('2023-07-3T12:40:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👨‍🎤'
    },
    {
        id: 10,
        sender: 'Sophia Wilson',
        message: 'I like all kinds of music, but lately I\'ve been really into indie rock',
        timestamp: new Date('2023-07-3T12:45:00Z'),
        senderPfp: 'https://emojicdn.elk.sh/👩'
    }
];



export default function Messages() {

    function formatDate(timestamp: Date) {
        const now = new Date();
        const diff = now.getTime() - timestamp.getTime();
        const day = 24 * 60 * 60 * 1000;
        const week = 7 * day;

        if (diff < day) {
            return timestamp.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        } else if (diff < 2 * day) {
            return 'yesterday';
        } else if (diff < week) {
            const full = timestamp.toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
            return full.slice(0, full.search(','));
        } else if (now.getFullYear() === timestamp.getFullYear()) {
            return timestamp.toLocaleString('en-US', { month: 'long', day: 'numeric' });
        } else {
            return timestamp.toLocaleString('en-US', { year: 'numeric' });
        }
    }

    return (
        <View style={MessagesStyles.container}>
            {/* Title */}
            <Text style={MessagesStyles.title}>Messages</Text>

            {/* Messages */}
            <ScrollView>
                {/* Should make this a separate component but ughhhh i need to figure out props first */}
                {exampleMessages.map((message) => (
                    <View key={message.id} style={MessagesStyles.message.container}>

                        {/* PFP */}
                        <Image style={MessagesStyles.message.pfp} source={{ uri: message.senderPfp }} />
                        
                        {/* Other info */}
                        <View style={MessagesStyles.message.info.container}>
                            <View style={MessagesStyles.message.info.topRow.container}>

                                <Text style={MessagesStyles.subtitle}>{message.sender}</Text>
                                
                                <View style={MessagesStyles.message.info.topRow.right}>
                                    <Text style={MessagesStyles.message.info.topRow.dateText}>{
                                        formatDate(message.timestamp)
                                    }</Text>
                                    <Icon name="chevron-right" size={15} color="#555" />
                                </View>
                            </View>
                                
                            <Text style={MessagesStyles.message.info.preview}>Test</Text>

                        </View>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}
