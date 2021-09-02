import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';

export default function SairButton({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{marginLeft: 20, fontSize: 20, textTransform: 'uppercase', fontWeight: '800'}}>Menu</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => logout()} >
                <MaterialCommunityIcons name="exit-run" size={24} color="black" />
                <Text style={[styles.btn_text, { fontWeight: 'bold' }]}>Sair</Text>
            </TouchableOpacity>
        </View>
    )

    function logout() {
        try {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Home' }
                    ]
                })
            )
        } catch (err) {
            console.log(err);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btn: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 20,
        margin: 20,
    },
    btn_text: {
        textAlign: 'left',
        textTransform: 'uppercase',
        fontSize: 16
    },
})