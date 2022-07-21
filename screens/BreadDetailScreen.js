import { Button, StyleSheet, Text, View } from "react-native";

const BreadDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Bread Detail Screen</Text>
            <Button title='Go to Category' onPress={() => { navigation.navigate('Bread', { title: "Parametros" }) }} />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BreadDetailScreen