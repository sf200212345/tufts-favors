import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginBottom: 30,
        margin: 10,
        fontSize: 48,
        fontWeight: 'bold',
        width: '80%'
    },
    textInput: {
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
        fontSize: 24
    },
    forgotButton: {
        height: 30,
        marginBottom: 30,
        textAlign: 'right',
        width: '80%'
    },
    submitButton: {
        backgroundColor: '#425D50',
        width: '80%',
        margin: 10,
        paddingVertical: 10,
        borderRadius: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 24
    },
    bold: {
        fontWeight: 'bold'
    },
    ultrabold: {
        fontWeight: '900'
    },
    redSmall: {
        color: 'red',
        fontSize: 10
    },
    blurb: {
        opacity: 0.2,
        marginBottom: 150,
        marginTop: -30
    }
});

export default LoginStyles;
