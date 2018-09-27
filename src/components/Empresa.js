import React, {Component} from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalhesEmpresa = require('../imgs/detalhe_empresa.png');

export default class Empresa extends Component {
  render() {
    return ( 
    
    <View style={styles.geral}>
        <StatusBar backgroundColor = '#EC7148' />

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148'/>
        
        <View style={styles.topo}>
            <Image source = {detalhesEmpresa} />
            <Text style={styles.textoImg}> Empresa </Text>
        </View>

            <View style={styles.conteudo}>
                <Text style={styles.txtContato}>Empresa feita só com os mlk loko virado no café. </Text>
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
        color: '#EC7148',
        marginLeft: 10
    },
    geral: {
        flex: 1,
        backgroundColor: 'white',
    },
    conteudo: {
        marginTop: 20,
        padding: 20,
    },
    txtContato:{
        fontSize: 18,
    }
});
