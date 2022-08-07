import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const CartScreen = () => {
    const items = CART;
    const total = 12000;

    const handlerConfirmCart = () => console.log('Confirmar carrito');
    const handlerDeleteItem = () => console.log('Eliminar demasiado');

    const renderItem = (data) => (
        <CartItem item={data.item} onDelete={handlerDeleteItem} />
    );

    return(
        <View stlye={stlyes.container}>
            <View style={stlyes.list}>
                <FlatList 
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View style={stlyes.footer}>
                <TouchableOpacity style={stlyes.confirm} onPress={handlerConfirmCart}>
                    <Text>Confirmar</Text>
                    <View style={stlyes.total}>
                        <Text style={stlyes.text}>Total</Text>
                        <Text style={stlyes.text}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const stlyes = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        paddingBotton: 120,
    },

    list: {
        flex: 1,
    },

    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },

    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    total: {
        flexDirection: 'row',
    },
    
    text: {
        fontSize: 18,
        fontFamily: 'OpenSansBold',
        padding: 8,
    },

})

export default CartScreen
