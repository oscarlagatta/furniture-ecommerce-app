import {Feather, Ionicons} from "@expo/vector-icons";
import React from 'react'
import {SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import {COLORS, SIZES} from "../constants";
import styles from './search.styles';

const Search = () => {
  return (
    <SafeAreaView>
        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather name='search' size={24} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View styles={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value=''
                    onPressIn={() => navigation.navigate('Search')}
                    placeholder='Whar are you looking for'

                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.white}/>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>

  )
}

export default Search

