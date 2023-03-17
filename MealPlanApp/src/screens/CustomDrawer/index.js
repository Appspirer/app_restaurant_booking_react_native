import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

export default function CustomDrawer() {
    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle={'light-content'}/> */}
            <View style={styles.row}>
                <Image source={Images.avatar} style={styles.avatar} />
                <Text style={styles.name}>Gabriella</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={[styles.row, { marginBottom: 30 }]}>
                    {Icons.Icons({ name: "search", height: 17, width: 17 })}
                    <Text style={styles.name}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.row, { marginBottom: 30 }]}>
                    {Icons.Icons({ name: "basket", height: 17, width: 17 })}
                    <Text style={styles.name}>Shopping List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    {Icons.Icons({ name: "promo", height: 17, width: 17 })}
                    <Text style={styles.name}>Weekly Planning</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.row}>
                    {Icons.Icons({ name: "settings", height: 17, width: 17 })}
                    <Text style={styles.bottom_name}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.row,{marginTop:20}]}>
                    {Icons.Icons({ name: "support", height: 17, width: 17 })}
                    <Text style={styles.bottom_name}>Support</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}