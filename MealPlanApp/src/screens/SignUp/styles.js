import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 32
    },
    logo: {
        alignSelf: 'center'
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: Colors.white,
        letterSpacing: 1.55,
        marginTop: 10
    },
    sub_title: {
        fontSize: 30,
        fontWeight: '400',
        color: Colors.white,
        marginTop: 5,
        width: '80%',
        letterSpacing: 0.72,
        marginBottom: 70
    },
    input_container: {
        backgroundColor: Colors.white,
        height: 45,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    input: {
        height: 40,
    },
    line: {
        height: 2,
        backgroundColor: Colors.white,
        marginTop: 10,
        marginBottom: 25,
        width: width - 64 - 80,
        alignSelf: 'center',
        fontSize:14,
        color: Colors.gray_text
    },
    button:{
        borderRadius:9,
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:16,
        marginBottom: 12,
        paddingHorizontal:32,
    },
    text:{
        fontSize:16,
        position:'absolute',
        textAlign:'center',
        width:width-64,
    },
    button_create:{
        backgroundColor: Colors.yellow,
        alignItems:'center',
        paddingVertical:16,
        borderRadius:50,
        width: width*0.6,
        alignSelf:'center',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'center'
    },
    create:{
        fontSize:16,
        color: Colors.white,
    }
})