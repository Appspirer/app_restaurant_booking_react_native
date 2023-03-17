import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60,
        backgroundColor:Colors.white
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom:40
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
        fontSize: 26,
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
    time:{
        fontSize:21,
        fontWeight:'500',
        marginLeft:32+16
    },
    item:{
        width: width-64,
        marginTop:20,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOpacity:0.3,
        shadowOffset:{
            height:5
        },
        shadowRadius:7,
        alignSelf:'center',
        borderRadius:4,
        paddingBottom:20
    },
    img:{
        width: width-64,
        height:117/315*(width-64)
    },
    item_container:{
        marginBottom:30,
    },
    healthy:{
        fontSize:9,
        color: Colors.gray_text,
        marginTop:10,
        marginLeft:12
    },
    name:{
        fontSize:15,
        color: Colors.black_text,
        marginTop:5,
        marginLeft:12,
        fontWeight:'500'
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:16,
        paddingRight:32,
        marginTop:12
    },
    row_item:{
        flexDirection:'row',
        alignItems:'center'
    },
    row_text:{
        marginLeft:5,
        fontSize:12,
        color: Colors.gray_text
    }
})