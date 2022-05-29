import { StatusBar } from "expo-status-bar";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from "./src/screens/home";
import Item from "./src/screens/Item";


const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Item" component={Item} />
        
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light'/>
    </>
  );
}


