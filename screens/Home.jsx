import {Fontisto, Ionicons} from '@expo/vector-icons';
import React from 'react'
import {SafeAreaView, ScrollView, Text, View} from 'react-native'
import {TouchableOpacity} from "react-native-gesture-handler";
import {Welcome} from "../components";
import styles from './home.styles';

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={24}/>
                    <Text style={styles.location}>Shangai China</Text>
                    <View style={{alignItems: 'flex-end'}}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>8</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name='shopping-bag' size={24}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <Welcome/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

