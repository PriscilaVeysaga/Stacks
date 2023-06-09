import * as React from 'react';
import Tela1 from './src/views/Tela1';
import Tela2 from './src/views/Tela2';
import Tela3 from './src/views/Tela3';
import Tela4 from './src/views/Tela4';
import Tela5 from './src/views/Tela5';
import Tela6 from './src/views/Tela6';
import Tela7 from './src/views/Tela7';
import Principal from './src/views/TelaPrincipal';
import PassoStack from './src/components/PassoStack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialScreen="Principal" screenOptions={{headerShown: true}}>
      <Stack.Screen name="Principal" component={Principal}/>
        <Stack.Screen 
        name="Tela 1">
         {comp =>(
          <PassoStack {...comp} avancar="Tela 2">
          <Tela1/>
          </PassoStack>
        )}
        </Stack.Screen>
               <Stack.Screen 
        name="Tela 2">
         {comp =>(
          <PassoStack {...comp} avancar="Tela 3" voltar>
          <Tela2/>
          </PassoStack>
        )}
        </Stack.Screen>
               <Stack.Screen 
        name="Tela 3">
         {comp =>(
          <PassoStack {...comp} avancar="Tela 4"  voltar>
          <Tela3/>
          </PassoStack>
        )}
        </Stack.Screen>
          <Stack.Screen 
        name="Tela 4">
         {comp =>(
          <PassoStack {...comp} avancar="Tela 5" voltar>
          <Tela4/>
          </PassoStack>
        )}
        </Stack.Screen>
               <Stack.Screen 
        name="Tela 5">
         {comp =>(
          <PassoStack {...comp} avancar="Tela 6" voltar>
          <Tela5/>
          </PassoStack>
        )}
        </Stack.Screen>
               <Stack.Screen 
        name="Tela 6">
         {comp =>(
          <PassoStack {...comp} avancar="Tela 7" voltar>
          <Tela6/>
          </PassoStack>
        )}
        </Stack.Screen>
               <Stack.Screen 
        name="Tela 7">
         {comp =>(
          <PassoStack {...comp} voltar>
          <Tela7/>
          </PassoStack>
        )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}