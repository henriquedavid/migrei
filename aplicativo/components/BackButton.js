import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BackButton({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={[styles.btn_text, { fontWeight: 'bold' }]}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#0e3d6b',
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