import { View, Text, StyleSheet, Image,Dimensions, Touchable, Pressable, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '@/src/assets/colors'
import FONTS from '@/src/utils/enums/fontsFamilies'
import IconPack from '@/src/utils/IconPack'
import { loanDetails } from './PaymentHistory.mock'
import Table from '@/src/components/Table/Table'
import StickyButton from './components/StickyButton'
import { router } from 'expo-router'

const screenWidth = Dimensions.get('window').width
const PaymentHistory = () => {
  const data = loanDetails?.record?.data;

  const [percentagePopup, setPercentagePopup] = useState(false)

  const popupWidth = screenWidth-16.38*2 // Subtracting margin
  const popupPositionLeft = popupWidth/100*data?.payment_percentage-17.5 // Popup Position from Left

  const onPressProgressBar=()=>{
    setPercentagePopup(true)
  }

  useEffect(() => {
    if (percentagePopup) {
      setTimeout(() => {
        setPercentagePopup(false)
      }, 5000);
    }
  }, [percentagePopup])
  

  return (
    <View style={styles.container}>
      {Platform.OS==='ios'&& <View style={styles.iosStatusBar}/>}
      <View style={styles.header}>
        <TouchableOpacity style={styles.row} onPress={router.back}>
          <Image style={styles.arrowLeft} source={IconPack.ARROW_LEFT} />
          <Text style={styles.headerText}>Payment History</Text>
        </TouchableOpacity>

        <View style={styles.bankDetails}>
          <View style={styles.bankIconContainer}>
            <Image style={styles.bankIcon} source={IconPack.BANK} />
          </View>

          <View style={styles.bankInfoContainer}>
            <View style={styles.bankNameContainer}>
              <Text style={styles.bankName}>{data?.bank_name}</Text>
              <Text style={styles.loan}>{data?.type_of_loan}</Text>
            </View>

            <View style={styles.statusContainer}>
              <Text style={styles.status}>{data?.account_status}</Text>
              <Text style={styles.loanIssued}>
                Issued On:{" "}
                <Text style={styles.loanIssuedDate}>{data?.issued_on}</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressRow}>
            <Text style={styles.youHavePaid}>you have paid (%)</Text>
            <Text style={styles.tenure}>Tenure: {data?.loan_tenure}</Text>
          </View>

            {percentagePopup&&
            <View style={[styles.popupContainer,{left:popupPositionLeft,zIndex:1,top:-15,position:'absolute'}]}>
              <View style={styles.arrow}/>
                <Text style={styles.popupValue}>
                {data?.payment_percentage}%
              </Text>
            </View>}
          {/* Progress Bar */}
          <Pressable onPress={onPressProgressBar} style={styles.progressBar}>
            <View style={[styles.filledProgress,{width:`${data?.payment_percentage}%`}]} />
          </Pressable>

          <View style={styles.amountContainer}>
            <Text style={styles.loanIssued}>
              Amount Paid:{" "}
              <Text style={[styles.loanIssuedDate, styles.amountText]}>
                {data?.amount_paid}
              </Text>
            </Text>

            <Text style={styles.loanIssued}>
              Loan Amount:{" "}
              <Text style={[styles.loanIssuedDate, styles.amountText]}>
                {data?.total_loan_amount}
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.tableContainer}>
        <Text style={styles.paymentHistory}>Payment history</Text>
        <Table data={data?.payment_history}/>
      </View>
      <StickyButton/>
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
    width: '100%',
    backgroundColor: colors.solidWhite,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    paddingHorizontal: 16.38,
    paddingTop: 16.38,
    marginBottom:13.12,
    elevation:5,
    shadowColor: colors.E4E4E499,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowLeft: {
    height: 20,
    width: 20,
  },
  headerText: {
    fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
    color: colors.headerText,
    marginStart: 11,
    fontSize: 16,
    fontWeight: '700',
  },
  bankDetails: {
    margin: 17.49,
    padding: 13.99,
    backgroundColor: colors.primaryExtraLight,
    flexDirection: 'row',
  },
  bankIconContainer: {
    backgroundColor: colors.solidWhite,
    padding: 9.62,
    borderRadius: 50,
    borderColor: colors.primary,
    borderWidth: 0.47,
    marginRight: 9.62,
  },
  bankIcon: {
    height: 17.49,
    width: 17.49,
    color: colors.primary,
  },
  bankInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 3.5,
  },
  bankNameContainer: {
    justifyContent: 'space-between',
  },
  bankName: {
    fontSize: 12.25,
    fontFamily: FONTS.PLUS_JAKARTA_SANS,
    color: colors.headerText,
    lineHeight: 15.43,
    marginBottom: 2.62,
  },
  loan: {
    fontSize: 8.75,
    fontFamily: FONTS.PLUS_JAKARTA_SANS,
    color: colors.gray,
    lineHeight: 11.02,
  },
  statusContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  status: {
    fontSize: 8.75,
    fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
    fontWeight: 700,
    color: colors.green,
    lineHeight: 12.25,
  },
  loanIssued: {
    fontSize: 8.75,
    fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
    fontWeight: 700,
    color: colors['9E9E9E'],
    lineHeight: 12.25,
  },
  loanIssuedDate: {
    color: colors['5D5C5D'],
  },
  progressBarContainer: {},
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  youHavePaid: {
    fontSize: 7,
    fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
    fontWeight: 600,
    color: colors['9E9E9E'],
    lineHeight: 8.75,
  },
  tenure: {
    fontSize: 7,
    fontFamily: FONTS.PLUS_JAKARTA_SANS_BOLD,
    fontWeight: 600,
    color: colors['9E9E9E'],
    lineHeight: 8.75,
  },
  progressBar: {
    backgroundColor: colors.gray,
    height: 7,
    width: '100%',
    marginTop: 5,
    borderRadius: 87.47,
    overflow: 'hidden',
    marginBlock: 12.25,
  },
  filledProgress: {
    width: '35%',
    height: '100%',
    backgroundColor: colors.filledProgress,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20.24,
  },
  amountText: {
    fontSize: 10.5,
  },
  popupContainer: {
    height: 25,
    width: 35,
    backgroundColor: colors.solidWhite,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:5,
    shadowColor: colors.C3C3C3,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  },
  arrow: {
    backgroundColor: colors.solidWhite,
    height: 7,
    width: 7,
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    bottom: -3,
  },
  popupValue: {
    color: colors['5D5C5D'],
    fontSize: 7.87,
    fontWeight: '700',
    fontFamily:FONTS.PLUS_JAKARTA_SANS_BOLD
  },
  tableContainer:{
    marginHorizontal:17.49
  },
  paymentHistory:{
    fontSize:10.5,
    lineHeight:15.74,
    fontWeight:'700',
    fontFamily:FONTS.PLUS_JAKARTA_SANS_BOLD,
    marginBottom:8.49
  }
})

export default PaymentHistory
