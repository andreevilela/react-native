import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const Item = ({ item, navigation }) => (
    <TouchableOpacity style={estilos.containerItem}
        onPress={() =>
            navigation.navigate('Detalhes', { item })
        }>
        <Image source={item.img} style={estilos.imagem} resizeMode='contain' />
        <Text style={estilos.textoImagem}>{item.nome}</Text>
    </TouchableOpacity>
);

const estilos = StyleSheet.create({
    containerItem: {
        height: 200,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6,
    },
    imagem: {
        height: 100,
    },
    textoImagem: {
        marginTop: 20
      }
})

export default Item;