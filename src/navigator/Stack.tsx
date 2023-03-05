import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screen/Home';
import { BottomTabNavigator } from './Bottom';

const Stack = createNativeStackNavigator();

export const  MyStack = ()=> {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom"
            component={BottomTabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>

  );
}