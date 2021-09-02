import * as React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacityBase,
    TouchableOpacity
} from 'react-native';
import AddButton from '../components/AddButton';
import BackButton from '../components/BackButton';
import StorageComponent from '../service/storage';

export default function ListaFAQ({navigation, route}) {

    const [faq, setFAQ] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try{
            let dt = [
                {
                    id: 1,
                    nome: "Como posso realizar uma doação?",
                    descricao: "Realizar uma doação é muito simples, basta abrir o app e selecionar realizar doação e informar os itens."
                },
                {
                    id: 2,
                    nome: "Onde realizo a entrega?",
                    descricao: "A entrega deve ser realizada no local o qual foi demarcado inicialmente!"
                }
            ]
            setFAQ(dt)
        } catch(err){

        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <BackButton navigation={navigation} />
            <FlatList
                data={faq}
                keyExtractor={(item) => item.id}
                extraData={faq}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.push('FAQ', {item: item})}>
                        <Text style={styles.title}>{item.nome}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    subs: {
        flex:1,
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    addButton:{
        position: 'absolute',
        bottom: 0,
        flex:1,
        right: 10,
        left: 10
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        marginHorizontal: 10,
    }
})