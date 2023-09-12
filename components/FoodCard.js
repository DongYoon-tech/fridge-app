import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const FoodCard = () => {
    // params: food name, qty, desc (lb, liter, jar?), pic, exp date(alert)
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={{
                    uri: 'https://wildforkfoods.com/cdn/shop/products/inspected-ribeye-steak-002_720x720.jpg?v=1645040221'
                }}
            />
            <Text style={styles.textStyle}>
                Rib Eye

            </Text>
        </TouchableOpacity>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        // shadowColor: 'black',
        borderRadius: 25,
        padding: 8,
        margin: 5,
    },
    textStyle: {
        fontSize: 35
    },
    imageStyle: {
        resizeMode: 'contain',
        height: 100,
        width: 200,
    }
})