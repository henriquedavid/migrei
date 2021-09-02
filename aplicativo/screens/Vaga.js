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

export default function Vaga({ navigation, route }) {


    const { item } = route.params;

    React.useEffect(() => {
        console.log(item);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.subcontainer}>
                    <BackButton
                        navigation={navigation} />
                    <Text style={styles.title}>({item.id}) {item.tipo}</Text>


                    <Text style={styles.input_info}>{item.descricao}
                    </Text>
                </View>
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