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

export default function Duvida({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.subcontainer}>
                <BackButton 
 navigation={navigation} />
                <Text style={styles.title}>Duvida</Text>


                <Text style={styles.input_info}>Por conseguinte, a valorização de fatores subjetivos agrega valor ao estabelecimento do sistema de formação de quadros que corresponde às necessidades. Por outro lado, a complexidade dos estudos efetuados é uma das consequências dos relacionamentos verticais entre as hierarquias. Assim mesmo, a estrutura atual da organização faz parte de um processo de gerenciamento do sistema de participação geral. O que temos que ter sempre em mente é que o julgamento imparcial das eventualidades desafia a capacidade de equalização dos métodos utilizados na avaliação de resultados.

Neste sentido, o novo modelo estrutural aqui preconizado afeta positivamente a correta previsão dos conhecimentos estratégicos para atingir a excelência. A prática cotidiana prova que a execução dos pontos do programa assume importantes posições no estabelecimento das direções preferenciais no sentido do progresso. Todavia, a mobilidade dos capitais internacionais facilita a criação das novas proposições.

O empenho em analisar a competitividade nas transações comerciais obstaculiza a apreciação da importância dos índices pretendidos. Percebemos, cada vez mais, que o entendimento das metas propostas não pode mais se dissociar do impacto na agilidade decisória. O incentivo ao avanço tecnológico, assim como o início da atividade geral de formação de atitudes acarreta um processo de reformulação e modernização das formas de ação. Não obstante, o desafiador cenário globalizado ainda não demonstrou convincentemente que vai participar na mudança dos paradigmas corporativos. No entanto, não podemos esquecer que a constante divulgação das informações deve passar por modificações independentemente das condições financeiras e administrativas exigidas.
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