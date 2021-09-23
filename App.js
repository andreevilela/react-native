import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'
import Cabecalho from './componentes/Cabecalho';

const DATA = [
  {
    id: '1',
    title: 'Tablelamps',
    image: require('./assets/01-tablelamps.png')
  },
  {
    id: '2',
    title: 'Ceilinglamps',
    image: require('./assets/02-ceilinglamps.png')
  },
  {
    id: '3',
    title: 'Sconces',
    image: require('./assets/03-sconces.png')
  },
  {
    id: '4',
    title: 'Floorlamps',
    image: require('./assets/04-floorlamps.png')
  },
  {
    id: '5',
    title: 'Lightdecor',
    image: require('./assets/05-lightdecor.png')
  },
  {
    id: '6',
    title: 'Garlands',
    image: require('./assets/06-garlands.png')
  }
];

const Item = ({ dados }) => (
  <View style={estilos.item}>
    <Image source={dados.image} style={estilos.imagem} resizeMode='contain' />
    <Text style={estilos.textoImagem}>{dados.title}</Text>
  </View>
);

const App = () => {
  return (
    <View style={estilos.container}>
      <Cabecalho />
      <View style={estilos.containerSeparador}>
        <View style={estilos.separador}></View>
        <Text style={estilos.textoLista}>Categorias</Text>
      </View>
      <FlatList data={DATA}
        numColumns={2}
        renderItem={({ item }) => (
          <Item dados={item} />
        )}
        keyExtractor={item => item.id} />
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingHorizontal: 20,
    paddingTop: 26
  },
  separador: {
    borderWidth: 0.5
  },
  imagem: {
    height: 100
  },
  textoLista: {
    alignSelf: 'center',
    marginTop: -14,
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    fontSize: 18
  },
  containerSeparador: {
    marginTop: 18
  },
  item: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10
  },
  textoImagem: {
    marginTop: 20
  }
})

export default App;