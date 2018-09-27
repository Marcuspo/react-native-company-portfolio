import React, {Component} from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalhesContato = require('../imgs/detalhe_contato.png');

export default class Contato extends Component {
  render() {
    return ( 
    
    <View style={styles.geral}>
        <StatusBar backgroundColor = '#61BD8C' />

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C'/>
        
        <View style={styles.topo}>
            <Image source = {detalhesContato} />
            <Text style={styles.textoImg}> Contatos </Text>
        </View>

            <View style={styles.conteudo}>
                <Text style={styles.txtContato}>Tel: (86)Não ligue </Text>
                <Text style={styles.txtContato}>Cel: (86)Nem tente </Text>
                <Text style={styles.txtContato}>Email: naofunciona@naoquero.com </Text>
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
        color: '#61BD8C',
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
