import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    StyleSheet,
    ScrollView
} from 'react-native';
import BackButton from '../components/BackButton';
import { CommonActions } from '@react-navigation/native';
import StorageComponent from '../service/storage';

export default function Login({ navigation }) {

    const [cpf, setCPF] = React.useState('');

    async function getData() {
        try {
            let dt = await StorageComponent.getData('dadosusers')
            return dt;
        } catch (err) {
            throw err;
        }
    }

    async function login() {
        try {
            let dt = await getData();

            if (dt == null || dt == undefined) alert("Nenhum usuário cadastrado!")
            else {
                if (cpf.length == 11) {
                    let presente = false;

                    for (let e of dt) {
                        if (e.cpf == cpf) {
                            presente = true;
                            await StorageComponent.storeData("logado", e);
                        }
                    }

                    if (presente) {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 1,
                                routes: [
                                    { name: 'Menu' }
                                ]
                            })
                        )
                    } else {
                        alert("É necessário se cadastrar!")
                    }
                } else {
                    alert("CPF inválido");
                }
            }
        } catch (err) {
            alert(err)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.subcontainer}>
                    <BackButton
                        navigation={navigation} />

                    <View style={styles.subsubcontainer}>
                        <Text style={styles.title}>Entrar</Text>

                        <Text style={styles.input_info}>Insira o CPF</Text>
                        <TextInput style={styles.input} onChangeText={text => setCPF(text)} maxLength={11} value={cpf} keyboardType='numeric' placeholder="Insira o CPF" />
                    </View>
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => login()}>
                    <Text style={styles.btn_text}>Entrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
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
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    btn: {
        borderWidth: 1,
        borderColor: '#0e3d6b',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        backgroundColor: '#0e3d6b',
    },
    btn_text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#fff'
    },
    input_info: {
        fontSize: 14,
        marginTop: 20,
    },
    input: {
        fontSize: 30,
        paddingVertical: 20,
        fontWeight: '800'
    }
})