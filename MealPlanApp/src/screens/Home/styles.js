import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: Colors.white
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    header_left: {
        flexDirection: "row",
        alignItems: 'center'
    },
    menu: {
        backgroundColor: Colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
        width: 34,
        borderRadius: 17
    },
    title: {
        fontSize: 19,
        color: Colors.yellow,
        fontWeight: '600',
        marginLeft: 15,
        width: '70%',
        letterSpacing: 0.1,
    },
    avatar: {
        height: 46,
        width: 46,
        borderRadius: 23
    },
    suggest: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 20,
        marginHorizontal: 65,
        lineHeight: 16,
        letterSpacing: 0.08,
        width: width - 65 * 2 - 20,
    },
    item: {
        width: (width - 40) / 2,
        borderRadius: 12,
        marginBottom:12
    },
    img: {
        width: (width - 40) / 2,
        height: 112 / 168 * (width - 40) / 2
    }
})