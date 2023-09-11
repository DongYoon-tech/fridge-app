import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FoodCard from '../components/FoodCard'

const HomeScreen = () => {

    return (
        <SafeAreaView>
            <View>
                <FoodCard />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen