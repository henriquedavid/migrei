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
import StorageComponent from '../service/storage';

export default function ConsultarSolicitacao({ navigation }) {

    const [selectedDonation, setSelectedDonation] = React.useState();
    const [cpf, setCPF] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.subcontainer}>
                    <BackButton
                        navigation={navigation} />
                    <Text style={styles.title}>Insira o CPF do Solicitante</Text>


                    <Text style={styles.input_info}>Insira o CPF</Text>
                    <TextInput style={styles.input} onChangeText={text => setCPF(text)} maxLength={11} value={cpf} keyboardType='numeric' placeholder="Insira o CPF" />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => getInfo()}>
                    <Text style={styles.btn_text}>Próximo</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

    async function getInfo() {
        try {
            let solics = await StorageComponent.getData('solicitacoes');
            let users = await StorageComponent.getData('dadosusers');
            console.log(users);

            if (!solics) alert("Não existem solicitações");
            else {

                let user_id = 0;
                let solic = []
                for (let e of users) {
                    if (e.cpf == cpf) {
                        user_id = e.cpf;
                    }
                }


                if (user_id != 0 && user_id != undefined) {
                    for (let e of solics) {
                        if (e.by && e.by.cpf == user_id) {
                            solic.push(e);
                        }
                    }

                    navigation.push('ListaSolicitacoes', { list: solic });
                }

            }
        } catch (err) {
            console.log(err);
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
        marginHorizontal: 40,
        paddingVertical: 20,
        fontWeight: '800'
    }
})