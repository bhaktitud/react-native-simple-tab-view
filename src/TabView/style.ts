import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    tabViewMainContainer: {
        flex: 1,
        width: width,
    },
    defaultTabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#8f8f8f',
    },
    tabBarText: {
        fontStyle: 'normal',
        fontSize: 12,
        color: '#414141',
        textTransform: 'capitalize'
    },
    tabInnerContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 20,
    },
    imgContainer: {
        width: 52,
        height:52,
        borderRadius: 52/2,
        marginBottom: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
             width: 0,
             height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
     },
     contentContainer: { flex: 1, },
     innerContentContainer: {
         flex: 1,
         width: width
     }
});

export default styles;