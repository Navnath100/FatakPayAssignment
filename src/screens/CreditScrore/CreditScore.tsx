import { View, Text, StyleSheet, Image, FlatList, Platform } from 'react-native'
import React from 'react'
import colors from '@/src/assets/colors'
import IconPack from '@/src/utils/IconPack'
import LineChart from '@/src/components/LineChart/LineChart'
import FONTS from '@/src/utils/enums/fontsFamilies'
import { chartData, scoreStatus } from './CreditScore.mock'
import ScoreCard from './components/ScoreCard'

const CreditScore = () => {    
    return (
        <View style={styles.container}>
           {Platform.OS==='ios'&& <View style={styles.iosStatusBar}/>}
            <View style={styles.header}>
                <Image style={styles.arrowLeft} source={IconPack.ARROW_LEFT} />
                <Text style={styles.headerText}>Credit Score</Text>
            </View>
            <View style={styles.reportContainer}>
                <Text style={styles.title}>Your Credit Report</Text>
                <View style={styles.chartContainer}>
                    <LineChart data={chartData.data} labels={chartData.label} />
                    <View style={styles.nextUpdateContainer}>
                        <View style={styles.row}>
                            <Image style={styles.arrowDown} source={IconPack.ARROW_DOWN} />
                            <Text style={styles.nextUpdate}>Next Update : 05 May 2023</Text>
                        </View>
                        <Image style={styles.logo} source={IconPack.LOGO} />
                    </View>
                </View>
                <Text style={styles.title}>What is impacting your score</Text>

                <FlatList
                    style={styles.scoreCards}
                    data={scoreStatus}
                    renderItem={ScoreCard}
                    keyExtractor={(_, index) => index.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screenBackground,
    },
    iosStatusBar:{
        height:50,
        width:'100%',
        backgroundColor:colors.primary
    },
    header: {
        height: 57,
        width: '100%',
        backgroundColor: colors.solidWhite,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16.38,
        elevation:5,
        shadowColor: colors.E4E4E499,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
    },
    arrowLeft: {
        height: 20,
        width: 20
    },
    headerText: {
        fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
        color: colors.headerText,
        marginStart: 11,
        fontSize: 16,
        fontWeight: '600',
    },
    reportContainer: {
        padding: 16.38
    },
    title: {
        fontSize: 9.83,
        fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
        fontWeight: 700,
        marginBottom: 9.57
    },
    nextUpdate: {
        fontSize: 6.55,
        fontFamily: FONTS.PLUS_JAKARTA_SANS,
    },
    arrowDown: {
        height: 10,
        width: 10,
        marginRight: 5.73
    },
    logo: {
        width: 31.33,
        height: undefined,
        aspectRatio: 2.94
    },
    chartContainer: {
        backgroundColor: colors.solidWhite,
        padding: 13.1, borderRadius: 8.19, marginBottom: 12.28,
        borderColor:colors.screenBackground,
        borderWidth:0.82,
        elevation:5,
        shadowColor: colors.E4E4E499,
        shadowOffset: { width: 2.5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
    },
    nextUpdateContainer: {
        marginTop: 12, flexDirection: 'row', justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row'
    },
    scoreCards: {
        width: '100%'
    },
    itemSeparator: {
        width: '100%', height: 8.19
    }
})

export default CreditScore