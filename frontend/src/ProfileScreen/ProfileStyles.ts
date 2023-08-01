import { StyleSheet } from 'react-native';

const ProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        margin: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    // General
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 15,
        color: '#555'
    },
    smallText: {
        fontSize: 12,
        color: '#555'
    },
    bold: {
        fontWeight: 'bold',
        color: '#558'
    },

    // Header
    header: {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
        },
        info: {
            container: {
                flexDirection: 'column'
            },
            me: {
                container: {
                    flexDirection: 'row',
                    alignItems: 'center'
                },
                avatar: {
                    container: {
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        backgroundColor: '#EEE',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10
                    },
                    image: {
                        width: "60%",
                        height: "60%",
                    }
                },
                name: {
                    flexDirection: 'column',
                }
            }
        },
        buttons: {
            container: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
            button: {
                backgroundColor: '#ddd',
                borderRadius: 100,
                width: 40,
                height: 40,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    },

    // Karma info
    karma: {
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            width: '100%',
            marginVertical: 20,
            backgroundColor: '#EEE',
            borderRadius: 20,
        },
        component: {
            container: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
            },
            content: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 5
            },

        }
    },

    // About
    about: {
        marginVertical: 20,
        width: '100%',
    },

    // Badges
    badges: {
        container: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            marginVertical: 10,
        },
        badge: {
            container: {
                width: 80,
                height: 80,
                borderRadius: 100,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center'
            },
            image: {
                width: "60%",
                height: "60%",
            }
        }
    },

    // Top categories
    categories: {
        container: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            marginVertical: 20,
        },
        items: {
            container: {
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: 10,
            },
            item: {
                padding: 10,
                borderColor: '#bbb',
                borderWidth: 3,
                borderRadius: 5,
                marginRight: 10,
            }
        }
    },

    // Reviews
    reviews: {
        container: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            marginVertical: 10,
        },
        header: {
            container: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }
        },
        items: {
            container: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start'
            },
            review: {
                marginVertical: 15
            }
        }
    }
});


export default ProfileStyles;