import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    SafeAreaView,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function Done({ navigation, route }) {
    return (
        <SafeAreaView style={styles.container}>


            {route.params.tipo == 0 && (
                <Text style={styles.title}>Estamos esperando sua doação no local escolhido!</Text>
            )}
            {route.params.tipo == 1 && (
                <Text style={styles.title}>Vaga criada!</Text>
            )}
            {route.params.tipo == 2 && (
                <Text style={styles.title}>Depoimento criado!</Text>
            )}
            {route.params.tipo == 3 && (
                <Text style={styles.title}>Solicitação criada, aguarde o nosso contato!</Text>
            )}

            <TouchableOpacity style={styles.btn} onPress={() => goMenu()}>
                <Text style={styles.btn_text}>Ir para o MENU</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

    function goMenu() {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'Menu' }
                ]
            })
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    subcontainer: {
        flex: 1,
        width: '100%',
    },
    subsubcontainer: {
        marginLeft: 50,
    },
    title: {
        fontSize: 40,
        marginTop: '20%',
        marginHorizontal: 40,
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
    input_info: {
        fontSize: 14,
        marginHorizontal: 40,
        marginTop: 20,
    },
    input: {
        fontSize: 30,
        paddingVertical: 20,
        fontWeight: '800'
    }
})