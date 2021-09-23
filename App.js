import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtos from './componentes/Produtos';
import Detalhe from './componentes/Detalhe';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Produtos" component={Produtos} options={{ title: 'Loja de luminárias' }} />
        <Stack.Screen name="Detalhes" component={Detalhe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;