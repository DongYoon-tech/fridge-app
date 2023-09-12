import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import FoodCard from '../components/FoodCard'

const HomeScreen = () => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.cardView}>
                    <FoodCard />
                </View>
                <View style={styles.cardView}>
                    <FoodCard />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },
    cardView: {
        width: '50%',
        padding: 10,
    },
})