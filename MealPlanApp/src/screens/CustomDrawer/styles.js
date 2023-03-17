import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.yellow,
        paddingTop:60,
        paddingHorizontal:32
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    avatar:{
        height:46,
        width:46,
        borderRadius:23,
    },
    name:{
        fontSize:20,
        color: Colors.white,
        fontWeight:'500',
        marginLeft:20
    },
    content:{
        marginTop: height*0.3
    },
    bottom:{
        position:'absolute',
        bottom:50,
        marginLeft:32
    },
    bottom_name:{
        fontSize:15,
        color: Colors.white,
        marginLeft:20
    }
})