import React, {Component} from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalhesClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class Cliente extends Component {
  render() {
    return ( 
    
    <View style={styles.geral}>
        <StatusBar backgroundColor = '#B9C941' />

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#B9C941'/>
        
        <View style={styles.topo}>
            <Image source = {detalhesClientes} />
            <Text style={styles.textoImg}> Nossos Clientes</Text>
        </View>

            <View style={styles.conteudo}>
                <Image source = {cliente1} />
                <Text style={styles.textoConteudo}>Pertubado</Text>
            </View>

            <View style={styles.conteudo}>
                <Image source = {cliente2} />
                <Text style={styles.textoConteudo}>Fernandinho </Text>
            </View>
        </View>
        );
  }
}

const styles = StyleSheet.create({
    topo: {
        flexDirection: 'row',
        textAlign: 'center',
        margin: 15
    },
    textoImg: {
        fontSize: 35,
        marginTop: 25,
        color: '#B9C941',
        marginLeft: 10
    },
    conteudo: {
        marginLeft: 35,
        paddingBottom: 15,
    },
    textoConteudo: {
        fontSize: 25,
        marginLeft: 25
    },
    geral: {
        flex: 1,
        backgroundColor: 'white',
    }
 
});
