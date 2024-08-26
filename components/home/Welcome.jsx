import {useNavigation} from "@react-navigation/native";
import {View, Text, TouchableOpacity, TextInput} from "react-native";

import {COLORS, SIZES} from "../../constants";
import styles from './welcome.style';
import {Feather, Ionicons} from '@expo/vector-icons';

const Welcome = () => {

    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
                    Find the Most
                </Text>
                <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
                    Luxurious Furniture</Text>
            </View>
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
                        <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}

export default Welcome