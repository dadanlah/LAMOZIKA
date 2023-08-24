import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screen/home"
import PlayerScreen from "./screen/player";

const Stack = createStackNavigator();

const App = () =>{
    return (
        <NavigationContainer >
        <Stack.Navigator initialRouteName="Player" screenOptions={{headerShown: true}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Player" component={PlayerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;