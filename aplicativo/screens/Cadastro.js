import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import BackButton from '../components/BackButton';
import StorageComponent from '../service/storage';
import { CommonActions } from '@react-navigation/native';


export default function Cadastro({ navigation }) {

    const [cpf, setCPF] = React.useState('')
    const [nome, setNome] = React.useState('')

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.subcontainer}>
                    <BackButton
                        navigation={navigation} />
                    <View style={styles.subsubcontainer}>
                        <Text style={styles.title}>Cadastrar</Text>

                        <Text style={styles.input_info}>Insira o CPF</Text>
                        <TextInput style={styles.input} value={cpf} onChangeText={text => setCPF(text)} keyboardType='numeric' maxLength={11} placeholder="Insira o CPF" />

                        <Text style={styles.input_info}>Insira seu nome</Text>
                        <TextInput style={styles.input} value={nome} onChangeText={text => setNome(text)} placeholder="Insira seu nome" />
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => cadastrar()}>
                    <Text style={styles.btn_text}>Cadastrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

    async function cadastrar() {
        try {

            if (!nome) {

            } else if (!cpf) {

            } else {

                let dadosUser = {
                    nome: nome,
                    cpf: cpf
                }

                let dados = await StorageComponent.getData('dadosusers');

                if (!dados) {
                    dados = []
                }

                dados.push(dadosUser)

                await StorageComponent.storeData('dadosusers', dados);

                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'Menu' }
                        ]
                    })
                )
            }
        } catch (err) {
            alert(err)
        }
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
        marginHorizontal: 50,
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
        backgroundColor: '#0e3d6b'
    },
    btn_text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 16,
        color: 'white'
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