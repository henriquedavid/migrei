import * as React from 'react';
import {
    View, TouchableOpacity, Text, StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddButton({ navigation, onPress }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    btn: {
        backgroundColor: '#0e3d6b',
        padding: 20,
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35
    }
})