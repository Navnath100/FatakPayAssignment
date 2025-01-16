import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '@/src/assets/colors'
import IconPack from '@/src/utils/IconPack'
import FONTS from '@/src/utils/enums/fontsFamilies'
import { router } from 'expo-router'

type TRenderCard = {
    item: {
        id: number;
        title: string,
        subText: string,
        status: string
    }
}

const ScoreCard = ({ item }: TRenderCard) => {

   const onPress =  () => {
        switch (item.title) {
            case 'Payments':
                router.navigate('/(screens)/paymentHistory')
                break;
        }
    }

    return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{item?.title}</Text>
            <Image style={styles.arrowRight} source={IconPack.ARROW_RIGHT} />
        </View>
        <Text style={styles.subTitle}>{item?.subText}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.greenCircle} source={item.status === 'Low' ? IconPack.RED_CIRCLE : IconPack.GREEN_CIRCLE} />
            <Text style={styles.status}>{item?.status}</Text>
        </View>
    </TouchableOpacity>
)}


const styles = StyleSheet.create({
    container: {
        width: '49%',
        padding: 13,
        backgroundColor:
        colors.solidWhite,
        borderRadius: 8.19,
        borderColor:colors.screenBackground,
        borderWidth:0.82,
        elevation:5,
        shadowColor: colors.E4E4E499,
        shadowOffset: { width: 1.5, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
    },
    titleContainer: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18.4
    },
    title: {
        fontSize: 9.83, fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
        fontWeight: 700, color: colors.darkGray
    },
    subTitle: {
        fontSize: 8.19, fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
        fontWeight: 700, color: colors.gray, marginBottom: 5.73
    },
    arrowRight: {
        height: 13.1,
        width: 13.1
    },
    greenCircle: {
        height: 8.19,
        width: 8.19,
        marginRight: 4.09
    },
    status: {
        fontSize: 6.55, fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
        fontWeight: 700, color: colors.darkGray
    }
})

export default ScoreCard