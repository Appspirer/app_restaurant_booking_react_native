import React from "react";
import {View, Text, StatusBar, TouchableOpacity, Image, FlatList} from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data=[
    {
        id:0,
        img: Images.category1
    },
    {
        id:1,
        img: Images.category2
    },
    {
        id:2,
        img: Images.category3
    },
    {
        id:3,
        img: Images.category4
    },
    {
        id:4,
        img: Images.category5
    },
    {
        id:5,
        img: Images.category6
    },
    {
        id:6,
        img: Images.category7
    },
    {
        id:7,
        img: Images.category8
    },
    {
        id:8,
        img: Images.category9
    },
    {
        id:9,
        img: Images.category1
    },
]

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'}/>
            <View style={styles.header}>
                <View style={styles.header_left}>
                    <TouchableOpacity style={styles.menu} onPress={()=>navigation.openDrawer()}>
                        {Icons.Icons({name:"menu", height:12, width:17})}
                    </TouchableOpacity>
                    <Text style={styles.title}>Select your taste preferences</Text>
                </View>
                <Image source={Images.avatar} style={styles.avatar}/>
            </View>
            <Text style={styles.suggest}>Choose the options you like the most of the shown below, there’s no limit.</Text>
            <FlatList
                style={{paddingHorizontal:16, marginTop:10}}
                data={data}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{justifyContent:'space-between'}}
                renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("List")}>
                            <Image source={item.img} style={styles.img}/>
                        </TouchableOpacity>
                    )
                }}
            />
            <View style={{height:30}}/>
        </View>
    )
}