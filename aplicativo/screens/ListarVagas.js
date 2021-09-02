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

export default function ListaVagas({navigation, route}) {

    const [vagas, setVagas] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try{
            let dt = await StorageComponent.getData('vagas');
            console.log(dt);
            setVagas(dt)
        } catch(err){

        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <BackButton navigation={navigation} />
            <FlatList
                data={vagas}
                keyExtractor={(item) => item.id}
                extraData={vagas}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.push('Vaga', {item: item})}>
                        <Text style={styles.title}>({item.id}) {item.tipo}</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.subs}>
            <AddButton navigation={navigation} style={styles.addButton} onPress={() => navigation.push("CriarVaga")}/>
            </View>
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
        textTransform: 'uppercase',
        fontWeight: '800',
        marginHorizontal: 10,
    }
})