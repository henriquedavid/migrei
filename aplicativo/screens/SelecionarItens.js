import * as React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacityBase,
    TouchableOpacity,
    TextInput
} from 'react-native';
import AddButton from '../components/AddButton';
import BackButton from '../components/BackButton';
import StorageComponent from '../service/storage';
import { Ionicons } from '@expo/vector-icons';

export default function SelecionarItens({ navigation, route }) {

    const [item, setItem] = React.useState('');
    const [itens, setItens] = React.useState([]);

    React.useEffect(() => {
        
    }, [itens])



    return (
        <SafeAreaView style={styles.container}>
            <BackButton navigation={navigation} />
            <View style={styles.input_text_btn}>
                <TextInput style={styles.input_text} onChangeText={(text) => setItem(text)} value={item} placeholder="Insira o nome do item" />
                <TouchableOpacity style={styles.add_btn} onPress={() => addItem()}>
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={itens}
                style={{ backgroundColor: '#ccc' }}
                keyExtractor={(item) => item.id}
                extraData={itens}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.push('Solicitacao', { item: item })}>
                        <Text style={styles.title}>{item.nome}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={() => (
                    <View style={{flex:1}}>
                        <Text style={{textAlign: 'center', marginTop: '20%'}}>Digite o que você deseja doar acima!</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.push('LugarReceberSolicitacao', {itens: itens})}>
                <Text style={styles.btn_text}>Continuar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

    function addItem() {
        try{
            let itens = itens;
            if(itens == null || itens == undefined) itens = [];
            let d = {
                id : itens.length+1,
                nome: item
            }
            itens.push(d)
            setItens(itens) 
            setItem('');
            console.log(itens);
            alert("Adicionado")


            
        } catch(err){
            console.log(err);
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subs: {
        flex: 1,
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    addButton: {
        position: 'absolute',
        bottom: 0,
        flex: 1,
        right: 10,
        left: 10
    },
    input_text: {
        flex:1,
        fontSize: 16
    },
    input_text_btn: {
        flexDirection: 'row',
        padding: 10
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 30,
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
        fontSize: 16,
        color: '#000'
    },
    add_btn: {
        backgroundColor: '#0e3d6b',
        padding: 10,
        borderRadius: 30
    },
    title: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '800',
        marginHorizontal: 10,
    }
})