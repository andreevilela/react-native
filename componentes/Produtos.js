import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { DATA } from "../util/data";
import Item from "./Item";
import Cabecalho from "./Cabecalho"

const Produtos = ({ navigation }) => {
    return (
        <View style={estilos.container}>
            <Cabecalho />
            <View style={estilos.containerSeparador}>
                <View style={estilos.separador}></View>
                <Text style={estilos.textoLista}>Categorias</Text>
            </View>
            <FlatList
                data={DATA}
                numColumns={2}
                renderItem={({ item }) =>
                    <Item item={item} navigation={navigation} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F0F4',
        paddingHorizontal: 20,
        paddingTop: 26
    },
    separador: {
        borderWidth: 0.5
    },
    textoLista: {
        alignSelf: 'center',
        marginTop: -14,
        backgroundColor: '#F4F0F4',
        paddingHorizontal: 10,
        fontSize: 18
    },
    containerSeparador: {
        marginTop: 18
    },

})

export default Produtos;