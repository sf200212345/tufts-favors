import { StyleSheet } from 'react-native';

const MessagesStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 100,
        margin: 20
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10
    },
    subtitle: {
        fontSize: 20,
    },
    text: {
        fontSize: 15,
    },

    // Individual messages
    message: {
        container: {
            flexDirection: 'row',
            marginVertical: 10
        },
        pfp: {
            borderRadius: 50,
            width: 70,
            height: 70,
            backgroundColor: 'lightgrey'
        },
        info: {
            container: {
                flexDirection: 'column',
                marginLeft: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#EEE',
                width: '70%',
            },
            topRow: {
                container: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                },
                right: {
                    flexDirection: 'row',
                    justifyContents: 'flex-end'
                },
                dateText: {
                    fontSize: 15,
                    color: '#555',
                    marginRight: 5
                }
            },
            preview: {
                fontSize: 15,
                color: 'grey',
                marginTop: 5,
                marginBottom: 40
            }

        }
    }
});

export default MessagesStyles;