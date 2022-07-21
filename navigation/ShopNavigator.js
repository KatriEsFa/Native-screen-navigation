import BreadDetailScreen from '../screens/BreadDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={CategoriesScreen} options={{ title: 'Este es el home' }} />
                <Stack.Screen name='Bread' component={CategoryBreadScreen} options={({ route }) => ({ headerTitle: route.params.title })} />
                <Stack.Screen name='Detail' component={BreadDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator;