import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    // Header
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        padding: 30
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: '#222',
        marginBottom: 50
    },
    headerInfoContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#EEE',
        borderRadius: 20,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    headerInfoComponent: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerInfoComponentContentContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 5
    },
    headerInfoComponentContentText1: {
        fontSize: 15,
        color: '#555'
    },
    headerInfoComponentContentText2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#44B'
    },

    // Favor list
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
    
    // Type selector
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderBottomColor: '#ADD8E6',
        borderBottomWidth: 5,

    },
    typeOption: {
        color: '#555',
        fontSize: 20,
        marginHorizontal: 10,
        paddingVertical: 5
    },
    typeOptionSelected: {
        color: '#00F',
    }

});

export default HomeStyles;