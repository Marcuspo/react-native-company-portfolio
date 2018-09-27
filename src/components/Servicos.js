import React, {Component} from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalhesServicos = require('../imgs/detalhe_servico.png');

export default class Servicos extends Component {
  render() {
    return ( 
    
    <View style={styles.geral}>
        <StatusBar backgroundColor = '#19D1C8' />

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19D1C8'/>
        
        <View style={styles.topo}>
            <Image source = {detalhesServicos} />
            <Text style={styles.textoImg}> Nossos Servicos </Text>
        </View>

            <View style={styles.conteudo}>
                <Text style={styles.txtContato}> - Fazer café </Text>
                <Text style={styles.txtContato}> - Comer cuscuz primeiro </Text>
                <Text style={styles.txtContato}> - Beber muita água </Text>
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
        color: '#19D1C8',
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
        fontSize: 25,
    }
});
