import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const BreadItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected({ item })}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.price}</Text>
                    <Text style={styles.details}>{item.weight}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    breadItem: {

    },


})

export default BreadItem