import AppLoading from 'expo-app-loading';
import ShopNavigator from './navigation/shop/ShopNavigator';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/OpenSans-Bold.ttf'),
  })

  if (!loaded) return <AppLoading />;

  return (
    <ShopNavigator />
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
