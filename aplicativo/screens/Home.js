import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import image from '../resources/imgback.jpeg'

export default function Home({navigation, params}){

    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={{flex:1, resizeMode: 'cover', justifyContent: 'center'}}>
            <Text style={styles.title}>MiGRei{"\n"}<Text style={{fontSize: 16, fontWeight: '300'}}>Natal/RN</Text></Text>
            
            </ImageBackground>
            <View style={styles.subcontainer}>
            <TouchableOpacity style={[styles.btn, {backgroundColor: '#0e3d6b'}]} onPress={() => navigation.push("Login")}>
                <Text style={[styles.btn_text, {fontWeight: 'bold', color: '#fff'}]}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.push("Cadastro")}>
                <Text style={styles.btn_text}>Cadastrar</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    subcontainer: {
        flex:1,
        width: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        textAlign: 'center',
        fontSize: 60,
        marginTop: '40%',
        color:'#fff',
        flex:3,
        fontWeight: 'bold'
    },
    btn: {
        borderWidth: 1,
        borderColor: '#0e3d6b',
        borderRadius: 10,
        padding: 20,
        margin: 20,
    },
    btn_text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 16
    },
})