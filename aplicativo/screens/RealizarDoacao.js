import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import BackButton from '../components/BackButton';

export default function RealizarDoacao({ navigation }) {

    const [selectedDonation, setSelectedDonation] = React.useState();

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.subcontainer}>
            <BackButton 
 navigation={navigation} />
            <Text style={styles.title}>Realizar Doação</Text>

            <Text style={styles.input_info}>Selecione o tipo de doação:</Text>

            <Picker
                selectedValue={selectedDonation}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedDonation(itemValue)
                }>
                <Picker.Item label="Alimento" value="alimentos" />
                <Picker.Item label="Roupa" value="roupa" />
                <Picker.Item label="Dinheiro" value="dinheiro" />
            </Picker>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.push("DescricaoDoacao", {tipodoacao: selectedDonation})}>
                <Text style={styles.btn_text}>Próximo</Text>
            </TouchableOpacity>
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