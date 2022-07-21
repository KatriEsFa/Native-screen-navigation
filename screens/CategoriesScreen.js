import { Button, StyleSheet, Text, View } from "react-native";

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Category Screen</Text>
            <Button title='Go to detail' onPress={() => {navigation.navigate('Detail')}} />

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

export default CategoriesScreen