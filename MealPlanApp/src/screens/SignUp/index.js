import React from "react";
import { View, Text, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import { Formik } from 'formik';
import Colors from "../../themes/Colors";

export default function SignUp({ navigation }) {
    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.logo}>
                {Icons.Icons({ name: 'logo', height: 65, width: 65 })}
            </View>
            <Text style={styles.title}>Timeat</Text>
            <Text style={styles.sub_title}>Don’t think, it’s time to eat!</Text>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View style={styles.input_container}>
                            <TextInput
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                placeholder="Your Name"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.input_container}>
                            <TextInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="Your Email"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.input_container}>
                            <TextInput
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder="Your Password"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.line} />
                        <TouchableOpacity style={[styles.button, { backgroundColor: Colors.blue_fb }]} onPress={() => navigation.navigate("HomeScreen")}>
                            {Icons.Icons({ name: "facebook", height: 23, width: 12 })}
                            <Text style={[styles.text, { color: Colors.white }]}>Enter with Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: Colors.white }]} onPress={() => navigation.navigate("HomeScreen")}>
                            {Icons.Icons({ name: "google", height: 22, width: 22 })}
                            <Text style={[styles.text, { color: Colors.black_text }]}>Enter with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button_create}>
                            <Text style={styles.create}>CREATE ACCOUNT</Text>
                            {Icons.Icons({ name: 'arrow_white', height: 11, width: 11 })}
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </ImageBackground>
    )
}