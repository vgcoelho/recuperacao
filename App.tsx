import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Simples from "../src/componentes/Simples";
import Frag from "../src/componentes/Frag";
import ParImpar from "../src/componentes/ParImpar";
import Familia from "../src/componentes/relacao/Familia";
import Membro from "../src/componentes/relacao/Membro";
import UsuarioLogado from "../src/componentes/UsuarioLogado";
import Botao from "../src/componentes/Botao";
import Contador from "../src/componentes/Contador";
import DigiteSeuNome from "../src/componentes/DigiteSeuNome";
import DimensoesFixas from "../src/componentes/DimensoesFixas";
import Mega from "../src/componentes/MegaSena/Mega";
import Calculadora from "./Calculadora";

export default class App extends Component {
  render() {
    return (

      <View style={estilos.container}>

        {/*<Simples texto='Rodrigo' /> 
         <Frag titulo="Cadastro" 
              subTitulo="Teda de Cadastro de Produto" /> 
         <ParImpar numero={9}  /> 8 
        <Familia>
            <Membro nome="Ana" sobreNome="Silva"/>
            <Membro nome="José" sobreNome="Silva"/> 
        </Familia> 
        <UsuarioLogado usuario={ {nome:'teste', email:'teste@teste.com'} } /> 
        <UsuarioLogado usuario={ {nome:'teste 2'} } />
        <UsuarioLogado usuario={ {email:'teste@teste.com'} } />        
        <UsuarioLogado usuario={ {} } />
        <UsuarioLogado usuario={ null } /> 
        <Contador valorInicial={55} />         
        <DigiteSeuNome /> 
        <DimensoesFixas /> 
        <Mega qtdeNumeros={7} />  */}

        <Calculadora />

      </View>

    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonte: {
    fontSize: 50,
  },
});