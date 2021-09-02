import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import BackButton from '../components/BackButton';
import StorageComponent from '../service/storage';
import { CommonActions } from '@react-navigation/native';

export default function DescricaoDoacao({ navigation, route }) {

    const [selectedPlace, setSelectedPlace] = React.useState();
    const [descricao, setDescricao] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <BackButton
                    navigation={navigation} />
                <View style={styles.subcontainer}>
                    <Text style={styles.title}>Descrição da Doação</Text>

                    <Text style={styles.input_info}>Insira a descrição</Text>
                    <TextInput style={styles.input} value={descricao} multiline={true} onChangeText={text => setDescricao(text)} placeholder="Insira a descrição sobre a sua doação" />

                    <Text style={styles.input_info}>Escolha o local de entrega</Text>
                    <Picker
                        selectedValue={selectedPlace}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedPlace(itemValue)
                        }>
                        <Picker.Item label="SMS - Natal" value="sms" />
                        <Picker.Item label="CAPIS - Natal" value="capis" />
                        <Picker.Item label="SES - Natal" value="SES" />
                    </Picker>

                </View>

                <TouchableOpacity style={styles.btn} onPress={() => save()}>
                    <Text style={styles.btn_text}>Criar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

    async function save() {
        try {

            let doacoes = await StorageComponent.getData('doacoes')

            let dados = {
                lugar: selectedPlace,
                descricao: descricao,
                tipo: route.params.tipodoacao
            }

            if (!doacoes) {
                doacoes = []
            }

            doacoes.push(dados)

            await StorageComponent.storeData('doacoes', doacoes);

            alert("Doação criada!")


            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Done', params: {tipo: 0}}
                    ]
                })
            )
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
        fontWeight: '700'
    },
    input: {
        fontSize: 14,
        height: 150,
        marginHorizontal: 40,
        paddingVertical: 20
    }
})