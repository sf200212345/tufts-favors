import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    favorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 5,
        paddingBottom: 10,
        borderBottomColor: '#F6F6F6',
        borderBottomWidth: 5,
    },
    favorKarmaContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
    },
    favorKarmaText: {
        fontSize: 20
    },
    favorInformationContainer: {
        
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '80%',
        padding: 10,
    },
    favorDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    favorResponsesContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    favorResponseTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    favorResponsesText: {
        fontSize: 15,
        marginHorizontal: 5,
    },
    favorTimestampContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    favorTimestampText: {
        fontSize: 15,
        color: '#555',
    },
    favorText: {
        fontSize: 20,
        marginVertical: 10,
    },
    
});

export default HomeStyles;