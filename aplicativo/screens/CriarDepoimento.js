import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import BackButton from '../components/BackButton';
import { CommonActions } from '@react-navigation/native';
import StorageComponent from '../service/storage';

export default function CriarDepoimento({ navigation }) {

    const [titulo, setTitulo] = React.useState('')
    const [depoimento, setDepoimento] = React.useState('')

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.subcontainer}>
                    <BackButton 
 navigation={navigation} />
                    <View style={styles.subsubcontainer}>
                        <Text style={styles.title}>Criar Depoimento</Text>

                        <Text style={styles.input_info}>Título</Text>
                        <TextInput style={styles.input} value={titulo} onChangeText={text => setTitulo(text)} placeholder="Insira o titulo" />

                        <Text style={styles.input_info}>Depoimento</Text>
                        <TextInput style={[styles.input, {fontSize: 20, fontWeight: 'normal', height: 200}]} multiline={true} value={depoimento} onChangeText={text => setDepoimento(text)} placeholder="Escreva seu depoimento" />
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => salvar()}>
                    <Text style={styles.btn_text}>Enviar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

    async function salvar() {
        try{
            let dados = {titulo, depoimento}
            await StorageComponent.saveInList('depoimentos', dados);
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Done', params: {tipo: 2}}
                    ]
                })
            )
        } catch(err){
            
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
        marginTop: 20,
    },
    input: {
        fontSize: 30,
        paddingVertical: 20,
        fontWeight: '800'
    }
})