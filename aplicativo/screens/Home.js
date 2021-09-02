import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from 'react-native';

export default function Home({navigation, params}){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Migrei</Text>
            <View style={styles.subcontainer}>
            <TouchableOpacity style={[styles.btn, {backgroundColor: '#0e3d6b'}]} onPress={() => navigation.push("Login")}>
                <Text style={[styles.btn_text, {fontWeight: 'bold', color: '#fff'}]}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.push("Cadastro")}>
                <Text style={styles.btn_text}>Cadastrar</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subcontainer: {
        flex:1,
        width: '100%',
    },
    title: {
        fontSize: 40,
        marginTop: '20%',
        flex:3,
        textTransform: 'uppercase',
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