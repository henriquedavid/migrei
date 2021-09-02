import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro'
import Login from './screens/Login'
import Menu from './screens/Menu'
import RealizarDoacao from './screens/RealizarDoacao'
import DescricaoDoacao from './screens/DescricaoDoacao'
import Done from './screens/Done'
import ConsultarSolicitacao from './screens/ConsultarSolicitacao';
import DadosSolicitacao from './screens/DadosSolicitacao'
import Depoimento from './screens/Depoimento';
import CriarDepoimento from './screens/CriarDepoimento';
import Duvida from './screens/Duvida';
import CriarVaga from './screens/CriarVaga';
import CriarDescricaoVaga from './screens/CriarDescricaoVaga';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaDepoimentos from './screens/ListaDepoimentos';
import ListaVagas from './screens/ListarVagas';
import Vaga from './screens/Vaga';
import ListaSolicitacoes from './screens/ListaSolicitacoes';
import Solicitacao from './screens/Solicitacao';
import ListaFAQ from './screens/ListaFAQ';
import FAQ from './screens/FAQ';
import SelecionarItens from './screens/SelecionarItens';
import LugarReceberSolicitacao from './screens/LugarReceberSolicitacao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
        <Stack.Screen name="RealizarDoacao" component={RealizarDoacao} options={{headerShown: false}} />
        <Stack.Screen name="DescricaoDoacao" component={DescricaoDoacao} options={{headerShown: false}} />
        <Stack.Screen name="Done" component={Done} options={{headerShown: false}} />
        <Stack.Screen name="ConsultarSolicitacao" component={ConsultarSolicitacao} options={{headerShown: false}} />
        <Stack.Screen name="DadosSolicitacao" component={DadosSolicitacao} options={{headerShown: false}} />
        <Stack.Screen name="ListaDepoimentos" component={ListaDepoimentos} options={{headerShown: false}} />
        <Stack.Screen name="Depoimento" component={Depoimento} options={{headerShown: false}} />
        <Stack.Screen name="CriarDepoimento" component={CriarDepoimento} options={{headerShown: false}} />
        <Stack.Screen name="Duvida" component={Duvida} options={{headerShown: false}} />
        <Stack.Screen name="ListaVagas" component={ListaVagas} options={{headerShown: false}} />
        <Stack.Screen name="CriarVaga" component={CriarVaga} options={{headerShown: false}} />
        <Stack.Screen name="Vaga" component={Vaga} options={{headerShown: false}}/> 
        <Stack.Screen name="CriarDescricaoVaga" component={CriarDescricaoVaga} options={{headerShown: false}} />
        <Stack.Screen name="ListaSolicitacoes" component={ListaSolicitacoes} options={{headerShown: false}} />
        <Stack.Screen name="Solicitacao" component={Solicitacao} options={{headerShown: false}} />
        <Stack.Screen name="ListaFAQ" component={ListaFAQ} options={{headerShown: false}} />
        <Stack.Screen name="FAQ" component={FAQ} options={{headerShown: false}} />
        <Stack.Screen name="SelecionarItens" component={SelecionarItens} options={{headerShown: false}} />
        <Stack.Screen name="LugarReceberSolicitacao" component={LugarReceberSolicitacao} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
