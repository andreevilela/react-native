import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'

const App = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.containerCabecalho}>
        <Text style={estilos.texto}>Lighteria</Text>
        <Image style={estilos.imagem} source={require('./assets/icone-sacola.png')}/>
      </View>
      <View style={estilos.separador}></View>
      <Text style={estilos.textoLista}>Categorias</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 26
  },
  containerCabecalho: {
    flex: 1,
    backgroundColor: 'lightgray'
  },

  flexDirection: 'row',
    justifyContent: 'space-between',
  texto: {
    fontSize: 30,
    color: 'black',
    
  },
  imagem: {
    width: 50,
    height: 50
  },
  separador: {
    borderWidth: 0.5
  },
  textoLista: {
    alignSelf: -14,
    backgroundColor: 'lightgray',
    fontSize: 18
  }
})

export default App;