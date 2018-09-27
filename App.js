import React, {Component} from 'react';
import { StyleSheet, Text, View, Navigate } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import Clientes from './src/components/Clientes';
import Contatos from './src/components/Contato';
import Empresa from './src/components/Empresa';
import Servicos from './src/components/Servicos';

export default class App extends Component {
  render() {
    return ( 
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {

        	switch (route.id){
        		case 'a':
        			return (<CenaPrincipal navigator={navigator} />);

        		case 'b':
        			return (<Clientes navigator={navigator} />);

        		case 'c':
        			return(<Contatos navigator={navigator} />);

        		case 'd':
        			return(<Empresa navigator={navigator} />);

        		case 'e':
        			return(<Servicos navigator={navigator} />);
        		
        		default:
        			return false;
        	}
        }}
        />
    );
  }
}


