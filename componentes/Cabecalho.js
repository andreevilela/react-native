import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


const Cabecalho = () => {
    return (
        <View style={estilos.containerCabecalho}>
            <Text style={estilos.texto}>Lighteria</Text>
            <Image style={estilos.imagem} source={require('../assets/icone-sacola.png')} />
        </View>
    )
}
const estilos = StyleSheet.create({

    containerCabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    texto: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold'
    },
    imagem: {
        width: 50,
        height: 50
    }
})

export default Cabecalho;