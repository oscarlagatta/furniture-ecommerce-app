import {Platform, StyleSheet} from 'react-native';
import {COLORS, SIZES} from "../constants";

const styles = StyleSheet.create({
    textStyle: {
        // marginTop: 10,
        fontFamily: 'bold',
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal:22,
        ...Platform.select({
            ios: { marginTop: SIZES.small},
            android: { marginTop: 50 },
        })
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    location: {
      fontFamily: 'semibold',
      fontSize: SIZES.medium,
      color: COLORS.gray
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999
    },
    cartNumber: {
        fontFamily: 'regular',
        fontWeight: '600',
        fontSize: 10,
        color: COLORS.lightWhite
    }
    // container: {
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flex: 1
    // },

});

export default styles;