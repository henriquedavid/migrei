import AsyncStorage from '@react-native-async-storage/async-storage';


const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

const saveInList = async (key, data) => {
    try {
        let dados = await getData(key);

        if (!dados) {
            dados = []
        }

        data.id = dados.length +1;

        let us = await getData("logado");
        data.by = us;

        dados.push(data)

        await storeData(key, dados);
    } catch (err) {
        // error saving in the list
    }
}


const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}

export default StorageComponent = {
    getData, storeData, saveInList
}