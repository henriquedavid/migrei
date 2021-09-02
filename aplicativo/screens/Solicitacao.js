import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BackButton from '../components/BackButton';
import StorageComponent from '../service/storage';

export default function Solicitacao({ navigation, route }) {


    const { item } = route.params;

    React.useEffect(() => {
        console.log(item);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.subcontainer}>
                    <BackButton
                        navigation={navigation} />
                    <Text style={styles.title}>Código {item.id}</Text>
                    <Text style={{ marginHorizontal: 40 }}>Local de Coleta: {item.local}</Text>

                    <Text style={{ marginHorizontal: 40, fontWeight: 'bold', fontSize: 16 }}>Itens:</Text>
                    <FlatList
                        data={item.itens}
                        extraData={item.itens}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Text style={{ marginHorizontal: 20, padding: 20, }}>{item.nome}</Text>
                        )}
                    />
                    {!item.entregue && (
                        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                            <TouchableOpacity style={[styles.btn]} onPress={() => entregar()}>
                                <Text style={styles.btn_text}>Entregar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
        </SafeAreaView>
    )

    async function entregar() {
        try {
            let dados = await StorageComponent.getData('solicitacoes');

            for(let e of dados){
                if(e.id == item.id){
                    e.entregue = true
                }
            }

            await StorageComponent.storeData('solicitacoes', dados);
            alert("Entregue");

            item.entregue = true;
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
        marginLeft: 50,
    },
    title: {
        fontSize: 40,
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
        marginHorizontal: 40,
        paddingVertical: 20,
        fontWeight: '800'
    }
})