import * as React from 'react';
import { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import SairButton from '../components/SairButton';
import StorageComponent from '../service/storage';

export default function Menu({ navigation }) {

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try{
            let dt = await StorageComponent.getData('dadosusers')
            console.log(dt);
        } catch(err){
            alert(err)
        }
    }

    function selectItens() {
       navigation.push('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <SairButton navigation={navigation} />
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push("SelecionarItens")}>
                    <Text style={styles.btn_text}>Selecionar Itens</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('ListaDepoimentos')}>
                    <Text style={styles.btn_text}>Depoimentos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('ListaVagas')}>
                    <Text style={styles.btn_text}>Vagas de Trabalho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('RealizarDoacao')}>
                    <Text style={styles.btn_text}>Realizar Doação</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push("ConsultarSolicitacao")}>
                    <Text style={styles.btn_text}>Consultar entrega</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push("ListaFAQ")}>
                    <Text style={styles.btn_text}>FAQ</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    btn: {
        borderWidth: 1,
        borderColor: '#0e3d6b',
        borderRadius: 10,
        padding: 20,
        margin: 10,
    },
    btn_text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 16
    },
})