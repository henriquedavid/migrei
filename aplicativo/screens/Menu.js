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
import { MaterialCommunityIcons, Ionicons, MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Menu({ navigation }) {

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            let dt = await StorageComponent.getData('dadosusers')
            console.log(dt);
        } catch (err) {
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
                <TouchableOpacity style={[styles.btn, { borderTopWidth: 1, paddingTop: 40 }]} onPress={() => navigation.push("SelecionarItens")}>
                    <MaterialCommunityIcons name="selection-drag" size={24} color="black" />
                    <Text style={styles.btn_text}>Selecionar Itens</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('ListaDepoimentos')}>
                    <Ionicons name="people" size={24} color="black" />
                    <Text style={styles.btn_text}>Depoimentos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('ListaVagas')}>
                    <MaterialIcons name="work-outline" size={24} color="black" />
                    <Text style={styles.btn_text}>Vagas de Trabalho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('RealizarDoacao')}>
                    <FontAwesome5 name="hands-helping" size={24} color="black" />
                    <Text style={styles.btn_text}>Realizar Doação</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push("ConsultarSolicitacao")}>
                    <FontAwesome name="search" size={24} color="black" />
                    <Text style={styles.btn_text}>Consultar entrega</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push("ListaFAQ")}>
                    <MaterialIcons name="help-outline" size={24} color="black" />
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
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        paddingLeft: 20,
        margin: 10,
        paddingBottom: 20,
    },
    btn_text: {
        textAlign: 'left',
        marginLeft: 10,
        textTransform: 'uppercase',
        fontSize: 16
    },
})