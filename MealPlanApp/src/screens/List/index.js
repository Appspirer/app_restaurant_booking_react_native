import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Granola Bowl",
        healthy: "HEALTHY",
        time: "Breakfast",
        time_ready: "5 minutes",
        status: "Easy",
        people: 1,
        img: Images.today1
    },
    {
        id: 1,
        name: "Steam Prawns",
        healthy: "SPANISH",
        time: "Lunch",
        time_ready: "30 minutes",
        status: "Easy",
        people: 2,
        img: Images.today2
    },
    {
        id: 2,
        name: "Steam Prawns",
        healthy: "SPANISH",
        time: "Dinner",
        time_ready: "30 minutes",
        status: "Easy",
        people: 2,
        img: Images.today3
    },
]

export default function List({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_left}>
                    <TouchableOpacity style={styles.menu}  onPress={()=>navigation.openDrawer()}>
                        {Icons.Icons({ name: "menu", height: 12, width: 17 })}
                    </TouchableOpacity>
                    <Text style={styles.title}>For today</Text>
                </View>
                <Image source={Images.avatar} style={styles.avatar} />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: 16 }}
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.item_container}>
                            <Text style={styles.time}>{item.time}</Text>
                            <TouchableOpacity style={styles.item}>
                                <Image source={item.img} style={styles.img} />
                                <Text style={styles.healthy}>{item.healthy}</Text>
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.row}>
                                    <View style={styles.row_item}>
                                        {Icons.Icons({ name: "duration", height: 13, width: 13 })}
                                        <Text style={styles.row_text}>{item.time_ready}</Text>
                                    </View>
                                    <View style={styles.row_item}>
                                        {Icons.Icons({ name: "ic_difficulty", height: 11, width: 14 })}
                                        <Text style={styles.row_text}>{item.status}</Text>
                                    </View>
                                    <View style={styles.row_item}>
                                        {Icons.Icons({ name: "ic_people", height: 11, width: 14 })}
                                        <Text style={styles.row_text}>{item.people} Person</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    )
                }}
            />
        </View>
    )
}