import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BackButton from '../components/BackButton';
import { CommonActions } from '@react-navigation/native';
import StorageComponent from '../service/storage';

export default function Vaga({ navigation, route }) {


    const { item } = route.params;
    const [change, setChange] = React.useState(false);

    React.useEffect(() => {
        console.log(item);
        verify()
    }, []);

    async function verify() {
        try {
            let e = await StorageComponent.getData('logado');
            if (e.cpf == item.by.cpf) {
                setChange(true);
            }
        } catch (err) {

        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.subcontainer}>
                    <BackButton
                        navigation={navigation} />
                    <Text style={styles.title}>({item.id}) {item.tipo}</Text>


                    <Text style={styles.input_info}>{item.descricao}</Text>

                    {change && (
                        <TouchableOpacity style={styles.btn} onPress={() => excluir()}>
                            <Text style={styles.btn_text}>Excluir</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )

    async function excluir() {
        try {
            let vagas = await StorageComponent.getData('vagas');
            let n = [];
            for (let e of vagas) {
                if (e.id != item.id) {
                    n.push(e);
                    
                } else{
                    console.log("Vai ser excluido");
                }
            }

            await StorageComponent.storeData('vagas', n);

            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Menu' }
                    ]
                })
            )
        } catch (err) {

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