import React  from "react"
import {Text} from "react-native"

const Detalhe = ({route}) => {
    return (
      <Text>Nome do produto: {route.params.item.nome} </Text>
    )
  }

  export default Detalhe;